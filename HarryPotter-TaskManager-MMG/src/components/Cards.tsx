import { useEffect } from 'react'
import { useCharacterStore } from '../context/ContextCharacterData'
import { Link } from 'react-router-dom'
import { useSettingStore } from '../context/ContextSettings'

export function CharacterCardList() {
  const {backgroundTheme, borderTheme} = useSettingStore()
  const {filteredCharacters, isLoading, obtainCharacters, favoriteHandler} = useCharacterStore()

  useEffect(() => {
    obtainCharacters()
  }, [])

  if (isLoading) return <p>Cargando datos..</p>

  return (
  <section className= {backgroundTheme} style={{ background: 'theme' }}>
    <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', padding: 0 }}>

      {filteredCharacters.map((character) => (
        <Link to={`/character/${character.id}`} key={character.id}>
        <li key={character.id} className = {borderTheme} style={{
          textAlign: 'center',
          width: '240px',
          margin: '20px',
          padding: '15px',
          borderRadius: '10px',
          cursor: 'pointer',
        }}>
          <img src={character.image} alt={character.name} style={{
            width: '100%',
            height: '280px',
            objectFit: 'cover',
            borderRadius: '5px'
          }}/>
          <h3 style={{ color: 'white', margin: '10px 0 5px' }}>{character.name}</h3>
          <span style={{ color: 'yellow' }}>{character.house}</span>
          <button onClick={() => favoriteHandler(character)}>⭐</button>
        </li>
        </Link>
      ))}
    </ul>
  </section>
)
}