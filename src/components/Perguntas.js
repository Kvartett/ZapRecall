import { useState } from "react"
import Deck from "./Deck"
import CardPergunta from "./CardPergunta"

export default function Perguntas() {
    return (
        <>
            {Deck.map((d, i) => <CardPergunta id={d.id} question={d.question} answer={d.answer} key={i}/>)}
        </>
    )
};
