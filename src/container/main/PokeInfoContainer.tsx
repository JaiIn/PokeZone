import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {DetailInfo } from '../../types/Pokemon';
import fetchPokemon from '../../api/fetchPokemon';
import useDarkModeStore from '../../zustand/useDarkModeStore';
import useGenerations from '../../zustand/useGenerations';
import { KoreanType } from '../../components/KoreanType';
import { TypeColors } from '../../components/TypeColor';

const PokeInfoContainer = () => {
    
    const [PokeInfo, setPokeInfo] = useState<DetailInfo[]>([]);

    const isDarkMode = useDarkModeStore((state)=>state.isDarkMode);

    const selecedGeneration = useGenerations((state)=>state.selectedGeneration);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchPokeData = await fetchPokemon(selecedGeneration);    
                setPokeInfo(fetchPokeData);
            } catch (error) {
                throw error;
            }
        }
        fetchData();
    },[selecedGeneration])

    return (
        <>
            {PokeInfo.length > 0 ? (
                    PokeInfo.map(pokemon => 
                        <ShowPoke key={pokemon.name} isDarkMode={isDarkMode}>
                            <img key={pokemon.id} src={pokemon.imageUrl} alt={pokemon.name}/>

                            <NameContainer>
                                <p>No.{pokemon.id.toString().padStart(4,'0')}</p>
                                <PokemonName 
                                key={pokemon.id} 
                                isDarkMode={isDarkMode}>{pokemon.KoreanName}</PokemonName>
                            </NameContainer>

                            <TypeContainer>
                                {pokemon.types.map(type=>
                                    <TypeName 
                                    key={type} 
                                    backgroundColor={TypeColors[type] || 'black'}>
                                        {KoreanType[type] || type}
                                    </TypeName>)}
                            </TypeContainer>
                            </ShowPoke>
                        )
                    ):
                    <ShowPoke isDarkMode={isDarkMode}>로딩중</ShowPoke>}
        </>
    );
};

export default PokeInfoContainer;

const ShowPoke = styled.div<{isDarkMode:boolean}>`
    margin: 2px;
    cursor: pointer;
    width:200px;
    height: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: box-shadow 0.3s ease-in-out;
    border: 0.5px solid lightgrey;
    &:hover{box-shadow: 0 2px 4px rgba(0,0,0,1);}
    img{
        margin-top: 5px;
        width: 150px;
        height: 150px;
        // background-color: white;
    }
    p{
        margin: 0px;
        color: ${({isDarkMode}) => (isDarkMode ? 'white' : 'black')};
        font-size: 10px;
    }
`
const TypeContainer = styled.div`
margin-top:5px;
    width: 60%;
    display: flex;
    flex-direction:row;
    justify-content: space-evenly;
`

const NameContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`
const TypeName = styled.div<{backgroundColor:string}>`
    color: white;
    background-color: ${({backgroundColor})=>backgroundColor};
    width: 45%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-radius: 10px;
`

const PokemonName = styled.div<{isDarkMode:boolean}>`
    color: ${({isDarkMode}) => (isDarkMode ? 'white' : 'black')};
    font-size: 18px;
    display: flex;
    flex-direction: row;
`