import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getImageType, getPokemonUrl } from '../api/FantasyEndPoints';
import './Tarjeta.css';

const Tarjeta = ({pok}) => {
  const [pokemon, setPokemon] = useState({});
  const [imagen,setImagen] = useState([]);
  const [types,setTypes] = useState([]);
  const [imagesTypes, setImagesTypes] = useState([]);
  
  

  
  useEffect( () => {
    getPokemonTarjeta();
    
}, [])



  const getPokemonTarjeta = async() => {
    const pokemon = await getPokemonUrl(pok.url); 
    setPokemon(pokemon);
    setImagen(pokemon.sprites.other['official-artwork']['front_default'])
    const typesList = []
    for(let i=0; i < pokemon.types.length; i++){
      typesList.push(pokemon.types[i].type.url);
    }
    setTypes(typesList);

    let images = [];
    for(let i = 0; i < typesList.length; i++){
      const image = await getImageType(typesList[i])
      
      images.push(image.sprites['generation-viii']['brilliant-diamond-and-shining-pearl']['name_icon'])
      
    }
    setImagesTypes(images);
    
  }

  return (
    <Link to={'/details/'+ pokemon.name}>
      <div class="col custom-col mb-3">
          <div class="card">
            <img  src = {imagen}></img>
            <div class="card-details">
              <p class="text-title">{pokemon.name}</p>
              <div className='type'>
                {imagesTypes.map((type, index) => {
                    return (
                        <img  key={index} src={type} alt={`Imagen ${index}`} />
                    );
                })}
              </div>  
            </div>
      </div>
    </div>
</Link>

    
  )
}

export default Tarjeta