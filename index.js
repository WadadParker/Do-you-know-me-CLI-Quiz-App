var readlineSync = require('readline-sync');
var name = readlineSync.question("Please enter your name ");
console.log("Welcome! " + name + " to DO YOU EVEN KNOW WADAD quiz")

var score = 0;
function quiz(ques, ans) {
  var ques1 = readlineSync.question(ques);
  if (ques1.toUpperCase() === ans.toUpperCase()) {
    console.log("Correct");
    score++;
  }
  else {
    console.log("Wrong, answer is: ", ans);
  }
  console.log("score is ", score);
}

var arr = [
  question1 = {
    question: "What is my surname? ",
    answer: "Parker"
  },
  question2 = {
    question: "What is my mobile ringtone? ",
    answer: "Nyanpasu"
  },
  question3 = {
    question: "Which animal does wadad loves? ",
    answer: "Cat"
  },
  question4 = {
    question: "What is wadad's hobby? ",
    answer: "Standup Comedy"
  },
  question5 = {
    question: "What is the name of wadad's girlfriend? ",
    answer: "Wadad does not have a girlfriend"
  }
]

var highScore = {
  name: "Wadad",
  score: 3
}

// // quiz(arr[0].question, arr[0].answer);
// // quiz(arr[1].question, arr[1].answer);
// // console.log(arr[0].question);

console.log("lets begin");
for (var i = 0; i < arr.length; i++) {
  console.log("Question ", i + 1);
  quiz(arr[i].question, arr[i].answer);
  console.log("--------------------------------------");
}
console.log("We have finished the quiz, your score is ", score);

if (score > highScore.score) {
  console.log("You beat the highscore of ", highScore.name, " Congratulations!");
}
else {
  console.log("Highscore of " + highScore.score + " is currently taken by " + highScore.name);
}