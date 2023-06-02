import { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom"
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { LoginContext } from "../contexts/LoginContext";

export default function LoginForm() {
    const { isLogin, setIslogin } = useContext(LoginContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    }

    const onHomePageButtonClick = () => {
        navigate("/register");
    }

    const handleCart = () => {
        navigate("/cart");
    };

    const handleLogout = () => {
        setIslogin(false);
        navigate("/login");
    };

    const onFormSubmit = () => {
        navigate("/Books");
    }


    return (
                <div>
      <div>
    <Formik
      // initialValues={formik}
      // validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      {({ isSubmitting , value , errors , touched , handleChange , handleSubmit}) => (
         <div>
            <form className="container" onSubmit={handleSubmit}>
      <h3 className="text-center mb-4 mt-4">Login or Create an Account</h3>
        <div className="row mb-4">
            <div className="form-group col-md-6">
            {/* <h5 className="text mt-2 mb-4">New Customer</h5> */}
            {/* <p>Registration Is Free And Easy..</p> */}
            {/* <ul>
                <li>Faster Checkout</li>
                <li>Save Multiple Shipping Address</li>
                <li>View And Track Orders Or More</li>
            </ul> */}
            </div>
            {/* <div className="form-group col-md-6"> */}
            <div className="form-group">
            <h5 className="text mt-2 mb-4">Registered Customers</h5>
            <label for="email">Email Address *</label>
            <input type="text" className="form-control" name="email" label="email" id="email" onChange={handleChange} />
           {/* value={email} /> */}
          {touched.email && errors.email ? (
          <div>{errors.email}</div>
        ) : null}
            {/* { touched.email && errors.email && <span>{errors.email}</span>} */}
            {/* {<span>touched.email</span> && <span>errors.email</span>} */}
            {console.log("The error handler : ", touched , errors)} 
            <label for="password">Password *</label>
            <input type="password" className="form-control" label="password" name="password" id="password" onChange={handleChange} />
            { touched.password && errors.password && <span>{errors.password}</span>}
            </div>  
        </div>
        {console.log("Email validation : ", errors)}
        <div className="row">
        {/* <div className="form-group col-md-6"> */}
        {/* <button type="submit" className="btn btn-danger mt-4 ">Create an Account</button> */}
        {/* </div> */}
        <div className="form-group col-md-6">
            <button type="submit" className="btn btn-danger mt-4" onClick={onFormSubmit}>Login</button>
            <span>     </span>
            <button type="submit" className="btn btn-danger mt-4 " onClick={onHomePageButtonClick}>Create an Account</button>
        </div>
        </div>
        </form>
          </div>
      )
    }
  
    </Formik>
    </div>
    {/* <div key={item.id}>
      (user.map((item) ={'>'} {
        <div>
          <h3>item.title</h3>
          <span>item.body</span>
        </div>
      }))
    </div> */}
    </div>
    );
}

// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// // import register from './Register'
// // import {  } from '@mui/material/styles/cssUtils';
// import { Formik, Field, ErrorMessage, Form } from 'formik';
// import * as Yup from 'yup';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// export default function LoginForm() {

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleChange = (event) => {
//     setEmail(event.target.value);
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//   };
//   const handleLogin = (values) => {
//     console.log('Logging in with:', values);
//     // navigate('/register');
//   };

//   // const validationSchema = Yup.object().shape({
//   //   name: Yup.string().min(3, 'Atleast 3 characters required'),

//   //   email: Yup.string().email('Invalid Email').required('Enter a valid email address'),

//   //   password: Yup.string().password('Invalid Password').required(8, 'Atleast 8 characters required'),
//   // });


//     // const formik = useFormik({
//     //   formik({
//     //   initialValues: {
//     //     email: '',
//     //     password: '',
//     //   },
//     //   validationSchema,
//     //   onSubmit: (values) => {
//     //     alert(JSON.stringify(values, null, 2));
//     //   },
//     // });
//   // const initialValues = {
//   //   name:'',
//   //   email: '',
//   //   password: '',
//   // };

//   const onFormSubmit = async (values) => {
//     // console.log("On submission : ", values);
//     // alert("Form submitted");

//     // const requestData = {
//     //   userName: values.name,
//     //   userEmail: values.email,
//     // }

    
//     // axios.post("https://jsonplaceholder.typicode.com/todos/1/posts", requestData).then((res) => {
//     //   if(res.status == 201){
//     //       // console.log(res.data.id);
//     //       toast.success("API call successful", {
//     //         position: "top-right",
//     //         autoClose: 3000,
//     //         hideProgressBar: false,
//     //         closeOnClick: true,
//     //         pauseOnHover: true,
//     //         draggable: true,
//     //         progress: undefined,
//     //         theme: "light",
//     //       })
//     //     } 
//     //   });
      
//       // const res = await axios.post("https://jsonplaceholder.typicode.com/todos/1/posts", requestData)
//       // const res1 = await axios.delete("https://jsonplaceholder.typicode.com/todos/1/posts/1", requestData)
      
//     //   axios.delete("https://jsonplaceholder.typicode.com/todos/1//posts/1").then((res) => {
//     //       console.log(res.data.id)
//     //       if(res.status == 404){
//     //     console.log(res.data.id);
//     //     toast.success("API delete successful", {
//     //       position: "top-right",
//     //       autoClose: 3000,
//     //       hideProgressBar: false,
//     //       closeOnClick: true,
//     //       pauseOnHover: true,
//     //       draggable: true,
//     //       progress: undefined,
//     //       theme: "light",
//     //     })
//     //   }
//     // })
//   };

//   // const handleClick = (event) => {
//   //   console.log(123);
//   //   setAnchorEl(event.crrentTarget);
//   //   setOpen(true);
//   // }
//   const navigate = useNavigate();
//   const onHomePageButtonClick = () => {
//     // console.log("Name : ", name);
//     // console.log("Email : ", email);
//     navigate("/Register");
//   }

//   // const [user, setUser] = useState([]);
//   // useEffect(() => {
//   //   axios.get("https://jsonplaceholder.typicode.com/todos/1/posts").then((res) => {
//   //     console.log("User details : ", res.data);
//   //     setUser(res.data);
//   //   })
//   // }, []);

    
  
  
//   return (
//     <div>
//       <div>
//     <Formik
//       // initialValues={formik}
//       // validationSchema={validationSchema}
//       onSubmit={handleLogin}
//     >
//       {({ isSubmitting , value , errors , touched , handleChange , handleSubmit}) => (
//          <div>
//             <form className="container" onSubmit={handleSubmit}>
//       <h3 className="text-center mb-4 mt-4">Login or Create an Account</h3>
//         <div className="row mb-4">
//             <div className="form-group col-md-6">
//             {/* <h5 className="text mt-2 mb-4">New Customer</h5> */}
//             {/* <p>Registration Is Free And Easy..</p> */}
//             {/* <ul>
//                 <li>Faster Checkout</li>
//                 <li>Save Multiple Shipping Address</li>
//                 <li>View And Track Orders Or More</li>
//             </ul> */}
//             </div>
//             {/* <div className="form-group col-md-6"> */}
//             <div className="form-group">
//             <h5 className="text mt-2 mb-4">Registered Customers</h5>
//             <label for="email">Email Address *</label>
//             <input type="text" className="form-control" name="email" label="email" id="email" onChange={handleChange}
//            value={email} />
//           {touched.email && errors.email ? (
//           <div>{errors.email}</div>
//         ) : null}
//             {/* { touched.email && errors.email && <span>{errors.email}</span>} */}
//             {/* {<span>touched.email</span> && <span>errors.email</span>} */}
//             {console.log("The error handler : ", touched , errors)} 
//             <label for="password">Password *</label>
//             <input type="password" className="form-control" label="password" name="password" id="password" onChange={handleChange} />
//             { touched.password && errors.password && <span>{errors.password}</span>}
//             </div>  
//         </div>
//         {console.log("Email validation : ", errors)}
//         <div className="row">
//         {/* <div className="form-group col-md-6"> */}
//         {/* <button type="submit" className="btn btn-danger mt-4 ">Create an Account</button> */}
//         {/* </div> */}
//         <div className="form-group col-md-6">
//             <button type="submit" className="btn btn-danger mt-4" onClick={onFormSubmit}>Login</button>
//             <span>     </span>
//             <button type="submit" className="btn btn-danger mt-4 " onClick={onHomePageButtonClick}>Create an Account</button>
//         </div>
//         </div>
//         </form>
//           </div>
//       )
//     }
  
//     </Formik>
//     </div>
//     {/* <div key={item.id}>
//       (user.map((item) ={'>'} {
//         <div>
//           <h3>item.title</h3>
//           <span>item.body</span>
//         </div>
//       }))
//     </div> */}
//     </div>
//   );
// }



{/* <div>
        {user.map((item) => (
          <><h3>item.title</h3><span>item.body</span></>
        ))}
      </div> */}






//       import * as Yup from "yup";

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// // min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

// export const RegisterSchema = Yup.object({
//     firstName: Yup.string().min(2).max(25).required("enter your firstname"),
//     lastName: Yup.string().min(2).max(25).required("Enter your lastname"),
//     email: Yup.string().email().required("Enter your email"),
//     password: Yup.string().min(5).matches(passwordRules, { message: "Create a stronger password [min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit]" }).required("Enter your password")
//     // cpassword: Yup.string()
//     //     .required()
//     //     .oneOf([Yup.ref("password"), null], "Password must match"),
// });
      



// __________________________________________________________
// Tushar Pankhariya

// 'import React, { useState ,useContext, useEffect} from 'react'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
// import { useFormik } from "formik";
// import { toast } from 'react-toastify';
// import axios from 'axios';
// import Contextpage from '../ContextPage';

// const initialValues = {
//   email: "",
//   password: "",
// };

// const Login = () => {

//   const { LoadinContainer,setLogindata } = useContext(Contextpage)
  
//   useEffect(() => {
//     LoadinContainer();
//   }, []);

//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//       initialValues,
//       onSubmit: async(values, action) => {

//         var config = {
//           method: 'POST',
//           maxBodyLength: Infinity,
//           url: 'https://book-e-sell-node-api.vercel.app/api/user/login',
//           headers: {"Content-Type": "application/json" },
//           data : JSON.stringify(values)
//         };
        
//         axios(config)
//         .then(function () {
//           toast.success("Login successfull");
//           setLogindata(values);          
//         })
//         .catch(function (error) {
//           toast.error(error);
//         });
    
//         action.resetForm();
//       },
//     });
//   // console.log(errors);


//   return (
//     <div className="py-8">
//          <div className="flex justify-center flex-col items-center p-4">
//                 <h1 className="text-4xl font-bold text-center p-3">Login or Create an Account</h1>
//                 <div className="w-40 h-1 bg-red-400 rounded-full"></div>
//             </div>

//       {/* <====== Login Form ===========> */}
//       <form method='POST' onSubmit={handleSubmit} className='flex justify-center items-center gap-5'>
//         <div className='border-2 rounded-xl p-5 flex flex-col gap-5 shadow-lg w-[700px]'>

//           <TextField
//             id="outlined-basic"
//             label="Email"
//             variant="outlined"
//             className='w-full'
//             name='email'
//             autoComplete='off'
//             value={values.email}
//             onChange={handleChange}
//             onBlur={handleBlur}
//           />

//           <TextField
//             id="outlined-basic"
//             label="Password"
//             variant="outlined"
//             name='password'
//             className='w-full'
//             autoComplete='off'
//             value={values.password}
//             onChange={handleChange}
//             onBlur={handleBlur}
//           />


//           <Button type='submit' variant="contained">Sign In</Button>

//           <div className='text-center font-semibold'>Don't have an account <Link to="/register" className="text-blue-500">Register</Link></div>
//         </div>
//       </form>

//     </div>
//   )
// }

// export default Login