import { useState } from 'react';


export default function Authenticate({ token }) {
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState(null);
    
    const handleClick = async () => {
        try {
            const response = await fetch('/api/reserevations', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ token: token })
        });


            if (response.ok) {
                setSuccessMessage("Successfully updated reservation");
            } else {
                setError("Failed to update reservation");
            }
        } catch (error) {
            setError("An error has occured while updating");
        }
    };

    return (
        <div>
            {error && <p>Error: {error}</p>}
            {successMessage && <p>{successMessage}</p>}

            <buton onClick={handleClick}>Update Reservation</buton>
        </div>
    );


}