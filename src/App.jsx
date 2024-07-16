import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Penyebab } from "./components/Penyebab";
import { About } from "./components/about";
import { Penanggulangan } from "./components/Penanggulangan";
import { Gallery } from "./components/Gallery";
import { Basarnas } from "./components/Basarnas";
import { Kontak } from "./components/Kontak";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Penyebab data={landingPageData.Penyebab} />
      <Penanggulangan data={landingPageData.Penanggulangan} />
      <Gallery data={landingPageData.Gallery} />
      <Basarnas data={landingPageData.Basarnas} />
      <About data={landingPageData.About} />
      <Kontak data={landingPageData.Kontak} />
    </div>
  );
};

export default App;
