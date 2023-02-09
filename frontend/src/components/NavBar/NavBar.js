import React from "react";

import { NavLink } from "react-router-dom";

// CSS
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.Navbar_brand}>
        <NavLink>
          <h3>Versa</h3>
        </NavLink>
      </div>
      <div className={styles.Navbar_links}>
        <div>
          <NavLink>Home</NavLink>
        </div>
        <div>
          <NavLink>Sign in</NavLink>
        </div>
        <div>
          <NavLink>Sign up</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
