import React from 'react'
import MyCard from './MyCard.js'
import './ImageCarosel.css';

const ImageCarosel = () => {

    let box = document.querySelector('.product-container')

    const btnPressPrev = () => {
        let width = box.clientWidth; //comment
        box.scrollLeft = box.scrollLeft - width;
    }

    const btnPressNext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
    }

    return (
        <div className="product-carousel">
            <button className='prev-btn' onClick={btnPressPrev}><p>&lt;</p></button>
            <button className='next-btn' onClick={btnPressNext}><p>&gt;</p></button>

            <div className="product-container">
                <MyCard cardno='1' />
                <MyCard cardno='2' />
                <MyCard cardno='3' />
                <MyCard cardno='4' />
                <MyCard cardno='5' />
                <MyCard cardno='6' />
                <MyCard cardno='7' />
                <MyCard cardno='8' />
                <MyCard cardno='9' />
                <MyCard cardno='10' />
                <MyCard cardno='11' />
                <MyCard cardno='12' />
                <MyCard cardno='13' />
                <MyCard cardno='14' />
            </div>
        </div>
    )
}

export default ImageCarosel