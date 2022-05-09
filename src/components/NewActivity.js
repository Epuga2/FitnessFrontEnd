import React from "react";
import { useState, useEffect } from "react";
import { createNewActivity } from "../api";

const NewActivity = () => {
    const [activityName, setName] = useState('');
    const [activityDescription, setDescription] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        const activityObject = {
            name: activityName,
            description : activityDescription
        }
        console.log(activityObject)
            await createNewActivity(activityObject)

            setName('')
            setDescription('')
    }
    const updateName = (event) =>{
        setName(event.target.value)
    }

    const updateDescription = (event) => {
        setDescription(event.target.value)
    }

    return(
    <>
        <form onSubmit={handleSubmit}>
            <h3>Add New Activity</h3>
            <input placeholder = "name to be updated" type='text' value={activityName} onChange={updateName} />
            <input placeholder = "name to be updated" type="text" value={activityDescription} onChange={updateDescription} />
            <button>Submit</button>
        </form>

    </>

    )
}

export default NewActivity; 