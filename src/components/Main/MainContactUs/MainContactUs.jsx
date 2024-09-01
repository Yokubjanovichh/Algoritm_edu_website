import React, { useState } from "react";
import { PatternFormat } from "react-number-format";
import { enqueueSnackbar as EnSn } from "notistack";
import star from "../../../assets/svg/star.svg";
import styles from "./MainContactUs.module.css";

const BOT_TOKEN = "7413687047:AAH_Ta0SPTQlARsmbCALsjt4S35wXArdp_Q";
const YOUR_CHAT_ID = "-4520159921";

export default function MainContactUs() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [disabled, setDisable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      EnSn("Ismingizni kiritishingiz shart", { variant: "error" });
      return;
    }

    if (!phoneNumber || phoneNumber.trim().length !== 9) {
      EnSn("Telefon raqami to'g'ri kiritilmagan", { variant: "error" });
      return;
    }

    setDisable(true);

    const requestBody = {
      chat_id: YOUR_CHAT_ID,
      text: `
      \nIsm: ${name}
      \nTelefon-raqami: ${phoneNumber}
      `,
    };

    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Xatolik yuz berdi");
        }
        return response.json();
      })
      .then((data) => {
        EnSn("Xabaringiz muvafiqiyatli junatildi", { variant: "success" });
        setName("");
        setPhoneNumber("");
        setDisable(false);
      })
      .catch((error) => {
        EnSn("Xatolik yuz berdi", { variant: "error" });
        setDisable(false);
      });
  };

  return (
    <form
      className={styles.contactUsWrapper}
      onSubmit={handleSubmit}
      id="bizBilanAloqa"
    >
      <img src={star} alt="starRotate" className={styles.starRotate} />
      <h1>Bepul konsultatsiya</h1>
      <p>
        Telefon raqamingizni yozib qoldiring, biz sizga qoʻngʻiroq qilamiz va
        birorta ham savolingiz javobsiz qolmasligiga harakat qilamiz
      </p>
      <div className={styles.formInputs}>
        <input
          type="text"
          placeholder="Ismingiz"
          name="Ismi:"
          onChange={(e) => setName(e.target.value)}
          value={name}
          autoComplete="off"
        />
        <PatternFormat
          format="+998 ## ### ## ##"
          allowEmptyFormatting
          mask=" "
          name="Phone"
          value={phoneNumber}
          onValueChange={(values) => setPhoneNumber(values.value)}
          className={styles.loginInputPhone}
          autoComplete="off"
        />
        <button type="submit" disabled={disabled}>
          <span>So‘rov Yuborish</span>
          <span>Yuborish</span>
        </button>
      </div>
    </form>
  );
}
