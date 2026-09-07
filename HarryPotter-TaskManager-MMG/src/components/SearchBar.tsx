import { useState } from "react";


export default function SearchBar (){
    const [search, setSearch] = useState ("");
        function searchHandler (event: React.SubmitEvent<HTMLFormElement>){
        event.preventDefault();
        
    }

    return (
        <>
        <form action="">
        <input onChange = {(e) => setSearch(e.target.value)} type="text" name="" id="" />
        <button onSubmit={() => (searchHandler)} type="submit">Search</button>
        </form>
        </>
    )
}