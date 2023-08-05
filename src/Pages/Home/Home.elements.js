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

export const IntroWrapper = styled.div`
     padding-left: 10px;

     @media screen and (max-width: 768px) {
        margin-top: 10px;
     }
`

export const EducationSplitContainer = styled.div`
    display: flex;
    align-items: center;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`

// This is the main splits that will hold all content

export const SectionWrapper = styled.div`
     display: flex;
     flex-direction: column;
`

export const SplitContainer = styled.div`
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const LeftSection = styled.div`
    padding: 20px;
    flex-shrink: 0;
    flex-basis: 60%;
    text-align: left;
    display: flex;
    flex-direction: column;
`

export const RightSection = styled.div`
    flex-shrink: 0;
    flex-basis: 40%;
    display: flex;
    align-items: center;
    justify-content: center;


`

export const  TitleText = styled.div`
    font-family: 'Superior title', 'Times New Roman', sans-serif;
    font-weight: 400;
    font-size: 60px;
    color: #222;

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
`

export const ParagraphText = styled.div`
    font-family: 'Pitchsans Regular', sans-serif;
    font-weight: 400;
    padding-left: 6px;
    font-size: 18px;

    @media screen and (max-width: 768px) {
        padding-left: 0px;
        font-size: 16px;
    }
`
export const ContentImage = styled.img`
    width: 260px;
    height: 260px;

    @media screen and (max-width: 1000px) {
        width: 220px;
        height: 220px;
    }

    @media screen and (max-width: 768px) {
        width: 160px;
        height: 160px;
    }
`


export const RoundedContentImage = styled.img`
    width: 240px;
    height: 240px;
    border-radius: 25%;

    @media screen and (max-width: 1000px) {
        width: 220px;
        height: 220px;
    }

    @media screen and (max-width: 768px) {
        width: 160px;
        height: 160px;
    }
`

export const LineDivider = styled.hr`
    display: inline-block;
    position: relative;
    top: -0.7em;
    font-size: 1.4em;
    background: white;
    width: 100%;
    margin-top: 60px;
    margin-bottom: 60px;
`

// This is for the work &  projects section
