import React from 'react'
import { Link } from 'react-router-dom'
import { FcHome } from '@react-icons/all-files/fc/FcHome'
import { SearchBar } from '../search-bar/SearchBar'
import {FaUserCircle} from '@react-icons/all-files/fa/FaUserCircle'

import '../header/style/Header.css'

export const Header = () => {
  return (
    <div className='header'>
      <div className='logoContainer'>
        <Link to='/'>  <FcHome className='logo' /> </Link>
      </div>
      <div className='SearchContainer'>
        <SearchBar />
        <FaUserCircle className='logo userLogo'/>
      </div>

    </div>
  )
}
