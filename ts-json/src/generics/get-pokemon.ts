import axios, { Axios } from "axios";
import { Pokemon } from '../interfaces/Pokemon';

export const getPokemon = async (pokeId:number):Promise<Pokemon> => {
    const {data}=await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/ditto${ pokeId }`)
   // console.log(resp.data)
    return data;
}
