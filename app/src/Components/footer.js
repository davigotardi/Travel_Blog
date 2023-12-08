import React from 'react'

function Footer() {
  return (
    <div className='mt-5 container-fluid bg-success bg-gradient text-white' style={{minHeight:'12rem'}}>
          <div className="row pt-4 text-center">
             {/*Create 3 sections each of 4 cols for lg and md device but for Small device create one section of 12 col*/}
            <div className="col-lg-4 col-md-4 col-sm-12 ">
                <h5>Quick Links </h5>
                <div className='d-flex flex-column mb-2'>
                    <a href="#" className='text-white p-1'>About Us</a>
                </div>
            </div> 
                <div className="col-lg-4 col-md-4 col-sm-12 mb-2 ">
                    <h5>Newsletter</h5>
                    <div style={{minHeight: '8rem'}} className='d-flex flex-column justify-content-around'>
                    <input type='text' className='form-control' placeholder='Subscribe to the newsletter' />
                    <button className='btn btn-light'>Subscribe</button>
                </div> 
            </div> 
          </div>
    </div>
  )
}

export default Footer