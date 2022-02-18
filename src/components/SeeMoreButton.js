import { useContext } from "react";
import { Context } from "../context";
import { css } from "aphrodite";
import { seeMoreStyles } from "../styles/seeMoreStyles";

export default function SeeMoreButton(){

    const { nextURL, setNextURL, pokemon, setPokemon, setLoadingMore } = useContext(Context);

    const seeMore = () => {
        setLoadingMore(true);
        fetch(nextURL)
        .then(res => res.json())
        .then(data => {
            setPokemon(pokemon.concat(data.results));
            setNextURL(data.next);
            setLoadingMore(false);
        })
    }

    return (<div>
        <button 
        className={css(seeMoreStyles.seeMore)} 
        style={{cursor:"pointer"}} 
        onClick={() => seeMore()}>See More</button>
    </div>)
}