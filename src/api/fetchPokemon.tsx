import axios from 'axios';
import { PokemonResponse, PokemonResult, DetailInfo } from '../types/Pokemon';

const getPokemonSpecies = async (url: string) => {
    try {
        const speciesUrl = url.replace('pokemon','pokemon-species'); 
        const response = await axios.get(speciesUrl);
        return response.data;
    } catch (error) {
        throw error;
    }
}

const getKoreanName = async (names:any[]) => {
    const KoreanName = names.find(name => name.language.name === 'ko');
    return KoreanName ? KoreanName.name : "Unknown";
}

export const fetchPokemon = async (): Promise<DetailInfo[]> => {
    try {
        const response = await axios.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=151');
        const pokemonList = response.data.results;

        const pokemonDetails = await Promise.all(
            pokemonList.map(async (pokemon: PokemonResult) => {
                const speciesData = await getPokemonSpecies(pokemon.url);
                const koreanName = await getKoreanName(speciesData.names);

                const pokemonDetailResponse = await axios.get(pokemon.url);
                const pokemonDetailData = pokemonDetailResponse.data;
                const imageUrl = pokemonDetailData.sprites.front_default;

                return {
                    ...pokemon,
                    KoreanName: koreanName,
                    imageUrl: imageUrl,
                };
            })
        );

        return pokemonDetails;
    } catch (error) {
        throw error;
    }
};

export default fetchPokemon;