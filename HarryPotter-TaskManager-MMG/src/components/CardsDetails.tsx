import { useParams, Link } from 'react-router-dom'
import { useCharacterStore } from '../context/ContextCharacterData'
import { useSettingStore } from '../context/ContextSettings'



export function CharacterDetailsCardList() {
  const { id } = useParams()

  const { characters, removeCharacter } = useCharacterStore()

  const character = characters.find((character) => String(character.id) === String(id))
  const {backgroundTheme, borderTheme} = useSettingStore()

  if (!character) {
    return <p>Personaje no encontrado</p>
  }

  return (
    <section className = {backgroundTheme} style={{ minHeight: '100vh', padding: '40px' }}>
      <Link to="/" style={{ color: 'yellow', textDecoration: 'none', display: 'inline-block', marginBottom: '20px' }}>
        Back to home
      </Link>

      <div className = {borderTheme} style={{ display: 'flex', gap: '30px', padding: '30px', borderRadius: '15px' }}>
        <img src={character.image} alt={character.name} style={{ width: '250px', borderRadius: '10px' }} />
        <div>
          <h1 style={{ margin: 0 }}>{character.name}</h1>
          <h3 style={{ color: 'yellow' }}>{character.house}</h3>
          <h4>Other names: {character.alternate_names[0]} - {character.alternate_names[1]} - {character.alternate_names[2]}</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5%' }}>
                <span>Date of birth: {character.dateOfBirth}</span>
                <span>Ancestry: {character.ancestry}</span>
          </div>
          <Link to="/" onClick={() => removeCharacter(character.id)} style={{ display: 'flex', textDecoration: 'none', justifyContent: 'center', backgroundColor: 'red', color: 'black', borderRadius: '5px', marginTop: '20px', width: '40%'}}>
            Delete Character
          </Link>
        </div>
      </div>
    </section>
  )
}