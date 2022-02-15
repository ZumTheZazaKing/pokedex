import { css } from 'aphrodite';
import { globalStyles } from '../styles/globalStyles';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Pokemon = (props) => {

    const { name, url } = props.info;

    return (<div className={css(globalStyles.pokemonListItem)}>
        <LazyLoadImage 
            src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${String(url).split('/')[6]}.svg`}
            width={100}
            height={100}
            placeholder={<span>Loading...</span>}
        />
        <h3>{String(name).charAt(0).toUpperCase() + String(name).slice(1)}</h3>
    </div>)
}