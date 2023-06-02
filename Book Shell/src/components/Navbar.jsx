    import { useContext } from "react";
    import { BsFillCartFill } from "react-icons/bs";
    import { useNavigate } from "react-router-dom";
    import Tatvasoft_logo from "./tatvasoft_logo.jpg";

    import { LoginContext } from "../contexts";

    export default function Navbar() {
        const { isLogin, setIslogin } = useContext(LoginContext);
        const navigate = useNavigate();

        const handleHome = () => {
            navigate("/");
        }

        const handleLogin = () => {
            navigate("/login");
        }

        const handleRegister = () => {
            navigate("/register");
        }

        const handleCart = () => {
            navigate("/cart");
        };

        const handleLogout = () => {
            setIslogin(false);
            navigate("/login");
        };

        const handleBooks = () => {
            navigate("/Books");
        }

        const handleBooksDisplay = () => {
            navigate("/BooksDisplay");
        }


        return (
            <><span className="overflow-hidden z-10 w-full flex h-4 justify-between items-center bg-red-400 text-white mx-auto px-24"></span>
            <div className="overflow-hidden z-10 w-full flex h-16 justify-between items-center text-white mx-auto px-24">
                <div className="">
                    <img src={Tatvasoft_logo} className="w-30 h-28" />
                </div>
                {!isLogin ?
                    (<div className="flex gap-3">
                        <button className="bg-blue-800 px-4 py-1 rounded-md hover:bg-blue-700"
                            onClick={handleHome}
                        >Home</button>

                        <button className="bg-blue-800 px-4 py-1 rounded-md hover:bg-blue-700"
                            onClick={handleLogin}
                        >Login</button>

                        <button className="bg-blue-800 px-4 py-1 rounded-md hover:bg-blue-700"
                            onClick={handleRegister}
                        >Register</button>

                        <button className="bg-blue-800 px-4 py-1 rounded-md hover:bg-blue-700"
                            onClick={handleBooks}
                        >BookList</button>

                        <button className="bg-blue-800 px-4 py-1 rounded-md hover:bg-blue-700"
                            onClick={handleBooksDisplay}
                        >BooksDisplay</button>

                        {/* <div className="bg-white border-blue-600 text-red-500 px-2 py-1 rounded-lg flex items-center gap-1 cursor-pointer"
                    onClick={handleCart}
                >
                    <BsFillCartFill />
                    <p className="text-600">Cart</p>
                </div> */}
                        <div className="bg-blue-800 px-2 py-1 rounded-md hover:bg-blue-700"
                            onClick={handleCart}
                        >
                            {/* <BsFillCartFill /> */}
                            <p>Cart</p>
                        </div>
                    </div>)
                    : (
                        <div className="flex gap-4">
                            <button className="bg-blue-600 px-2 py-1 rounded-md hover:bg-blue-700"
                                onClick={handleLogout}
                            >Logout</button>
                        </div>
                    )}
            </div></>
        );
    }
    // import React from "react";
    // import "../App.css";
    // import { Link } from "react-router-dom";
    // import Tatvasoft_logo from "./tatvasoft_logo.jpg";
    // import { useNavigate } from "react-router-dom";

    // export default function Navbar() {
    //   const navigate = useNavigate();

    //     const handleLogin = () => {
    //         navigate("/login");
    //     }

    //     const handleRegister = () => {
    //         navigate("/register");
    //     }

    //     const handleCarts = () => {
    //         navigate("/Cart");
    //     };
    //     // const handleClick = () => {
    //     //   navigate("/main")
    //     // }
    //   return (
    //     <div>
    //       <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
    //         <div className="container">
    //           <Link className="navbar-brand" to="/">
    //             <img
    //               src={Tatvasoft_logo}
    //               width="100"
    //               height="100"
    //               alt="Tatva-soft"
    //             />
    //           </Link>
    //           <button
    //             className="navbar-toggler"
    //             type="button"
    //             data-bs-toggle="collapse"
    //             data-bs-target="#navbarSupportedContent"
    //             aria-controls="navbarSupportedContent"
    //             aria-expanded="false"
    //             aria-label="Toggle navigation"
    //           >
    //             <span className="navbar-toggler-icon"></span>
    //           </button>
    //           <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //             <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
    //               <li className="nav-item">
    //                 <Link className="nav-link active" aria-current="page" to="/" >
    //                   Home
    //                 </Link>
    //               </li>
    //               <li className="nav-item">
    //                 <Link  className="nav-link" to="/Books">
    //                 {/* <div>
    //                   <h3>Card</h3>
    //                      <button onClick={handleClick}>Cards</button>
    //                 </div> */}
    //                   Books
    //                 </Link>
    //               </li>
    //               <li className="nav-item">
    //                 <Link  className="nav-link" to="/BooksDisplay">
    //                   BooksDisplay
    //                 </Link>
    //               </li>
    //               <li className="nav-item">
    //                 <Link className="nav-link" to="/about">
    //                   About
    //                 </Link>
    //               </li>
    //               <li className="nav-item">
    //                 <Link className="nav-link" to="/contact">
    //                   Contact
    //                 </Link>
    //               </li>
    //             </ul>
    //             <div className="buttons" >
    //               <Link to="/login" className="btn btn-outline-dark"  onClick={handleLogin}>
    //                 {/* <i className="fa fa-sign-in me-auto "></i> */}
    //                 Login
    //               </Link>
    //               <Link to="/register" className="btn btn-outline-dark ms-2" onClick={handleRegister}>
    //                 {/* <i className="fa fa-user-plus me-auto "></i> */}
    //                 Register
    //               </Link>
    //               {/* <Link to="/cart" className="btn btn-outline-dark ms-2" onClick={handleCarts}>
    //                 <i className="fa fa-shopping-cart me-auto "></i>
    //                   Cart(0)
    //               </Link>  */}
    //             </div>
    //           </div>
    //         </div>
    //       </nav>
    //     </div>
    //   );
    // }



    // import React, { useContext, useEffect, useState } from 'react'
    // import tatvasoftlogo from '../assets/Tatvasoft-Logo.jpg'
    // import { Link } from 'react-router-dom'
    // import { HiShoppingCart } from "react-icons/hi";
    // import Contextpage from '../ContextPage';

    // const UpperNavbar = () => {

    //     const {user,products} = useContext(Contextpage)

    //     // useEffect(() => {
    //     //     if (logindata.email) {
    //     //         getData();
    //     //     }
    //     // }, [logindata.email])

    //     return (
    //         <>
    //             {/* top bar */}
    //             <div className="text-center p-[3px] bg-[#f14D54] text-white">
    //                 Get <span className="text-black font-bold bg-slate-300 p-[2px] rounded-lg">20% Off</span> on your First order
    //             </div>

    //             <div className="flex justify-between items-center px-[40px]">
    //                 <Link to="/">
    //                     <img src={tatvasoftlogo} alt="Logo" className="h-[100px]" />
    //                 </Link>

    //                 {/* navbar */}

    //                 <div className="flex text-black  gap-2">
    //                     {!user ?
    //                         <>
    //                             <Link to="/login" className='authbtn'>Login</Link>
    //                             <hr className='w-[2px] bg-red-500 h-8' />
    //                             <Link to="/register" className='authbtn'>Register</Link>
    //                         </> :
    //                         <>
    //                             <Link to="/updateprofile" className='authbtn'>Update Profile</Link>
    //                             {user.roleId == 2 ?
    //                                 <>
    //                                     <hr className='w-[2px] bg-red-500 h-8' />
    //                                     <Link to="/books" className='authbtn'>Books</Link>
    //                                 </>
    //                             : null}
    //                         </>
    //                     }

    //                     {/* cart */}
    //                     <Link to="/cart" className='authbtn cart'>
    //                         <HiShoppingCart color='red' size={20} />
    //                         <h4>{products.length}</h4>
    //                         <h4>Cart</h4>
    //                     </Link>

    //                     <div className={`${user ? 'visible' : 'invisible'} flex items-center font-semibold`}>
    //                         <h1 className='bg-blue-200 px-2 py-1'>{user ? user.firstName +" "+ user.lastName : null}</h1>

    //                         <div className='bg-red-300/60 mx-2 px-2 py-1 hover:text-white hover:bg-red-400 border-2 border-red-600 rounded-lg cursor-pointer' onClick={() => localStorage.removeItem("user")}>Logout</div>
    //                     </div>

    //                 </div>
    //             </div>
    //         </>
    //     )
    // }

    // export default UpperNavbar