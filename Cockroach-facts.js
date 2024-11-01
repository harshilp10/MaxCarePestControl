     document.addEventListener("DOMContentLoaded", () => {
    const facts = [
        "Cockroaches have been around for over 300 million years, even before the dinosaurs.",
        "They can live without food for up to a month and without water for up to a week.",
        "Cockroaches can survive for up to a week without their heads due to their open circulatory system and ability to breathe through tiny holes in their body segments.",
        "Female cockroaches can produce up to 300 offspring in their lifetime.",
        "They can run up to three miles per hour, making them quick invaders of new environments.",
        "Cockroaches will eat almost anything, including plants, meat, glue, and even paper.",
        "They communicate with each other using chemicals called pheromones, which help them find food and mates."
    ];

    let currentIndex = 0;

    const flashcardContent = document.getElementById("flashcard-content");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    function updateFlashcard() {
        flashcardContent.textContent = facts[currentIndex];
    }

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex === 0) ? facts.length - 1 : currentIndex - 1;
        updateFlashcard();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex === facts.length - 1) ? 0 : currentIndex + 1;
        updateFlashcard();
    });

    updateFlashcard();
});