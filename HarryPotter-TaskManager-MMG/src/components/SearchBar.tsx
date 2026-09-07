import { useState } from "react";
import { useCharacterStore } from "../context/ContextCharacterData";


export default function SearchBar (){
    const {characters, filterCharacters} = useCharacterStore()
    const [search, setSearch] = useState ("");

    function searchHandler (event: React.SubmitEvent<HTMLFormElement>){
        event.preventDefault();
        filterCharacters (characters.filter((character) =>
        character.name.toLowerCase().includes(search.toLowerCase().trim())
    ))
    }

    return (
        <>
        <form action="" onSubmit={(e) => (searchHandler(e))}>
        <input onChange = {(e) => {setSearch(e.target.value)}} type="text" name="" id="" />
        <button type="submit">Search</button>
        </form>
        </>
    )
}