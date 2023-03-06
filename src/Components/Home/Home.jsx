import React from 'react';
import {Arrow} from "../../Utilies/imgs";

export default function Home() {
  return (
    <>
      <section id="home" className='vh-100'>
        <div className="container h-100">
          <div className="center caption h-100 flex-column">
            <h1 className='fw-bolder mb-3 text-center'>WE ARE CREATIVES</h1>
            <div className="img mt-5">
              <img src={Arrow} alt="icon" className='img-fluid'/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
