import React from 'react'
import './MyCard.css';

const MyCard = (props) => {
    return (
        <div className='mycard'>myCard {props.cardno}</div>
    )
}

export default MyCard