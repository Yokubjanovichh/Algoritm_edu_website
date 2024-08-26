import React from "react";
import Carousel from "./Header-carousel/Carousel";
import ContactUs from "./header-contact-us/contactUs";
import styles from "./HeaderStyles.module.css";

export default function Header() {
  return (
    <header className={styles.header} id="boshSahifa">
      <Carousel />
      <ContactUs />
    </header>
  );
}
