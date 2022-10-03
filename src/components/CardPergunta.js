import { useState } from "react"
import styled from "styled-components"

export default function CardPergunta(props) {
    const {id, question, answer, perguntasRespondidas, setPerguntasRespondidas, respondendoPergunta, respondeuPergunta, setRespondeuPergunta, index} = props
    const [estadoPergunta, setEstadoPergunta] = useState(0)

    return (estadoPergunta === 0 || respondeuPergunta[index] !== "#333333") ? (
        <PerguntaFechada index={index} respondeuPergunta={respondeuPergunta}>
            <p>Pergunta {id}</p>
            <ion-icon name="play-outline" onClick={() => {if(respondendoPergunta === false){ setEstadoPergunta(1)}}}></ion-icon>
        </PerguntaFechada>
    ) : (estadoPergunta === 1) ? (
        <PerguntaAberta>
            <p>{question}</p>
            <ion-icon name="repeat-outline" onClick={() => setEstadoPergunta(2)}></ion-icon>
                <ContainerBotoes>
                    <NaoLembrei onClick={() => {respondeuPergunta[index] = "#FF3030" ; setRespondeuPergunta([...respondeuPergunta]); setPerguntasRespondidas(perguntasRespondidas + 1)}}>Não lembrei</NaoLembrei>
                    <QuaseNaoLembrei onClick={() => {respondeuPergunta[index] = "#FF922E" ; setRespondeuPergunta([...respondeuPergunta]); setPerguntasRespondidas(perguntasRespondidas + 1)}}>Quase não lembrei</QuaseNaoLembrei>
                    <Zap onClick={() => {respondeuPergunta[index] = "#2FBE34" ; setRespondeuPergunta([...respondeuPergunta]); setPerguntasRespondidas(perguntasRespondidas + 1)}}>Zap!</Zap>
                </ContainerBotoes>
        </PerguntaAberta>
    ) : ( 
        <PerguntaAberta>
            <p>{answer}</p>
        </PerguntaAberta>
    )
}

const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${(props) => props.respondeuPergunta[props.index]};
        text-decoration-line: ${(props) => (props.respondeuPergunta[props.index] === "#333333") ? ("none") : ("line-through")};
    }
    ion-icon {
        font-size: 28px;
    }
`
// (props) => {(respondeuPergunta[props.index] === "#333333")}

const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`

const ContainerBotoes = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 20px;
    button {
        width: 90px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        color: #FFFFFF;
        border-radius: 5px;
        border: 1px solid black;
        padding:5px;
        margin: 0 3px;
    }
`

const Zap = styled.button`
    background-color: #2FBE34;
`
const QuaseNaoLembrei = styled.button`
    background-color: #FF922E;
`
const NaoLembrei = styled.button`
    background-color: #FF3030;
`