import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {DetailInfo } from '../../types/Pokemon';
import fetchPokemon from '../../api/fetchPokemon';
import useDarkModeStore from '../../zustand/useDarkModeStore';
import useGenerations from '../../zustand/useGenerations';
import { KoreanType } from '../../components/KoreanType';

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
                            <img src={pokemon.imageUrl} alt={pokemon.name}/>
                            <div>{pokemon.KoreanName}</div>
                            <TypeContainer>
                                {pokemon.types.map(type=>
                                    <div key={type}>
                                        {KoreanType[type] || type}
                                    </div>)}
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
    cursor: pointer;
    width:200px;
    height: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: box-shadow 0.3s ease-in-out;
    img{
        border: 1px solid black;
        border-radius: 30px;
        width: 150px;
        height: 150px;
        object-fit: cover;
        margin-bottom: 5px;
        background-color: white;
        &:hover{box-shadow: 0 2px 4px rgba(0,0,0,1);}
    }
    div{
        color: ${({isDarkMode}) => (isDarkMode ? 'white' : 'black')};
    }
`
const TypeContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction:row;
    justify-content: space-evenly;
`