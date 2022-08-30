import React from 'react';
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

const Login = () => {
    const [user, setUser] = useState('mario')
    const [email, setEmail] = useState('mario123@gmail.com')
    const { login } = useLogin()


    const handleSubmit = evt => {
        evt.preventDefault()
        login(email)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;
