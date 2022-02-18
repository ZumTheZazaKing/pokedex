import { css } from "aphrodite";
import { pokemonTypeColors } from "../styles/pokemonTypeColors";

export default function PokemonType(props){

    const type = String(props.type).charAt(0).toUpperCase() + String(props.type).slice(1);

    let output = "Hello";

    switch (type){
        case "Grass":
            output =  <span className={css([pokemonTypeColors.Grass, pokemonTypeColors.General])}>{type}</span>
            break;
        case "Fire":
            output =  <span className={css([pokemonTypeColors.Fire, pokemonTypeColors.General])}>{type}</span>
            break;
        case "Water":
            output =  <span className={css([pokemonTypeColors.Water, pokemonTypeColors.General])}>{type}</span>
            break;
        case "Bug":
            output =  <span className={css([pokemonTypeColors.Bug, pokemonTypeColors.General])}>{type}</span>
            break;
        case "Normal":
            output =  <span className={css([pokemonTypeColors.Normal, pokemonTypeColors.General])}>{type}</span>
            break;
        case "Poison":
            output =  <span className={css([pokemonTypeColors.Poison, pokemonTypeColors.General])}>{type}</span>
            break;
        case "Electric":
            output =  <span className={css([pokemonTypeColors.Electric, pokemonTypeColors.General])}>{type}</span>
            break;
        case "Ground":
            output =  <span className={css([pokemonTypeColors.Ground, pokemonTypeColors.General])}>{type}</span>
            break;
        case "Fairy":
            output =  <span className={css([pokemonTypeColors.Fairy, pokemonTypeColors.General])}>{type}</span>
            break;
        case "Fighting":
            output =  <span className={css([pokemonTypeColors.Fighting, pokemonTypeColors.General])}>{type}</span>
            break;
        case "Psychic":
            output =  <span className={css([pokemonTypeColors.Psychic, pokemonTypeColors.General])}>{type}</span>
            break;
        case "Rock":
            output =  <span className={css([pokemonTypeColors.Rock, pokemonTypeColors.General])}>{type}</span>
            break;
        case "Ghost":
            output =  <span className={css([pokemonTypeColors.Ghost, pokemonTypeColors.General])}>{type}</span>
            break;
        case "Ice":
            output =  <span className={css([pokemonTypeColors.Ice, pokemonTypeColors.General])}>{type}</span>
            break;
        case "Dragon":
            output =  <span className={css([pokemonTypeColors.Dragon, pokemonTypeColors.General])}>{type}</span>
            break;
        case "Dark":
            output =  <span className={css([pokemonTypeColors.Dark, pokemonTypeColors.General])}>{type}</span>
            break;
        case "Steel":
            output =  <span className={css([pokemonTypeColors.Steel, pokemonTypeColors.General])}>{type}</span>
            break;
        case "Flying":
            output =  <span className={css([pokemonTypeColors.Flying, pokemonTypeColors.General])}>{type}</span>
            break;
    }

    return output;
}