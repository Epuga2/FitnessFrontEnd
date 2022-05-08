
import React, { useState, useEffect } from 'react';
import Login from './Login'
import Register from './Register'
import Logout from './Logout'
import Activities from './Activities'
import Routines from './Routines'
import PublicRoutines from './PublicRoutines';
import UserMe from './UserMe';
import NewActivity from './NewActivity';


const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUsername] = useState(null);

    useEffect(() => {
        setIsLoggedIn (!!localStorage.getItem("token"))
    }, []);
    console.log(isLoggedIn)

    return(
    <div>
        {isLoggedIn ? <Logout isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/> :
        <Login isLoggedIn = {isLoggedIn } setIsLoggedIn = {setIsLoggedIn}/>
        }
        {isLoggedIn? <UserMe /> :<Register isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>}
      

        
        <PublicRoutines /> 
        <Activities />
        <NewActivity />
        {/* <Routines /> */}
    </div>

    );

};
export default App;