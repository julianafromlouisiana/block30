import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import bookLogo from './assets/books.png';
import Account from './components/Account';
import Books from './components/Books';
import Login from './components/Login';
import Navigations from './components/Navigations';
import Register from './components/Register';
import SingleBook from './components/SingleBook';
import { Link } from 'react-router-dom';
import './index.css';




function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <h1><img id='logo-image' src={bookLogo}/>Library App</h1>
      <BrowserRouter>
    <Navigations />
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account" element={<Account />} />
      <Route path="/books" element={<Books />} />
      <Route path="/books/:bookid" element={<SingleBook />} />



      {/* <p>Complete the React components needed to allow users to browse a library catalog, check out books, review their account, and return books that they've finished reading.</p>

      <p>You may need to use the `token` in this top-level component in other components that need to know if a user has logged in or not.</p>

      <p>Don't forget to set up React Router to navigate between the different views of your single page application!</p> */}
      </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
