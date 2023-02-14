import React from 'react'

import { NavLink, Link } from 'react-router-dom'

// icons
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
} from 'react-icons/bs'
// CSS
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.nav_brand}>
          <Link to='/'>
            <strong>Versa</strong>
          </Link>
        </div>
        <div>
          <form className={styles.nav_search_form}>
            <BsSearch />
            <input type='text' />
          </form>
        </div>
        <div className={styles.nav_links}>
          {/* <div>
            <NavLink to='/'>Home</NavLink>
          </div> */}
          <div>
            <NavLink to='/login'>Sign in</NavLink>
          </div>
          <div>
            <NavLink to='/register'>Sign up</NavLink>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
