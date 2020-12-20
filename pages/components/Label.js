import React from 'react';
import labelStyles from '../../styles/label.module.css'


export default function Label(props) {
    return (
        <div className={labelStyles.card}>
            <h1 className={labelStyles.year}>{props.year}</h1>
            <div className={labelStyles.skills}>{props.children}</div>
        </div>
    )
}