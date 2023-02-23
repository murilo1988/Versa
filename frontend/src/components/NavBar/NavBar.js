import React from "react";

import { NavLink, Link } from "react-router-dom";

// icons
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
  BsJustify,
  BsXLg,
} from "react-icons/bs";
// CSS
import styles from "./NavBar.module.css";

// Hooks
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//Redux
import { logout, reset } from "../../slices/authSlice";

function NavBar() {
  const { auth } = useAuth();
  const [openDropdown, setOpenDropdown] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleDropdownMenu = () => {
    setOpenDropdown(!openDropdown);
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate("/login");
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
                  <NavLink onClick={handleLogout}>
                    <BsXLg />
                  </NavLink>
                </div>
              </div>
              <div className={styles.dropdown}>
                <div>
                  <button onClick={(e) => handleDropdownMenu(e.target)}>
                    <NavLink className={styles.nav_icons}>
                      <BsJustify />
                    </NavLink>
                  </button>
                </div>
                {openDropdown && (
                  <div className={styles.dropdown_content}>
                    <div className={styles.dropdown_itens}>
                      <NavLink> Home</NavLink>
                      <NavLink>Photos</NavLink>
                      <NavLink>Profile</NavLink>
                      <NavLink onClick={handleLogout}>Logout</NavLink>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <div className={styles.in_icons}>
                <div>
                  <NavLink to='/login'>Login</NavLink>
                </div>
                <div>
                  <NavLink to='/register'>Sign up</NavLink>
                </div>
              </div>
              <div className={styles.dropdown}>
                <div>
                  <button onClick={(e) => handleDropdownMenu(e.target)}>
                    <NavLink className={styles.in_icons}>
                      <BsJustify />
                    </NavLink>
                  </button>
                </div>
                {openDropdown && (
                  <div className={styles.dropdown_content}>
                    <div className={styles.dropdown_itens}>
                      <NavLink to='/login'> Sign in</NavLink>
                      <NavLink to='register'>Sign up</NavLink>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
