import axios from 'axios'

const pokemonApi = (function(){
    const api = axios.create({
        baseURL:`https://pokeapi.co/api/v2/`,
    })
    return {
        getGeneration: async function(gen: string = ''){
            const res = await api.get(`generation/${gen}`)
            return gen == '' ? (
                res.data.results
            ) : (
                res.data.pokemon_species
            )
        },
        getPokemon: async function(pokemonName: string){
            const res = await api.get(`pokemon/${pokemonName}/`)
            return res.data 
        },
        query: async function(url: string){
            return await axios.get(url)
        }
    }
})()

export default pokemonApi