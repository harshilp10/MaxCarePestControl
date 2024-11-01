    document.addEventListener("DOMContentLoaded", () => {
    const facts = [
        "Rats and mice are proficient climbers and can scale vertical walls and even jump several feet.",
        "Rats are known for their intelligence and can learn and remember tasks.",
        "A pair of rats can produce up to 2,000 offspring in a year under optimal conditions.",
        "Rats and mice use their whiskers to sense changes in their environment, helping them navigate in the dark.",
        "Their teeth grow continuously throughout their lives, which is why they constantly gnaw on objects to keep them short.",
        "They have a highly developed sense of smell, taste, and hearing, which helps them find food and detect danger.",
        "Rats and mice are social animals that prefer to live in groups and can exhibit behaviors such as grooming each other and playing.",
        "They can adapt to a wide range of environments, from rural fields to urban areas."
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