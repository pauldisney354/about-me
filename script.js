// 'use strict'
// // JavaScript for About Me Guessing Game

// // Initialize game variables
// let score = 0; // Tracks user's correct answers

// // Start the game automatically
// runGame();

// // Main Game Logic
// function runGame() {

//   // Display a greeting message
//   showGreeting();

//   // Question 1-5: Yes/No Questions
//   yesNoQuestions();

//   // Question 6: Numeric Guessing Game
//   numericGuess();

//   // Question 7: Multiple Choice Guessing Game
//   multipleChoiceGuess();

//   // Show the final score at the end
//   showFinalScore();
// }

// // Display greeting
// function showGreeting() {
//     alert("Welcome to my About Me page. Let's play a game!");
//   }

// // Yes/No Questions
// function yesNoQuestions() {
//   // Question 1
//   let q1 = prompt("Do I live in Silverton? (yes/no)").toLowerCase();
//   if (q1 === "yes" || q1 === "y") {
//     alert("Correct! I do live in Silverton.");
//     score++;
//   } else {
//     alert("Actually, I do live in Silverton.");
//   }

//   // Question 2
//   let q2 = prompt("Am I a software developer? (yes/no)").toLowerCase();
//   if (q2 === "yes" || q2 === "y") {
//     alert("Correct! I am a software developer.");
//     score++;
//   } else {
//     alert("Actually, I am a software developer!");
//   }

//   // Question 3
//   let q3 = prompt("Have I lived in Japan? (yes/no)").toLowerCase();
//   if (q3 === "yes" || q3 === "y") {
//     alert("Correct! I have lived in Japan.");
//     score++;
//   } else {
//     alert("Actually, I have lived in Japan!");
//   }

//   // Question 4
//   let q4 = prompt("Do I enjoy hiking? (yes/no)").toLowerCase();
//   if (q4 === "yes" || q4 === "y") {
//     alert("Correct! I love hiking!");
//     score++;
//   } else {
//     alert("Actually, I do love hiking!");
//   }

//   // Question 5
//   let q5 = prompt("Did I study at WOU? (yes/no)").toLowerCase();
//   if (q5 === "yes" || q5 === "y") {
//     alert("Correct! I did study at WOU.");
//     score++;
//   } else {
//     alert("Actually, I did study at WOU.");
//   }

//   let q6 = prompt("Is today monday?").toLocaleLowerCase();
//   if (q6 === "yes"  || q6 === "y"){
//     alert("Incorrect! It is Tuesday!");
//     score--;
//   } else {
//     alert ("Correct! It is not Monday");
//   }
// }


// // Question 6: Numeric Guessing Game
// function numericGuess() {
//   const targetNumber = 7; // Set the correct answer
//   const attempts = 4;
//   let guess;

//   for (let i = 0; i < attempts; i++) {
//     guess = parseInt(prompt("Guess a number between 1 and 10:"));

//     if (guess === targetNumber) {
//       alert("Correct!");
//       score++;
//       break;
//     } else if (guess > targetNumber) {
//       alert("Too high!");
//     } else {
//       alert("Too low!");
//     }
//   }

//   if (guess !== targetNumber) {
//     alert(`Sorry, the correct answer was ${targetNumber}.`);
//   }
// }

// // Question 7: Multiple Choice Guessing Game
// function multipleChoiceGuess() {
//   const correctAnswers = ["pizza", "sushi", "pasta"]; // List of possible correct answers
//   const attempts = 6;
//   let found = false;

//   for (let i = 0; i < attempts; i++) {
//     let answer = prompt("Guess one of my favorite foods:").toLowerCase();

//     if (correctAnswers.includes(answer)) {
//       alert("That's correct!");
//       score++;
//       found = true;
//       break;
//     } else {
//       alert("Try again!");
//     }
//   }

//   if (!found) {
//     alert(`Possible answers were: ${correctAnswers.join(', ')}`);
//   }
// }

// // Show final score
// function showFinalScore() {
//   alert(`You got ${score} out of 7 correct!`);
// }