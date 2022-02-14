const quizData = [
    {
        question: " 1) What data type is the object below ? L = [1, 23, ‘hello’, 1]",
        a: "List",
        b: "Dictionary",
        c: "Tuple",
        d: "array",
        correct: "a",
    },
    {
        question: "2) Which of the following transport layer protocols is used to support electronic mail?",
        a: "SMTP",
        b: "IP",
        c: "TCP",
        d: "UDP",
        correct: "c",
    },
    {
        question: "3) Which of the following standard algorithms is not a Greedy algorithm?",
        a: "Dijkstra's shortest path algorithm",
        b: "Bellmen Ford Shortest path algorithm",
        c: "Prim's algorithm",
        d: "Kruskal algorithm",
        correct: "b",
    },
    {
        question: "4) _______ is the process of finding errors and fixing them within a program.",
        a: "Compiling",
        b: "Executing",
        c: "Debugging",
        d: "Scanning",
        correct: "c",
    },
    {
        question: "5) What is the best time complexity of bubble sort?",
        a: "N^2",
        b: "NlogN",
        c: "N",
        d: "N(logN)^2",
        correct: "c",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Quiz Completed 
                your score is  ${score}/${quizData.length} </h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});