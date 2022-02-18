import { StyleSheet } from 'aphrodite';

export const globalStyles = StyleSheet.create({
    blackBorder:{
        border:"1px solid black",
    },
    mainBackgroundColor: {
        backgroundColor: '#f5f5f5',
    },
    mainPage:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pokemonList:{
        display:"grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        width:"100%",
        padding:"auto"
    },
    pokemonListItem:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding:'20px',
        cursor:"pointer",
        ":hover":{
            color:"salmon"
        }
    }
});