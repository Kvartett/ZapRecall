import { useState } from "react"
import CardPergunta from "./CardPergunta"

export default function Perguntas(props) {
    const {deck, respondeuPergunta, setRespondeuPergunta} = props
    const [respondendoPergunta, setRespondendoPergunta] = useState(false)
    

    return (
        <>
            {deck.map((d, i) => <CardPergunta respondeuPergunta={respondeuPergunta} setRespondeuPergunta={setRespondeuPergunta} respondendoPergunta={respondendoPergunta} setRespondendoPergunta={setRespondendoPergunta} id={d.id} question={d.question} answer={d.answer} index={i} key={i}/>)}
        </>
    )
}
