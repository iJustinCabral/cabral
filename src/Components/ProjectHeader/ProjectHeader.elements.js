import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const ProjectNumberText = styled.div`
    font-family: 'Superior title', 'Times New Roman', sans-serif;
    font-weight: 400;
    font-size: 60px;
    color: #222;
    padding-right: 30px;
    text-align: left;

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
`

export const ProjectTitleText = styled.div`
    font-family: 'Superior title', 'Times New Roman', sans-serif;
    font-weight: 400;
    font-size: 60px;
    color: #222;

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
`

export const VertialLineDivider = styled.div`
    border-left: 1px solid black;
    height: 100px;
    padding-left: 30px;
`

export const HorizontalLineDivider = styled.hr`
    display: inline-block;
    position: relative;
    top: -0.5em;
    font-size: 1.4em;
    background: white;
    width: 100%;
`