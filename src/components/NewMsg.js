import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'

function NewMsg(){
    const [name, setName] = useState("")
    const [img64, setImg64] = useState("")
    const [msg, setMsg] = useState("")
    
    let navigate = useNavigate();

    function handleGoBack(){
        navigate(-1)
    }

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setImg64(base64);
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
    
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
    
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    function handleSubmit(e){
        e.preventDefault();
        //POST FETCH HERE

        console.log('submitted!')
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>NAME</label>
                <input type="text" name="name" onChange={(e) => setName(e.target.value)} required></input>
                <label>MESSAGE</label>
                <input type="text" name="message" onChange={(e) => setMsg(e.target.value)} ></input>
                <label>IMAGE</label>
                <input type="file" onChange={(e) => uploadImage(e)}></input>
                <button type="submit">submit</button>
            </form>
            <h3>Birthday Card Preview:</h3>
            <p>{name}</p>
            <img src={img64} />
            <p>{msg}</p>
            <button onClick={handleGoBack}>cancel</button>
        </div>
    )
}

export default NewMsg;