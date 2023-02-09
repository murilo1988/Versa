import React from "react";

import { NavLink } from "react-router-dom";

// CSS
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_brand}>
        <NavLink to="/">
          <h3>Versa</h3>
        </NavLink>
      </div>
      <div className={styles.navbar_links}>
        <div>
          <span>
            <NavLink to="/">Home</NavLink>
          </span>
        </div>
        <div>
          <span>
            <NavLink to="/login">Sign in</NavLink>
          </span>
        </div>
        <div>
          <span>
            <NavLink to="/register">Sign up</NavLink>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
