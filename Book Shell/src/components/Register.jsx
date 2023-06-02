import React, { useState } from 'react';
// import { getDB } from './db';
import './style1.css';
import { useNavigate } from "react-router-dom"

export default function Register() {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [EmailId, setEmailId] = useState('');
  const [Role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/login");
    const userData = {
      FirstName,
      LastName,
      EmailId,
      Role,
    };

    // const db = getDB();
    // const result = await db.collection('users').insertOne(userData);

    // console.log('User registered:', result.insertedId);

    // Reset form fields
    setFirstName('');
    setLastName('');
    setEmailId('');
    setRole('');
  };
return (
  <div>
    <form className="container">
    <h3 className="text-center mb-4 mt-4">Login or Create an Account</h3>
    <h5 className="text mt-2">Personal Information</h5>
    <p>Please Enter The Followling Information To Create Your Account </p>
      <div className="row mb-4">
          <div className="form-group col-md-6">
          <label for="inputFirstName">First Name *</label>
          <input type="text" className="form-control" id="inputFirstName" onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div className="form-group col-md-6">
          <label for="inputLastName">Last Name *</label>
          <input type="text" className="form-control" id="inputLastName" onChange={(e) => setLastName(e.target.value)}/>
          </div>
      </div>
      <div className="row mb-4">
        <div className="form-group col-md-6">
            <label for="inputEmail4">Email Address *</label>
            <input type="email" className="form-control" id="inputEmail4" onChange={(e) => setEmailId(e.target.value)}/>
        </div>
        <div className="form-group col-md-6">
            <label for="inputEmail4">Role *</label>
            <div>
              <select id="role" name="role"  class="dropdown-box" onChange={(e) => setRole(e.target.value)}>
                <option value="admin">Admin</option>
                <option value="user">User</option>
                <option value="guest">Guest</option>
              </select>
            </div>
            {/* <input type="email" className="form-control" id="inputEmail4" /> */}
        </div>
      </div>
      {/* <h5>Login Information</h5> */}
      <div className="row mb-2 mt-3" >
          <div className="form-group col-md-6">
          <label for="inputPassword4">Password *</label>
          <input type="password" className="form-control" id="inputPassword4"/>
          </div>
          <div className="form-group col-md-6 mb-4">
          <label for="inputConfirmPassword4">Confirm Password *</label>
          <input type="password" className="form-control" id="inputConfirmPassword4"/>
          </div>
      </div>
      <button type="submit" className="btn btn-danger mb-4" onClick={handleSubmit}>Register</button>
      </form>
  </div>
)
}

  // const handleSubmit = (e) => {
  //   console.log(FirstName, LastName, EmailId, Role);
  //   fetch("http://localhost:3000/register", {
  //     method: "POST",
  //     crossDomain: true,
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     body: JSON.stringify({
  //       FirstName,
  //       LastName,
  //       EmailId,
  //       Role,
  //     }),
  //   })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data, "userRegister");
  //     if(data.status == "Ok") {
  //       alert("Registration successful ...")
  //     }
  //     else {
  //       alert("Registration failed ...");
  //     }
  //   })
  // }

  

// import React, { useState } from 'react';

// function RegistrationForm() {
//   const [userName, setUserName] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setUserName('');
//     setMobileNumber('');
//     setAge('');
//     setGender('');
//     setEmail('');
//     setPassword('');
//     setConfirmPassword('');
//   };

//   return (
//     <div>
//       <h2>Registration Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//         <label htmlFor="userName">User Name:</label>
//         <input
//           type="text"
//           id="userName"
//           value={userName}
//           onChange={(e) => setUserName(e.target.value)}
//         />
//         </div>
//         <div>
//         <label htmlFor="mobileNumber">Mobile Number:</label>
//         <input
//           type="tel"
//           id="mobileNumber"
//           value={mobileNumber}
//           onChange={(e) => setMobileNumber(e.target.value)}
//         />
//         </div>
//         <div>
//         <label htmlFor="age">Age:</label>
//         <input
//           type="number"
//           id="age"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//         />
//         </div>
//         <div>
//         <label htmlFor="gender">Gender:</label>
//         <select
//           id="gender"
//           value={gender}
//           onChange={(e) => setGender(e.target.value)}
//         >
//           <option value="">Select Gender</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//           <option value="other">Other</option>
//         </select>
//         </div>
//         <div>
//         <label htmlFor="email">Email ID:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         </div>
//         <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         </div>
//         <div>
//         <label htmlFor="confirmPassword">Confirm Password:</label>
//         <input
//           type="password"
//           id="confirmPassword"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default RegistrationForm;







// __________________________________________________________
// Tushar Pankhariya

// import React, { useState ,useContext,useEffect} from 'react'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { Link, useNavigate } from 'react-router-dom';
// import { useFormik } from "formik";
// import { RegisterSchema } from "../schema";
// import { toast } from 'react-toastify';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import axios from 'axios';
// import Contextpage from '../ContextPage';

// const initialValues = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     roleId: 3,
//     password: ""
// };

// // roleId
// // 1 : admin,
// // 2 : Seller,
// // 3 : buyer

// const Register = () => {
//     const { LoadinContainer } = useContext(Contextpage)

//     const navigate = useNavigate();
//     // <=========== form handling using formik =================>

//     const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//         useFormik({
//             initialValues,
//             validationSchema: RegisterSchema,
//             onSubmit: (values, action) => {

//                 var config = {
//                     method: 'post',
//                     maxBodyLength: Infinity,
//                     url: 'https://book-e-sell-node-api.vercel.app/api/user',
//                     headers: { "Content-Type": "application/json" },
//                     data: JSON.stringify(values)
//                 };

//                 axios(config)
//                     .then(function () {
//                         toast.success("Register successfully");
//                         navigate("/login");
//                     })
//                     .catch(function () {
//                         toast.error("Invalid Registration");
//                     });

//                 action.resetForm();
//             }
//         });
//     console.log(errors);

//     useEffect(() => {
//         LoadinContainer();
//     }, [])
    


//     // <========== before Formik =============>

//     // const [user, setUser] = useState({
//     //     firstname: "", lastname: "", email: "", password: "", cpassword: ""
//     // });

//     // let name, value;

//     // const handleInputs = (e) => {
//     //     name = e.target.name;
//     //     value = e.target.value;

//     //     setUser({ ...user, [name]: value });
//     // }


//     // const SubmitForm = () => {
//     //     console.log(user);

//     // }


//     return (
//         <div className="py-8">
//             <div className="flex justify-center flex-col items-center p-4">
//                 <h1 className="text-4xl font-bold text-center p-3">Login or Create an Account</h1>
//                 <div className="w-40 h-1 bg-red-400 rounded-full"></div>
//             </div>

//             {/* <====== SignUp Form ===========> */}
//             <form method='POST' onSubmit={handleSubmit} className='flex justify-center items-center gap-5'>
//                 <div className='border-2 rounded-xl p-5 flex flex-col gap-5 shadow-lg'>
//                     <div className='flex gap-5 flex-wrap'>
//                         <div className='w-80'>
//                             <TextField
//                                 type='text'
//                                 id="outlined-basic"
//                                 label="First name"
//                                 variant="outlined"
//                                 name='firstName'
//                                 className='w-full'
//                                 autoComplete="off"
//                                 value={values.firstName}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                             />
//                             {errors.firstName && touched.firstName ? (
//                                 <p className="text-red-500 overflow-hidden text-ellipsis w-full">{errors.firstName}</p>
//                             ) : null}
//                         </div>

//                         <div className='w-80'>
//                             <TextField
//                                 type='text'
//                                 id="outlined-basic"
//                                 label="Last name"
//                                 variant="outlined"
//                                 name="lastName"
//                                 className='w-full'
//                                 autoComplete='off'
//                                 value={values.lastName}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                             />
//                             {errors.lastName && touched.lastName ? (
//                                 <p className="text-red-500 overflow-hidden text-ellipsis w-full">{errors.lastName}</p>
//                             ) : null}
//                         </div>
//                     </div>

//                     <div>
//                         <TextField
//                             id="outlined-basic"
//                             label="Email"
//                             variant="outlined"
//                             className='w-full'
//                             name='email'
//                             autoComplete='off'
//                             value={values.email}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                         />
//                         {errors.email && touched.email ? (
//                             <p className="text-red-500 overflow-hidden text-ellipsis w-full">{errors.email}</p>
//                         ) : null}
//                     </div>

//                     <FormControl >
//                         <InputLabel id="demo-simple-select-autowidth-label">Role</InputLabel>
//                         <Select
//                             labelId="demo-simple-select-autowidth-label"
//                             id="demo-simple-select-autowidth"
//                             label="roles"
//                             value={values.roleId}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             name='roleId'
//                         >
//                             <MenuItem value="3">Buyer</MenuItem>
//                             <MenuItem value="2">Seller</MenuItem>
//                         </Select>
//                     </FormControl>


//                     <div className='flex gap-5 flex-wrap'>
//                         <div className='w-80'>
//                             <TextField
//                                 id="outlined-basic"
//                                 label="Password"
//                                 variant="outlined"
//                                 name='password'
//                                 className='w-full'
//                                 autoComplete='off'
//                                 value={values.password}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                             />
//                             {errors.password && touched.password ? (
//                                 <p className="text-red-500 overflow-hidden text-ellipsis w-full">{errors.password}</p>
//                             ) : null}
//                         </div>

//                         <div className='w-80'>
//                             <TextField
//                                 id="outlined-basic"
//                                 label="Confirm Password"
//                                 variant="outlined"
//                                 // name="cpassword"
//                                 className='w-full'
//                                 autoComplete="off"
//                             />
//                             {/* {errors.cpassword && touched.cpassword ? (
//                                 <p className="text-red-500 overflow-hidden text-ellipsis w-full">{errors.cpassword}</p>
//                             ) : null} */}
//                         </div>
//                     </div>

//                     <Button type='submit' variant="contained">Sign Up</Button>

//                     <div className='text-center font-semibold'>Already have an account <Link to="/login" className="text-red-400">sign in</Link></div>
//                 </div>
//             </form>

//         </div>
//     )
// }

// export default Register