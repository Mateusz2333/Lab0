import React from 'react';

const RatingBar = ({ rate }) => {
    const stars = Array.from({ length: 10 }, (_, index) => index < rate ? '★' : '☆');
    
    return (
        <div style={{ fontSize: '1.5em', color: 'gold' }}>
            {stars.map((star, index) => (
                <span key={index}>{star}</span>
            ))}
        </div>
    );
};

export default RatingBar;
