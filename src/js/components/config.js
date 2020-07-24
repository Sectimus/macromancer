import React from "react";
var conditionalValues = [
  "combat",
  "exists",
  "dead",
  "harm",
  "help",
  "stealth",
  "mounted",
  "channeling",
  "vehicleui",
  "party",
  "raid",
  "indoors",
  "outdoors",
  "pet:name",
];

function Conditionals({ conditionals = [] }) {
  console.log(conditionals);
  return conditionals.map(function (conditional, i) {
    let id = "additionalConditional" + (i + 1);
    return (
      <div key={id} className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id={id}
          defaultValue={conditional}
        />
        <label className="form-check-label" htmlFor={id}>
          {conditional}
        </label>
      </div>
    );
  });
}

export default function Config({ parentAbility, onConfigUpdate }) {
  let handleConditionalChange = (condition) => {
    //check if the condtion @Player, @Mouseover etc. has a length that is basically non-empty.
    if (condition.trim().length > 1) {
      onConfigUpdate({ conditions: [condition] });
    } else {
      onConfigUpdate({ conditions: [] });
    }
  };
  return (
    <div className="">
      <div className="d-flex justify-content-center form-inline">
        <div className="input-group mb-2 mr-sm-2">
          <div className="input-group-prepend">
            <div className="input-group-text">Cast</div>
          </div>
          <input
            id="mainSpell"
            className="form-control"
            key="parentAbility"
            type="text"
            onChange={(e) => {
              onConfigUpdate({ parentAbility: e.target.value });
            }}
            value={parentAbility}
          ></input>
        </div>
        <form className="form-group">
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <div className="input-group-text">on</div>
            </div>
            <select
              className="form-control"
              id="targetConditonal"
              onChange={(e) => handleConditionalChange(e.target.value)}
            >
              <option value="">target</option>
              <option value="@Focus">focused target</option>
              <option value="@Player">myself</option>
              <option value="@Mouseover">mouseover</option>
              <option value="@Cursor">cursor</option>
              <option value="@Pet">my pet</option>
              <option value="@Arena1">arena target 1</option>
              <option value="@Arena2">arena target 2</option>
              <option value="@Arena3">arena target 3</option>
            </select>
          </div>
        </form>
      </div>

      <div className="d-flex justify-content-center">
        <div className="form-check">
          <Conditionals
            conditionals={conditionalValues}
            style={{ maxWidth: "30px" }}
          ></Conditionals>
        </div>
      </div>
      <br></br>
    </div>
  );
}
