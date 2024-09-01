import React, { useState } from "react";
import Slider from "react-slick";
import slideFull from "../../../assets/svg/slideFull.svg";
import slideEmpty from "../../../assets/svg/slideEmpty.svg";
import carousePhoto1 from "../../../assets/img/carousePhoto1.webp";
import carousePhoto2 from "../../../assets/img/carousePhoto2.webp";
import carousePhoto3 from "../../../assets/img/carousePhoto3.webp";
import carousePhoto4 from "../../../assets/img/carousePhoto4.webp";
import styles from "./Carousel.module.css";

export default function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
  };

  return (
    <div className={styles.carouselWrapper}>
      <Slider {...settings}>
        <div className={`${styles.carousel} ${styles.carousel1}`}>
          <h1>
            <span className={styles.goldBorderWrap}>
              1300{" "}
              <span
                style={{ width: "90%" }}
                className={styles.goldBorderItem}
              ></span>
            </span>
            dan ortiq bitiruvchilar safiga qo‘shiling!
          </h1>
          <p>
            Shu kunga qadar Algoritm 1300 dan ortiq muvaffaqiyatli
            bitiruvchilarga ta‘lim bergan. Ularning 400 nafari doimiy tarzda
            ishli bo‘lib kelmoqda.
          </p>
          <img
            src={carousePhoto1}
            alt="carousePhoto1"
            className={styles.carousePhoto}
          />
        </div>
        <div className={`${styles.carousel} ${styles.carousel2}`}>
          <h1>
            Yangi imkoniyatlar{" "}
            <span className={styles.goldBorderWrap}>
              sizni{" "}
              <span
                style={{ width: "100%" }}
                className={styles.goldBorderItem}
              ></span>
            </span>
            kutmoqda
          </h1>
          <p>
            Algoritm o’quv markazi ta'lim va rivojlanish uchun eng yaxshi
            imkoniyatlar maskani
          </p>
          <img
            src={carousePhoto2}
            alt="carousePhoto2"
            className={styles.carousePhoto}
          />
        </div>
        <div className={`${styles.carousel} ${styles.carousel3}`}>
          <h1>
            <span className={styles.goldBorderWrap}>
              Sertifikat{" "}
              <span
                style={{ width: "95%" }}
                className={styles.goldBorderItem}
              ></span>
            </span>
            va malaka oshirish!
          </h1>
          <p>
            O'quv markazlarimizda sizga kerakli malaka oshirish va
            sertifikatlash dasturlari bilan yordam beramiz, bu sizning
            maqsadlaringizga erishishingizda qo'shimcha qiymat yaratadi.
          </p>
          <img
            src={carousePhoto3}
            alt="carousePhoto3"
            className={styles.carousePhoto}
          />
        </div>
        <div className={`${styles.carousel} ${styles.carousel4}`}>
          <h1>
            Foydali{" "}
            <span className={styles.goldBorderWrap}>
              bilimlar
              <span
                style={{ width: "95%" }}
                className={styles.goldBorderItem}
              ></span>
            </span>{" "}
            va tajribalar
          </h1>
          <p>
            Yangi ko'nikmalarni o'rganing va amaliy tajribalarni qo'lga
            kiritishingiz mumkin. Sizning professional rivojlanishingizga yordam
            beramiz
          </p>
          <img
            src={carousePhoto4}
            alt="carousePhoto4"
            className={styles.carousePhoto}
          />
        </div>
      </Slider>
      <div className={styles.slides}>
        <img src={activeSlide === 0 ? slideFull : slideEmpty} alt="slide1" />
        <img src={activeSlide === 1 ? slideFull : slideEmpty} alt="slide2" />
        <img src={activeSlide === 2 ? slideFull : slideEmpty} alt="slide3" />
        <img src={activeSlide === 3 ? slideFull : slideEmpty} alt="slide4" />
      </div>
    </div>
  );
}
