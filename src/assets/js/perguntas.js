import React from "react"
import imgplay from "../img/seta_play.png"
import imgturn from "../img/seta_virar.png"
import iconecerto from "../img/icone_certo.png"
import iconeerro from "../img/icone_erro.png"
import iconequase from "../img/icone_quase.png"
import styled from "styled-components"
import { abrir, fechar, ButtonGreen, ButtonYellow, ButtonRed, ButtonBox} from "./styled"
  
 
export default function Perguntas({num, pergunta, resposta, contacertos, setContacertos}){
    const [estadopergunta, setEstadopergunta] = React.useState(false)
    const [virada, setVirada] = React.useState(false)
    const [imagem, setImagem] = React.useState(imgplay)
    const [color, setColor] = React.useState("#333333")
    const [textdeco, setTextdeco] = React.useState("none")
    const [abrefecha, setAbrefecha] = React.useState(fechar)    
    const [jarespondeu, setJarespondeu] = React.useState(false)
    const [viraricon, setViraricon] = React.useState(true)
    const [test, setTest] = React.useState(true)

    function AbrirPergunta() {
        console.log(virada)
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
        }
        if(check === 2){
            setImagem(iconeerro)
            setAbrefecha(fechar)
            setEstadopergunta(false)
            setJarespondeu(true)
            setColor("#FF3030")
            setTextdeco("line-through")
            setTest(true)
        }
    }    
    
    return (
        <CriarContainer color={color} abrefecha={abrefecha} textdeco={textdeco} onClick={jarespondeu ? null : AbrirPergunta} >
            {estadopergunta ? <p>{virada ? resposta : pergunta}</p> : <p>Pergunta {num}</p>}
            <ButtonBox>
              {virada && <ButtonRed onClick={() => EscolherResposta(2)}>Não lembrei</ButtonRed>}
              {virada && <ButtonYellow onClick={() => EscolherResposta(1)}>Quase não lembrei</ButtonYellow>}
              {virada && <ButtonGreen onClick={() => EscolherResposta(0)}>Zap!</ButtonGreen>}              
            </ButtonBox>
            <ImagemVirar viraricon={viraricon} jarespondeu={jarespondeu} imgturn={imgturn} onClick={estadopergunta ? VirarPergunta : undefined}/> 
            <ShowImage imagem1={imagem} test={test}></ShowImage>         
        </CriarContainer>    
    )
}
const ImagePlay = styled.img`
    display: ${props => props.test ? 'none' : 'flex'};
    height: 20px;
    width: 20px;`

function ShowImage(props){
    return(
    <ImagePlay src={props.imagem1}/>        
    )
}
const Container = styled.div `
    width: 300px;
    height: 35px;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    color: ${props => props.color};
    background-color: #FFFFFF;
    ${props => props.abrefecha} 
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        text-decoration:${props => props.textdeco};
    }`;
function CriarContainer(props){
    return(
        <Container />
    )

}
const ImageTurn = styled.img`
    display: ${props => props.viraricon ? "none" : "flex"};
    position: absolute;
    bottom: 10px;
    right: 30px;`
function ImagemVirar(props) {
    return(
        <ImageTurn src={props.jarespondeu ? undefined : props.imgturn}/>
    )

}