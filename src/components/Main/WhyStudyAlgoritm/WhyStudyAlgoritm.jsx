import React from "react";
import lightning from "../../../assets/svg/whyStudy1.svg";
import cactus from "../../../assets/svg/whyStudy.svg";
import star from "../../../assets/svg/whyStudy3.svg";
import sertifikat from "../../../assets/svg/whyStudy4.svg";
import styles from "./WhyStudyAlgoritm.module.css";

export default function WhyStudyAlgoritm() {
  return (
    <div className={styles.wrapper}>
      <h1>
        Nima uchun <span>Algoritmda</span> o‘qish kerak?
      </h1>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <div className={styles.boxTetx}>
            <h1>Doimiy musobaqalar</h1>
            <p>
              Dasturlash, dizayn sohalari bo‘yicha haftalik sovrinli
              musobaqalar.
            </p>
          </div>
          <div className={styles.boxImg}>
            <img src={lightning} alt="lightning" />
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.boxTetx}>
            <h1>Ish taklif qilish kafolati </h1>
            <p>
              Algoritm kurslarni muvaffaqiyatli bitirgan o‘quvchilarga ish
              taklif qilish kafolatini beradi.
            </p>
          </div>
          <div className={styles.boxImg}>
            <img src={cactus} alt="cactus" />
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.boxTetx}>
            <h1>Sifatli ta'lim</h1>
            <p>
              Doimiy yangilanib boradigan kurslar va katta tajribaga ega
              ustozlar.
            </p>
          </div>
          <div className={styles.boxImg}>
            <img src={star} alt="star" />
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.boxTetx}>
            <h1>Sertifikat</h1>
            <p>
              Kursni muvaffaqiyatli tamomlagan o‘quvchilar Algoritmning
              sertifikatiga ega bo‘ladi.
            </p>
          </div>
          <div className={styles.boxImg}>
            <img src={sertifikat} alt="sertifikat" />
          </div>
        </div>
      </div>
    </div>
  );
}
