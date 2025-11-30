const feedback = document.getElementById("feedback");

function checkAnswer() {
    const correctAnswer = "4";
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;
if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
} else {
    feedback.textContent = "that's incorrect. Try again!";
}
}
const submit = document.getElementById("submit-answer");
submit.addEventListener("click", checkAnswer);
