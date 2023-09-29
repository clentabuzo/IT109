import React from 'react';
import Navbar from './Navbar';
import Page from '../assets/DoList.png';
import Image from '../assets/DoList5.png';


function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div>
              <h1 className='display-1 fw-bold'>Unlock Your</h1>
              <h1 className='display-1 fw-bold' style={{ position: 'relative' }}>
  <img className='overlay'
    src={Image}
    alt="pic"
    style={{
      position: 'absolute',
      top: 0,
      left: '-20px',
      zIndex: -1,
    }}
  />
  Potential
</h1>
              <h1 className='display-1 fw-bold'>With DoList</h1>
            </div>
            <div>
              <p className='fs-3'>Your Ultimate Task Management and</p>
              <p className='fs-3'>Productivity Companion</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="position-relative me-3"> 
              <img
                src={Page}
                alt="Page Picture"
                className="img-fluid custom-image"
                style={{ maxWidth: "1000px", marginLeft: "-200px" }} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
