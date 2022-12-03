function App() {
    const PERGUNTAS = [
        { numero:1, pergunta: "O que é JSX?", resposta: "Uma extensão da linguagem JavaScript" },
        { numero:2, pergunta: "O React é __", resposta: "Uma biblioteca JavaScript para construção de interfaces" },
        { numero:3, pergunta: "Componentes devem iniciar com __", resposta: "Letra maiúscula" },
        { numero:4, pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões" },
        { numero:5, pergunta: "O ReactDOM nos ajuda __", resposta: "Interagindo com a DOM para colocar componentes React na mesma" },
        { numero:6, pergunta: "Usamos o npm para __", resposta: "Gerenciar os pacotes necessários e suas dependências" },
        { numero:7, pergunta: "Usamos props para __", resposta: "Passar diferentes informações para componentes" },
        { numero:8, pergunta: "Usamos estado (state) para __", resposta: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ]
    const [contacertos, setContacertos] = React.useState(0)    


  return (
    <>
    <div className="logo-container">
        <img src={logo}/>
        <h1>ZapRecall</h1>
    </div>
    {PERGUNTAS.map((perg) => <Perguntas key={perg.numero} contacertos={contacertos} setContacertos={setContacertos} num={perg.numero} pergunta={perg.pergunta} resposta={perg.resposta}/>)}
    <Footer contacertos={contacertos} PERGUNTAS={PERGUNTAS} />
    </>
  )
}

export default App

import Footer from "./assets/js/footer.js"
import Perguntas from "./assets/js/perguntas.js"
import React from "react"
import logo from './assets/img/logo.png'



//[{numero:1, pergunta:"O que é batata?", resposta:"Um tuberculo que fica mt bom frito"},
//    {numero:2, pergunta:"O que é batata?2", resposta:"Um tuberculo que fica mt bom frito"},
//    {numero:3, pergunta:"O que é batata?3", resposta:"Um tuberculo que fica mt bom frito"},
//    {numero:4, pergunta:"O que é batata?4", resposta:"Um tuberculo que fica mt bom frito"},
//    {numero:5, pergunta:"O que é batata?4", resposta:"Um tuberculo que fica mt bom frito"}]