import { useEffect } from 'react'
import { useCharacterStore } from '../context/ContextCharacterData'

export function CharacterCardList() {
  const {filteredCharacters, isLoading, obtainCharacters } = useCharacterStore()

  useEffect(() => {
    obtainCharacters()
  }, [])

  if (isLoading) return <p>Cargando datos..</p>

  return (
  <section style={{ background: 'black' }}>
    <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', padding: 0 }}>
      {filteredCharacters.map((character) => (
        <li key={character.id} style={{
          background: 'linear-gradient(#840303, #270707)',
          textAlign: 'center',
          width: '240px',
          margin: '20px',
          padding: '15px',
          borderRadius: '10px'
        }}>
          <img src={character.image} alt={character.name} style={{
            width: '100%',
            height: '280px',
            objectFit: 'cover',
            borderRadius: '5px'
          }}/>
          <h3 style={{ color: 'white', margin: '10px 0 5px' }}>{character.name}</h3>
          <span style={{ color: 'yellow' }}>{character.house}</span>
        </li>
      ))}
    </ul>
  </section>
)
}