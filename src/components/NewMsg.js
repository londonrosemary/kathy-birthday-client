import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'

function NewMsg(){
    const [formData, setFormData] = useState(
        {name: '',
        message: '',
        image: ''
    }
    )
    let navigate = useNavigate();

    function handleGoBack(){
        navigate(-1)
    }

    function handleSubmit(e){
        e.preventDefault();
        //POST FETCH HERE

        console.log('submitted!')
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>NAME</label>
                <input type="text" name="name" required></input>
                <label>MESSAGE</label>
                <input type="text" name="message"></input>
                <label>IMAGE</label>
                <input type="file" ></input>
                <button type="submit">submit</button>
            </form>
            <button onClick={handleGoBack}>cancel</button>
        </div>
    )
}

export default NewMsg;