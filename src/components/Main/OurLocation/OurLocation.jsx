import React from "react";
import styles from "./OutLocation.module.css";

export default function OurLocation() {
  return (
    <div className={styles.ourLocation} id="ourLocation">
      <h1>Bizning Manzillar</h1>
      <div className={styles.ourLocationWrapper}>
        <div className={styles.location}>
          <iframe
            src="https://yandex.uz/map-widget/v1/?ll=71.674712%2C41.003713&mode=whatshere&whatshere%5Bpoint%5D=71.674846%2C41.003981&whatshere%5Bzoom%5D=17&z=18.87"
            width="100%" // Kenglikni butunlay to'ldiradi
            height="100%" // Balandlik 400px qilib berildi
            allowFullScreen
            style={{ outline: "none", border: "none" }}
          ></iframe>
          <div className={styles.locationItem}></div>
        </div>
        <div className={styles.address}>
          <div className={styles.addressItem}>
            <h1>Namangan shahar, Chorsu Alisher Navoiy ko'chasi</h1>
            <div className={styles.addressDesc}>
              <div className={styles.addressDescItem}>
                <p>Mo‘ljal</p>
                <p>Kosmos milliy taomlar ro'parasida</p>
              </div>
              <div className={styles.addressDescItem}>
                <p>Ish vaqti</p>
                <p>06:00 - 18:00</p>
              </div>
              <div className={styles.addressDescItem}>
                <p>Telefon</p>
                <p>
                  <a href="Tel: +998911771880">+998 91-177-18-80</a>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.addressItem}>
            <h1>Namangan shahar, Chorsu Xodjayev ko'chasi 38 uy</h1>
            <div className={styles.addressDesc}>
              <div className={styles.addressDescItem}>
                <p>Mo‘ljal</p>
                <p>Davlat xizmatlari 2-qavati</p>
              </div>
              <div className={styles.addressDescItem}>
                <p>Ish vaqti</p>
                <p>08:00 - 20:00</p>
              </div>
              <div className={styles.addressDescItem}>
                <p>Telefon</p>
                <p>
                  <a href="Tel: +998932771880">+998 93-277-18-80</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
