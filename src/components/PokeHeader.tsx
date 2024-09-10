import styled from 'styled-components';
import useLanguageStore from '../zustand/useLanguageStore';
import {useNavigate } from 'react-router-dom';

const PokeHeader = () => {

    const toEnglish = useLanguageStore(state => state.toEnglish);
    const toKoreaen = useLanguageStore(state => state.toKorean);

    const mainNavi = useNavigate();
    const handleToMain = () => {
        mainNavi("/");
    }

    return (
        <>
            <Container>
                <Logo onClick={handleToMain}/>
                <SeacrhPoke/>
                <Language>
                    <English onClick={toEnglish}/>
                    <Korean onClick={toKoreaen}/>
                </Language>
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
cursor: pointer;
width: 200px;
height: 60px;
background-image: url('images/pokezone.png');
background-position: center;
background-size: cover;
`

const SeacrhPoke = styled.input`
width: 50%;
`

const English = styled.div`
cursor: pointer;
background-image: url('images/USA.jpg');
background-position: center;
background-size: cover;
width: 40px;
height: 25px;
`

const Korean = styled.div`
cursor: pointer;
background-image: url('images/korean.jpg');
background-position: center;
background-size: cover;
width: 40px;
height: 25px;
`

const Language = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`
