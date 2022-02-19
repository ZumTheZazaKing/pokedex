export default function InfoDescription(props){

    const descriptions = props.pokemonInfo;
    let description;

    for(var i=0;i<descriptions.length;i++){
        if(descriptions[i].language.name === "en"){
            description = descriptions[i].flavor_text;
            break;
        }
    }

    return description;
}