$(document).ready(function () {
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
        }
    ];
    var showQuestion;
    var count = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    unansweredAnswers = 0;


    function startGame() {
        // showQuestion = setInterval(nextQuestion, 2000);
        nextQuestion();
    }

    function stopGame() {
        clearInterval(showQuestion);
        resultsArea();
    }

    $("#start-game-button").click(startGame);

    $("#stop").click(stopGame);

    function resultsArea() {
        $("#quiz-area").hide();
        $("#start-game-button").hide();
        $("#results-area").show();
    }

    function nextQuestion() {
        let currQuestion = Object.values(questions)[count].q;
        let currOptions = Object.values(questions)[count].c;
        currAnswers = Object.values(questions)[count].a;
        $("#question").text(currQuestion);
        // console.log(Object.values(questions)[count].q)
        $(".button").empty();
        $("#quiz-area").show();
        $("#start-game-button").hide();
        count++;
        if (count > 4) {
            stopGame();
        }
        for (let j = 0; j < currOptions.length; j++) {
            // console.log(questions.length)
            var choiceBtn = $("<button>");
            choiceBtn.addClass("options");
            choiceBtn.attr("data-letter", currOptions[j]);
            console.log(currOptions)
            choiceBtn.text(currOptions[j]);
            $(".button").append(choiceBtn);
        }
    }

    // $(".options").click( function() {
    $(document).on('click', '.options', function () {
        let btnValue = $(this).attr("data-letter")
        currAnswers = Object.values(questions)[count].a;
        if (currAnswers === btnValue) {
            // correctAnswers++;
        }
        console.log(currAnswers)
        console.log(correctAnswers)
        console.log($(this) + btnValue)
    })
})