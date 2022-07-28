import styled from "styled-components"

export const Divider = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Square = styled.div`
    height: 60px;
    width: 10px;
    background-color: white;
    z-index: 99;

    @media screen and (max-width: 768px) {
        height: 40px;
    }

`

export const TriangleTop = styled.div`
width: 0; 
height: 10; 
border-left:  10px solid transparent;
border-right: 10px solid transparent;
border-top: 20px solid white;
z-index: 100;
transform: rotate(180deg);
`

export const TriangleBottom = styled.div`
width: 0; 
height: 10; 
border-left:  10px solid transparent;
border-right: 10px solid transparent;
border-top: 20px solid white;
z-index: 100;
`