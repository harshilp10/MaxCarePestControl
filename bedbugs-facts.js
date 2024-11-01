    document.addEventListener("DOMContentLoaded", () => {
    const facts = [
        "Bed bugs have been around for thousands of years, with evidence of their presence dating back to ancient civilizations.",
        "Bed bugs are sensitive to heat and can be effectively killed by exposure to temperatures above 120F (49C) for several minutes.",
        "Bed bugs are primarily nocturnal and prefer to feed on their hosts while they sleep.",
        "Bed bugs can survive for several months without feeding, making them resilient pests.",
        "Their bites are usually painless at the time, but they can cause itching and discomfort later due to an allergic reaction to their saliva.",
        "Bed bugs are attracted to the carbon dioxide and heat emitted by their hosts, helping them locate where to feed.",
        "Bed bugs have developed resistance to many common insecticides, making them challenging to eliminate.",
        "Bed bug eggs are tiny, about the size of a pinhead, and are white and sticky, making them difficult to see and remove."
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