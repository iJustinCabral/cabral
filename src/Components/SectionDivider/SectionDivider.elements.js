import styled from "styled-components"

export const Divider = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
export const Triangle = styled.div`
margin-top: -30px;
width: 0; 
height: 10; 
border-left: 30px solid transparent;
border-right: 30px solid transparent;
border-top: 60px solid white;
z-index: 99;
`