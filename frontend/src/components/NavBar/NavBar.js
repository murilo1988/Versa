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
            <h3>Versa</h3>
          </Link>
        </div>
        <div>
          <form className={styles.nav_search_form}>
            <BsSearch />
            <input type='text' />
          </form>
        </div>
        <div className={styles.nav_links}>
          <div>
            <span>
              <NavLink to='/'>Home</NavLink>
            </span>
          </div>
          <div>
            <span>
              <NavLink to='/login'>Sign in</NavLink>
            </span>
          </div>
          <div>
            <span>
              <NavLink to='/register'>Sign up</NavLink>
            </span>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
