//Declaring a class Question and setting Questions
class Question {
  constructor(question, A, B, C, D, CA) {
    // Constructor
    this.q = question;
    this.a = A;
    this.b = B;
    this.c = C;
    this.d = D;
    this.ca = CA;
  }
}

const Questions = [];

Questions[0] = new Question(
  "What is H<sub>2</sub>O<sub>2</sub>commonly known as ?",
  "Hydrogen",
  "Water",
  "Hydrogen Peroxide",
  "Nirogen Dioxide",
  "c"
);
Questions[1] = new Question(
  "Which of the following elements is not a liquid around room temperature?",
  "Magnesium",
  "Mercury",
  "Bromine",
  "Water",
  "a"
);
Questions[2] = new Question(
  "What do we call the process in which an atom’s nucleus splits into smaller elements?",
  "Nuclear Fusion",
  "Nuclear Transmission",
  "Nuclear Fission",
  "Nuclear Reaction",
  "c"
);
Questions[3] = new Question(
  "What does AMU stand for in chemistry?",
  "Atomic Matter Unit",
  "Atomic Mass Unitt",
  "Accelerated Mass Unit",
  "Accumulated Matter Unit",
  "b"
);
Questions[4] = new Question(
  "What is the number of electrons in a sodium atom?",
  "11",
  "12",
  "5",
  "17",
  "a"
);
Questions[5] = new Question(
  "What do we have after combining two chemical elements?",
  "Compost",
  "Complex",
  "Component",
  "Compound",
  "d"
);
Questions[6] = new Question(
  "Which scientist is credited with the invention of the periodic table?",
  "Mendeleev",
  "Nobel",
  "Lavoisier",
  "Curie",
  "a"
);
Questions[7] = new Question(
  "Which gas accounts for the largest part of the air?",
  "Hydrogen",
  "Oxygen",
  "Nitrogen",
  "Krypton",
  "c"
);
Questions[8] = new Question(
  "Which term refers to an atom with more protons than electrons?",
  "An isobar",
  "A cation",
  "An isotope",
  "An anion",
  "b"
);
Questions[9] = new Question(
  "Which of the followings is often used as a bleaching agent?",
  "Chlorine",
  "Sodium chloride",
  "Alcohol",
  "Sodium Peroxide",
  "a"
);
// Question setting ends

// Initialising buttons and other HTML elements
let start = document.getElementById("start");
let displayquestion = document.getElementsByClassName("question");
var maxtime = 10*60 + 2;
let questionnumber = 0;
let check = false;
let A = document.getElementById("a");
let B = document.getElementById("b");
let C = document.getElementById("c");
let D = document.getElementById("d");
let next = document.getElementById("next");
let previous = document.getElementById("previous");
let selectedoption = "";
let submit = document.getElementById("submit");
let marks = 0;
let notattempted = 0;
let incorrect = 0;
let checkedoptioncolour = [
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
];
let checkedoption = [
  "no",
  "no",
  "no",
  "no",
  "no",
  "no",
  "no",
  "no",
  "no",
  "no",
];
// Initialization of html elements ends

// start button function
start.addEventListener("click", () => {
  displayquestion[0].innerHTML = `Q ${questionnumber + 1}) ${
    Questions[questionnumber].q
  }`;
  A.innerHTML = `A) ${Questions[questionnumber].a}`;
  B.innerHTML = `B) ${Questions[questionnumber].b}`;
  C.innerHTML = `C) ${Questions[questionnumber].c}`;
  D.innerHTML = `D) ${Questions[questionnumber].d}`;
  check = true;
  start.disabled=true;
  timer_interval=setInterval(function () {
    maxtime = maxtime - 1;
    var minutes = Math.floor((maxtime - 1) / 60);
    var seconds = (maxtime - 1) % 60;
    document.getElementById("timer").innerHTML = minutes + "m:" + seconds + "s";
  }, 1000);
});
// start button functionality ends

// next button functionality starts
next.addEventListener("click", () => {
  if (check == true) {
    allclearn();
    questionnumber++;
    displayquestion[0].innerHTML = `Q ${questionnumber + 1}) ${
      Questions[questionnumber].q
    }`;
    A.innerHTML = `A) ${Questions[questionnumber].a}`;
    B.innerHTML = `B) ${Questions[questionnumber].b}`;
    C.innerHTML = `C) ${Questions[questionnumber].c}`;
    D.innerHTML = `D) ${Questions[questionnumber].d}`;
  } else {
    alert("First start the quiz.");
  }
});
// next button functionality ends

// Previous button functionality starts
previous.addEventListener("click", () => {
  if (check == true) {
    allclearp();
    questionnumber--;
    displayquestion[0].innerHTML = `Q ${questionnumber + 1}) ${
      Questions[questionnumber].q
    }`;
    A.innerHTML = `A) ${Questions[questionnumber].a}`;
    B.innerHTML = `B) ${Questions[questionnumber].b}`;
    C.innerHTML = `C) ${Questions[questionnumber].c}`;
    D.innerHTML = `D) ${Questions[questionnumber].d}`;
  } else {
    alert("First start the quiz.");
  }
});
//   previous button functionality ends


