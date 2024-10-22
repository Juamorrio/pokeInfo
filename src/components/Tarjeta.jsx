import { useEffect, useState } from 'react';
import { getPokemon } from '../api/FantasyEndPoints';
import './Tarjeta.css';

const Tarjeta = ({pok}) => {
  const [pokemon, setPokemon] = useState({});
  const [imagen,setImagen] = useState([]);
  const [types,setTypes] = useState([]);
  
  console.log(pokemon)

  
  useEffect( () => {
    getPokemonTarjeta()
    /* getPokemonType() */
}, [])

  const getPokemonTarjeta = async() => {
    const pokemon = await getPokemon(pok.url); 
    setPokemon(pokemon);
    setImagen(pokemon.sprites.other['official-artwork']['front_default'])

  }

  /* const getPokemonType = async() => {
    var listTypes = [];
    var images = [];
    for (let i = 0; i < pokemon.types.length; i++) {
      listTypes.push(pokemon.types[i].type['url'])
    }

    for (let i = 0; i < listTypes.length; i++) {
      var image = await getType(listTypes[i]);
      images.push(image);
    }
    
    setTypes(images);
  } */


  return (
  <div class="col custom-col mb-3">
      <div class="card">
        <img  src = {imagen}></img>
        <div class="card-details">
          <p class="text-title">{pokemon.name}</p>
          
        </div>
</div>
</div>

    
  )
}

export default Tarjeta
