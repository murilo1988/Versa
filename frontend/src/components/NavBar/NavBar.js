import React from "react";

import { NavLink, Link } from "react-router-dom";

// icons
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
  BsJustify,
} from "react-icons/bs";
// CSS
import styles from "./NavBar.module.css";

// Hooks
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const { auth } = useAuth();

  const { user } = useSelector((state) => state.auth);

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
            <input type='text' placeholder='Pesquisar' />
          </form>
        </div>
        <div className={styles.nav_links}>
          {auth ? (
            <>
              <div className={styles.nav_icons}>
                <NavLink to='/'>
                  <BsHouseDoorFill />
                </NavLink>
                <div className={styles.dropdown}>
                  <div className={styles.menu_dropdown}>
                    <div className={styles.menu_icon}>
                      <NavLink>
                        <BsJustify />
                      </NavLink>
                      <div className={styles.submenu_dropdown}>
                        <div className={styles.menu_item}>
                          <NavLink>Home</NavLink>
                          <NavLink>Photos</NavLink>
                          <NavLink>Settings</NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <NavLink to='/login'>Login</NavLink>
              </div>
              <div>
                <NavLink to='/register'>Sign up</NavLink>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
