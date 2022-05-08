
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Logout from './Logout'
import Activities from './Activities'
import Routines from './Routines'
import PublicRoutines from './PublicRoutines';
import userMe from './UserMe';


const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn (!!localStorage.getItem("token"))
    }, []);
    console.log(isLoggedIn)

    return(
        <Router>
            <Switch>
    <div>

        {isLoggedIn ? <Logout isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/> :
        <Login isLoggedIn = {isLoggedIn } setIsLoggedIn = {setIsLoggedIn}/>
        }

        {isLoggedIn ?<p></p> :<Link to = '/Register'>Register Here!</Link>}

        <Route path = '/Register'>
        {isLoggedIn? <p>You Are Logged In</p> :<Register isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>}
        </Route>
        
        <PublicRoutines /> 
        <Route path = '/Activities'>
            <Activities />            
        </Route>

        <Route path = '/Routines'>
            <Routines />
         </Route>
        

    </div>
    </Switch>
    </Router>
    );

};
export default App;