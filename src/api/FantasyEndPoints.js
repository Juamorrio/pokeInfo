import axios from "axios";

export const getPokemons = async (l,p) => {
    return new Promise(function (resolve, reject) {
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=`+ l +`&offset=`+ p)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          console.log('No se puede mostrar los pokemons')
        })
    })
  }

  export const getPokemon = async (url) => {
    return new Promise(function (resolve, reject) {
      axios.get(url)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          console.log('No se puede mostrar los pokemons')
        })
    })
  }

  export const getType = async (url) => {
    return new Promise(function (resolve, reject) {
      axios.get(url)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          console.log('No se puede mostrar los pokemons')
        })
    })
  }

  export default {getPokemons, getPokemon, getType};