import { css } from "aphrodite";
import { infoStyles } from "../styles/infoStyles";

export default function SpecialTag(props){
    
    const pokemonInfo = props.pokemonInfo;
    let output;

    if(pokemonInfo.is_legendary){
        output = <span className={css([infoStyles.tag, infoStyles.legendaryTag])}>Legendary</span>
    } else if (pokemonInfo.is_mythical){
        output = <span className={css([infoStyles.tag, infoStyles.mythicalTag])}>Mythical</span>
    } else {
        output = ""
    }
    
    return output
}