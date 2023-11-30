/* TODO - add your code to create a functional React component that renders a registration form */

import { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    });

    const [responseMessage, setResponseMessage] = useState('');

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async () => {
        try {
            const response = await fetch('/api/users/register', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),

            });
            
           const result = await response.json();
           const [token, setToken] = useState(null)
            if (response.ok) {
                //Sucessful 
                console.log(result);
                setResponseMessage(result.token);
            } else {
                //Register Failed 
                console.error(result);
                setResponseMessage(result.message);
            }
        }catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Register Here</h2>
            <form>
                <label>
                    First Name:
                    <input
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                Password:
                <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                />
                </label>
                <br />
                <button type="button" onClick={handleRegister}>
                    Register
                 </button>

            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default Register;