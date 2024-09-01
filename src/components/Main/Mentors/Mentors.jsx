import React from "react";
import ShavkatAka from "../../../assets/img/JannatimAkam.webp";
import JahongirAka from "../../../assets/img/JahongirAka.webp";
import AzimjonAka from "../../../assets/img/AzimjonAka.webp";
import Uzim from "../../../assets/img/uzim.webp";
import DilmurodAka from "../../../assets/img/DilmurodAka.webp";
import Abdulaziz from "../../../assets/img/Abdulaziz.webp";
import Ozodbek from "../../../assets/img/Ozodbek.webp";
import Sancho from "../../../assets/img/Sancho.webp";
import Utkir from "../../../assets/img/utkir.webp";
import Dido from "../../../assets/img/Dido.webp";
import Jasmina from "../../../assets/img/Jasmina.webp";
import Itkids from "../../../assets/img/ItKids.webp";
// icons
import html from "../../../assets/svg/html.svg";
import css from "../../../assets/svg/css.svg";
import js from "../../../assets/svg/js.svg";
import react from "../../../assets/svg/react.svg";
import java from "../../../assets/svg/java.svg";
import materialUi from "../../../assets/svg/material-ui.svg";
import phyton from "../../../assets/svg/python.svg";
import phyton2 from "../../../assets/svg/phyton2.svg";
import ai from "../../../assets/svg/ai.svg";
import nodejs from "../../../assets/svg/nodejs.svg";
import mongodb from "../../../assets/svg/mongodb.svg";
import boostrap from "../../../assets/svg/boostrap.svg";
import figma from "../../../assets/svg/figma.svg";
import database from "../../../assets/svg/database.svg";
import ilustrator from "../../../assets/svg/illustrator.svg";
import photoshop from "../../../assets/svg/photoshop.svg";
import scratch from "../../../assets/svg/scratch.svg";
import xd from "../../../assets/svg/xd.svg";
import xd2 from "../../../assets/svg/xd2.svg";
import ae from "../../../assets/svg/ae.svg";
import internet from "../../../assets/svg/internet.svg";
import cplus from "../../../assets/svg/cplus.svg";

import styles from "./Mentors.module.css";

