import React from "react";
import About from "../components/About";
import Challenge from "../components/Challenge";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Search from "../components/Search";

function Home() {
  return (
    <>
      <Hero />
      <Challenge />
      <About />
      <Search />
      <Footer />
    </>
  );
}

export default Home;
