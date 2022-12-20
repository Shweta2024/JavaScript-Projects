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
    "The main system board of the computer is called ____.",
    "Motherboard",
    "Processor",
    "Microchip",
    "None of these",
    "a"
  );
  Questions[1] = new Question(
    "What is the built-in permanent memory in a computer called?",
    "RAM",
    "ROM",
    "CPU",
    "CD-ROM",
    "b"
  );
  Questions[2] = new Question(
    "Which printer prints one letter in one stroke?",
    "plotter",
    "Laser Printer",
    "stop matrix printer",
    "Line Printer",
    "d"
  );
  Questions[3] = new Question(
    "What is the full form of OCR?",
    "Optical CPU Recognition",
    "Optical Character Recognition",
    "Optical Character Rendering",
    "none of these",
    "b"
  );
  Questions[4] = new Question(
    "Which of the following is an example of a web browser?",
    "Google",
    "Apple",
    "Mozilla Firefox",
    "Microsoft",
    "c"
  );
  Questions[5] = new Question(
    "The process of copying a file to a CD/DVD is often called?",
    "Storing",
    "Burning",
    "Pasting",
    "Assembling",
    "b"
  );
  Questions[6] = new Question(
    "is used to create a web page?",
    "HTTP",
    "FTP",
    "HTML",
    "None of the above",
    "c"
  );
  Questions[7] = new Question(
    "Which of the following is a volatile memory?",
    "ROM",
    "Hard-Disk",
    "RAM",
    "SSD",
    "c"
  );
  Questions[8] = new Question(
    "Which of the following is a desktop operating system?",
    "MICROSOFT",
    "MAC-OS",
    "UBISOFT",
    "APPLE",
    "b"
  );
  Questions[9] = new Question(
    "What type of intelligence is given to the computer?",
    "Artificial",
    "Human",
    "Pure",
    "None of the above",
    "a"
  );
  // Question setting ends
  
  // Initialising buttons and other HTML elements
  let start = document.getElementById("start");
  let displayquestion = document.getElementsByClassName("question");
  var maxtime = 10 * 60 + 2;
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
    document.getElementById("result").style.color = "red";
    document.getElementById("your-result").innerHTML = "Your Result:";
    document.getElementById(
      "detailed-result"
    ).innerHTML = `Marks = ${marks} Correct = ${marks} Incorrect = ${incorrect} Not-attempted =${notattempted}`;
  }
  if (marks >= 5 && marks <= 7) {
      document.getElementById("result").style.color = "yellow";
      document.getElementById("your-result").innerHTML = "Your Result:";
      document.getElementById(
        "detailed-result"
      ).innerHTML = `Marks = ${marks} Correct = ${marks} Incorrect = ${incorrect} Not-attempted =${notattempted}`;
    }

    if (marks >= 8) {
        document.getElementById("result").style.color = "green";
        document.getElementById("your-result").innerHTML = "Your Result:";
        document.getElementById(
          "detailed-result"
        ).innerHTML = `Marks = ${marks} Correct = ${marks} Incorrect = ${incorrect} Not-attempted =${notattempted}`;
      }
      clearInterval(options_interval);
      clearInterval(timer_interval)
}
