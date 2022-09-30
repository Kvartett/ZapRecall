import { useState } from "react"
import Deck from "./Deck"
import CardPergunta from "./CardPergunta"

export default function Perguntas() {
    const [respondendoPergunta, setRespondendoPergunta] = useState(false)

    return (
        <>
            {Deck.map((d, i) => <CardPergunta respondendoPergunta={respondendoPergunta} setRespondendoPergunta={setRespondendoPergunta} id={d.id} question={d.question} answer={d.answer} key={i}/>)}
        </>
    )
};
