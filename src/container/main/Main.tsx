import React, { useEffect, useState } from 'react';
import { Wrapper } from '../../style/Wrapper';
import {PokemonResult,DetailInfo } from '../../types/Pokemon';
import fetchPokemon from '../../api/fetchPokemon';
import PokeHeader from '../../components/PokeHeader';
import styled from 'styled-components';

const Main = () => {
    const [PokeInfo, setPokeInfo] = useState<DetailInfo[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchPokeData = await fetchPokemon();    
                setPokeInfo(fetchPokeData);
            } catch (error) {
                throw error;
            }
        }
        fetchData();
    },[])

    return (
        <Wrapper>
            <PokeHeader/>
            <Container>                
                    {PokeInfo.length > 0 ? (
                        PokeInfo.map(pokemon => 
                    <ShowPoke>{pokemon.KoreanName}</ShowPoke>)
                    ):
                    <ShowPoke>로딩중</ShowPoke>}
            </Container>
        </Wrapper>
    );
};

export default Main;

const Container = styled.div`
width: 100%;
display: flex;
flex-direction:row;
flex-wrap: wrap;
justify-content: center;
`

const ShowPoke = styled.div`
    width:30%;
    display: flex;
    flex-direction: column;
    align-items: center;
`