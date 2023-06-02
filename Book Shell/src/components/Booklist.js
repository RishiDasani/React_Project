// // import { ClassNames } from '@emotion/react';
// import React, {useState, useEffect} from 'react'
// import axios from "axios";

// const API = 'https://example-data.draftbit.com/books?_limit=50';

// const Booklist = () => {
//     const[books, setBooks] = useState([]);

//     useEffect(() => {
//         axios.get(API).then((res) => {
//             console.log(res.data);
//             setBooks(res.data);
//         })
//         .catch((err) => console.log(err));
//     }, []);
//     return (
//         <div classNames='Booklist'>Booklist</div>
//     )
// }
// export default Booklist;