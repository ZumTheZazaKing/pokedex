import SearchBar from "../components/SearchBar";
import SeeMoreButton from "../components/SeeMoreButton";
import { useEffect, useContext, lazy, Suspense } from "react";
import { Context } from "../context";
import { css } from 'aphrodite';
import { globalStyles } from "../styles/globalStyles";

const Pokemon = lazy(() => import('../components/Pokemon').then(module => ({ default: module.Pokemon })));

export const Main = () => {

    const { pokemon, setPokemon, setNextURL, loadingMore, setLoadingMore } = useContext(Context);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(res => res.json())
        .then(data => {
            setPokemon(data.results);
            setNextURL(data.next);
            setLoadingMore(false);
        })
    },[])

    return (<div id="Main" className={css(globalStyles.mainPage)}>
        <h1>ZumPokeDex</h1>
        <p>Gotta search em all!</p>
        <SearchBar />
        <div className={css(globalStyles.pokemonList)}>
            <Suspense fallback={<div>Loading...</div>}>
                {pokemon && pokemon.map((p,i) => <Pokemon key={i} info={p} />)}
            </Suspense>
        </div>
        <br/>
        {loadingMore ? <h3>Loading</h3> : <SeeMoreButton/>}
        <br/>
    </div>)
}