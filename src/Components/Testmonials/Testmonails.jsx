import React from 'react';
import { clientPicOne, clientPicTwo, clientPicThree } from "../../Utilies/imgs";

export default function Testmonails() {
  return (
    <>
      <section id="testmonails" className='py-5'> 
        <main className='container'>
          <div className="title text-center mb-5">
            <h2 className='fw-bolder'>Client Testimonails</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="client text-center p-3">
                <div className="img">
                  <img src={clientPicOne} alt="" className="w-25 rounded-circle" />
                </div>
                <p className='my-5'>
                  We put our trust in Sunnyside and they 
                  delivered, making sure our needs were met
                  and deadlines were always hit.
                </p>
                <div className="caption">
                  <h4 className='h6 fw-bolder'>Emily R.</h4>
                  <p>Marketing Director</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="client text-center p-3">
                <div className="img">
                  <img src={clientPicTwo} alt="" className="w-25 rounded-circle" />
                </div>
                <p className='my-5'>
                  Sunnyside's enthusiasm coupled with their
                  keen interest in our brand's success made it 
                  a satisfying and enjoyable experience.
                </p>
                <div className="caption">
                  <h4 className='h6 fw-bolder'>Thomas S.</h4>
                  <p>Cheif Operating Officer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="client text-center p-3">
                <div className="img">
                  <img src={clientPicThree} alt="" className="w-25 rounded-circle" />
                </div>
                <p className='my-5'>
                  Incredible end result! Our sales increased
                  over 400% when we worked with Sunnyside.
                  Highly recommended.
                </p>
                <div className="caption">
                  <h4 className='h6 fw-bolder'>Emily R.</h4>
                  <p>Marketing Director</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}
