import React from 'react'

import './clients.css'

export default function Clients() {

  const clients = [
    {
      id: 'client1',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9xn_1tK7rDeMC64385uzLdD7oIAD9LdVyA&usqp=CAU'
    },
    {
      id: 'client2',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9xn_1tK7rDeMC64385uzLdD7oIAD9LdVyA&usqp=CAU'
    },
    {
      id: 'client3',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9xn_1tK7rDeMC64385uzLdD7oIAD9LdVyA&usqp=CAU'
    },
    {
      id: 'client4',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9xn_1tK7rDeMC64385uzLdD7oIAD9LdVyA&usqp=CAU'
    },
    {
      id: 'client5',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9xn_1tK7rDeMC64385uzLdD7oIAD9LdVyA&usqp=CAU'
    },
    {
      id: 'client6',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9xn_1tK7rDeMC64385uzLdD7oIAD9LdVyA&usqp=CAU'
    },
    {
      id: 'client7',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9xn_1tK7rDeMC64385uzLdD7oIAD9LdVyA&usqp=CAU'
    },
    {
      id: 'client8',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9xn_1tK7rDeMC64385uzLdD7oIAD9LdVyA&usqp=CAU'
    },
    {
      id: 'client9',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9xn_1tK7rDeMC64385uzLdD7oIAD9LdVyA&usqp=CAU'
    },
  ]

  return (
    <div className='clients__section section__space'>
      <div className="container">
        <h2 className="section__title text-center">Who We Work For</h2>
        <p className='section__subtitle text-center'>Whether you’re interested from LOGO DESIGNS - PRODUCT DESIGNS COMMERCIALS - TV TALKSHOWS, WEDDINGS - CORPORATE EVENTS, DOCUMENTARIES - MOVIES, MUSIC PRODUCTION - PODCASTS, MUSIC VIDEOS - Etc.</p>
        <div className=" d-flex flex-wrap clients justify-content-center">
          {clients.map(c => (
            <div  key={c.id} className='client'>
              <img className='img-fluid' src={c.img} alt='brand' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
