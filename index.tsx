import * as React from "react";
import ReactDom from "react-dom";
//import { img } from "./logo.png";
//import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { Subheader } from "./Subheader";
import { MainContent } from "./MainContent";
import { Secondrow } from "./Secondrow";
function App() {
  return (
    <div>
      <Header />
      <Subheader />
      <MainContent />
      <Secondrow />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
