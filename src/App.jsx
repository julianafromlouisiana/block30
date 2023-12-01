import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import bookLogo from './assets/books.png';
import Account from './components/Account';
import Books from './components/Books';
import Login from './components/Login';
import Navigations from './components/Navigations';
import Register from './components/Register';
import SingleBook from './components/SingleBook';
import AuthenticateProvider from './components/Authenticate';
import { Route as RouterRoute } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './index.css';




function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <h1><img id='logo-image' src={bookLogo}/>Library App</h1>
      <AuthenticateProvider>
      <BrowserRouter>
    <Navigations />
    <Routes>
      <RouterRoute path="/register" element={<Register />} />
      <RouterRoute path="/login" element={<Login />} />
      <RouterRoute path="/account" element={<Account />} />
      <RouterRoute path="/books" element={<Books />} />
      <RouterRoute path="/books/:bookId" element={<SingleBook />} />



      {/* <p>Complete the React components needed to allow users to browse a library catalog, check out books, review their account, and return books that they've finished reading.</p>

      <p>You may need to use the `token` in this top-level component in other components that need to know if a user has logged in or not.</p>

      <p>Don't forget to set up React Router to navigate between the different views of your single page application!</p> */}
      </Routes>
      </BrowserRouter>
      </AuthenticateProvider>
    </>

  );
}

export default App;
