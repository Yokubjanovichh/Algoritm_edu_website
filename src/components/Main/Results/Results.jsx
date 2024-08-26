import React from "react";
import graduate from "../../../assets/svg/graduatedStudents.svg";
import findWorksimg from "../../../assets/svg/findWorks.svg";
import salary from "../../../assets/svg/salary.svg";
import star from "../../../assets/svg/star.svg";
import styles from "./Results.module.css";

export default function Results() {
  return (
    <div className={styles.results} id="bizHaqimizda">
      <h1>
        <span>Algoritm</span> natijasi raqamlarda
      </h1>
      <div className={styles.resultsWrapper}>
        <div className={styles.graduated}>
          <p className={styles.graduatedItemHeading}>1300+</p>
          <p className={styles.graduatedItemParagraph}>
            Shu kungacha bitirgan o‘quvchilar
          </p>
          <img src={graduate} alt="graduate" />
        </div>

        <div className={styles.findJob}>
          <p className={styles.graduatedItemHeading}>400 dona</p>
          <p className={styles.graduatedItemParagraph}>
            Shu kungacha o‘quvchilarning ishga joylashishi
          </p>
          <img src={findWorksimg} alt="graduate" />
        </div>

        <div className={styles.salary}>
          <p>
            6 oylik tajribasi bor <img src={star} alt="star" />
          </p>
          <p>bitiruvchilarning o‘rtacha oyligi</p>
          <div className={styles.directionSalary}>
            <div className={styles.directionLeft}>
              <div className={styles.directions}>
                <div className={styles.directionName}>
                  <p>Dasturlash</p>
                  <p>Dizayn</p>
                </div>
                <div className={styles.directionCash}>
                  <p>$321</p>
                  <p>$400</p>
                </div>
              </div>
              <p className={styles.graduatedItemParagraph}>
                Zamonaviy kasblarda tajriba oshgani sari oylik ham doimiy oshib
                boraveradi.
              </p>
            </div>
            <img src={salary} alt="salary" />
          </div>
        </div>
      </div>
    </div>
  );
}
