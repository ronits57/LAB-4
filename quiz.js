const quiz = [
  { question: "What is the capital of India?", answer: "delhi" },
  { question: "Which language runs in a web browser?", answer: "javascript" },
  { question: "What is 5 + 3?", answer: "8" },
  { question: "What keyword is used to declare a variable in JS?", answer: "let" }
];

let score = 0;

for (let i = 0; i < quiz.length; i++) {
  let userAnswer = prompt(quiz[i].question);

  userAnswer = userAnswer.trim().toLowerCase();

  if (userAnswer === quiz[i].answer) {
    alert("Correct! 🎉");
    score++;
  } else {
    alert("Wrong ❌ The correct answer is: " + quiz[i].answer);
  }
}

alert("Quiz Finished! Your final score is: " + score + " out of " + quiz.length);