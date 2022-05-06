import React, { useState } from 'react';
import Login from './Login'
import Register from './Register'
import Logout from './Logout'
import Activities from './Activities'
import Routines from './Routines'


const App = () => {

    return(
    <div>
        <Login />
        <Register />
        <Logout />
        <Activities />
        {/* <Routines /> */}
    </div>
    );

};
export default App;