import { create } from 'zustand'

interface Character {
  house: string
  image: string
  id: string
  name: string
}

interface CharacterState {
  characters: Character[]
  isLoading: boolean
  obtainCharacters: () => void
  filterCharacters: (search:any) => void
  filteredCharacters: Character[]
  favoriteHandler: (character:any) => void
  favoriteCharacters: Character[]
}

export const useCharacterStore = create<CharacterState>((set) => ({
  characters: [],
  isLoading: false,
  filteredCharacters: [],
  favoriteCharacters: [],
  
  obtainCharacters: async () => {

    set({ isLoading: true })

    try {
      const response = await fetch('https://hp-api.onrender.com/api/characters')
      const data: Character[] = await response.json()
      if (!response.ok) { 
        throw new Error(`Error ${response.status}: ${response.statusText}`)
      } 
      const allCharacters = data.filter(character =>
        character.image &&
        character.image.trim() !== ''
      )

      set({ characters: allCharacters, filteredCharacters: allCharacters, favoriteCharacters: [], isLoading: false })
      localStorage.setItem('allcharacters', JSON.stringify(allCharacters))

    } catch (error) {
      console.error('Error al cargar personajes:', error)
      set({ isLoading: false })
    }
  },

  filterCharacters: (searchResult) => {
    if (searchResult.length === 0){
      alert ("No characters match your search");
    } else {
    set({filteredCharacters: searchResult})      
    }
  },

  favoriteHandler: (character) => { set(() => {
      const favoritesString = localStorage.getItem('favorites')
      const localFavorites: Character[] = favoritesString ? JSON.parse(favoritesString) : []
      
      if (localFavorites.some((favorite: Character) => favorite.id === character.id)){
        const newFavorites = localFavorites.filter(favorite => favorite.id !== character.id)
        localStorage.setItem('favorites', JSON.stringify(newFavorites))
        return { favoriteCharacters: newFavorites }
      }

      const newFavorites = [...localFavorites, character]
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
      return { favoriteCharacters: newFavorites }
    })},

}))
 