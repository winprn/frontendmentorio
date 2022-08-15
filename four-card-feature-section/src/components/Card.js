import React from 'react';
import '../styles/card.scss'

function Card({ title, content, src, classes }) {
    classes += ' card';
	return (
        <div className={classes}>
            <h2 className='card-title'>{title}</h2>
            <p className='card-content'>{content}</p>
            <div className='card-img'>
                <img src={src} alt='An icon' />
            </div>
        </div>
    )
}

export default Card;
