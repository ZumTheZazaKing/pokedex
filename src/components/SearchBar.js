import { Context } from "../context";
import { useContext } from "react";

export default function SearchBar(){

    const { searchQuery, setSearchQuery } = useContext(Context);

    const search = e => {
        e.preventDefault();
        console.log(searchQuery);
    }

    return (
        <form onSubmit={e => search(e)}>
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}/>
            <input type="submit"/>
        </form>
    )
}