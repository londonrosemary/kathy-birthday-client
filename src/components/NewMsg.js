import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'

function NewMsg({cards, setCards}){
    //States
    const [name, setName] = useState("")
    const [img64, setImg64] = useState("")
    const [msg, setMsg] = useState("")

    //Variables
    let navigate = useNavigate();

    //Navigate to Dashboard
    function handleGoBack(){
        navigate(-1)
    };

    //Set state of Img if uploaded correctly after conversion
    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setImg64(base64);
    };

    //Convert Img to base64
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

    //Post new card to the database
    function handleSubmit(e){
        e.preventDefault();

        fetch('https://kathys-birthday.herokuapp.com/bday_cards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                img64: img64,
                msg: msg
            })
            })
            .then(resp => resp.json())
            .then(newCard => {
                setCards([...cards, newCard])
            })
        handleGoBack()
    }

    return(
        <div>
            <h2>Send Kathy your own birthday message!</h2>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input id="nameInput" type="text" name="name" onChange={(e) => setName(e.target.value)} required></input>
                <label>Message</label>
                <input id="msgInput" type="text" name="message" onChange={(e) => setMsg(e.target.value)} ></input>
                <label>Image</label>
                <input type="file" onChange={(e) => uploadImage(e)}></input>
                <button id="imgInput" type="submit">submit</button>
            </form>
            <h3>Birthday Card Preview:</h3>
            <p>{name}</p>
            <img alt="No Image Selected" src={img64} height="300 px"/>
            <p>{msg}</p>
            <button onClick={handleGoBack}>Back</button>
        </div>
    )
}

export default NewMsg;