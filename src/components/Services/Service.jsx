import React from 'react'
import './Services.css'
import cyberimage from '../../images/services-1.png'
function Service() {
    const services = [
        {
            id: 1,
            name: "Cyber Security",
            title: "Lorem ipsum dolor sit amet."
        },
        {
            id:2,
            name:"Cloud solutions",
            title: "lorem ipsum dolor sit amet"
        },
        {
            id:3,
            name: "Data recovery",
            title: "lorem ipsum dolor sit amet"
        }
    ]
  return (
  <>
  <div className='container mt-3 '>
    <div className='row'>
        <div className='col-xl-12 col-lg-12'>
            <div className='service-area'>
                <p className='p-top'>
                    Best Services
                </p>
                <h2> Continuously We Offer The Best Services For Progress!</h2>
            </div>
        </div>
    </div>
    <div className='row'>
        
        {services.map((service) => (
            <div className='col-xl-4 col-lg-4 col-md-6 lg-mb-30 '>
        <div className='service-area-card'>
            <div className='service-area-card-icon'>
                 <img className='card-img' src={cyberimage} alt="" />
             </div>
              <h3>
                 <a href=''>{service.name}</a>
             </h3>
             <p>{service.title}</p>
             <a href=''>Read More</a>
        </div>
        </div>
       
      ))}
      

     
    </div>

  </div>
  </>
  )
}

export default Service