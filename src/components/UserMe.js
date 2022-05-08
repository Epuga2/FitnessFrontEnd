import React from "react";
import { useState, useEffect } from "react";

import { getCurrentUser } from "../api";

const UserMe = () => {
    const [currUser, setCurrUser] = useState({id:'', username:''});

    useEffect(() =>{
        const fetchData = async () => {
          const currUser = await getCurrentUser()  
            setCurrUser(currUser);
        }
            fetchData();
    }, []);
    return(

    <div> 
        <h2>Welcome </h2>
      {currUser.id}
      {currUser.username}
    </div>
    )
}

export default UserMe; 