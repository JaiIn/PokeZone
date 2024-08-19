import styled from 'styled-components';

const PokeHeader = () => {
    return (
        <>
            <Container>
                <Logo/>
                <SeacrhPoke/>
                <Login>로그인</Login>
            </Container>
        </>
    );
};

export default PokeHeader;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
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