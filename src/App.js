function App() {
    const PERGUNTAS = [{numero:1, pergunta:"O que é batata?", resposta:"Um tuberculo que fica mt bom frito"},
    {numero:2, pergunta:"O que é batata?2", resposta:"Um tuberculo que fica mt bom frito"},
    {numero:3, pergunta:"O que é batata?3", resposta:"Um tuberculo que fica mt bom frito"},
    {numero:4, pergunta:"O que é batata?4", resposta:"Um tuberculo que fica mt bom frito"}]
    const [contacertos, setContacertos] = React.useState(0)    


  return (
    <>
    <div className="logo-container">
        <img src={require('./assets/img/logo.png')}/>
        <h1>ZapRecall</h1>
    </div>
    {PERGUNTAS.map((perg) => <Perguntas key={perg.numero} contacertos={contacertos} setContacertos={setContacertos} num={perg.numero} pergunta={perg.pergunta} resposta={perg.resposta}/>)}
    <Footer contacertos={contacertos} />
    </>
  )
}

export default App;

import Footer from "./assets/js/footer.js";
import Perguntas from "./assets/js/perguntas.js";
import React from "react";

