import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Details() { 
    const {pokemonName} = useParams();
    const [colorFondo, setColorFondo] = useState([]);

    useEffect(() =>{
        getColorFondo();
    }, [])
    console.log(pokemonName)



    

    const getColorFondo = () =>{
        const typeColors = {
            fire: "#f08030",
            water: "#6890f0",
            grass: "#78c850",
            electric: "#f8d030",
            ice: "#98d8d8",
            fighting: "#c03028",
            poison: "#a040a0",
            ground: "#e0c068",
            flying: "#a890f0",
            psychic: "#f85888",
            bug: "#a8b820",
            rock: "#b8a038",
            ghost: "#705898",
            dark: "#705848",
            dragon: "#7038f8",
            steel: "#b8b8d0",
            fairy: "#f0b6bc",
            
        };


    }



    return(
        <div className="fondoDetails" style={{ }}>

        </div>
    );

}

export default Details;