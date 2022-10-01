import { useState } from "react"
import CardPergunta from "./CardPergunta"

export default function Perguntas(props) {
    const {deck} = props
    const [respondendoPergunta, setRespondendoPergunta] = useState(false)

    return (
        <>
            {deck.map((d, i) => <CardPergunta respondendoPergunta={respondendoPergunta} setRespondendoPergunta={setRespondendoPergunta} id={d.id} question={d.question} answer={d.answer} key={i}/>)}
        </>
    )
}
