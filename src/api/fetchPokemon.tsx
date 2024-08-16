import { Pokemon } from '../types/Pokemon';
import axios from 'axios';



export const fetchPokemon = async ():Promise<Pokemon[]> => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default fetchPokemon;