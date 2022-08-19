import React from 'react'
import Slider from "react-slick";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './team.css'

export default function Team() {

  const team = [
    {
      id: 1,
      name: "Mostafa Kamel",
      job: "Founder and CEO",
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9gqFKRn28xKHD1CAbEevdzsLmsv5yQkGnQ&usqp=CAU'
    },
    {
      id: 2,
      name: "Ahmed Kamel",
      job: "Founder and CEO",
      comment: "Mustafa is the best at what he does. He is the incredibly rare combination of artistic talent, technical precision, thoughtfulness, and tireless work ethic. Working with Mostafa mustafa is the best at what he does. He is the incredibly rare combination of artistic talent, technical precision, thoughtfulness, and tireless work ethic.",
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9gqFKRn28xKHD1CAbEevdzsLmsv5yQkGnQ&usqp=CAU'
    },
    {
      id: 3,
      name: "Eslam Kamel",
      job: "Founder and CEO",
      comment: "Mustafa is the best at what he does. He is the incredibly rare combination of artistic talent, technical precision, thoughtfulness, and tireless work ethic. Working with Mostafa mustafa is the best at what he does. He is the incredibly rare combination of artistic talent, technical precision, thoughtfulness, and tireless work ethic.",
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9gqFKRn28xKHD1CAbEevdzsLmsv5yQkGnQ&usqp=CAU'
    },
    {
      id: 4,
      name: "Noor Kamel",
      job: "Founder and CEO",
      comment: "Mustafa is the best at what he does. He is the incredibly rare combination of artistic talent, technical precision, thoughtfulness, and tireless work ethic. Working with Mostafa mustafa is the best at what he does. He is the incredibly rare combination of artistic talent, technical precision, thoughtfulness, and tireless work ethic.",
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9gqFKRn28xKHD1CAbEevdzsLmsv5yQkGnQ&usqp=CAU'
    },
    {
      id: 5,
      name: "Mohamed Kamel",
      job: "Founder and CEO",
      comment: "Mustafa is the best at what he does. He is the incredibly rare combination of artistic talent, technical precision, thoughtfulness, and tireless work ethic. Working with Mostafa mustafa is the best at what he does. He is the incredibly rare combination of artistic talent, technical precision, thoughtfulness, and tireless work ethic.",
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9gqFKRn28xKHD1CAbEevdzsLmsv5yQkGnQ&usqp=CAU'
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <section className='team__section section__space'>
      <div className="container">
        <div className="team__content">
          <h2 className="section__title text-center">Our Team</h2>
          <div className='team'>
          <Slider {...settings}>
            {team.map(t => (
              <div className="single">
                <div className="single__image img-fluid">
                  <img src={t.src} alt=''/>
                </div>
                <div className="d-flex align-items-center justify-content-center single__text">
                  <span>{t.name}</span> . <span className='signle__job'>{t.job}</span>
                </div>
              </div>
            ))}
        </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}
