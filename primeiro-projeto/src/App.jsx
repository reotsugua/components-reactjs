import React from "react";
import {Navbar} from "./components/Navbar/Navbar";
import "./styles/App.css";
import { Article } from "./components/Article/Article";

class App extends React.Component {
  render() {
    return (
      <>
      <Navbar />
      <Article />
      </>      
    );
  }
}

export default App;
