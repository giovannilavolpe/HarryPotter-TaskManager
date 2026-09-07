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
    set({filteredCharacters: searchResult})
  },

  favoriteHandler: (character) => { set((state) => {
      const favoritesString = localStorage.getItem('favorites')
      const localFavorites = favoritesString ? JSON.parse(favoritesString) : []
      if (localFavorites.some((fav: Character) => fav.id === character.id)){
      const newFavorites = state.favoriteCharacters.filter(fav => fav.id !== character.id)
           
            const newFavoritesSting = JSON.stringify(newFavorites)
            localStorage.setItem('favorites', newFavoritesSting)
            return { favoriteCharacters: newFavorites }

      } else {

        const newFavorites = [localFavorites, character]
              const newFavoritesString = JSON.stringify(newFavorites);
              localStorage.setItem('favorites', newFavoritesString);
              return { favoriteCharacters: newFavorites}
      }
    })},

}))
