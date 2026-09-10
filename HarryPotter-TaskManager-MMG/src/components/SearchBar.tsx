import { useState } from "react";
import { useCharacterStore } from "../context/ContextCharacterData";
import { useSettingStore } from "../context/ContextSettings";



export default function SearchBar (){
    const {characters, filterCharacters, favoriteCharacters} = useCharacterStore()
    const [search, setSearch] = useState ("");
    const {backgroundTheme, borderTheme} = useSettingStore()
    const {resetCharacters} = useCharacterStore()

    function searchHandler (event: React.SubmitEvent<HTMLFormElement>){
        event.preventDefault();
        filterCharacters (characters.filter((character) =>
        character.name.toLowerCase().includes(search.toLowerCase().trim())
    ))
    }

    return (
        <div style = {{margin: "1.5rem", alignContent: "center" ,justifyContent: "center", display: "flex"}}className = {backgroundTheme}>
        <form  action="" onSubmit={(e) => (searchHandler(e))}>
        <input style = {{height: "auto", borderRadius: "0.5rem", margin: "0.5rem", padding: "0.5rem"}} className = {backgroundTheme} onChange = {(e) => {setSearch(e.target.value)}} type="text" name="" id="" />
        <button style = {{height: "auto", borderRadius: "0.5rem", margin: "0.5rem", padding: "0.5rem"}} className = {borderTheme}type="submit">Search</button>
        </form>
        <button style = {{alignItems: "center",alignSelf: "center", display: "flex", height: "2rem", borderRadius: "0.5rem", margin: "0.5rem", padding: "0.5rem"}} className = {borderTheme} onClick={() => filterCharacters(favoriteCharacters)}>Favorites</button>
        <button style = {{alignItems: "center", alignSelf: "center", display: "flex", height: "2rem", borderRadius: "0.5rem", margin: "0.5rem",  padding: "0.5rem"}} className = {borderTheme} onClick={() => filterCharacters(characters)}>Clear Filters</button>
        <button onClick={resetCharacters} style={{alignItems: "center", alignSelf: "center", display: "flex", height: "2rem", borderRadius: "0.5rem", margin: "0.5rem",  padding: "0.5rem"}} className = {borderTheme}>
                Reset Characters
        </button>
        </div>
    )
}