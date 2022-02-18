import { StyleSheet } from "aphrodite";

export const infoStyles = StyleSheet.create({
    infoPage:{
        padding:"20px"
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