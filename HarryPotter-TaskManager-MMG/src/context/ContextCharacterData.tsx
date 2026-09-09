import { create } from 'zustand'

interface Character {
  house: string
  image: string
  id: string
  name: string
  alternate_names: string[]
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
  filterCharacters: (search:any) => void
  filteredCharacters: Character[]
  favoriteHandler: (character:any) => void
  favoriteCharacters: Character[]
}

export const useCharacterStore = create<CharacterState>((set, get) => ({
  characters: [],
  isLoading: false,

  resetCharacters: () => {
    localStorage.removeItem('allcharacters')
    get().obtainCharacters()
  },

  removeCharacter: (id) => set((state) => {
  const updatedCharacters = state.characters.filter((character) => character.id !== id);
  localStorage.setItem('allcharacters', JSON.stringify(updatedCharacters));
  const updatedFilteredCharacters = state.filteredCharacters.filter((character) => character.id !== id);
  return { 
    characters: updatedCharacters,
    filteredCharacters: updatedFilteredCharacters
  };
  }),

  filteredCharacters: [],
  favoriteCharacters: [],
  
  obtainCharacters: async () => {

    set({ isLoading: true,})

    const savedCharacters = localStorage.getItem('allcharacters')
    if (savedCharacters) {
      set({ characters: JSON.parse(savedCharacters), filteredCharacters: JSON.parse(savedCharacters) ,isLoading: false })
      return
    }

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

      set({ characters: allCharacters, filteredCharacters: allCharacters, isLoading: false })
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
        alert (character.name + ' has been removed from favorites');
        return { favoriteCharacters: newFavorites }
      }

      const newFavorites = [...localFavorites, character]
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
      alert (character.name + ' has been added to favorites');
      return { favoriteCharacters: newFavorites }


    })},

}))
