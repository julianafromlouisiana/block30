/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create 
an account.  */

import React, { useContext, useEffect, useState } from 'react';
import Authenticate from './Authenticate';


const Account = () => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const { token } = useContext(Authenticate);//Get token

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('/api/user/me', {
                    headers: {
                        'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }

                const data = await response.json();
                setUserData(data);
            }catch (error) {
                console.error(error.message);
            }

        };

        if (token) {
            fetchUserData();
        } else {
            setError('No token available');
        }
    },[token]);


    if (error) {
        return <div>Error: {error}</div>
     }

     if(!userData) {
        return <div>Loading...</div>;
     }

     return (
        <div>
            <h2>Your Account</h2>
            <p>ID: {userData.id}</p>
            <p>Name: {userData.firstname} {userData.lastname}</p>
            <p>Email: {userData.email}</p>
            <h3>Checked Our Books</h3>
            <ul>
                {userData.books.map((book) => (
                    <li key={book.id}>{book.title}</li>

                ))}
            </ul>
        </div>
     );
};

export default Account;