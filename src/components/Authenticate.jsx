import React, { useState } from 'react';

const AuthenticateContext = React.createContext();

const AuthenticateProvider = ({ children }) => {
    const [token, setToken] = useState(null)


const updateReservation = async () => {
    try {
        const response = await fetch('/api/reservations', {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ token }),
        });

        if (response.ok) {
            console.log('Successfully Updated Reservation');
        } else {
            console.error('Failed to update');
        }
    } catch (error) {
        console.error(error.message);
    }
};

const contextValue = { token, setToken, updateReservation };

return (
    <AuthenticateContext.Provider value={contextValue}>
        {children}
    </AuthenticateContext.Provider>
);
};

export const useAuthenticate = () => React.useContext(AuthenticateContext);
export default AuthenticateProvider;