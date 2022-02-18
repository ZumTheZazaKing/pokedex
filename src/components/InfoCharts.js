import { css } from "aphrodite";
import { globalStyles } from "../styles/globalStyles";
import { infoStyles } from "../styles/infoStyles";

export default function InfoCharts(props){

    const pokemonInfo = props.pokemonInfo;
    return (
        <div className={css([infoStyles.displayFlexCenter])}>
            <div className={css(infoStyles.chart)}>
                <table>
                    <tr>
                        <th colSpan="2" style={{textAlign:"center"}}>Base Stats</th>
                    </tr>
                    {pokemonInfo.stats.map((s,i) => {
                        return (
                            <tr key={i}>
                                <th className={css(infoStyles.boldText)}>{String(s.stat.name).charAt(0).toUpperCase() + String(s.stat.name).slice(1)}</th>
                                <td>{s.base_stat}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
            <br/>
            <div className={css(infoStyles.chart)}>
                <table>
                    <tr>
                        <th colSpan="2" style={{textAlign:"center"}}>Miscellaneous Stats</th>
                    </tr>
                    <tr>
                        <th className={css(infoStyles.boldText)}>Base Experience</th>
                        <td>{pokemonInfo.base_experience}</td>
                    </tr>
                    <tr>
                        <th className={css(infoStyles.boldText)}>Base Happiness</th>
                        <td>{pokemonInfo.base_happiness}</td>
                    </tr>
                    <tr>
                        <th className={css(infoStyles.boldText)}>Capture Rate</th>
                        <td>{pokemonInfo.capture_rate}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}