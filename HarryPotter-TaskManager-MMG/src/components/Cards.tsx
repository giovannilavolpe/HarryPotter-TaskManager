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
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ color: 'white', margin: '10px 0 5px'}}>{character.name}</h3>
            <span style={{ color: 'yellow' }}>{character.house}</span>
            <div>
              <Link to={`/character/${character.id}`} key={character.id}>
                <button style={{ border: 'none', borderRadius: '5px', marginTop: "10px", backgroundColor: '#E0E0E0'}}>
                  Mas detalles
                </button>
              </Link>
              <button onClick={() => favoriteHandler(character)} style={{ backgroundColor: 'transparent', border: '1px, yellow, solid', marginLeft: '10px', borderRadius: '5px'}}>⭐</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </section>
)
}