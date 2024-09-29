import React from "react";
import Header from "./components/Header";
import Highlights from "./components/Highlights";
import Hero from "./components/Hero";

function App() {
  return (
    <main className="bg-black">
      <Header />
      <Hero />
      <Highlights />
    </main>
  );
}

export default App;
