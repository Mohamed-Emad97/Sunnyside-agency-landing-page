import React from 'react';
import {Logo} from "../../Utilies/imgs";

export default function Navber() {
  return (
    <>
      <header className='fixed-top p-3'>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="logo-pic" className='w-100' />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Projects</a>
                </li>
                <div className="btn mx-5">
                  <a href="" className='btnMain px-4 fw-bold p-2 rounded-pill'>CONTACT</a>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
