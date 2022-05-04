import React, { useState } from 'react';
import App from './App';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        event.preventDefault();
        console.log("hi")
        setUserName('');
        setPassword('');
    };
    const updateUserName = (event) => {
        setUserName(event.target.value)
    };

    const updatePassword = (event) => {
        setPassword(event.target.value)
    };

    return (
        <div>
            <form onSubmit ={ handleSubmit }>
                <input type = 'text' placeholder = "Username" value = {userName} onChange = {updateUserName} />
                <input type = 'text' placeholder = "Password" value = {password} onChange = {updatePassword} />
                <button> Login </button>
            </form>
        </div>

    );
};

export default Login;