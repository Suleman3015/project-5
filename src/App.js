import React from "react";
import Header from "./components/header.js";
import Cards from "./components/card";
import Containers from "./components/container";
import Pakistan from "./components/pakistanicard";
import Footer from "./components/footer";
import Nav from "./components/navbar";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Cards />
      <Containers />
      <Pakistan />
      <Footer />
    </div>
  );
}

export default App;
