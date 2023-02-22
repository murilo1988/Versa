import React from "react";

import { NavLink, Link } from "react-router-dom";

// icons
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
  BsJustify,
  BsBoxArrowRight,
  BsXLg,
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
  const [openDropdown, setOpenDropdown] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const handleDropdownMenu = () => {
    setOpenDropdown(!openDropdown);
  };

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
                {user && (
                  <div>
                    <NavLink to={`/users/${user.id}`}>
                      <BsFillCameraFill />
                    </NavLink>
                  </div>
                )}
                <div>
                  <NavLink to='/profile'>
                    <BsFillPersonFill />
                  </NavLink>
                </div>
                <div>
                  <NavLink to='/logout'>
                    <BsXLg />
                  </NavLink>
                </div>
              </div>
              <div className={styles.dropdown}>
                <button onClick={(e) => handleDropdownMenu(e.target)}>
                  <span className={styles.nav_icons}>
                    <BsJustify />
                  </span>
                </button>
                {openDropdown && (
                  <div className={styles.dropdown_content}>
                    <div className={styles.dropdown_itens}>
                      <NavLink>Home</NavLink>
                      <NavLink>Photos</NavLink>
                      <NavLink>Profile</NavLink>
                      <NavLink>Logout</NavLink>
                    </div>
                  </div>
                )}
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
