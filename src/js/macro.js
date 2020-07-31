class Macro {
  constructor(command, ...innerMacros) {
    this.command = command;
    this.innerMacros = innerMacros;
  }
  build() {
    let text = "#showtooltip\n/" + this.command + " ";
    for (let i = 0; i < this.innerMacros.length; i++) {
      text += this.innerMacros[i].build();
      //if there is another cast after
      if (
        this.innerMacros[i + 1] !== undefined &&
        this.innerMacros[i + 1].input
      ) {
        text += ":";
      }
    }
    return text;
  }
}

class InnerMacro {
  constructor(subject, conditionals = [], input) {
    this.subject = subject;
    this.conditionals = conditionals;
    this.input = input;
  }

  build() {
    let text = "",
      text_subject = "",
      text_parameters = "";

    if (this.subject) {
      text_subject += "@" + this.subject;
    }

    if (this.conditionals.length != 0) {
      let parameters = this.conditionals;
      parameters.unshift(text_subject);
      text_parameters += parameters.join(",");
    }
    if (text_parameters) {
      text = "[" + text_parameters + "]";
    }

    text += this.input;

    return text;
  }
}

let inner1 = new InnerMacro(
  "mouseover",
  ["exists", "harm", "mod:shift"],
  "Dispel Magic"
);
let inner2 = new InnerMacro("mouseover", ["exists"], "Purify Disease");

let test2 = new Macro("cast", inner1, inner2);
console.log(test2.build());
