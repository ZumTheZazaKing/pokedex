import { StyleSheet } from "aphrodite";

export const backButtonStyles = StyleSheet.create({
    backButton:{
        padding:"10px",
        backgroundColor:"transparent",
        cursor:"pointer",
        borderRadius:"10px",
        border:"none",
        outline:"none",
        fontSize:"18px",
        textTransform:"uppercase",
        fontWeight:"bold",
        ":hover":{
            color:"salmon"
        }
    }
})