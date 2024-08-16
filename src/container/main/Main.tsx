import { Wrapper } from '../../style/Wrapper';
import PokeHeader from '../../components/PokeHeader';
import styled from 'styled-components';
import PokeInfoContainer from './PokeInfoContainer';

const Main = () => {
    
    return (
        <Wrapper>
            <PokeHeader/>
            <Container>              
                <PokeInfoContainer/>
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

