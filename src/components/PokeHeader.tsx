import React from 'react';
import { Wrapper } from '../style/Wrapper';
import styled from 'styled-components';

const PokeHeader = () => {
    return (
        <Wrapper>
            <Container>
                <Logo/>
                <SeacrhPoke/>
                <Login>로그인</Login>
            </Container>
        </Wrapper>
    );
};

export default PokeHeader;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.div`
width: 200px;
height: 60px;
background-image: url('images/pokezone.png');
background-position: center;
background-size: cover;
`

const SeacrhPoke = styled.input`
    width: 50%;

`

const Login = styled.button`
    
`