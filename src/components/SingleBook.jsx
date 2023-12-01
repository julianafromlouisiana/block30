/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { fetchSingleBook } from "../../API"; 

const SingleBook = () => {
    const { bookId } = useParams();
    const [bookData, setBookData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] =useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchSingleBook(bookId);
                setBookData(result);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchData();
    }, [bookId]);
    
    const fakeLogin = () => {
        setIsLoggedIn(true);
    };

    const handleCheckout = () => {
        if (isLoggedIn) {
            console.log("Checkout successful!");
        } else {
            console.log("User not logged in. Redirecting...");
            fakeLogin();
        }
    };

    if (error) {
        return <div>Error: {error}</div>
    }

    if (bookData === null) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h2>{bookData.title}</h2>
            <p>Author: {bookData.author}</p>
            <p>Genre: {bookData.genre}</p>

            <button onClick={handleCheckout}>Checkout</button>
            
        </div>
    );

};

export default SingleBook;