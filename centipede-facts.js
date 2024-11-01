    document.addEventListener("DOMContentLoaded", () => {
    const facts = [
        "House centipedes have long, slender bodies with 15 pairs of legs, which they use to move quickly.",
        "They are beneficial predators, feeding on other household pests like spiders, ants, and cockroaches.",
        "House centipedes can run extremely fast, often startling homeowners.",
        "They are mostly active at night when they hunt for prey.",
        "House centipedes can regenerate lost legs, which is helpful if they lose one while escaping predators.",
        "Although they may look frightening, house centipedes are generally harmless to humans and pets.",
        "House centipedes can live for several years, often 3 to 7 years, which is quite long for an arthropod.",
        "They have long, sensitive antennae that help them navigate and locate prey in the dark."
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