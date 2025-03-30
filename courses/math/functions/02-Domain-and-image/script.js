function showAnswer(number) {
    const answer = document.getElementById(`answer${number}`);
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}

// Opcional: Adicionar animação suave
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        const answerId = this.getAttribute('onclick').match(/\d+/)[0];
        const answer = document.getElementById(`answer${answerId}`);
        answer.style.transition = "all 0.3s ease";
    });
});