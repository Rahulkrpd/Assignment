import React, { useContext } from 'react';
import Card from './Card';
import { StoreContext } from "../../Context/StoreContext";
import './Display.css';

const Display = () => {
    const { cardData } = useContext(StoreContext);

    return (
        <div className="card-grid">
            {cardData.map((card, index) => (
                <Card key={index} title={card.title} description={card.description} />
            ))}
        </div>
    );
};

export default Display;
