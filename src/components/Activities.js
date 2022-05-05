import React, { useState, useEffect }  from 'react';
import { getActivities } from '../api'

const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(async () =>{
        const activities = await getActivities();
        setActivities(activities)
    }, []);
    return(

    <div> {activities.map(activity => 
        <div>
            <h2> {activity.id}</h2>
            <h3> {activity.name} </h3>
            <p> {activity.description}</p>
        </div>
        )} 
        
    </div>

)};

export default Activities;