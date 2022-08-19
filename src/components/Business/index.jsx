/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import './business.css'

export default function Business() {

  const business = [
    {
      id: 'audio',
      img: '/assets/audio.jpg'
    },
    {
      id: 'audio1',
      img: '/assets/audio.jpg'
    },
    {
      id: 'audio2',
      img: '/assets/audio.jpg'
    },
    {
      id: 'audio3',
      img: '/assets/audio.jpg'
    },
  ]

  return (
    <section className='business__section section__space'>
      <div className="container">
        <h2 className="section__title text-center">How to Do Business With Us</h2>
        <p className='section__subtitle text-center'>Everything You Need to get creative digital media projects done. Click on any of our state of the art professional studios</p>
        <div className='business__wedgit'>
          <div className='row'>
            {business.map(b => (
              <div key={b.id} className="col">
              <a href='#' target='_blank' className='business__part'>
                <img src= {b.img} alt='part__image' className='img-fluid' />
              </a>
            </div>
            ))}
          </div>
        </div>
        <p className='business__p'>We bring quality and class to your media needs.</p>
      </div>
    </section>
  )
}
