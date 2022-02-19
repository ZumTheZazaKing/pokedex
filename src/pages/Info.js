import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { css } from "aphrodite";
import { infoStyles } from "../styles/infoStyles";
import InfoHeader from "../components/InfoHeader";
import InfoCharts from "../components/InfoCharts";
import InfoEvolution from '../components/InfoEvolution';
import { backButtonStyles } from "../styles/backButtonStyles";
import Loading from "../components/Loading";

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
        <button className={css(backButtonStyles.backButton)} onClick={()=>returnToMain()}>Back</button>
        <br/><br/>

        <InfoHeader pokemonInfo={pokemonInfo}/>
        <InfoCharts pokemonInfo={pokemonInfo}/>
        <InfoEvolution pokemonInfo={pokemonInfo}/>

    </div> : <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height:"100vh",
        width: "100vw",
    }}><Loading/></div>)
}