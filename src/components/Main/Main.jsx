import React from "react";
import Results from "./Results/Results";
import WhyStudyAlgoritm from "./WhyStudyAlgoritm/WhyStudyAlgoritm";
import Courses from "./Courses/Courses";
import Mentors from "./Mentors/Mentors";
import OurLocation from "./OurLocation/OurLocation";
import MainContactUs from "./MainContactUs/MainContactUs";
import MainCarousel from "./MainCarousel/MainCarousel";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <main className={styles.main}>
      <Results />
      <WhyStudyAlgoritm />
      <Courses />
      <Mentors />
      <OurLocation />
      <MainContactUs />
      <MainCarousel />
    </main>
  );
}
