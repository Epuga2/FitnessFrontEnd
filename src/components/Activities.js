import React, { useState, useEffect }  from 'react';
import { getActivities } from '../api'
import UpdateActivities from './UpdateActivities'

const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() =>{
        const fetchData = async () => {
          const activities = await getActivities()  
            setActivities(activities)
        }
            fetchData();
    }, []);
    return(

    <div> 
        {activities.map(activity => 
        <div key = {activity.id}>
            <h3> {activity.name} </h3>
            <p> {activity.description} </p>
            {<UpdateActivities id = {activity.id} name = {activity.name} description = {activity.description}/>}
        </div>
        )} 
        
    </div>

)};

export default Activities;