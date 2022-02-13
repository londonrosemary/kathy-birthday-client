import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

import BdayCard from './BdayCard';

function Dashboard({cards, setCards, cardArr}){
    
    let navigate = useNavigate();

    //Navigate to new card form
    function navNewMsg(){
        navigate('new')
    }


    return(
        <div>
            <h1>HAPPY 80TH BIRTHDAY KATHY</h1>
            {cardArr}
            <button onClick={navNewMsg}>Add a message</button>
        </div>
    )
}

export default Dashboard;