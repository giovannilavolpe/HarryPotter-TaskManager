import { useEffect } from 'react'
import { useCharacterStore } from '../context/ContextCharacterData'

export function CharacterCardList() {
  const { characters, isLoading, ObtainCharacters } = useCharacterStore()

  useEffect(() => {
    ObtainCharacters()
  }, [ObtainCharacters])

  if (isLoading) return <p>Cargando datos..</p>

  return (
    <section style={{ width: '100%', height: 'auto', backgroundColor: 'white' }}>

      <ul style={{ 
        listStyle: 'none',
        display: 'flex',
        flexWrap: 'wrap'
        }}>

        {characters.map((character) => (

        <li key={character.id} style={{
          background: 'linear-gradient(to bottom, #840303, #270707)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
          width: 'auto',
          height: 'auto',
          maxWidth: '300px',
          margin: '20px',
          borderRadius: '10px'
        }}>

          <div>

          <img src={character.image} alt={character.name} style={{
            width: 'auto',
            height: 'auto',
            maxHeight: '200px',
            maxWidth: '150px',
            minHeight: '100px',
            minWidth: '75px'
          }}/>

          <h3 style={{ color: 'white' }}>{character.name}</h3>

          <span style={{ color: 'white' }}>{character.house}</span>

          </div>

        </li>
    ))}
      </ul>
    </section>

  )
}