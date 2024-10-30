'use strict'

let correctAnswers = 0;

        // Function to display final score
        function displayScore() {
            alert(`You got ${correctAnswers} out of 7 questions correct!`);
        }

        // Welcome message
        alert("Welcome to my About Me page! Let's play a guessing game to help you learn more about me.");

        // Questions 1-5: Yes/No questions
        console.log("Starting yes/no questions");
        
        let q1 = prompt("Do I live in Silverton? (yes/no)").toLowerCase();
        if (q1 === "yes" || q1 === "y") {
            alert("Correct! I do live in Silverton.");
            correctAnswers++;
        } else {
            alert("Actually, I do live in Silverton");
        }

        let q2 = prompt("Am I a software developer? (yes/no)").toLowerCase();
        if (q2 === "yes" || q2 === "y") {
            alert("Correct! I am a software developer.");
            correctAnswers++;
        } else {
            alert("Actually, I am a software developer!");
        }

        let q3 = prompt("Have I lived in Japan? (yes/no)").toLowerCase();
        if (q3 === "yes" || q3 === "y") {
            alert("Correct! I have lived in Japan.");
            correctAnswers++;
        } else {
            alert("Actually, I have lived in Japan!");
        }

        let q4 = prompt("Do I enjoy hiking? (yes/no)").toLowerCase();
        if (q4 === "yes" || q4 === "y") {
            alert("Correct! I love hiking!");
            correctAnswers++;
        } else {
            alert("Actually, I do love hiking!");
        }

        let q5 = prompt("Did I study at WOU? (yes/no)").toLowerCase();
        if (q5 === "no" || q5 === "n") {
            alert("Correct! I did study at WOU.");
            correctAnswers++;
        } else {
            alert("Actually, I did study at WOU!");
        }

        let guessANumber = 'Guess a number between one and 54'
        let attempts = 3;
        let answer = 30;
        let respone = null;
        
        while (response !== answer) {

            if (!attempts) {
                alert('you are out of attempts');
                break;
            }
            
        }