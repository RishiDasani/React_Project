import React from 'react'
export default function Register() {
  return (
    <div>
      <form className="container">
      <h3 className="text-center mb-4 mt-4">Login or Create an Account</h3>
      <h5 className="text mt-2">Personal Information</h5>
      <p>Please Enter The Followling Information To Create Your Account </p>
        <div className="row mb-4">
            <div className="form-group col-md-6">
            <label for="inputFirstName">First Name *</label>
            <input type="text" className="form-control" id="inputFirstName" />
            </div>
            <div className="form-group col-md-6">
            <label for="inputLastName">Last Name *</label>
            <input type="text" className="form-control" id="inputLastName" />
            </div>
        </div>
        <div className="form-group mb-4">
            <label for="inputEmail4">Email Address *</label>
            <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <h5>Login Information</h5>
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
        <button type="submit" className="btn btn-danger mb-4">Register</button>
        </form>
    </div>
  )
}

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
