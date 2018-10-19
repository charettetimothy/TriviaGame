$(document).ready(function () {

    // var question = [{
    //         q: "What type of whale was the infamous antagonist in the novel Mody Dick?",
    //         c: ["Sperm whale", "Blue whale", "Humpback whale", "Gray whale"],
    //         a: "Sperm whale",
    //     },
    //     {
    //         q: "What was the name of the mongoose who protected his family from cobras. Hint his name is an onomatopoeia.",
    //         c: ["Akela", "Flunkey", "Winifred", "Rama"],
    //         a: "Rikki-Tikki-Tavi",
    //     },
    //     {
    //         q: "What was the name of Mowglis mentor, the black panther, in The Jungle Book?",
    //         c: ["Kaa", "Shere Khan", "Baloo", "Bagheera"],
    //         a: "Bagheera",
    //     },
    //     {
    //         q: "In the novel Animal Farm the main protaginaist is named after a famous french villian, Napolean. What kind of animal was he?",
    //         c: ["Pig", "Horse", "Chicken", "Cow"],
    //         a: "Pig",
    //     },
    //     {
    //         q: "Who is the only character to appear in all seven novels of the series The Chronicles of Narnia?",
    //         c: ["Trumpkin", "Aslan", "Puddleglum", "Shasta"],
    //         a: "Aslan",
    //     },

    // ];

    // var correct = 0;
    // var incorrect = 0;
    // var questionIndex = 0;
    // var count = 5;
    // var counter = setInterval(timer, 1000);

    // function timer() {
    //     $("#time-remaining").html("<h3>Time Remaining: " + count + "</h3>");
    //     count = count - 1;
    //     if (count === 0) {
    //         clearInterval(counter);
    //         return;
    //     }
    // }

    // function startScreen() {
    //     $("#time-remaining").hide();
    //     $("#question").hide();
    //     $("#choice1").hide();
    //     $("#choice2").hide();
    //     $("#choice3").hide();
    //     $("#choice4").hide();
    //     $("#correct-answers").hide();
    //     $("#incorrect-answers").hide();
    //     $("#start-over-button").hide();
    // }

    // function startGame() {
    //     $("#start-game-button").hide();
    //     $("#time-remaining").show();
    //     $("#question").show();
    //     $("#choice1").show();
    //     $("#choice2").show();
    //     $("#choice3").show();
    //     $("#choice4").show();
    // }

    // function firstQuestion() {
    //     $("#question").text(question[0].q);
    //     $("#choice1").text(question[0].c[0]);
    //     $("#choice2").text(question[0].c[1]);
    //     $("#choice3").text(question[0].c[2]);
    //     $("#choice4").text(question[0].c[3]);
    // }

    // function secondQuestion() {
    //     $("#question").text(question[1].q);
    //     $("#choice1").text(question[1].c[0]);
    //     $("#choice2").text(question[1].c[1]);
    //     $("#choice3").text(question[1].c[2]);
    //     $("#choice4").text(question[1].c[3]);
    // }

    // function thirdQuestion() {
    //     $("#question").text(question[2].q);
    //     $("#choice1").text(question[2].c[0]);
    //     $("#choice2").text(question[2].c[1]);
    //     $("#choice3").text(question[2].c[2]);
    //     $("#choice4").text(question[2].c[3]);
    // }

    // function fourthQuestion() {
    //     $("#question").text(question[3].q);
    //     $("#choice1").text(question[3].c[0]);
    //     $("#choice2").text(question[3].c[1]);
    //     $("#choice3").text(question[3].c[2]);
    //     $("#choice4").text(question[3].c[3]);
    // }

    // function fifthQuestion() {
    //     $("#question").text(question[4].q);
    //     $("#choice1").text(question[4].c[0]);
    //     $("#choice2").text(question[4].c[1]);
    //     $("#choice3").text(question[4].c[2]);
    //     $("#choice4").text(question[4].c[3]);
    //     console.log(choice4)
    // }

    // function iterateQuestions() {
    //     for (i = 0; i < question.length; i++) {
    //         $("#question").text(question[i].q);
    //         $("#choice1").text(question[i].c[0]);
    //         $("#choice2").text(question[i].c[1]);
    //         $("#choice3").text(question[i].c[2]);
    //         $("#choice4").text(question[i].c[3]);
    //         break;
    //     }
    // }

    // startScreen();
    // $("#start-game-button").click(function () {
    //     startGame();
    //     timer();
    //     iterateQuestions();
    //     // fifthQuestion();
    // });

    // $("#choice1").click(function () {
    //     console.log($(this).attr("value"))
    // })
    // TODO: Put links to our images in this image array.
    var questions = [{
            q: "What type of whale was the infamous antagonist in the novel Mody Dick?",
            c: ["Sperm whale", "Blue whale", "Humpback whale", "Gray whale"],
            a: "Sperm whale",
        },
        {
            q: "What was the name of the mongoose who protected his family from cobras. Hint his name is an onomatopoeia.",
            c: ["Akela", "Flunkey", "Winifred", "Rama"],
            a: "Rikki-Tikki-Tavi",
        },
        {
            q: "What was the name of Mowglis mentor, the black panther, in The Jungle Book?",
            c: ["Kaa", "Shere Khan", "Baloo", "Bagheera"],
            a: "Bagheera",
        },
        {
            q: "In the novel Animal Farm the main protaginaist is named after a famous french villian, Napolean. What kind of animal was he?",
            c: ["Pig", "Horse", "Chicken", "Cow"],
            a: "Pig",
        },
        {
            q: "Who is the only character to appear in all seven novels of the series The Chronicles of Narnia?",
            c: ["Trumpkin", "Aslan", "Puddleglum", "Shasta"],
            a: "Aslan",
        },
    ];

    // Variable showQuestion will hold the setInterval when we start the slideshow
    var showQuestion;

    // Count will keep track of the index of the currently displaying question.
    var count = 0;

    // TODO: Use jQuery to run "startSlideshow" when we click the "start" button.
    $("#start-game-button").click(startSlideshow);

    // TODO: Use jQuery to run "stopSlideshow" when we click the "stop" button.
    $("#stop").click(stopSlideshow);

    function resultsArea() {
        $("#time-remaining").hide();
        $("#question").hide();
        $("#choice1").hide();
        $("#choice2").hide();
        $("#choice3").hide();
        $("#choice4").hide();
        $("#start-game-button").hide();
        $("#results-area").show();
        
    }

    function nextQuestion() {
        $("#question").text(questions[count].q);
        $("#choice1").text(questions[count].c[0])
        $("#choice2").text(questions[count].c[1])
        $("#choice3").text(questions[count].c[2])
        $("#choice4").text(questions[count].c[3])
        $("#quiz-area").show();
        $("#start-game-button").hide();
        count++;
        if (count > 4) {
            stopSlideshow();
        }
    }

    function startSlideshow() {
        showQuestion = setInterval(nextQuestion, 3000);
    }

    function stopSlideshow() {
        clearInterval(showQuestion);
        resultsArea();
    }
})