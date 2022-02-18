import { css } from "aphrodite";
import { infoStyles } from "../styles/infoStyles";
import PokemonType from "./PokemonType";

export default function InfoHeader(props){

    const pokemonInfo = props.pokemonInfo;

    return (
        <div className={css(infoStyles.header)}>
            <div className={css([infoStyles.leftHeader])}>
                <h1>{String(pokemonInfo.name).charAt(0).toUpperCase() + String(pokemonInfo.name).slice(1)}</h1>
                <br/>
                <div className={css(infoStyles.leftHeaderImageContainer)}>
                    <img
                        src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonInfo.id}.svg`}
                        alt={pokemonInfo.name}
                        width="300px"
                        height="300px"
                    />
                </div>
            </div>
            <div className={css([infoStyles.rightHeader])}>
                <h1 style={{textAlign:"right"}}>No. {pokemonInfo.id}</h1>
                <p>
                    <span className={css(infoStyles.boldText)}>Type:</span>
                    {pokemonInfo.types.map((t,i) => <PokemonType key={i} type={t.type.name}/>)}
                </p>
                <br/>
                <p>
                    <span className={css(infoStyles.boldText)}>Description</span>
                    <br/>
                    {pokemonInfo.flavor_text_entries[0].flavor_text}
                </p>
                <br/>
                <div className={css(infoStyles.displayFlexSbCenter)}>
                    <p>
                        <span className={css(infoStyles.boldText)}>Abilities</span>
                        <br/>
                        {pokemonInfo.abilities.map((a,i) => {
                            return (
                                <span key={i}>
                                    {String(a.ability.name).charAt(0).toUpperCase() + String(a.ability.name).slice(1)}
                                    <br/>
                                </span>
                            )
                        })}
                    </p>
                    <p>
                        <span className={css(infoStyles.boldText)}>Height</span>
                        <br/>
                        {pokemonInfo.height}m
                    </p>
                    <p>
                        <span className={css(infoStyles.boldText)}>Weight</span>
                        <br/>
                        {pokemonInfo.weight}kg
                    </p>
                </div>
                <br/>
                <div className={css(infoStyles.displayFlexSbCenter)}>
                    <p>
                        <span className={css(infoStyles.boldText)}>Habitat</span>
                        <br/>
                        {String(pokemonInfo.habitat.name).charAt(0).toUpperCase() + String(pokemonInfo.habitat.name).slice(1)}
                    </p>
                    <p>
                        <span className={css(infoStyles.boldText)}>Held Items</span>
                        <br/>
                        {pokemonInfo.held_items.length > 0  && pokemonInfo.held_items != [] ? pokemonInfo.held_items.map((h,i) => {
                            return (
                                <span key={i}>
                                    {String(h.item.name).charAt(0).toUpperCase() + String(h.item.name).slice(1)}
                                    <br/>
                                </span>
                            )
                        }): <span>None</span>}
                    </p>
                    <p>
                        <span className={css(infoStyles.boldText)}>Egg Groups</span>
                        <br/>
                        {pokemonInfo.egg_groups.length > 0 && pokemonInfo.egg_groups != [] ? pokemonInfo.egg_groups.map((e,i) => {
                            return (
                                <span key={i}>
                                    {String(e.name).charAt(0).toUpperCase() + String(e.name).slice(1)}
                                    <br/>
                                </span>
                            )
                        }): <span>None</span>}
                    </p>
                </div>
            </div>
        </div>
    )
}