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
}

export const useCharacterStore = create<CharacterState>((set) => ({
  characters: [],
  isLoading: false,
  
  obtainCharacters: async () => {

    set({ isLoading: true })

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
