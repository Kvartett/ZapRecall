import styled from "styled-components"

export default function Footer(props){
    const {deck ,perguntasRespondidas, respondeuPergunta} = props
    const tamanhoDeck = deck.length
    console.log(respondeuPergunta)
    let novaArray = respondeuPergunta.filter((respondeuPergunta) => respondeuPergunta !== "#333333")

    function IonIconConcluido(props){
        const {index} = props
        return (novaArray[props.index] === "#FF3030") ? (
            <ion-icon name="close-circle-sharp"></ion-icon>
        ) : (novaArray[props.index] === "#2FBE34") ? (
            <ion-icon name="checkmark-circle-sharp"></ion-icon>
        ) : (novaArray[props.index] === "#FF922E") ? (
            <ion-icon name="help-circle-sharp"></ion-icon>
        ) : ("")
    }

    return (
        <FooterConcluidos>
            <p>{perguntasRespondidas}/{tamanhoDeck} CONCLUÍDAS</p>
            <Icones >
            {novaArray.map((n, i) => <IonIconConcluido index={i} key={i}/>)}
            </Icones>
        </FooterConcluidos>
    )
}

const FooterConcluidos = styled.div`
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
`

const Icones = styled.div`
    margin-top: 4px;
    display: flex;
    ion-icon {
        font-size: 28px;
    }
`