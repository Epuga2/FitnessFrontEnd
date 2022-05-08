import React from "react";
import { useState, useEffect } from "react";
import { createNewActivity } from "../api";

const NewActivity = () => {
    const {name, setName} = useState('');
    const {description, setDescription} = useState('');

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const name = await createNewActivity(localStorage.getItem('token'));
    //         setName(name)
    //     }
    //     fetchData();
    // }, []);

    const handleSubmit = async (ev) => {
        ev.preventDfault();
            setName(''),
            setDescription('')
    }

    
    return(
    <>
        <form onSubmit={handleSubmit}>
            <h3>Add New Activity</h3>
            <input type='text' value={name} onChange={(ev) => setName(ev.target.value)} ></input>
            <input type="text" value={description} onChange={(ev) => setDescription(ev.target.value)} ></input>
            <button>Submit</button>
        </form>

    </>
        
    )
}

export default NewActivity;