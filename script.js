const questions = [
    "In a difficult spot, I turn at once to what can be done to put things right.",
    "I influence where I can, rather than worrying about what I can’t influence.",
    "I don’t take criticism personally.",
    "I generally manage to keep things in perspective.",
    "I am calm in a crisis.",
    "I’m good at finding solutions to problems.",
    "I wouldn’t describe myself as an anxious person.",
    "I don’t tend to avoid conflict.",
    "I try to control events rather than being a victim of circumstances.",
    "I trust my intuition.",
    "I manage my stress levels well.",
    "I feel confident and secure in my position."
  ];
  
  let currentQuestion = 0;
  let totalScore = 0;
  
  const app = document.getElementById("app");
  const startButton = document.getElementById("start-button");
  const questionnaire = document.querySelector(".questionnaire");
  const form = document.getElementById("quiz-form");
  const nextButton = document.getElementById("next-button");
  const resultPage = document.querySelector(".result-page");
  const resultText = document.getElementById("result-text");
  const restartButton = document.getElementById("restart-button");
  
  function renderQuestion(index) {
    form.innerHTML = `
      <div class="question">
        <h2>${questions[index]}</h2>
        <div class="options">
          ${[1, 2, 3, 4, 5]
            .map(
              (score) => `
            <input type="radio" id="option${score}" name="answer" value="${score}">
            <label for="option${score}">${score}</label>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }
  
  startButton.addEventListener("click", () => {
    document.querySelector(".start-page").style.display = "none";
    questionnaire.style.display = "block";
    renderQuestion(currentQuestion);
    nextButton.style.display = "inline-block";
  });
  
  nextButton.addEventListener("click", () => {
    const selectedOption = document.querySelector(
      'input[name="answer"]:checked'
    );
  
    if (!selectedOption) {
      alert("Please select a score!");
      return;
    }
  
    totalScore += parseInt(selectedOption.value, 10);
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      renderQuestion(currentQuestion);
    } else {
      showResult();
    }
  });
  
  function showResult() {
    questionnaire.style.display = "none";
    resultPage.style.display = "block";
    resultText.textContent = `You scored ${totalScore/6*10}%.`;
  }
  
  restartButton.addEventListener("click", () => {
    currentQuestion = 0;
    totalScore = 0;
    resultPage.style.display = "none";
    document.querySelector(".start-page").style.display = "block";
  });
  
