import React from "react"

export default function Perguntas({num, pergunta, resposta, contacertos, setContacertos}){
    const [abrefecha, setAbrefecha] = React.useState("pergunta-fechada")
    const [estadopergunta, setEstadopergunta] = React.useState(false)
    const [virada, setVirada] = React.useState(false)
    const [imagem, setImagem] = React.useState(require("../img/seta_play.png"))
    const [respondida, setRespondida] = React.useState("")
    
    console.log(num, pergunta, resposta, respondida)

    function AbrirPergunta() {
        if(respondida === ''){
        if(abrefecha === "pergunta-fechada"){
            setAbrefecha("pergunta-aberta");
            setEstadopergunta(true)
        }
        else{
            setAbrefecha("pergunta-fechada")
            setEstadopergunta(false)
        }
    }
    }
    function VirarPergunta() {
        if(virada === false){
        setVirada(true)
        }
        else{
        setAbrefecha("pergunta-fechada")
        setEstadopergunta(false)
        setVirada(false)
        }
    }
    function EscolherResposta(check) {
        setAbrefecha("pergunta-fechada")
        setEstadopergunta(false)
        setVirada(false)
        if(check === 0){
            setImagem(require("../img/icone_certo.png"))
            setContacertos(contacertos + 1)
            setRespondida("respverde")
        }
        if(check === 1){
            setImagem(require("../img/icone_quase.png"))
            setContacertos(contacertos + 1)
            setRespondida("respamarelo")
        }
        if(check === 2){
            setImagem(require("../img/icone_erro.png"))
            setRespondida("respvermelho")
        }
    }
    return (
        <div className={abrefecha} onClick={estadopergunta ? null : AbrirPergunta}>
            {estadopergunta ? <p>{virada ? resposta : pergunta}</p> : <p className={respondida}>Pergunta {num}</p>}
            <div className="pergunta-botoes">
              {virada && <button className="botao vermelho" onClick={() => EscolherResposta(2)}>Não lembrei</button>}
              {virada && <button className="botao amarelo" onClick={() => EscolherResposta(1)}>Quase não lembrei</button>}
              {virada && <button className="botao verde" onClick={() => EscolherResposta(0)}>Zap!</button>}
            </div>
            <img src={estadopergunta ? require('../img/seta_virar.png') : imagem} className={virada ? "none" : undefined} onClick={estadopergunta ? VirarPergunta : undefined}/>
            
        </div>    
    )
}

//{require('../img/seta_play.png')}

//estadopergunta ? aberta : fechada

// pergunta={perg.pergunta} resposta

//const [virada, setVirada] = React.useState(
    //<div className={abrefecha} onClick={estadopergunta ? null : AbrirPergunta}>
    //    <p>Pergunta {num}</p>
    //    <img src={estadopergunta ? require('../img/seta_virar.png') : require('../img/seta_play.png')} onClick={estadopergunta ? VirarPergunta : null}/>
    //</div>    )

    //<p>{estadopergunta ? pergunta : `Pergunta ${num}`}</p>

    //{estadopergunta ? <p>{pergunta}</p> : <p>Pergunta {num}</p>}