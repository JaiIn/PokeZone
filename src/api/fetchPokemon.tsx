import axios from 'axios';
import { PokemonResponse, PokemonResult, DetailInfo, DeatilResponse } from '../types/Pokemon';
import { Generation } from '../components/Generation';

const getPokemonSpecies = async (url: string) => {
    try {
        const speciesUrl = url.replace('pokemon','pokemon-species'); 
        const response = await axios.get(speciesUrl);
        return response.data;
    } catch (error) {
        throw error;
    }
}

const getKoreanName = async (names:any[],isKorean:string) => {
    const KoreanName = names.find(name => name.language.name === `${isKorean}`);
    return KoreanName ? KoreanName.name : "Unknown";
}

export const fetchPokemon = async (genId: number,isKorean:string): Promise<DetailInfo[]> => {
    try {

        const {offset, limit} = Generation.find(gen => gen.id === genId) || {offset:0, limit:151};

        const response = await axios.get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const pokemonList = response.data.results;

        const pokemonDetails = await Promise.all(
            pokemonList.map(async (pokemon: PokemonResult) => {
                const speciesData = await getPokemonSpecies(pokemon.url);
                const koreanName = await getKoreanName(speciesData.names,isKorean);

                const pokemonDetailResponse = await axios.get<DeatilResponse>(pokemon.url);
                const pokemonDetailData = pokemonDetailResponse.data;
                const imageUrl = pokemonDetailData.sprites.front_default;
                const tpyes = pokemonDetailData.types.map(typeInfo => typeInfo.type.name);

                return {
                    ...pokemon,
                    KoreanName: koreanName,
                    imageUrl: imageUrl,
                    id:pokemonDetailData.id,
                    types:tpyes,
                };
            })
        );

        return pokemonDetails;
    } catch (error) {
        throw error;
    }
};

export default fetchPokemon;