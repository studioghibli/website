import React from 'react';
import titleStyles from '../../styles/title.module.css'


export default function Card(props) {
    return (
        <div className={titleStyles.container}>
            <h1 className={titleStyles.title}>{props.title}</h1>
            <hr className={titleStyles.line} style={{ width: props.width }} />
        </div>
    )
}