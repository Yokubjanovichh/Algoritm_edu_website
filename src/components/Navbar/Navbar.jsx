import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarNavigation from "./NavbarNavigation/NavbarNavigation";
import AlgoritmLogo from "../../assets/svg/algoritm-logo.svg";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.navbarContainer} ${
        scrolled ? styles.navbarContainerScroll : ""
      }`}
    >
      <div
        className={`${styles.navbarWrapper} ${scrolled ? styles.scrolled : ""}`}
      >
        <a href="#">
          <img src={AlgoritmLogo} alt="main logo" />
        </a>
        <div className={styles.navbarNavigation}>
          <div className={styles.desktop}>
            <NavbarNavigation />
          </div>
          <Link to="/certificates">Sertifikatlar</Link>
        </div>
      </div>

      <div className={styles.mobile}>
        <NavbarNavigation />
      </div>
    </div>
  );
}
