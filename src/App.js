import React, { useEffect, useState } from "react";
import logo from "./assets/logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./scss/app.scss";

import Config from "./js/components/config";

function App() {
  const [config, setConfig] = useState({
    parentAbility: "Mass Dispel",
    conditions: [],
  });

  function Output({ parentAbility, conditions, ability }) {
    let macro = "#showtooltip\n/cast ";
    var test = (event) => {};
    return (
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Output Macro</label>
        <textarea
          style={{ whiteSpace: "pre-wrap" }}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={(() => {
            //if there are conditions then append them using the [] macro syntax
            if (!conditions?.length == 0) {
              let conditionString = conditions.join(" ");
              let condition = "[" + conditionString + "] ";
              macro += condition;
            }
            return (macro += parentAbility);
          })()}
          readOnly
        ></textarea>
      </div>
    );
  }

  return (
    <>
      <Config
        parentAbility={config.parentAbility}
        onConfigUpdate={(_config) => {
          setConfig({ ...config, ..._config });
        }}
      ></Config>
      <Output
        parentAbility={config.parentAbility}
        conditions={config.conditions}
      ></Output>
    </>
  );
}

export default App;
