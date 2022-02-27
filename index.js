const readLineSync=require('readline-sync');
console.log("Welcome to LINUX quiz!!");

let correctAns = 0;
let noOfQuestion = 1;

function displayQuestions(questions){
  console.log(`Question ${noOfQuestion}:\t ${questions.question}\n 1.${questions.options[0]}\n 2.${questions.options[1]}\n 3.${questions.options[2]}\n 4.${questions.options[3]}\n`);
  const ans=readLineSync.question("Enter your ans in between 1,2,3 and 4\n");

  if(ans == questions.correctOption)
  {
    console.log("Correct Answer\n");
  }
  else
  {
    console.log("Incorrect Answer\n");
  }
  correctAns++;
}


const questions = [
  {
    question:"Which command is used for create new shell?",
    options:["ah","oh","ch","sh"],
    correctOption:"4"
  },

  {
    question:"cd command is used for?",
    options:["complete directory",
            "created directory",
            "change directory",
            "current directory"],
    correctOption:"3"
  },

  {
    question:"Which key should be pressed to save a file in line editing mode?",
    options:["x","s","n","w"],
    correctOption:"4"
  }
];

questions.forEach(displayQuestions);

console.log("Your Score"+ correc);