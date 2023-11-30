/* TODO - add your code to create a functional React component that renders a login form */

import React, { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);


    const handleLogin = async () => {
        try {
            const response = await fetch('api/users/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            if(!response.ok) {
                throw new Error ('Login failed');
            }
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Error logging in:', error.message);
            setError('Invalid email or password');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'green' }}>{error}</p>}
            <form>
                <label>
                    Email:
                    <input type="text" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>
                Password:
                    <input type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginForm;