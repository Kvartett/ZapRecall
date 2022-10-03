import styled from "styled-components";
import Logo from "./Logo"
import Perguntas from "./Perguntas";
import Footer from "./Footer"
import Deck from "./Deck"
import { useState } from "react";


export default function ZapMain() {
    const [perguntasRespondidas, setPerguntasRespondidas] = useState(0)
    const [respondeuPergunta, setRespondeuPergunta] = useState(Deck.map(d => "#333333"))
    return (
    <ScreenContainer>
        <Logo />
        <Perguntas deck={Deck} setRespondeuPergunta={setRespondeuPergunta} perguntasRespondidas={perguntasRespondidas} setPerguntasRespondidas={setPerguntasRespondidas} respondeuPergunta={respondeuPergunta}/>
        <Footer deck={Deck} perguntasRespondidas={perguntasRespondidas} respondeuPergunta={respondeuPergunta}/>
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
    padding-bottom: 100px;
`