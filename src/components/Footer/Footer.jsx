import React from "react";
import { Link } from "react-scroll";
import tg from "../../assets/svg/Telegram.svg";
import Youtube from "../../assets/svg/Youtube.svg";
import Facebook from "../../assets/svg/FaceBook.svg";
import Instagram from "../../assets/svg/Instagram.svg";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerTop}>
        <div className={styles.footerTopLeft}>
          <div className={styles.footerTopLeftItem}>
            <Link
              activeClass={styles.active || "active"}
              to="bizHaqimizda"
              spy={true}
              offset={-100}
              smooth={true}
              duration={400}
            >
              Biz haqimizda
            </Link>

            <Link
              activeClass={styles.active || "active"}
              to="kurslar"
              spy={true}
              offset={-120}
              smooth={true}
              duration={400}
            >
              Kurslar
            </Link>
          </div>

          <div className={styles.footerTopLeftItem}>
            <Link
              activeClass={styles.active || "active"}
              to="bizBilanAloqa"
              spy={true}
              offset={-120}
              smooth={true}
              duration={400}
            >
              Biz bilan bog‘lanish
            </Link>

            <a>Foydalanuvchi shartnomasi</a>
          </div>

          <div className={styles.footerTopLeftItem}>
            <Link
              activeClass={styles.active || "active"}
              to="mentors"
              spy={true}
              offset={-120}
              smooth={true}
              duration={400}
            >
              O‘qituvchilar
            </Link>
            <Link
              activeClass={styles.active || "active"}
              to="ourLocation"
              spy={true}
              offset={-120}
              smooth={true}
              duration={400}
            >
              Bizning Manzillar
            </Link>
          </div>

          <div className={styles.footerTopLeftItem}>
            <a href="Tel: +998911771880">+998 91-177-18-80</a>
            <a href="Tel: +99832771880">+998 93-277-18-80</a>
          </div>
        </div>
        <div className={styles.cosial}>
          <a href="https://t.me/algoritm_edu">
            <img src={tg} alt="telegram" />
          </a>
          <a href="https://www.youtube.com/@algoritm_edu">
            <img src={Youtube} alt="Youtube" />
          </a>{" "}
          <a href="https://facebook.com/algoritmedu">
            <img src={Facebook} alt="Facebook" />
          </a>{" "}
          <a href="https://instagram.com/algoritm_edu">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomLeft}>
          <p>©Algoritm 2024</p>
          <p>|</p>
          <a>Privacy Policy</a>
          <p>|</p>
          <a>Certified Policy</a>
          <p>|</p>
          <a>Legal</a>
        </div>
        <div className={styles.cosial}>
          <a href="https://t.me/algoritm_edu">
            <img src={tg} alt="telegram" />
          </a>
          <a href="https://www.youtube.com/@algoritm_edu">
            <img src={Youtube} alt="Youtube" />
          </a>{" "}
          <a href="https://facebook.com/algoritmedu">
            <img src={Facebook} alt="Facebook" />
          </a>{" "}
          <a href="https://instagram.com/algoritm_edu">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
}
