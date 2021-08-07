const quizData = [
  {
    question: "Qual a data de estreia da série?",
    a: "24 de Abril de 2006",
    b: "06 de Novembro de 2005",
    c: "13 de Setembro de 2005",
    d: "3 de Maio de 2002",
    correct: "c",
  },
  {
    question: "Quantas temporadas tem?",
    a: "15 temporadas",
    b: "11 temporadas",
    c: "8 temporadas",
    d: "13 temporadas",
    correct: "a",
  },
  {
    question:
      "Marque o nome dos atores de que interpretam os personagens principais Dean Winchester e Sam Winchester? ",
    a: "Jeffrey Dean Morgan, Misha Collins",
    b: "Jensen Ackles, Jared Padalecki",
    c: "Jeffrey Dean Morgan, Jared Padalecki",
    d: "Alexander Calvert, Misha Collins",
    correct: "b",
  },
  {
    question: "Em qual temporada john winchester morre?",
    a: "1º temporada",
    b: "2º temporada",
    c: "3º temporada",
    d: "4º temporada",
    correct: "b",
  },
];

const answerEl = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
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

  answerEl.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEl.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>Voçê acertou ${score}/${quizData.length}</h2> <button onclick="location.reload()">Back</button>`;
    }
  }
});
