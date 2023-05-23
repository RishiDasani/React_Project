// import './App.css';
// import React from 'react'
// import Navbar from './components/Navbar';
// import Search from './components/Search';
// import Footer from './components/Footer';
// import Register from './components/Register';
// import Login from './components/Login';
// import Home from './components/Home';
// import {Route,Routes } from "react-router-dom";
// import Products from './components/Products';
// import Contact from './components/Contact';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
// import Contact from './components/Contact';
import Login from './components/LoginForm';
import Register from './components/RegistrationForm';
import Footer from './components/Footer';
import Search from './components/Search';
import './App.css';

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Search/>
//       <Routes>
//         <Route exact path="/" element={Home} />
//         <Route exact path="/products" element={Products} />
//         <Route exact path="/login" element={Login} />
//         <Route exact path="/register" element={Register} />
//         <Route exact path=" /contact" element={Contact} />
//       </Routes>
//       <Register/>
//       <Login/> 
//       <Footer/>
//     </div>
//   )
// }
// export default App;
function App() {
  return (
      <div>
        <Navbar />
        
        <Search/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/login" element={<Login />} />t
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;


// ---------------------------------------------------------------------------------

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginForm from './Components/LoginForm.js'; 
// import RegistrationForm from './Components/RegistrationForm.js';
// import logo from './logo/tatvasoft_logo.jpg';


// function App() {
//   return (
//     <><div>
//         <img src={logo} alt="Logo" style={{ position: 'absolute', top: 10, left: 20, width: '100px', height: '100px' }} />
//     </div><><div>
//       <LoginForm />
//     </div><Router>
//           <Routes>
//             <Route path="/login" component={LoginForm} />
//             <Route path="/register" component={RegistrationForm} />
//           </Routes>
//         </Router></></>
//   );
// }

// export default App;
