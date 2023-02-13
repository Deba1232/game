import React from "react"
import { ReactP5Wrapper } from "react-p5-wrapper"

import './App.css'

import sketch from "./services/sketch"

function App() {
  return (
    <main className="app">
      
      <header className="title">
        <h1>Game</h1>
      </header>

      <section className="main-game">
        <ReactP5Wrapper sketch={sketch} />
      </section>

    </main>
  );
}

export default App