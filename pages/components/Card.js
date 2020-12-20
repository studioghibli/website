import React from 'react';
import cardStyles from '../../styles/card.module.css'


export default function Card(props) {
    return (
        <div className={cardStyles.card} style={props.style}>
            <h1 className={cardStyles.title}>{props.title}</h1>
            <p className={cardStyles.text}>{props.text}</p>
            <p className={cardStyles.text}>{props.children}</p>
        </div>
    )
}