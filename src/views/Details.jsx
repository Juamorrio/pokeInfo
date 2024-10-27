import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemon } from "../api/FantasyEndPoints";
import './Details.css';


function Details() { 
    const {pokemonName} = useParams();
    const [pokemon, setPokemon] = useState([]);
    const [colorFondo, setColorFondo] = useState([]);
    const [imagen, setImagen] = useState([]);
    const [hp, setHp] = useState('');
    const [attack, setAttack] = useState('');
    const [defense, setDefense] = useState('');
    const [sAttack, setSAttack] = useState('');
    const [sDefense, setSDefense] = useState('');
    const [speed, setSpeed] = useState('');



    useEffect(() =>{
        getPokemonInfo();
    }, [])


    const getPokemonInfo = async() =>{
        const respuesta = await getPokemon(pokemonName);
        setPokemon(respuesta);
        setImagen(respuesta.sprites.other['showdown']['front_default']);
        setHp(respuesta.stats[0]['base_stat']);
        setAttack(respuesta.stats[1]['base_stat']);
        setDefense(respuesta.stats[2]['base_stat']);
        setSAttack(respuesta.stats[3]['base_stat']);
        setSDefense(respuesta.stats[4]['base_stat']);
        setSpeed(respuesta.stats[5]['base_stat']);

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
            normal: "#999999"
            
        };


        if(typeColors[respuesta.types[0].type.name]){
            setColorFondo(typeColors[respuesta.types[0].type.name]);
        }
    }

    return(
        <div className="fondoDetails" style={{background: colorFondo }}>
            <div className="cartaPokemon">
                <img src={imagen}></img>
                <div className="statsContainer">
                    <div className="hpContainer">
                        
                        <div className="hp" style={{height: '25px','background-color': colorFondo,border_radius: '12px', width:hp + 200 +'px'}}></div>
                        <p style={{color: 'white', fontFamily: "sans-serif"}}>Hp:</p>
                        <p style={{color: 'white', fontSize: '20px'}}>{hp}</p>
                    </div>
                    <div className="attackContainer">
                        
                        <div className="attack" style={{height: '25px','background-color': colorFondo,border_radius: '12px', width:attack + 200 +'px'}}></div>
                        <p style={{color: 'white', fontFamily: "sans-serif"}}>Attack:</p>
                        <p style={{color: 'white', fontSize: '20px'}}>{attack}</p>
                    </div>

                    <div className="defenseContainer">
                        
                        <div className="defense" style={{height: '25px','background-color': colorFondo,border_radius: '12px', width:defense + 200 +'px'}}></div>
                        <p style={{color: 'white', fontFamily: "sans-serif"}}>Defense:</p>
                        <p style={{color: 'white', fontSize: '20px'}}>{defense}</p>
                    </div>
                    
                    <div className="sAttackContainer">
                        
                        <div className="sAttack" style={{height: '25px','background-color': colorFondo,border_radius: '12px', width:sAttack + 200 +'px'}}></div>
                        <p style={{color: 'white', fontFamily: "sans-serif"}}>S.Attack:</p>
                        <p style={{color: 'white', fontSize: '20px'}}>{sAttack}</p>
                    </div>

                    <div className="speedContainer">
                        
                        <div className="speed" style={{height: '25px','background-color': colorFondo,border_radius: '12px', width:speed + 200 +'px'}}></div>
                        <p style={{color: 'white', fontFamily: "sans-serif"}}>S.Defense:</p>
                        <p style={{color: 'white', fontSize: '20px'}}>{speed}</p>
                    </div>
                </div>
            </div>
            
        </div>
    );

}

export default Details;