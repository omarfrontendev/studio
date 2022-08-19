import React from 'react'

import './header.css'

export default function Header() {
  return (
    <header className='main__header d-flex align-items-center justify-content-center'>
      <div className="container">
        <div className='header__content d-flex align-items-center justify-content-between'>
          <div className="logo">Logo</div>
          <div className="header__links d-flex align-items-center justify-content-end">
            <a href="#home" className='header__link position-relative active'>Home</a>
            <a href="#home" className='header__link position-relative'>link 1</a>
            <a href="#home" className='header__link position-relative'>link 2</a>
            <a href="#home" className='header__link position-relative'>link 3</a>
          </div>
        </div>
      </div>
    </header>
  )
}
