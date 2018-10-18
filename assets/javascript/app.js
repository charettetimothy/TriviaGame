// Pseudocode
// Click to start game.
// Next screen, start timer (30 secs), display question and choices.
// If correct - display 'Correct!' and a gif. Go to next question after 5 secs.
// If incorrect- display 'Wrong!' and a gif with correct answer and text 'The correct answer was'. 
// Go to next slide after 5 secs.
// Repeat for 10 questions.
// Final Screen - Stop timer, display score, display 'Start Over?'
var question = [{
        q: "What type of whale was the infamous antagonist in the novel Mody Dick?",
        a: "Sperm whale",
        c: ["Sperm whale", "Blue whale", "Humpback whale", "Gray whale"],
    },
    {
        q: "What was the name of the mongoose who protected his family from cobras. Hint his name is an onomatopoeia.",
        a: "Rikki-Tikki-Tavi",
        c: ["Akela", "Flunkey", "Winifred", "Rama"],
    },
    {
        q: "What was the name of Mowglis mentor, the black panther, in The Jungle Book?",
        a: "Bagheera",
        c: ["Kaa", "Shere Khan", "Baloo", "Bagheera"],
    },
    {
        q: "In the novel Animal Farm the main protaginaist is named after a famous french villian, Napolean. What kind of animal was he?",
        a: "Pig",
        c: ["Pig", "Horse", "Chicken", "Cow"],
    },
    {
        q: "Who is the only character to appear in all seven novels of the series The Chronicles of Narnia?",
        a: "Aslan",
        c: ["Trumpkin", "Aslan", "Puddleglum", "Shasta"],
    },

];

// We start the game with a score of 0.
var correct = 0;
var incorrect = 0;
var questionIndex = 0;
var count = 5;
var counter = setInterval(timer, 1000);

function timer() {
    $("#time-remaining").html("<h3>Time Remaining: " + count + "</h3>");
    count = count - 1;
    if (count === 0) {
        clearInterval(counter);
        return;
    }
}

function startScreen() {
    $("#time-remaining").hide();
    $("#question").hide();
    $("#choice1").hide();
    $("#choice2").hide();
    $("#choice3").hide();
    $("#choice4").hide();
    $("#correct-answers").hide();
    $("#incorrect-answers").hide();
    $("#start-over-button").hide();
}

function startGame() {
    $("#start-game-button").hide();
    $("#time-remaining").show();
    $("#question").show();
    $("#choice1").show();
    $("#choice2").show();
    $("#choice3").show();
    $("#choice4").show();
}

function firstQuestion() {
    $("#question").text(question[0].q);
    $("#choice1").text(question[0].c[0]);
    $("#choice2").text(question[0].c[1]);
    $("#choice3").text(question[0].c[2]);
    $("#choice4").text(question[0].c[3]);
}

function secondQuestion() {
    $("#question").text(question[1].q);
    $("#choice1").text(question[1].c[0]);
    $("#choice2").text(question[1].c[1]);
    $("#choice3").text(question[1].c[2]);
    $("#choice4").text(question[1].c[3]);
}

function thirdQuestion() {
    $("#question").text(question[2].q);
    $("#choice1").text(question[2].c[0]);
    $("#choice2").text(question[2].c[1]);
    $("#choice3").text(question[2].c[2]);
    $("#choice4").text(question[2].c[3]);
}

function fourthQuestion() {
    $("#question").text(question[3].q);
    $("#choice1").text(question[3].c[0]);
    $("#choice2").text(question[3].c[1]);
    $("#choice3").text(question[3].c[2]);
    $("#choice4").text(question[3].c[3]);
}

function fifthQuestion() {
    $("#question").text(question[4].q);
    $("#choice1").text(question[4].c[0]);
    $("#choice2").text(question[4].c[1]);
    $("#choice3").text(question[4].c[2]);
    $("#choice4").text(question[4].c[3]);
}

$(document).ready(function () {
    startScreen();
    $("#start-game-button").click(function () {
        startGame();
        timer();
        fourthQuestion();

    });
})