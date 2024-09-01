import React, { useState, useEffect } from "react";
import NavbarNavigation from "./NavbarNavigation/NavbarNavigation";
import AlgoritmLogo from "../../assets/svg/algoritm-logo.svg";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div
      className={`${styles.navbarContainer} ${
        scrolled ? styles.navbarContainerScroll : ""
      }`}
    >
      <div className={`${styles.navbarWrapper} `}>
        <a href="#">
          <img src={AlgoritmLogo} alt="main logo" />
        </a>
        <div className={styles.navbarNavigation}>
          <div className={styles.desktop}>
            <NavbarNavigation />
          </div>
          <a href="tel:+998932771880">+998 93 277 18 80</a>
        </div>
      </div>

      <div className={styles.mobile}>
        <NavbarNavigation />
      </div>
    </div>
  );
}
