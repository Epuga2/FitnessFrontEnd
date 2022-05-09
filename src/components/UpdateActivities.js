import React, {useState} from 'react';
import { updateActivity } from '../api';

const UpdateActivities = (props) => {
    const {id, name, description} = props;
    const [activityName, setActivityName] = useState('');
    const [activityDescription, setActivityDescription] = useState('');
    const [buttonOn, setButtonOn] =  useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();  
        console.log(id, name, description)
        const activityObject = {
            name:activityName,
            description: activityDescription
        };
        console.log(id, activityObject)
        await updateActivity(id, activityObject)
        setActivityName('');
        setActivityDescription('');
    }
    const updateActivityName = (event) =>{
        setActivityName(event.target.value)
    }

    const updateActivityDescription = (event) => {
        setActivityDescription(event.target.value)
    }
    return(
        <div>
            {buttonOn}
            <form onSubmit = {handleSubmit}>
                <input type = 'text' placeholder = "Name of Activity"  value = {activityName} onChange = {updateActivityName}/> 
                <input placeholder = "Description of activity" value = {activityDescription} onChange = {updateActivityDescription} />
                <button>Update Activity</button>
            </form>
        </div>

)}

export default UpdateActivities;