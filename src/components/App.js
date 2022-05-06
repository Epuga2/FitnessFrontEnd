import React, { useState, useEffect } from 'react';
import Login from './Login'
import Register from './Register'
import Logout from './Logout'
import Activities from './Activities'
import Routines from './Routines'


const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn (!!localStorage.getItem("token"))
    }, []);
    console.log(isLoggedIn)

    return(
    <div>
        {isLoggedIn? <Logout /> :
        <Login />
        }
        {isLoggedIn? <p>You Are Logged In</p> :<Register />}

        
        
        <Activities />
        {/* <Routines /> */}
    </div>
    );

};
export default App;