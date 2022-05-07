import React from 'react';

const Logout = (props) => {
    const { isLoggedIn, setIsLoggedIn } = props;

    const handleClick = () =>{
        localStorage.removeItem('token')
        setIsLoggedIn (!!localStorage.getItem("token"))
};

        return(
        <>
            <button onClick = {handleClick}>LogOut </button>        
        </>
    );
}

export default Logout;