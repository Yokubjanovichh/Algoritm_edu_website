import React from "react";
import { SnackbarProvider } from "notistack";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
// auto carousel css links
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// auto carousel css links

export default function App() {
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </SnackbarProvider>
  );
}
