import styled from "styled-components";
import React from "react";
import logo from "../img/logo.png"

export default function TelaInicial() {
    const [startgame, setStartgame] = React.useState("flex")
    
    const FirstScreen = styled.div `
    background-color: #FB6B6B;
    width: 100%;
    min-height: 100%;
    display: ${startgame};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
    position: fixed;
    left: 0px;
    right: 0px;
    z-index: 5;
    padding-top: 148px;
    box-sizing: border-box;
    
  `

   


    function Game() {
        setStartgame("none");
    }

    return (
        <FirstScreen >
            <LogoStart src={logo}/>
            <StyledP>ZapRecall</StyledP>
            <StartRecall onClick={Game}>Inicial Recall!</StartRecall>
        </FirstScreen>

    )
}

const StartRecall = styled.button`
border: none;
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #D70900;
width: 246px;
height: 54px;
margin-top: 30px;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
`
const LogoStart = styled.img`
width: 136px;
height: 161px;
`
const StyledP = styled.p`
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 45px;
color: #FFFFFF;
margin-top: 13px;

`