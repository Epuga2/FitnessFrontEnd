import React, { useState } from 'react';
import { loginUser } from '../api'

const Login = (props) => {
    const { isLoggedIn, setIsLoggedIn } = props;
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            username: userName,
            password: password
        };
        await loginUser(user);
        console.log(localStorage.getItem('token'));
        setUserName('');
        setPassword('');
        setIsLoggedIn (!!localStorage.getItem("token"))
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