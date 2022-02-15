import React from 'react';
import {useNavigate} from 'react-router-dom'

function Dashboard({cardArr}){
    
    let navigate = useNavigate();

    //Navigate to new card form
    function navNewMsg(){
        navigate('new')
    }

    return(
        <div>
            <h1 id="banner" >HAPPY 80TH BIRTHDAY KATHY</h1>
            {cardArr}
            <button onClick={navNewMsg}>Create a Card</button>
        </div>
    )
}

export default Dashboard;