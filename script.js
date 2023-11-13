const quizData = [
    {
        question: "Kenapa Mmin ucu gemoi?",
        options: ["Ucu Gemoi", "Mmen", "Anjai", "Uwu"],
        correctAnswer: "Ucu Gemoi"
    },
    {
        question: "Kita anniv kapan?",
        options: ["11 Okt", "99 Okt", "27 Okt", "31 Feb"],
        correctAnswer: "27 Okt"
    },
    {
        question: "What is the secret of the universe?",
        options: ["Batu", "Jimat", "Anjai", "42"],
        correctAnswer: "42"
    },
    {
        question: "Mamen?",
        options: ["Mamen!", "Mamen??", "Memen", "Mumen"],
        correctAnswer: "Mamen!"
    },
    {
        question: "Apen ultah kapan??",
        options: ["9 Saturnus", "4 Juni", "Gemini", "Ucu gmoi"],
        correctAnswer: "4 Juni"
    },
    {
        question: "Apen paling suka makan apa?",
        options: ["Jangkrik", "Otak kadal", "Risol", "Mmin"],
        correctAnswer: "Mmin"
    }
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");

function startQuiz() {
    showQuestion(quizData[currentQuestion]);
}

function showQuestion(questionData) {
    questionContainer.innerHTML = `<p>${questionData.question}</p>`;
    optionsContainer.innerHTML = "";

    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-button");
        button.addEventListener("click", () => selectOption(option, questionData.correctAnswer, button));
        optionsContainer.appendChild(button);
    });
}

function selectOption(selectedOption, correctAnswer, selectedButton) {
    if (selectedOption === correctAnswer) {
        score++;
        selectedButton.style.backgroundColor = "#8aff8a"; // Green for correct answer
    } else {
        selectedButton.style.backgroundColor = "#ff8a8a"; // Red for incorrect answer
        const correctButton = Array.from(optionsContainer.children).find(btn => btn.innerText === correctAnswer);
        correctButton.style.backgroundColor = "#8aff8a"; // Highlight correct answer in green
    }

    disableButtons();
}

function disableButtons() {
    const buttons = document.querySelectorAll(".option-button");
    buttons.forEach(button => {
        button.disabled = true;
    });

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        nextButton.style.display = "block";
    } else {
        showResults();
    }
}

function showResults() {
    questionContainer.innerHTML = `<p>You scored ${score} out of ${quizData.length}!</p>`;
    optionsContainer.innerHTML = "Congrats Mimin udah jawab cmuaa hhe!";
    nextButton.style.display = "none";
}

nextButton.addEventListener("click", startQuiz);

startQuiz();
