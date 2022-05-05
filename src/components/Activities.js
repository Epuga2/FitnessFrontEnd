import React, { useState, useEffect }  from 'react';
import { getActivities } from '../api'

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

    <div> {activities.map(activity => 
        <div key = {activity.id}>
            <h3 > {activity.name} </h3>
            <p  > {activity.description}</p>
        </div>
        )} 
        
    </div>

)};

export default Activities;