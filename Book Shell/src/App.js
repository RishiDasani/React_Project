// import React from 'react';
import React, { useState, useEffect,useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { useNavigate } from 'react-router-dom';
// import Products from './components/Products';
import Login from './components/LoginForm';
import Register from './components/Register';
import Footer from './components/Footer';
import Search from './components/Search';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Main from './components/Main';
// import Booklist from './Booklist';
// import './components/style.css';
// import Card from './components/Card'
import Books from "./components/Books"
import BooksDisplay from "./components/BooksDisplay"
// import EditBooks from "./components/EditBooks"
import Contextpage from './ContextPage';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// import { connect } from './components/Registration_db';

function App() {
  // const {user,loading} = useContext(Contextpage)
  const navigate = useNavigate();

  // useEffect(() => {
  //   connect(); // Connect to MongoDB
  // }, []);

  return (
      <>
      {/* <div className={`${loading ? 'visible' : 'invisible'} flex justify-center items-center h-screen fixed w-full z-10`}><span className="loader m-10"></span></div> */}
      <div className='App'>
      <Navbar />
      {/* <ToastContainer /> */}
      <Search />
      {/* <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      /> */}
      <div>
      {/* <h1>Google Books Search</h1> */}
      {/* <Books /> */}
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/main" component={<Main />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route exact path="/" element={user ? <Home /> : <navigate to="/LoginForm"/>} />
        <Route path="login" element={!user ? <Login /> : <navigate to="/"/>} />
        <Route path="register" element={!user ? <Register /> : <navigate to="/"/>} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="booksdisplay" element={<BooksDisplay />} />
        <Route path="books" element={<Books />} />
        {/* <Route path="editbook" element={<EditBooks/>}/> */}
      </Routes>
      <Footer />
    </div>
    </>
  );
}

export default App;