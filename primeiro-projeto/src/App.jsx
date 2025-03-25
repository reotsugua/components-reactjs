import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import "./styles/App.css";
import { Article } from "./components/Article/Article";
import article1Img from "./assets/images/tumb_dashboards.svg";
import article2Img from "./assets/images/tumb_vibrant.svg";
import article3Img from ".//assets/images/tumb_30Days.svg"; 

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <section id="articles">

          <Article title="Designing dashboards" provider="NASA" thumbnail={article1Img} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quaerat. Optio, consequuntur ipsam! Repellendus, ipsam voluptas! Ipsum corporis nihil sint, consequuntur, libero perferendis ratione, adipisci quis nobis vero doloremque asperiores." />

          <Article title="Vibrant Portraits of 2020" provider="SpaceNews" thumbnail={article2Img} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quaerat. Optio, consequuntur ipsam! Repellendus, ipsam voluptas! Ipsum corporis nihil sint, consequuntur, libero perferendis ratione, adipisci quis nobis vero doloremque asperiores." />

          <Article title="30 Days of Malayalam type" provider="Scapeflight Now" thumbnail={article3Img} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quaerat. Optio, consequuntur ipsam! Repellendus, ipsam voluptas! Ipsum corporis nihil sint, consequuntur, libero perferendis ratione, adipisci quis nobis vero doloremque asperiores." />

          <Article title="Designing dashboards" provider="NASA" thumbnail={article1Img} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quaerat. Optio, consequuntur ipsam! Repellendus, ipsam voluptas! Ipsum corporis nihil sint, consequuntur, libero perferendis ratione, adipisci quis nobis vero doloremque asperiores." />

        </section>
      </>
    );
  }
}

export default App;
