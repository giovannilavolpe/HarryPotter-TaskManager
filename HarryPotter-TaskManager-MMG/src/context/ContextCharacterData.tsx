import { create } from 'zustand'

interface Character {
  image: string
  id: string
  name: string
}

interface CharacterState {
  characters: Character[]
  isLoading: boolean
  ObtainCharacters: () => void
}

export const useCharacterStore = create<CharacterState>((set) => ({
  characters: [],
  isLoading: false,
  
  ObtainCharacters: async () => {

    set({ isLoading: true })

    try {
      const response = await fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
      const data: Character[] = await response.json()
      set({ characters: data, isLoading: false })
      localStorage.setItem('gryffindor_characters', JSON.stringify(data));

    } catch (error) {
      console.error('Error al cargar personajes:', error)
      set({ isLoading: false })
    }
  }
}))
