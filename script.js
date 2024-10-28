"use strict";

// Function to start the guessing game
function startGame() {
    let userName = prompt("Welcome! What's your name?");
    
    // Prompt until a name is provided or 'STOP' is entered to exit
    while (!userName) {
        userName = prompt("I require a name to begin. To skip this game, type 'STOP' and click 'OK'.");
    }

    if (userName.toUpperCase() === 'STOP') {
        alert('Refresh the page to play again!');
        return;
    }

    alert(`Hello, ${userName}! Let's play a guessing game to learn more about me.`);

    // Array of questions and expected answers
    const questions = [
        { question: "Is my name Paul?", answer: "yes" },
        { question: "Am I a human being?", answer: "yes" },
        { question: "Do I live on the planet Earth?", answer: "yes" },
        { question: "Is the Earth flat?", answer: "no" },
        { question: "Do pigs fly?", answer: "no" },
        { question: "Am I a Navy Veteran?", answer: "yes" },
        { question: "Do I love coding?", answer: "yes" },
        { question: "Have I traveled to over 10 countries?", answer: "no" },
        { question: "Is my favorite programming language JavaScript?", answer: "yes" },
        { question: "Do I have a pet?", answer: "yes" }
    ];

    // Loop through the questions and validate answers
    questions.forEach(q => {
        let userResponse = prompt(q.question).toLowerCase();
        
        if (userResponse === q.answer || userResponse[0] === q.answer[0]) {
            alert("Correct!");
        } else {
            alert("Oops, that's incorrect.");
        }
    });

    alert(`Thank you for playing, ${userName}! I hope you learned something new about me!`);
}

// Start game immediately
startGame();