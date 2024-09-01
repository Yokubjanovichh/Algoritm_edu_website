import React from "react";
import star from "../../../assets/svg/star.svg";
import courses1 from "../../../assets/img/courses-1.webp";
import courses2 from "../../../assets/img/courses-2.webp";
import courses3 from "../../../assets/img/courses-3.webp";
import courses4 from "../../../assets/img/courses-4.webp";
import courses5 from "../../../assets/img/courses-5.webp";
import courses6 from "../../../assets/img/courses-6.webp";
import styles from "./Courses.module.css";

export default function Courses() {
  return (
    <div className={styles.courses} id="kurslar">
      <h1>
        Zamonaviy Kasbga yo‘naltirilgan o‘quv kurslar{" "}
        <img src={star} alt="star" />
      </h1>

      <div className={styles.boxes}>
        <div className={styles.box}>
          <div className={styles.boxTetx}>
            <h1>Web dasturlash</h1>
            <p>HTML, CSS, Boottrap, JavaScript, React Js, Node Js</p>
          </div>
          <img src={courses1} alt="courses1" />
        </div>
        <div className={styles.box}>
          <div className={styles.boxTetx}>
            <h1>Grafik dizayn</h1>
            <p>Adobe Photoshop, Illustrator, Xd, Coreldraw</p>
          </div>
          <img src={courses2} alt="courses2" />
        </div>
        <div className={styles.box}>
          <div className={styles.boxTetx}>
            <h1>Backend</h1>
            <p>Python, Ruby, SQL, C++, C#</p>
          </div>
          <img src={courses3} alt="courses3" />
        </div>
        <div className={styles.box}>
          <div className={styles.boxTetx}>
            <h1>Sun’iy intellekt</h1>
            <p>Python</p>
          </div>
          <img src={courses4} alt="courses4" />
        </div>
        <div className={styles.box}>
          <div className={styles.boxTetx}>
            <h1>Scratch</h1>
            <p>Scratch, Typing club</p>
          </div>
          <img src={courses5} alt="courses5" />
        </div>
        <div className={styles.box}>
          <div className={styles.boxTetx}>
            <h1>Kompyuter savodxonligi</h1>
            <p>Microsoft Word, Excel, Power Point, Canva</p>
          </div>
          <img src={courses6} alt="courses6" />
        </div>
      </div>
    </div>
  );
}
