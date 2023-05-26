import React from 'react'
import './navbar.css'
import photo from '../assets/one.png'
import {BiMessageRounded } from 'react-icons/bi'
import {AiOutlineHeart } from 'react-icons/ai'
import {FaRegUser } from 'react-icons/fa'


const NAVBARDATA = ["O'z | Py",<BiMessageRounded className='icon__same'/>, "Message",<AiOutlineHeart className='heart__icon' />, <FaRegUser className='icon__same'/>, " Your account" ]

function Navbar() {
  return (
    <div className='navbar'>
        <img className='navbar__photo' src={photo} alt="" />
        <ul className='navbar__item'>
          {
            NAVBARDATA?.map((item, inx)=>
            <li key={inx}>{item}</li>
            )
          }
        </ul>
        <button className='navbar__btn'>Submit</button>
    </div>
  )
}

export default Navbar;
