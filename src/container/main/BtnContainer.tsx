import styled from 'styled-components';
import useDarkModeStore from '../../zustand/useDarkModeStore';
import SelectGeneration from './SelectGeneration';

const BtnContainer = () => {

    const isDarkMode = useDarkModeStore((state) => state.isDarkMode);
    const setDarkMode = useDarkModeStore((state) => state.setDarkMode);

    return (
        <BackContainer>
            <Container>
                <SelectGeneration/>
                <DarkModeContinaer>
                    <TogleBtn onClick={setDarkMode} isDarkMode={isDarkMode}/>
                </DarkModeContinaer>
            </Container>
        </BackContainer>
        
    );
};

export default BtnContainer;

const BackContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Container = styled.div`
height: 80px;
width: 90%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
align-items: center;
`

const DarkModeContinaer = styled.div`
width: 60px;
height: 24px;
border: 2px solid black;
border-radius: 10px;
background-color: lightgrey;
display: flex;
flex-direction: row;
align-items: center;
`

const TogleBtn = styled.div<{isDarkMode:boolean}>`
margin-left: 2px;
cursor: pointer;
border: 1px solid black;
border-radius: 10px;
width: 18px;
height: 18px;
background-color: white;
transform: ${({isDarkMode})=>(isDarkMode ? 'translateX(36px)' : 'translateX(0px)')};
transition: transform 0.3s ease-in-out;
`