// functionality of differnet option button begins
A.addEventListener("click", () => {
    if (A.style.backgroundColor == "chocolate") {
      A.style.backgroundColor = "white";
      checkedoptioncolour[questionnumber] == "white";
      checkedoption[questionnumber] = "no";
    } else {
      A.style.backgroundColor = "chocolate";
      B.style.backgroundColor = "white";
      C.style.backgroundColor = "white";
      D.style.backgroundColor = "white";
      checkedoptioncolour[questionnumber] == "chocolate";
      checkedoption[questionnumber] = "a";
    }
  });
  
  B.addEventListener("click", () => {
    if (B.style.backgroundColor == "chocolate") {
      B.style.backgroundColor = "white";
      checkedoptioncolour[questionnumber] == "white";
      checkedoption[questionnumber] = "no";
    } else {
      B.style.backgroundColor = "chocolate";
      A.style.backgroundColor = "white";
      C.style.backgroundColor = "white";
      D.style.backgroundColor = "white";
      checkedoptioncolour[questionnumber] == "chocolate";
      checkedoption[questionnumber] = "b";
    }
  });
  
  C.addEventListener("click", () => {
    if (C.style.backgroundColor == "chocolate") {
      C.style.backgroundColor = "white";
      checkedoptioncolour[questionnumber] == "white";
      checkedoption[questionnumber] = "no";
    } else {
      C.style.backgroundColor = "chocolate";
      A.style.backgroundColor = "white";
      B.style.backgroundColor = "white";
      D.style.backgroundColor = "white";
      checkedoptioncolour[questionnumber] == "chocolate";
      checkedoption[questionnumber] = "c";
    }
  });
  
  D.addEventListener("click", () => {
    if (D.style.backgroundColor == "chocolate") {
      D.style.backgroundColor = "white";
      checkedoptioncolour[questionnumber] == "white";
      checkedoption[questionnumber] = "no";
    } else {
      D.style.backgroundColor = "chocolate";
      B.style.backgroundColor = "white";
      C.style.backgroundColor = "white";
      A.style.backgroundColor = "white";
      checkedoptioncolour[questionnumber] == "chocolate";
      checkedoption[questionnumber] = "d";
    }
  });
  //functionality of different option button ends

//   Necessary function
function allclearn() {
    if (questionnumber < 9) {
      A.style.backgroundColor = "white";
      B.style.backgroundColor = "white";
      C.style.backgroundColor = "white";
      D.style.backgroundColor = "white";
    }
  }
  
  function allclearp() {
    if (questionnumber > 0) {
      A.style.backgroundColor = "white";
      B.style.backgroundColor = "white";
      C.style.backgroundColor = "white";
      D.style.backgroundColor = "white";
    }
  }

  options_interval=setInterval(function () {
    if (
      checkedoption[questionnumber] != "no" &&
      questionnumber >= 0 &&
      questionnumber < 10
    ) {
      document.getElementById(
        checkedoption[questionnumber]
      ).style.backgroundColor = "chocolate";
    }
    if (questionnumber == 0) previous.disabled = true;
    else previous.disabled = false;
  
    if (questionnumber == 9) next.disabled = true;
    else next.disabled = false;

    if(maxtime==0)
    res()
  }, 1);
//Necessary function ends

// submit and end result
submit.addEventListener("click",res);

function res () {
  for (var i = 0; i < 10; i++) {
    if (Questions[i].ca == checkedoption[i]) marks++;
    else if (checkedoption[i] == "no") notattempted++;
    else incorrect++;
  }
  if (marks <= 4) {
    document.getElementById("result").style.backgroundColor = "red";
    document.getElementById("your-result").innerHTML = "Your Result:";
    document.getElementById(
      "detailed-result"
    ).innerHTML = `Marks = ${marks} Correct = ${marks} Incorrect = ${incorrect} Not-attempted =${notattempted}`;
  }
  if (marks >= 5 && marks <= 7) {
      document.getElementById("result").style.backgroundColor = "yellow";
      document.getElementById("your-result").innerHTML = "Your Result:";
      document.getElementById(
        "detailed-result"
      ).innerHTML = `Marks = ${marks} Correct = ${marks} Incorrect = ${incorrect} Not-attempted =${notattempted}`;
    }

    if (marks >= 8) {
        document.getElementById("result").style.backgroundColor = "green";
        document.getElementById("your-result").innerHTML = "Your Result:";
        document.getElementById(
          "detailed-result"
        ).innerHTML = `Marks = ${marks} Correct = ${marks} Incorrect = ${incorrect} Not-attempted =${notattempted}`;
      }
      clearInterval(options_interval);
      clearInterval(timer_interval)
}