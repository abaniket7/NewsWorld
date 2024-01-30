// import React, { Component, useState } from "react";
// import { Link, json } from "react-router-dom";
// import PropTypes from "prop-types";

// export class Navbar extends Component {
//   static defaultProps = {
//     country: "in",
//     pageSize: 8,
//     category: "general",
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };

//   render() {
//     const [input, setInput] = useState("");
//     const fetchData = (value) =>
//       fetch(
//         "https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=df11cdd72c744330b1136031bcdf2f10&page=${this.state.page}&pageSize=${this.props.pageSize}"
//       )
//         .then((response) => response.json())
//         .then((json) => {
//           const results = json.filter((user) => {
//             return (
//               value &&
//               user &&
//               user.name &&
//               user.name.toLowerCase().includes(value)
//             );
//           });
//           this.setResults(results);
//         });
//     const handleChange = (value) => {
//       setInput(value);
//       fetchData(value);
//     };
//     return (
//       <div>
//         <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
//           {/* <nav className="navbar" style={{color:'black', backgroundColor: '#e3f2fd'}}> */}
//           <div className="container-fluid">
//             <Link className="navbar-brand" to="/">
//               NewsWorld
//             </Link>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="/navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div
//               className="collapse navbar-collapse"
//               id="navbarSupportedContent"
//             >
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <Link className="nav-link " aria-current="page" to="/">
//                     Home
//                   </Link>
//                 </li>
//                 {/* <li className="nav-item">
//                     <Link className="nav-link" to="/about">About</Link>
//                     </li> */}
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/Entertainment">
//                     Entertainment
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/General">
//                     General
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/Health">
//                     Health
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/Science">
//                     Science
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/Sports">
//                     Sports
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/Business">
//                     Business
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/Technology">
//                     Technology
//                   </Link>
//                 </li>
//               </ul>
//               <form className="d-flex" role="search">
//                 <input
//                   className="form-control me-2"
//                   type="search"
//                   placeholder="Search"
//                   value={input}
//                   onChange={(e) => handleChange(e.target.value)}
//                   aria-label="Search"
//                 />
//                 <button className="btn btn-outline-success" type="submit">
//                   Search
//                 </button>
//               </form>
//             </div>
//           </div>
//         </nav>
//       </div>
//     );
//   }
// }

// export default Navbar;
