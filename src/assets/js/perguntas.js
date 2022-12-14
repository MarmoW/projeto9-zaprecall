import React from "react"
import imgplay from "../img/seta_play.png"
import imgturn from "../img/seta_virar.png"
import iconecerto from "../img/icone_certo.png"
import iconeerro from "../img/icone_erro.png"
import iconequase from "../img/icone_quase.png"
import styled from "styled-components"
import { abrir, fechar, ButtonGreen, ButtonYellow, ButtonRed, ButtonBox} from "./styled"
  
 
export default function Perguntas({num, pergunta, resposta, contacertos, setContacertos, setRespostas, respostas, setScore, score}){
    const [estadopergunta, setEstadopergunta] = React.useState(false)
    const [virada, setVirada] = React.useState(false)
    const [imagem, setImagem] = React.useState(imgplay)
    const [color, setColor] = React.useState("#333333")
    const [textdeco, setTextdeco] = React.useState("none")
    const [abrefecha, setAbrefecha] = React.useState(fechar)    
    const [jarespondeu, setJarespondeu] = React.useState(false)
    const [viraricon, setViraricon] = React.useState(true)
    const [test, setTest] = React.useState(true)

    const Container = styled.div `
    width: 300px;
    height: 35px;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
    color: ${color};
    background-color: ${!test ? "#FFFFD4" : "#FFFFFF"};
    ${abrefecha} 
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        text-decoration:${textdeco};
    }`;
    const ImagePlay = styled.img`
    display: ${!test ? 'none' : 'flex'};
    height: 20px;
    width: 20px;`

    const ImageTurn = styled.img`
    display: ${viraricon ? "none" : "flex"};
    position: absolute;
    bottom: 10px;
    right: 10px;`
    function AbrirPergunta() {
        
        if(jarespondeu == false){
        if(abrefecha === fechar){
            setAbrefecha(abrir);
            setEstadopergunta(true)
            setViraricon(false)
            setTest(false)
            
        }
    }
    }
    function VirarPergunta() {
        if(virada === false){
        setVirada(true)
        setViraricon(true)
        
        }
    }
    function EscolherResposta(check) {
        setAbrefecha("pergunta-fechada")
        setEstadopergunta(true)
        setVirada(false)
        
        if(check === 0){
            setImagem(iconecerto)
            setContacertos(contacertos + 1)
            setAbrefecha(fechar)
            setEstadopergunta(false)
            setJarespondeu(true)
            setColor("#2FBE34")
            setTextdeco("line-through")
            setTest(true)
            setRespostas([...respostas, iconecerto])
            setScore(score +1)
        }
        if(check === 1){
            setImagem(iconequase)
            setContacertos(contacertos + 1)
            setAbrefecha(fechar)
            setEstadopergunta(false)
            setJarespondeu(true)
            setColor("#FF922E")
            setTextdeco("line-through")
            setTest(true)
            setRespostas([...respostas, iconequase])
            setScore(score +1)
        }
        if(check === 2){
            setImagem(iconeerro)
            setAbrefecha(fechar)
            setEstadopergunta(false)
            setJarespondeu(true)
            setColor("#FF3030")
            setTextdeco("line-through")
            setTest(true)
            setContacertos(contacertos + 1)
            setRespostas([...respostas, iconeerro])
        }
    }    
    
    return (
        <Container data-test="flashcard">
            {estadopergunta ? <p data-test="flashcard-text">{virada ? resposta : pergunta}</p> : <p data-test="flashcard-text">Pergunta {num}</p>}
            <ButtonBox>
              {virada && <ButtonRed onClick={() => EscolherResposta(2)} data-test="no-btn">N??o lembrei</ButtonRed>}
              {virada && <ButtonYellow onClick={() => EscolherResposta(1)} data-test="partial-btn">Quase n??o lembrei</ButtonYellow>}
              {virada && <ButtonGreen onClick={() => EscolherResposta(0)} data-test="zap-btn">Zap!</ButtonGreen>}              
            </ButtonBox>
            <ImagePlay src={imagem} onClick={jarespondeu ? null : AbrirPergunta} data-test="play-btn no-icon zap-icon partial-icon" /> 
            <ImageTurn src={jarespondeu ? undefined : imgturn} onClick={estadopergunta ? VirarPergunta : undefined} data-test="turn-btn"/>         
        </Container>    
    )
}
