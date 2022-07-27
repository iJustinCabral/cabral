import styled, { keyframes } from 'styled-components'

/* Animations */
const shiftBackgroundColor = keyframes`
    0% {background-position: 0 50%;}
    50% { background-position: 100%, 50%;}
    100% {background-position: 0 50%;}
`

/* Styled Components */
export const Container = styled.section`
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: linear-gradient(-45deg, #965BA0, #2581BB, #5CE88B);
    background-size: 400% 400%;
    position: relative;
    animation: 10s ${shiftBackgroundColor} ease-in-out infinite;
`

export const ContentWrapper = styled.div`
    padding: 20px;
    margin: 20px;
    max-width: 100%;
    border-radius: 12px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

@media screen and (max-width: 768px) {
    padding: 20px;
    display: flex;
    flex-direction: column;
 }
`

export const Image = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 8px solid #BDC2C8;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);


    @media screen and (max-width: 768px) {
        width: 100px;
        height: 100px;
     }
`

export const GreetingsTextWrapper = styled.div`
    font-family: 'Superior title', 'Times New Roman', sans-serif;
    font-weight: 400;
    font-size: 70px;
    color: #222;
    
    @media screen and (max-width: 768px) {
        font-size: 30px;
     }
`

export const AboutMeTextWrapper = styled.div`
    font-family: 'Pitchsans Regular', sans-serif;
    font-weight: 400;
    padding-left: 6px;
    font-size: 18px;

    @media screen and (max-width: 768px) {
        padding-left: 0px;
        font-size: 16px;
     }
`

export const IntroWrapper = styled.div`
     padding-left: 10px;

     @media screen and (max-width: 768px) {
        margin-top: 10px;
     }
`

export const Divider = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff
`
export const Triangle = styled.div`
    margin-top: -1px;
    width: 0; 
    height: 10; 
    border-left: 30px solid white;
    border-right: 30px solid white;
    z-index: 99;
`