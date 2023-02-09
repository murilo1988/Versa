import React from "react";

import { NavLink } from "react-router-dom";

// CSS
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.Navbar_brand}>
        <NavLink to="/">
          <h3>Versa</h3>
        </NavLink>
      </div>
      <div className={styles.Navbar_links}>
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <NavLink to="/login">Sign in</NavLink>
        </div>
        <div>
          <NavLink to="/register">Sign up</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
