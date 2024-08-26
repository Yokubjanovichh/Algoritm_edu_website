import React from "react";
import { Link } from "react-scroll";
import styles from "./NavbarNavigation.module.css";

export default function NavbarNavigation() {
  return (
    <nav className={styles.navbarNavigation}>
      <Link
        activeClass={styles.active || "active"}
        to="boshSahifa"
        spy={true}
        offset={-150}
        smooth={true}
        duration={300}
      >
        Bosh sahifa
      </Link>
      <Link
        activeClass={styles.active || "active"}
        to="bizHaqimizda"
        spy={true}
        offset={-120}
        smooth={true}
        duration={300}
      >
        Biz haqimizda
      </Link>
      <Link
        activeClass={styles.active || "active"}
        to="kurslar"
        spy={true}
        offset={-120}
        smooth={true}
        duration={300}
      >
        Kurslar
      </Link>
    </nav>
  );
}
