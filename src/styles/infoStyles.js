import { StyleSheet } from "aphrodite";

export const infoStyles = StyleSheet.create({
    infoPage:{
        width:"100%",
        marginLeft:"auto",
        marginRight:"auto",
        padding:"20px",
        '@media (min-width: 900px)':{
            width:"80%"
        }
    },
    pokemonName:{
        fontSize:"32px",
        fontWeight:"bold",
        textTransform:"capitalize",
        display: 'flex',
        alignItems: 'center',
        
    },
    tag:{
        fontSize:"16px",
        marginLeft:"20px",
        color:"white",
        padding:"5px 10px",
        borderRadius:"10px"
    },
    mythicalTag:{
        backgroundColor:"deeppink"
    },
    legendaryTag:{
        backgroundColor:"orange"
    },
    displayFlexSbCenter:{
        display:"flex",
        justifyContent:"space-between",
    },
    displayFlexCenter:{
        display: 'flex',
        justifyContent: 'center',
        flexDirection:"column",
        alignItems:"center",
        '@media (min-width: 400px)':{
            flexDirection:"row"
        }
    },
    chart:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width:"100%",
        textAlign:"left",
        '@media (min-width: 400px)':{
            width:"50%"
        }
    },
    header:{
        display: 'flex',
        flexDirection: 'column',
        '@media (min-width: 700px)': {
            flexDirection:"row"
        }

    },
    leftHeader:{
        padding:"10px",
        '@media (min-width: 700px)': {
            flex:3,
        }
    },
    leftHeaderImageContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width:"100%",
    },
    rightHeader:{
        padding:"10px",
        '@media (min-width: 700px)': {
            flex:7,
        }
    },
    boldText:{
        fontWeight:"bold",
        fontSize:"18px"
    },
})