export default function Mentors() {
  return (
    <div className={styles.mentors} id="mentors">
      <h1>Bizning Mentorlar</h1>
      <div className={styles.mentorsWrapper}>
        <div className={styles.mentor}>
          <img src={ShavkatAka} alt="ShavkatAka" />
          <div className={styles.mentorText}>
            <h1 className={styles.ceoName}>Shavkat Usmanov</h1>
            <p className={styles.ceoDesc}>Founder Algoritm Ta’lim</p>
          </div>
        </div>

        <div className={styles.mentor}>
          <img src={JahongirAka} alt="JahongirAka" />
          <div className={styles.mentorText}>
            <h1 className={styles.ceoName}>Jahongir Yusupov</h1>
            <p className={styles.ceoDesc}>Proyekt Menejer</p>
          </div>
        </div>

        <div className={styles.mentor}>
          <img src={AzimjonAka} alt="AzimjonAka" />
          <div className={`${styles.mentorText} ${styles.mentorBox}`}>
            <div className={styles.mentorHeader}>
              <h1>Azimjon Jalilov</h1>
              <p className={styles.mentorExper}>
                2+ yillik tajribaga ega Front-end dasturchi.
              </p>
              <p className={styles.mentorDesc}>
                Frontend — bu veb-saytning siz ko‘radigan qismi, masalan,
                tugmalar, rasmlar va matnlar. U saytni chiroyli va qulay
                ishlashini ta’minlaydi.
              </p>
            </div>
            <div className={styles.technologies}>
              <img className={styles.html} src={html} alt="html" />
              <img className={styles.css} src={css} alt="css" />
              <img className={styles.boostrap} src={boostrap} alt="boostrap" />
              <img className={styles.js} src={js} alt="js" />
              <img className={styles.react} src={react} alt="react" />
            </div>
          </div>
        </div>

        <div className={styles.mentor}>
          <img src={Uzim} alt="yokubjanovich" />
          <div className={`${styles.mentorText} ${styles.mentorBox}`}>
            <div className={styles.mentorHeader}>
              <h1>Yuldashev Murodulla</h1>
              <p className={styles.mentorExper}>
                2+ yillik tajribaga ega Front-end dasturchi.
              </p>
              <p className={styles.mentorDesc}>
                Frontend — bu veb-saytning foydalanuvchi ko'radigan qismi. U
                saytning dizayni va ishlashini ta'minlaydi.
              </p>
            </div>
            <div className={styles.technologies}>
              <img className={styles.html} src={html} alt="html" />
              <img className={styles.css} src={css} alt="css" />
              <img className={styles.js} src={js} alt="js" />
              <img className={styles.react} src={react} alt="react" />
            </div>
          </div>
        </div>

        <div className={styles.mentor}>
          <img src={Sancho} alt="Sancho" />
          <div className={`${styles.mentorText} ${styles.mentorBox}`}>
            <div className={styles.mentorHeader}>
              <h1>Xudoyorov Sanjar</h1>
              <p className={styles.mentorExper}>
                3+ yillik tajribaga ega Kiberxavfsizlik dasturchi.
              </p>
              <p className={styles.mentorDesc}>
                Kiberxavfsizlik — bu kompyuter tizimlari va ma'lumotlarni
                hujumlardan himoya qilish jarayonidir. U kirish nazorati,
                shifrlash va xavfsizlik tahlilini o'z ichiga olib, cyber
                hujumlardan saqlanishni maqsad qiladi.
              </p>
            </div>
            <div className={styles.technologies}>
              <img className={styles.database} src={cplus} alt="cplus" />
              <img className={styles.phyton} src={phyton} alt="phyton" />
              <img className={styles.security} src={internet} alt="internet" />
              <img className={styles.phyton} src={database} alt="database" />
            </div>
          </div>
        </div>

        <div className={styles.mentor}>
          <img src={Ozodbek} alt="Ozodbek" />
          <div className={`${styles.mentorText} ${styles.mentorBox}`}>
            <div className={styles.mentorHeader}>
              <h1>Ozodbek Akramov</h1>
              <p className={styles.mentorExper}>
                2+ yillik tajribaga ega suniy intelekt dasturchi.
              </p>
              <p className={styles.mentorDesc}>
                Sun'iy intellekt dasturchi — bu sun'iy intellekt tizimlarini
                ishlab chiqadigan mutaxassis. U mashinalarga bilim olish, tilni
                tushunish va ko'rish qobiliyatlarini beradi.
              </p>
            </div>
            <div className={styles.technologies}>
              <img className={styles.phyton} src={phyton} alt="phyton" />
              <img className={styles.ai} src={ai} alt="ai" />
            </div>
          </div>
        </div>

        <div className={styles.mentor}>
          <img src={Dido} alt="Dido" />
          <div className={`${styles.mentorText} ${styles.mentorBox}`}>
            <div className={styles.mentorHeader}>
              <h1>Kenjaboyeva Diyora</h1>
              <p className={styles.mentorExper}>
                1,5+ yillik tajribaga ega Full stack dasturchi.
              </p>
              <p className={styles.mentorDesc}>
                Frontend texnologiyalari — bu veb-saytning foydalanuvchi bilan
                to'g'ridan-to'g'ri aloqasini ta'minlaydigan asboblar. Ular
                yordamida saytning dizayni, ishlash tartibi va interaktivligi
                yaratiladi.
              </p>
            </div>
            <div className={styles.technologies}>
              <img className={styles.html} src={html} alt="html" />
              <img className={styles.css} src={css} alt="css" />
              <img className={styles.js} src={js} alt="js" />
              <img className={styles.react} src={react} alt="react" />
              <img className={styles.scratch} src={scratch} alt="scratch" />
            </div>
          </div>
        </div>

        <div className={styles.mentor}>
          <img src={Utkir} alt="Utkir" />
          <div className={`${styles.mentorText} ${styles.mentorBox}`}>
            <div className={styles.mentorHeader}>
              <h1>Utkir Giyosov</h1>
              <p className={styles.mentorExper}>
                4+ yillik tajribaga ega Grafik Dizayner
              </p>
              <p className={styles.mentorDesc}>
                Grafik dizayner — vizual kommunikatsiya uchun grafik
                tasvirlarni, logotiplarni, reklamalarni va boshqa dizayn
                elementlarini yaratadigan mutaxassisdir. Grafik dizaynerlar
                brend identifikatsiyasi, marketing materiallari, veb-sayt
                dizayni va boshqa ko'plab sohalarda ishlaydi.
              </p>
            </div>
            <div className={styles.technologies}>
              <img className={styles.photo} src={photoshop} alt="photoshop" />
              <img className={styles.photo} src={ilustrator} alt="ilustrator" />
              <img className={styles.photo} src={xd} alt="xd" />
              <img className={styles.photo} src={figma} alt="figma" />
              <img className={styles.photo} src={xd2} alt="xd2" />
              <img className={styles.photo} src={ae} alt="ae" />
            </div>
          </div>
        </div>

        <div className={styles.mentor}>
          <img src={Jasmina} alt="Jasmina" />
          <div className={`${styles.mentorText} ${styles.mentorBox}`}>
            <div className={styles.mentorHeader}>
              <h1>Ikromova Jasmina</h1>
              <p className={styles.mentorExper}>
                1+ yillik tajribaga ega Frontend va IT-kids dasturchi va
                mentori.
              </p>
              <p className={styles.mentorDesc}>
                IT-Kids — bu bolalar uchun Scratch va Python kabi dasturlash
                tillarini o'rganishga yo'naltirilgan dastur. Ular orqali bolalar
                texnologiya asoslarini o'rganib, o'zlarining birinchi
                loyihalarini yaratishni boshlaydilar.
              </p>
            </div>
            <div className={styles.technologies}>
              <img className={styles.html} src={html} alt="html" />
              <img className={styles.css} src={css} alt="css" />
              <img className={styles.boostrap} src={boostrap} alt="boostrap" />
              <img className={styles.js} src={js} alt="js" />
              <img className={styles.phyton} src={phyton} alt="phyton" />
              <img className={styles.scratch} src={scratch} alt="scratch" />
            </div>
          </div>
        </div>

        <div className={styles.mentor}>
          <img src={DilmurodAka} alt="DilmurodAka" />
          <div className={`${styles.mentorText} ${styles.mentorBox}`}>
            <div className={styles.mentorHeader}>
              <h1>Dehqanov Dilmurod</h1>
              <p className={styles.mentorExper}>
                2,5+ yillik tajribaga ega Full stack dasturchi.
              </p>
              <p className={styles.mentorDesc}>
                Frontend texnologiyalari veb-saytlarning va veb-ilovalarining
                foydalanuvchi interfeysini yaratishda ishlatiladigan
                texnologiyalardir.
              </p>
            </div>
            <div className={styles.technologies}>
              <img className={styles.html} src={html} alt="html" />
              <img className={styles.css} src={css} alt="css" />
              <img className={styles.js} src={js} alt="js" />
              <img className={styles.react} src={react} alt="react" />
              <img className={styles.java} src={java} alt="java" />
              <img className={styles.phyton} src={database} alt="database" />
            </div>
          </div>
        </div>

        <div className={styles.mentor}>
          <img src={Abdulaziz} alt="Abdulaziz" />
          <div className={`${styles.mentorText} ${styles.mentorBox}`}>
            <div className={styles.mentorHeader}>
              <h1>Ikromov Abdulaziz</h1>
              <p className={styles.mentorExper}>
                2+ yillik tajribaga ega Backend dasturchi.
              </p>
              <p className={styles.mentorDesc}>
                Frontend texnologiyalari veb-saytlarning va veb-ilovalarining
                foydalanuvchi interfeysini yaratishda ishlatiladigan
                texnologiyalardir.
              </p>
            </div>
            <div className={styles.technologies}>
              <img className={styles.html} src={html} alt="html" />
              <img className={styles.css} src={css} alt="css" />
              <img className={styles.boostrap} src={boostrap} alt="boostrap" />
              <img className={styles.js} src={js} alt="js" />
              <img className={styles.database} src={nodejs} alt="nodejs" />
              <img className={styles.database} src={mongodb} alt="mongodb" />
            </div>
          </div>
        </div>

        <div className={styles.mentor}>
          <img src={Itkids} alt="Itkids" />
          <div className={`${styles.mentorText} ${styles.mentorBox}`}>
            <div className={styles.mentorHeader}>
              <h1>Hiloliddinova Madina</h1>
              <p className={styles.mentorExper}>
                2+ yillik tajribaga ega Kiberxavfsizlik va IT Kids Mentori
              </p>
              <p className={styles.mentorDesc}>
                Kiberxavfsizlik va IT Kids — bu bolalarga Scratch va Python
                orqali dasturlashni va axborot xavfsizligi asoslarini
                o'rgatadigan mutaxassis.
              </p>
            </div>
            <div className={styles.technologies}>
              <img className={styles.phyton} src={phyton} alt="phyton" />
              <img className={styles.security} src={phyton2} alt="phyton2" />
              <img className={styles.scratch} src={scratch} alt="scratch" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
