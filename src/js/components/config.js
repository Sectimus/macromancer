import React, {useState} from "react";

export default function Config({ parentAbility, onConfigUpdate }) {
  const [config, setConfig] = useState({
    subject:"Mouseover",
		conditions:[
			"exists", "harm"
		],
		action:{
			type: "use",
			name: "dispel magic"
		}
  });
  const conditionalValues = [
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
  const subjects = [
    {
      value: "",
      text: "target"
    },
    {
      value: "Focus",
      text: "focused target"
    },
    {
      value: "Player",
      text: "myself"
    },
    {
      value: "Mouseover",
      text: "mouseover"
    },
    {
      value: "Cursor",
      text: "cursor"
    },
    {
      value: "Pet",
      text: "pet"
    },
    {
      value: "Arena1",
      text: "arena target 1"
    },
    {
      value: "Arena2",
      text: "arena target 2"
    },
    {
      value: "Arena3",
      text: "arena target 3"
    }
  ]

  let onSubjectChange = (subject) => {
    //check if the condtion @Player, @Mouseover etc. has a length that is basically non-empty.
    if (subject.trim().length > 1) {
      config.subject = subject
    } else {
      config.subject = "target"
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
            value={config.action.name}
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
              onChange={(e) => onSubjectChange(e.target.value)}
              value={config.subject}
            >
              {subjects.map(subject => <option key={subject.value} value={subject.value}>{subject.text}</option>)}
            </select>
          </div>
        </form>
      </div>

      <div className="d-flex justify-content-center">
        <div className="form-check">
          {conditionalValues.map((conditional, i) => {
            let id = "additionalConditional" + (i + 1);
            return (
              <div key={id} className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={id}
                  defaultChecked={config.conditions.includes(conditional)}
                />
                <label className="form-check-label" htmlFor={id}>
                  {conditional}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <br></br>
    </div>
  );
}
