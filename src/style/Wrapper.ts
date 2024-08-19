import { styled } from 'styled-components';

export const Wrapper = styled.div<{isDarkMode:boolean}>`
width: 100%;
background-color: ${({isDarkMode})=>(isDarkMode ? 'gray' : 'white' )};
transition: background-color 0.3s ease;
min-width: 550px;
`