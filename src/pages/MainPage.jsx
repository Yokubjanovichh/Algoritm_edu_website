import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
// auto carousel css links
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// auto carousel css links

export default function MainPage() {
  return (
    <>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
