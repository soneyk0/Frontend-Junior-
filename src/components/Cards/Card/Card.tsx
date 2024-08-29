import React from "react";
import {CardType} from "../../../services/api/api";
import s from './Card.module.css'


const Card = (card:CardType) => {
    return(
        <div className={s.cardItem}>
                <div key={card.id}>
                    <h2>{card.title}</h2>
                    <p>{card.body}</p>
                </div>
        </div>
)
}

export default Card