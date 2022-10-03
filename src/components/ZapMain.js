import styled from "styled-components";
import Logo from "./Logo"
import Perguntas from "./Perguntas";
import Footer from "./Footer"
import Deck from "./Deck"
import { useState } from "react";


export default function ZapMain() {
    const [perguntasRespondidas, setPerguntasRespondidas] = useState(0)
    const [respondeuPergunta, setRespondeuPergunta] = useState(Deck.map(d => "cinza"))
    // [ cinza, cinza, cinza, cinza ]
    return (
    <ScreenContainer>
        <Logo />
        <Perguntas deck={Deck} setRespondeuPergunta={setRespondeuPergunta} respondeuPergunta={respondeuPergunta}/>
        <Footer deck={Deck} perguntasRespondidas={perguntasRespondidas} respondeuPergunta={respondeuPergunta} setRespondeuPergunta={setRespondeuPergunta}/>
    </ScreenContainer>
  );
}



const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`
//const verde = "#2FBE34";
//const laranja = "#FF922E";
//const vermelho = "#FF3030";