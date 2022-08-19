import React from 'react'
import Button from '../Button'

import './hero.css'

export default function Hero() {
  return (
    <section className='hero__section'>
      <img alt='' className='overlay' src='https://media.istockphoto.com/photos/black-background-with-spotlight-picture-id854115882?k=20&m=854115882&s=612x612&w=0&h=wfleX4eT9yh4uHXR4jft1GmgXTZYu2PZXhe8uvLfJyY=' />
      <div className='hero__content d-flex align-items-center'>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="hero__text d-flex flex-column align-items-start justify-content-center">
                <h1 className='hero__title'>
                  AFRICA URBAN<br/> CREATIVE
                  DIGITAL<br/> MEDIA | TALENT
                  AGENCY
                </h1>
                <p className='hero__subtitle'>
                  We Produce & Sell Anything Audio, Image and Video used to promote sales, educate and entertain your audience worldwide. 
                </p>
                <Button>Let’s Partner </Button>
              </div>  
            </div>
            <div className="col-6">
              <div className='hero__media d-flex align-items-center justify-content-center'>
                <img className='img-fluid' alt='Hero__image' src='/assets/93b9916a-7e30-4763-b620-dfb3b7a2934b.jpg' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
