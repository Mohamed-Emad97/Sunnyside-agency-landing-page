import React from 'react';
import { eggBg , cupBg } from '../../Utilies/imgs';

export default function About() {
  return (
    <>
      <section id="about">
        <main className='center flex-lg-row flex-md-row flex-column-reverse flex-sm-column-reverse'>
          <div className="content d-flex justify-content-center h-100 flex-column p-5">
            <h2 className="fw-bolder fs-big">Transform Your Brand</h2>
            <p className='my-5 fw-semibold'>
              We Are a Full-service creative agency specializing in
              helping brands grow fast. Engage your clients through
              compelling visuals that do most of the marketing for you.
            </p>
            <div className="btn align-self-start">
              <a href="" className="btnSec fw-bolder bgYellow">LEARN MORE</a>
            </div>
          </div>
          <div className="eggImg">
            <img src={eggBg} alt="" className='w-100'/>
          </div>
        </main>
        <main className="center flex-lg-row flex-md-row flex-column flex-sm-column">
          <div className="eggImg">
            <img src={cupBg} alt="" className='w-100'/>
          </div>
          <div className="content d-flex justify-content-center h-100 flex-column p-5">
            <h2 className="fw-bolder">Stand out to the right audience</h2>
            <p className='my-5 fw-semibold'>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we'll 
              build and extend your brand in digital places.
            </p>
            <div className="btn align-self-start">
              <a href="" className="btnSec fw-bolder bgRed">LEARN MORE</a>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}
