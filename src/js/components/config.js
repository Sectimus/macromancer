import React from "react";

export default function Config({ parentAbility, onConfigUpdate }) {
  let handleConditionalChange = (condition) => {
    onConfigUpdate({ conditions: [condition] });
  };
  return (
    <div>
      <input
        key="parentAbility"
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          onConfigUpdate({ parentAbility: e.target.value });
        }}
        value={parentAbility}
      ></input>
      <br></br>
      <input
        type="radio"
        id="mouseover"
        name="radioConditions"
        value="@Mouseover"
        onChange={(e) => handleConditionalChange(e.target.value)}
      />
      <label htmlFor="male">Mouseover</label>
      <br />
      <input
        type="radio"
        id="target"
        name="radioConditions"
        value="@Target"
        onChange={(e) => handleConditionalChange(e.target.value)}
      />
      <label htmlFor="female">Target</label>
      <br />
      <input
        type="radio"
        id="player"
        name="radioConditions"
        value="@Player"
        onChange={(e) => handleConditionalChange(e.target.value)}
      />
      <label htmlFor="other">Player</label>
    </div>
  );
}
