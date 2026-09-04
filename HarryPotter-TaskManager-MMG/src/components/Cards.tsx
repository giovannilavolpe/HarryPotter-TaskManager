import { useEffect } from 'react'
import { useCharacterStore } from '../context/ContextCharacterData'

export function CharacterCardList() {
  const { characters, isLoading, ObtainCharacters } = useCharacterStore()

  useEffect(() => {
    ObtainCharacters()
  }, [ObtainCharacters])

  if (isLoading) return <p>Cargando datos..</p>

  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id}>
          <img src={character.image}/>
          {character.name}
        </li>
      ))}
    </ul>
  )
}
