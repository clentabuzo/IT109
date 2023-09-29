import React from "react";
import '../styles/signup.css'
import Overlay from "../assets/overlay.svg"
import Navbar from "./Navbar";
import SignupImage from "../assets/DoList (1).png"

function Signup() {
    return (
        <div>
            <img
                className="position-absolute top-50 start-50 translate-middle"
                src={Overlay}
                alt="pic"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: '-20px',
                    zIndex: -1,
                    width: '100%', /* Set the image width to 100% */
                    maxWidth: '100%', /* Set the maximum width to 100% */
                    height: 'auto' /* Maintain the aspect ratio */
                }}
            />
            <img
                className="position-absolute top-50 end-0 translate-middle-y"
                src={SignupImage}
                alt="pic"
                style={{
                    position: 'absolute',
                    top: 0,
                    zIndex: -1,
                    width: '1000px', /* Set the image width to 100% */
                    maxWidth: '100%', /* Set the maximum width to 100% */
                    height: 'auto' /* Maintain the aspect ratio */
                }}
            />
            <div>
                <Navbar/>
            </div>
            <div>
            <form className="form position-absolute top-50 start-0 translate-middle-y">
            <p className="form-title fs-2">Create an account</p>
          <div className="input-container">
          <label htmlFor="email" className="form-label fs-6">Name</label>
            <input type="email" placeholder="Enter name" />
          <label htmlFor="email" className="form-label fs-6">Email</label>
            <input type="email" placeholder="Enter email" />
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
    

            </form>
            </div>

        </div>
    );
}

export default Signup;
