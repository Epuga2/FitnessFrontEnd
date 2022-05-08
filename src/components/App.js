
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Logout from './Logout'
import Activities from './Activities'
import Routines from './Routines'
import PublicRoutines from './PublicRoutines'
import UserMe from './UserMe'


const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUsername] = useState(null);

    useEffect(() => {
        setIsLoggedIn (!!localStorage.getItem("token"))
    }, []);

    return(
        <Router>
    <div>
        <Route path ='/'>        
        {isLoggedIn ? <Logout isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/> :
        <Login isLoggedIn = {isLoggedIn } setIsLoggedIn = {setIsLoggedIn}/>
        }
        {isLoggedIn ?<p></p> :<Link to = '/Register'>Register Here!</Link>}
        </Route >
        <Route path = '/Register'>
        {isLoggedIn? <UserMe /> :<Register isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>}
        </Route>
        
        <Route path = '/Activities'>
            <Activities />            
        </Route>

        <Route path = '/Routines'>
            <Routines />
         </Route>

        <Route path = '/publicroutines'>
            <PublicRoutines />
        </Route>

        

    </div>
    </Router>
    );

};
export default App;