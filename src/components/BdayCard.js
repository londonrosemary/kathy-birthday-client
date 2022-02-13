import React, {useState} from 'react';

function BdayCard({card}){
    return(
        <div>
            <p>{card.name}</p>
            <img src={card.img64} height="300px" />
            <p>{card.msg}</p>
        </div>
    )
}

export default BdayCard;