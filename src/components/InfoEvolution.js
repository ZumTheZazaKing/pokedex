import { css } from "aphrodite";
import { infoStyles } from "../styles/infoStyles";
import { useEffect, useState } from "react";

export default function InfoEvolution(props){

    const pokemonInfo = props.pokemonInfo;

    const [evolutionChain, setEvolutionChain] = useState([]);

    useEffect(() => {
        const evoltuionUrl = pokemonInfo.evolution_chain.url;
        fetch(evoltuionUrl)
        .then(res => res.json())
        .then(data => {
            let evoChain = [];
            let evoData = data.chain;
            console.log(evoData)
            do {
                let evoDetails = evoData['evolution_details'][0];

                evoChain.push({
                    "species_name": evoData.species.name,
                    "min_level": !evoDetails ? 1 : evoDetails.min_level,
                    "trigger_name": !evoDetails ? null : evoDetails.trigger.name,
                    "item": !evoDetails ? null : evoDetails.item,
                    "url":evoData.species.url
                });

                evoData = evoData['evolves_to'][0];

            } while (!!evoData && evoData.hasOwnProperty('evolves_to'));

            setEvolutionChain(evoChain)
        })
    },[])

    return (
        <div className={css(infoStyles.evolutionContainer)}>
            <h2>Evolution Chain</h2>
            <br/>
            <div className={css(infoStyles.evoChainContainer)}>
                {evolutionChain.map((stage,i) => {
                    return <div className={css(infoStyles.evolutionStage)} key={i}>
                        <img 
                            src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${String(stage.url).split('/')[6]}.svg`}
                            alt={stage.species_name}  
                            width="100px"
                            height="100px"                  
                        />
                        <p><b>{i+1}</b> <span style={{textTransform:"capitalize"}}>{stage.species_name}</span></p>
                    </div>
                })}
            </div>
        </div>
    )
}