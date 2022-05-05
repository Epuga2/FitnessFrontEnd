import React, { useState } from 'react';
import Login from './Login'
import Register from './Register'
import Logout from './Logout'
import Activities from './Activities'


const App = () => {

    return(
    <div>
        <Login />
        <Register />
        <Logout />
        <Activities />
    </div>
    );

};
export default App;