import React from "react";
import '../styles/login.css';
import Navbar from "./Navbar";
import Image from "../assets/DoList (2).png"

const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    // Perform your login logic here (e.g., send a request to the server).
  
    // After successful login, manually navigate to the desired page.
    window.location.href = "/dashboard"; // Replace with the actual URL.
  };
function Login() {
  const pageStyle = {
    backgroundColor: "#a9dde1",
    minHeight: "100vh", // Ensure the background color covers the entire viewport height
  };

  return (
    <div style={pageStyle}>
      <Navbar />
      <div>
        <img className="left-image" src={Image} />
      </div>
      <div className="position-absolute top-50 end-0 translate-middle-y custom-margin-right">
      <form className="form" action="/dashboard" method="POST" onSubmit={handleSubmit}>
          <p className="form-title fs-2">Login</p>
          <div className="input-container">
          <label htmlFor="email" className="form-label fs-6">Email</label>
            <input type="email" placeholder="Enter email" />
            <span></span>
          </div>
          <div className="input-container">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" placeholder="Enter password" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-auto">
                <input type="checkbox" name="terms" id="terms" />
              </div>
              <div className="col">
                <p>I have agreed to the <a href="#">Terms and Conditions</a></p>
              </div>
            </div>
          </div>
          <button type="submit" className="submit" style={{ backgroundColor: '#1f5c60' }}>
                Submit
          </button>
       

          <p className="signup-link">
            No account?
            <a href="/signup">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
