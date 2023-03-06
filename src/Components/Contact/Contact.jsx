import React from 'react';
import { Footer } from "../../Utilies/imgs";

export default function Contact() {
  return (
    <>
    <footer className='py-5'>
      <main className="container text-center">
        <div className="img">
          <img src={Footer} alt="" className="w-25" />
        </div>
        <ul className="links center list-unstyled my-3">
          <li className='mx-3'>
            <a href="">About</a>
          </li>
          <li className='mx-3'>
            <a href="">Services</a>
          </li>
          <li className='mx-3'>
            <a href="">Projects</a>
          </li>
        </ul>
        <ul className="socails center list-unstyled">
          <li className='facebook mx-2 fs-2'><i className="fa-brands fa-square-facebook"></i></li>
          <li className='instagram mx-2 fs-2'><i className="fa-brands fa-square-instagram"></i></li>
          <li className='twitter mx-2 fs-2'><i className="fa-brands fa-square-twitter"></i></li>
          <li className='pinterest mx-2 fs-2'><i className="fa-brands fa-square-pinterest"></i></li>
        </ul>
      </main>
    </footer>
    </>
  )
}
