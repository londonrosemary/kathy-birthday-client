import React from 'react';
import {useNavigate} from 'react-router-dom'

function Dashboard(){
    let navigate = useNavigate();

    function navNewMsg(){
        navigate('new')
    }

    return(
        <div>
            <h1>HAPPY 80TH BIRTHDAY KATHY</h1>
            <button onClick={navNewMsg}>Add a message</button>
        </div>
    )
}

export default Dashboard;