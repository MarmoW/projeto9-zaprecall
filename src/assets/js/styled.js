import React from "react";
import styled from "styled-components";

export {abrir, fechar, ButtonGreen, ButtonYellow, ButtonRed, ButtonBox}  ;


const abrir = `min-height: 100px;
    background: #FFFFD5;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    position: relative;
    flex-direction: column;
    align-itens: flex-start;
    justify-content: center;
}`
const fechar = `
align-items: center;
justify-content: space-between;
flex-direction: row;
`
const ButtonRed = styled.button`
  width: 85px;
  height: 37px;
  color: #FFFFFF;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  padding-left: 8px;
  padding-right: 8px;
  background-color: #FF3030;
`
const ButtonYellow = styled.button`
  width: 85px;
  height: 37px;
  color: #FFFFFF;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  padding-left: 8px;
  padding-right: 8px;
  background-color: #FF922E;
`
const ButtonGreen = styled.button`
  width: 85px;
  height: 37px;
  color: #FFFFFF;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  padding-left: 8px;
  padding-right: 8px;
  background-color: #2FBE34;
`

 const ButtonBox = styled.div `
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  box-sizing: border-box;
 
 `