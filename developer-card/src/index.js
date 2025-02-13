import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function DeveloperCard(props) {
  console.log(props);
  return (
    <>
      <div className="bigDiv">
        <img src={props.Photo} alt="card" />
        <div className="seconddiv">
          <h1>{props.Name}</h1>
          <p className="description">{props.Description}</p>
        </div>
        <div className="minidiv">
          <p className="p1">HTML+CSS</p>
          <p className="p2">JavaScript</p>

          <p className="p3">React</p>
          <p className="p4">Web Design</p>

          <p className="p5">Git and GitHub</p>
          <p className="p6">Prosta crutoi</p>
        </div>
      </div>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DeveloperCard
      Photo="/assets/funghito.jpg"
      Name="Grozav Victor"
      Description="Junior Developer bhdohdojoijoidjjjjjjjjjjjjjjjjjjjjjjjjjjjj<br>
      jodij2jdljqkjwd djldjoidoiwjdoijwdiwdjoiwjdoiwjdoiwijdowjdowj<br>
      dowjdowjodjwodjwojdowjdoiwjdojwodjowjdwjd "
    />
  </React.StrictMode>
);
