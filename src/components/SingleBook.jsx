/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { fetchSingleBook } from "../../API"; 

const SingleBook = () => {
    const { bookId } = useParams();
    const [bookData, setBookData] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchSingleBook(bookId);
                setBookData(result);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchData();
    }, [bookId]);

    if (error) {
        return <div>Error: {error}</div>
    }

    if (!bookData) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h2>{bookData.title}</h2>
            <p>Author: {bookData.author}</p>
            <p>Genre: {bookData.genre}</p>
        </div>
    );

};

export default SingleBook;