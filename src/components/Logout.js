import React from 'react';

const Logout = () => {

const handleClick = () =>{
    localStorage.removeItem('token')
};

    return(
        <>
        <button onClick = {handleClick}>LogOut </button>        
        </>
    );
}

export default Logout;