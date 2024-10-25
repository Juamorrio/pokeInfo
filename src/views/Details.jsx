import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemon } from "../api/FantasyEndPoints";
import './Details.css';


function Details() { 
    const {pokemonName} = useParams();
    const [pokemon, setPokemon] = useState([]);
    const [colorFondo, setColorFondo] = useState([]);

    useEffect(() =>{
        getPokemonInfo();
        getColorFondo();
    }, [])
    console.log(pokemonName)


    const getPokemonInfo = async() =>{
        const respuesta = await getPokemon(pokemonName);
        setPokemon(respuesta);

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

        console.log(respuesta.types[0].type.name)
        console.log(typeColors[respuesta.types[0].type.name])

        if(typeColors[respuesta.types[0].type.name]){
            setColorFondo(typeColors[respuesta.types[0].type.name]);
        }
    }
    

    const getColorFondo = () =>{
        


    }



    return(
        <div className="fondoDetails" style={{background: colorFondo }}>

        </div>
    );

}

export default Details;