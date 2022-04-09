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

  let onConditionChange = (index, condition) => {
    let temp = config;
    temp.conditions[index] = condition
    setConfig({ ...config, ...temp });
    console.log(config)
  };

  function Conditionals({index, defaultValue}){

    const conditionals = [
      {
        value: "combat",
        text: "subject in combat"
      },
      {
        value: "exists",
        text: "subject exists"
      },
      {
        value: "dead",
        text: "subject is dead"
      },
      {
        value: "harm",
        text: "subject is hostile"
      },
      {
        value: "help",
        text: "subject is friendly"
      },
      {
        value: "stealth",
        text: "I am stealthed"
      },
      {
        value: "mounted",
        text: "I am mounted"
      },
      {
        value: "channeling",
        text: "I am channeling"
        //[channeling:spell]	Can be used without a spell to determine if you are channeling a spell at all
      },
      {
        value: "vehicleui",
        text: "I am controlling a vehicle"
      },
      {
        value: "party",
        text: "subject is in my party"
      },
      {
        value: "raid",
        text: "subject is in my raid"
      },
      {
        value: "indoors",
        text: "I am indoors"
      },
      {
        value: "outdoors",
        text: "I am outdoors"
      },
      {
        value: "pet:name",
        text: "I have no pet"
      },
    ];

    return (
      <select
          className="form-control"
          id="targetConditonal"
          onChange={(e) => onConditionChange(index, e.target.value)}
          value={defaultValue}>
            {conditionals.map(conditional => <option key={conditional.value} value={conditional.value}>{conditional.text}</option>)}
      </select>
    );
  }

  return (
    <div className="">
      <form className="justify-content-center form-inline mx-5 mx-5">
        <div className="row">
          <div className="col-md">
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
          </div>
          <div className="col-md">
            <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">on</div>
                </div>
                <select
                  className="form-control"
                  id="subjectConditional"
                  onChange={(e) => onSubjectChange(e.target.value)}
                  value={config.subject}
                >
                  {subjects.map(subject => <option key={subject.value} value={subject.value}>{subject.text}</option>)}
                </select>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <div className="input-group mb-2 mr-sm-2">
              
                {config.conditions.map((condition, i)=> {
                  return (<React.Fragment key={i}>
                    <div className="input-group-prepend"><div className="input-group-text">{i<1 ? "when" : "and"}</div></div>
                    <Conditionals key={i} index={i} defaultValue={condition}/>
                  </React.Fragment>);
                })}
                  
              </div>
          </div>
        </div>
      </form>


      <br></br>
    </div>
  );
} 