import React from 'react'
import './header.css'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import Hometheme from './Themes/Hometheme'
import NFTheme from './Themes/NFTheme'
import STheme from './Themes/Stheme'
import ContactTheme from './Themes/Contacttheme'
import TeamTheme, { UsefulTheme } from './Themes/TeamTheme'

const Header = () => {
  return (
    <>

    <header>
        <div className="logodiv">
        <Link to='/'>HACKATHON</Link>

        </div>
        <div className="theme">
          <Outlet/>
          <Routes>
            <Route path='/' element={<Hometheme/>}></Route>
            <Route path='*' element={<NFTheme/>}></Route>
            <Route path='/Success' element={<STheme/>}></Route>
            <Route path='/Contact' element={<ContactTheme/>}></Route>
            <Route path='/Team' element={<TeamTheme/>}></Route>
            <Route path='/Useful' element={<UsefulTheme/>}></Route>
          </Routes>
        </div>
        <div className="navig">

            <nav>

              <Link className='Link' to='/Useful'>Usefull</Link>
              <Link className='Link' to='/Success'>Stories</Link>

                    
            </nav>
        </div>
    </header>

    </>
  )
}

export default Header;