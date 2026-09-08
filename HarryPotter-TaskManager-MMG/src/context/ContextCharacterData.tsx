import { create } from 'zustand'

interface Character {
  house: string
  image: string
  id: string
  name: string
  alternate_names: string
  dateOfBirth: string
  gender: string
  ancestry: string
}

interface CharacterState {
  characters: Character[]
  isLoading: boolean
  obtainCharacters: () => void
  resetCharacters: () => void
  removeCharacter: (id: string) => void
}

export const useCharacterStore = create<CharacterState>((set, get) => ({
  characters: [],
  isLoading: false,

  resetCharacters: () => {
    localStorage.removeItem('allcharacters')
    get().obtainCharacters()
  },

  removeCharacter: (id) => set((state) => {
    const characters = state.characters.filter((character) => character.id !== id)
    localStorage.setItem('allcharacters', JSON.stringify(characters))
    return { characters }
  }),

  obtainCharacters: async () => {

    set({ isLoading: true })

    const savedCharacters = localStorage.getItem('allcharacters')
    if (savedCharacters) {
      set({ characters: JSON.parse(savedCharacters), isLoading: false })
      return
    }

    try {
      const response = await fetch('https://hp-api.onrender.com/api/characters')
      const data: Character[] = await response.json()
      if (!response.ok) {
        throw new Error('Error ${response.status}: ${response.statusText}');
       }
      const allCharacters = data.filter(character =>
        character.image &&
        character.image.trim() !== ''
      )

      set({ characters: allCharacters, isLoading: false })
      localStorage.setItem('allcharacters', JSON.stringify(allCharacters))

    } catch (error) {
      console.error('Error al cargar personajes:', error)
      set({ isLoading: false })
    }
  }
}))