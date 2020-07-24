import React from "react";
import logo from "./assets/logo.svg";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <Buttons></Buttons>
      <Output parentAbility={"Mass Dispel"}></Output>
    </>
  );
}

function Buttons() {
  return (
    <div>
      <input type="radio" id="male" name="gender" defaultValue="male" />
      <label htmlFor="male">Mouseover</label>
      <br />
      <input type="radio" id="female" name="gender" defaultValue="female" />
      <label htmlFor="female">Target</label>
      <br />
      <input type="radio" id="other" name="gender" defaultValue="other" />
      <label htmlFor="other">Other</label>
    </div>
  );
}

function Output({ parentAbility, conditions, ability }) {
  let macro = "#showtooltip\n/cast";
  var test = (event) => {};
  return (
    <div className="form-group">
      <label htmlFor="exampleFormControlTextarea1">Output Macro</label>
      <textarea
        style={{ whiteSpace: "pre-wrap" }}
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        value={macro}
        readOnly
      ></textarea>
    </div>
  );
}

export default App;
