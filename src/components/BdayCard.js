import React from 'react';

function BdayCard({card}){
    return(
        <div>
            <p>From: {card.name}</p>
            <img alt="Image not found :("  src={card.img64} height="300px" />
            <p>{card.msg}</p>
        </div>
    )
}

export default BdayCard;