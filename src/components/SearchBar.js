import { Context } from "../context";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";

export default function SearchBar(){

    const { searchQuery, setSearchQuery } = useContext(Context);
    const navigate = useNavigate();

    const search = e => {
        e.preventDefault();

        fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery}`)
        .then(res => {
            if(res.status === 404){
                toast.error("That Pokemon doesn't exist")
            }else{
                navigate(`/${searchQuery}`)
            }
        })
    }

    return (
        <form onSubmit={e => search(e)}>
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}/>
            <input type="submit"/>
        </form>
    )
}