import React from "react";
import { Wrapper } from "../../style/Wrapper";
import useDarkModeStore from "../../zustand/useDarkModeStore";
import { useParams } from "react-router-dom";
import PokeHeader from "../../components/PokeHeader";
import styled from "styled-components";
import PokeFrame from "./PokeFrame";

const PokeInfoMain:React.FC = () => {

    const isDarkMode = useDarkModeStore((state) => state.isDarkMode);
    const { id } = useParams();

    return (
        <Wrapper isDarkMode={isDarkMode}>
            <PokeHeader/>
            <MainContainer>
                <PokemonImage/>
            </MainContainer>
        </Wrapper>
        );
};

export default PokeInfoMain;

const MainContainer = styled.div`
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const PokemonImage = styled.div`
width: 86px;
height: 86px;
background-color: black;
`