import { useEffect, useState } from "react";
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { getPokemons } from '../api/FantasyEndPoints';
import Tarjeta from "../components/Tarjeta.jsx";
import './Index.css';


function Index() {

    const [listado, setListado] = useState([]);
    const [Index, setIndex] = useState([]);
    const [pokemons,setPokemons] = useState([]);
    const [allPokemons,setAllPokemons] = useState([]);
    const [filtro, setFiltro]= useState([]);
    const [offset,setOffset] = useState(0);
    const [total,setTotal] = useState(0);
    const [limit, setLimit] = useState(15);
    

    useEffect( () => {
      getIndex();
      getAllpokemons();
    }, []
    )


      const getIndex = async(p) => {
        try {
          const pokemons = await getPokemons(15, p); 
          setListado(pokemons.results);
          setPokemons(pokemons.results);
          
        
        } catch (error) {
          console.error('Error al obtener los pokemons:', error.message); 
        }
      }

      const getAllpokemons = async(p) => {
        try {
          const pokemons = await getPokemons(10000, p); 
          setAllPokemons(pokemons.results);
          setTotal(pokemons.count);
        
        } catch (error) {
          console.error('Error al obtener los pokemons:', error.message); 
        }
      }

      const buscar = async(e) => {
        if (e.keyCode === 13) {
          if(filtro.trim() != ''){
            setListado([]);
            setTimeout( () => {
              setListado(allPokemons.filter(p => p.name.includes(filtro)))
            }, 100)
          }
          
        } else if(filtro.trim() == '') {
          setListado([]);
          setTimeout( () => {
            setListado(pokemons);
          }, 100)
          
        }
      }

      const goPage = async(p) =>{
        setListado([]);
        await getIndex((p==1) ? 0 : ((p-1)*20));
        setOffset(p);
      }

    return (
      <div className="fondoIndex">
        <div class="group">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="search-icon">
            <g>
              <path
                d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
              ></path>
            </g>
          </svg>

          <input
            id="query"
            class="input"
            type="search"
            name="searchbar"
            value={filtro} onChange={(e) => {setFiltro(e.target.value)}} onKeyUpCapture={buscar}  placeholder="Buscar pokemon"
          />
        </div>
        <div className="pokemons">
          { listado.map((pok, i) => {
              return (<Tarjeta pok={pok} key={i}></Tarjeta>)  
          } 
          )}
        </div>
        <PaginationControl
          limit={15}
          total={total}
          page={offset}
          changePage={page => goPage(page)}
               />

      </div>
    );
  }
  
  export default Index;