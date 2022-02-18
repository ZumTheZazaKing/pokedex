import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { css } from "aphrodite";
import { infoStyles } from "../styles/infoStyles";
import InfoHeader from "../components/InfoHeader";
import InfoCharts from "../components/InfoCharts";

export const Info = () => {

    const navigate = useNavigate();
    const { pokemon } = useParams();
    const [pokemonInfo, setPokemonInfo] = useState({});

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(res => res.json())
        .then(pokemonData => {
            fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)
            .then(res => res.json())
            .then(pokemonSpeciesData => {
                setPokemonInfo({...pokemonData, ...pokemonSpeciesData});
                console.log({...pokemonData, ...pokemonSpeciesData});
            })
        });
    },[])

    const returnToMain = () => {
        navigate('/');
    }

    return ( pokemonInfo && Object.keys(pokemonInfo).length > 0 ? 
    <div className={css(infoStyles.infoPage)}>
        <button onClick={()=>returnToMain()}>Back</button>
        <br/><br/>

        <InfoHeader pokemonInfo={pokemonInfo}/>
        <br/>
        <InfoCharts pokemonInfo={pokemonInfo}/>

    </div> : <h3>Loading</h3>)
}