// Card.jsx
import React from 'react';
import './Card.css'; // Make sure to create this CSS file or adjust as needed

const Card = ({ title, description }) => {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <hr className="card-divider" />
            <p className="card-description">{description}</p>
        </div>
    );
};

export default Card;
