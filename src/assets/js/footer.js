import styled from "styled-components"
import iconecerto from "../img/icone_certo.png"
import iconeerro from "../img/icone_erro.png"
import iconequase from "../img/icone_quase.png"
import React from "react"

export default function Footer({contacertos, PERGUNTAS, respostas}) {
    return (
        <FooterStyled data-test="footer"> 
            <p>{contacertos}/{PERGUNTAS.length} CONCLUIDOS</p>
            <IconesResp>
                {respostas.map((props) => <img src={props}/>)}
            </IconesResp>
        
        </FooterStyled>

    )
}

const FooterStyled = styled.div `
  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
  box-shadow: -4px 0px 5px 0px rgba(0, 0, 0, 0.15);
`

const IconesResp = styled.div`
    display: flex;
    justify-content: center;
    img {
        width:23px;
        height:23px;
        margin-top: 6px;
        margin-right: 5px;
    }
`