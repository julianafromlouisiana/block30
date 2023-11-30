/* TODO - add your code to create a functional React component that displays all of 
the available books in the library's catalog. Fetch the book data from the provided API. 
Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */


import React, { useEffect, useState } from "react";
import { fetchAllBooks } from "../assets";

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchAllBooks();
                setBooks(result);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>All Books</h2>
            {error && <p>Error: {error}</p>}
            <ul>
                {books.map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
    };

    export default BookList;

