import React from "react";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Header from "./components/Header";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <About />
      </div>
    );
  }
}

export default App;
