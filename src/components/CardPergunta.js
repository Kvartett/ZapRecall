import { useState } from "react"
import styled from "styled-components"

export default function CardPergunta(props) {
    const {id, question, answer} = props
    const [estadoPergunta, setEstadoPergunta] = useState(0)

    return (estadoPergunta === 0) ? (
        <PerguntaFechada>
            <p>Pergunta {id}</p>
            <ion-icon name="play-outline" onClick={() => setEstadoPergunta(1)}></ion-icon>
        </PerguntaFechada>
    ) : (estadoPergunta === 1) ? (
        <PerguntaAberta>
            <p>{question}</p>
            <ion-icon name="repeat-outline" onClick={() => setEstadoPergunta(2)}></ion-icon>
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
        color: #333333;
    }
    ion-icon {
        font-size: 28px;
    }
`

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