import React from "react";
import s from './Card.module.css'
import {CardType} from "../../../types/Cards";


const Card = ({card}: { card: CardType }) => {
    return (
        <div className={s.cardItem}>
            <div key={card.id}>
                <h2>{card.title}</h2>
                <p>{card.body}</p>
            </div>
        </div>
    )
}

export default Card