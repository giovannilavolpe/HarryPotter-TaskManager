

async function ObtainData(){
    const response = await fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
    
    const data = await response.json();

    localStorage.setItem('localData', JSON.stringify(response));

  return (
    <div>
        <h3>Harry pote</h3>
    </div>
  )
}

export default ObtainData