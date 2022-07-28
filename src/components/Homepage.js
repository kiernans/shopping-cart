import React from "react";
import "../styles/Homepage.css";
import Navbar from "./Navbar";

const Homepage = () => {
  return (
    <div className="container">
        <Navbar />
        <div className="main">
                <h1>Homepage</h1> 
        </div>
    </div>
  );
}

export default Homepage;
