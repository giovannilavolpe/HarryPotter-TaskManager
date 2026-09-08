import { useState } from "react";
import { useCharacterStore } from "../context/ContextCharacterData";
import { useSettingStore } from "../context/ContextSettings";


export default function SearchBar (){
    const {characters, filterCharacters, favoriteCharacters} = useCharacterStore()
    const [search, setSearch] = useState ("");
    const {backgroundTheme, borderTheme} = useSettingStore()

    function searchHandler (event: React.SubmitEvent<HTMLFormElement>){
        event.preventDefault();
        filterCharacters (characters.filter((character) =>
        character.name.toLowerCase().includes(search.toLowerCase().trim())
    ))
    }

    return (
        <div style = {{margin: "1.5rem", display: "flex"}}className = {backgroundTheme}>
        <form action="" onSubmit={(e) => (searchHandler(e))}>
        <input style = {{height: "1rem", borderRadius: "0.5rem", margin: "0.5rem", padding: "0.5rem"}} className = {backgroundTheme} onChange = {(e) => {setSearch(e.target.value)}} type="text" name="" id="" />
        <button style = {{height: "2rem", borderRadius: "0.5rem", margin: "0.5rem", padding: "0.5rem"}} className = {borderTheme}type="submit">Search</button>
        </form>
        <button style = {{height: "2rem", borderRadius: "0.5rem", margin: "0.5rem", padding: "0.5rem"}} className = {borderTheme} onClick={() => filterCharacters(favoriteCharacters)}>Favorites</button>
        <button style = {{height: "2rem", borderRadius: "0.5rem", margin: "0.5rem", padding: "0.5rem"}} className = {borderTheme} onClick={() => filterCharacters(characters)}>Clear Filters</button>
        </div>
    )
}