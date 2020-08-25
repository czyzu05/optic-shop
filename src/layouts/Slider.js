import React, { useState, useEffect } from 'react';

import img1 from '../IMG/sliderImg1.jpg'
import img2 from '../IMG/sliderImg2.jpg'
import img3 from '../IMG/sliderImg3.jpg'

import '../styles/Slider.css'


const slideList = [
    { img: img1, title: "Gucci", text: 'its your look throught your instagram lens' },
    { img: img2, title: "Guess", text: 'free 30 days return' },
    { img: img3, title: "Dolce & Gabbana", text: 'Reccomended for you' },
]

const dotsList = [
    { id: 'one', className: 'active' },
    { id: 'two', className: '' },
    { id: 'three', className: '' },
]

let active = 0

const Slider = () => {

    const [title, setTitle] = useState(slideList[0].title)
    const [image, setImage] = useState(slideList[0].img)
    const [text, setText] = useState(slideList[0].text)

    const changeDot = () => {
        dotsList.forEach(dot => dot.className = '')
        dotsList[active].className = 'active'
    }

    useEffect(() => {
        const intervalIndex = setInterval(() => {
            active++

            if (active === slideList.length) {
                active = 0
            }
            changeDot()

            setTitle(slideList[active].title)
            setImage(slideList[active].img)
            setText(slideList[active].text)



        }, 3000)

        return () => clearInterval(intervalIndex)
    }, [active])

    const dots = dotsList.map(dot => (
        <span key={dot.id} id={dot.id} className={dot.className}></span>
    ))

    return (
        <div className='slider'>
            <div className="left-side">
                <i className="fas fa-arrow-left"></i>
            </div>
            <div className="center">
                <p className="title">{title}</p>
                <img src={image} alt="image sunglasses" />
                <p className="text">{text}</p>
                <div className="dots">
                    {dots}
                </div>
            </div>
            <div className='right-side'>
                <i className="fas fa-arrow-right"></i>
            </div>
        </div>
    )
}

export default Slider