import React from 'react'

import './button.css'

export default function Button({ children, type }) {
  return (
    <button className='main__button' type={type || 'button'}>
      {children}
    </button>
  )
}
