$(document).ready(function () {
    var questions = [{
            q: "What type of whale was the infamous antagonist in the novel Mody Dick?",
            c: ["Sperm whale", "Blue whale", "Humpback whale", "Gray whale"],
            a: "Sperm whale",
        },
        {
            q: "What was the name of the mongoose who protected his family from cobras. Hint his name is an onomatopoeia.",
            c: ["Rikki-Tikki-Tavi", "Flunkey", "Winifred", "Rama"],
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
    let showQuestion;
    let count = 0;
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let unansweredQuestions = 5;



    function startGame() {
        showQuestion = setInterval(nextQuestion, 2000);
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
        $("#correct-answers").text("Correct Answers: " + correctAnswers)
        $("#incorrect-answers").text("Incorrect Answers: " + incorrectAnswers)
        $("#unanswered-questions").text("Unanswered questions: " + unansweredQuestions)
        $("#results-area").show();
    }

    function nextQuestion() {
        if (count > 4) {
            stopGame();
        } else {
            let currQuestion = Object.values(questions)[count].q;
            let currOptions = Object.values(questions)[count].c;
            currAnswers = Object.values(questions)[count].a;
            $("#question").text(currQuestion);
            $(".button").empty();
            $("#quiz-area").show();
            $("#start-game-button").hide();

            for (let j = 0; j < currOptions.length; j++) {
                var choiceBtn = $("<button>");
                choiceBtn.addClass("options");
                choiceBtn.attr("data-letter", currOptions[j]);
                choiceBtn.text(currOptions[j]);
                $(".button").append(choiceBtn);
            }
            count++;
        }
    }

    // $(".options").click( function() {
    $(document).on('click', '.options', function () {
        let btnValue = $(this).attr("data-letter")
        currAnswers = questions[count - 1].a;
        if (currAnswers === btnValue) {
            correctAnswers++;
        }
        else {
            incorrectAnswers++;
        }
        unansweredQuestions--;
        console.log(unansweredQuestions)
    })
})