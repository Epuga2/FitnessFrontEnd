import React, { useState } from 'react';
import { registerUser } from '../api';

const Register = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            username: userName,
            password: password
        };
        console.log(user)
        await registerUser(user);
        //console.log(localStorage.getItem(token));
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
                <input type = 'text' placeholder = "Register Username" value = {userName} onChange = {updateUserName} />
                <input type = 'text' placeholder = "Register Password" value = {password} onChange = {updatePassword} />
                <button> Login </button>
            </form>
        </div>

    );
};

export default Register;