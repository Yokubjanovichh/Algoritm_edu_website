import React, { useState } from "react";
import { Link } from "react-router-dom";
import { certificatesData } from "./certificatesData";
import AlgoritmLogo from "../../assets/svg/algoritm-logo.svg";
import styles from "./styles.module.css";

export default function Certificates() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(certificatesData);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filteredResults = certificatesData.filter(
      (item) =>
        item.fullName.toLowerCase().includes(value.toLowerCase()) ||
        item.certificateNumber.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData(filteredResults);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <Link to="/">
          <img src={AlgoritmLogo} alt="Algoritm" />
        </Link>
        <input
          type="text"
          className={styles.search}
          placeholder="Qidiruv: Familiya, ism, sertifikat raqami bo'yicha"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <h1 style={{ color: "white" }} className={styles.title}>
        Algoritm ta'lim ning bitiruvchilarining tasdiqlangan sertifikatlar
        ro'yhati:
      </h1>
      <div className={styles.body}>
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Familiya Ismi:</th>
              <th>Sertifikat raqami:</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.fullName}</td>
                  <td>{item.certificateNumber}</td>
                </tr>
              ))
            ) : (
              <p className={styles.undefined}>Ma'lumot yo'q</p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
