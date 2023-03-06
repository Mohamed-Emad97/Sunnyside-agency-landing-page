import React from 'react';
import { orangeBg, cherryBg } from "../../Utilies/imgs";

export default function Services() {
  return (
    <>
      <section id="services">
        <main className='center  flex-lg-row flex-md-row flex-column flex-sm-column'>
          <div className="srv1 position-relative">
            <div className="img">
              <img src={cherryBg} alt="" className="w-100" />
            </div>
            <div className="overlay text-center pb-4 d-flex justify-content-end flex-column">
              <h2 className='fw-bolder darkCyan'>Graphic Design</h2>
              <p className='my-3 fw-bold cyan'>
                Great Desgin makes you memorable. We deliver 
                artwork that underscores your brand mwssage
                and captures potential client's attention
              </p>
            </div>
          </div>
          <div className="srv2 position-relative">
            <div className="img">
              <img src={orangeBg} alt="" className="w-100" />
            </div>
            <div className="overlay text-center pb-4 d-flex justify-content-end flex-column">
              <h2 className='fw-bolder darkBlue'>Photography</h2>
              <p className='my-3 fw-bold blue'>
                Increase your credibilitly by getting the most
                stunning, high-quilty photos that improve your 
                business image.
              </p>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}
