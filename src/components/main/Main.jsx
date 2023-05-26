import React from 'react'
import './main.css'
import {CiSearch} from 'react-icons/ci'
import {HiOutlineLocationMarker} from 'react-icons/hi'

function Main() {
  return (
    <div className='main'>
        <div className="main__navbar">
            <div className="main__navbar_main">
            <CiSearch className='main__search' />
            <input type="text" placeholder='1 144 900' className='main__search__input' />
            <hr className='main__hr' />
            <HiOutlineLocationMarker className='main__location' />
            <input type="text" className='main__h2'  placeholder='All uzbekistan'/>
            <hr className='main__hr__two' />
            <input type="text" className='input__box' placeholder='Search' />
            <CiSearch className='main__search__two' />
            </div>
        </div>
      
    </div>
  )
}

export default Main
