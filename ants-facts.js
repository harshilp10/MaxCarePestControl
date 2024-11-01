    document.addEventListener("DOMContentLoaded", () => {
    const facts = [
        "Ants live in highly organized colonies with a clear division of labor among workers, soldiers, and queens.",
        "They communicate using pheromones, chemicals that can signal danger, food sources, and other important information.",
        "Ants are incredibly strong for their size, capable of lifting objects 20 times their own body weight.",
        "There are over 12,000 known species of ants, each with unique behaviors and characteristics.",
        "Some species build complex underground nests with multiple chambers and tunnels.",
        "Certain ant species, like leafcutter ants, practice farming by cultivating fungus as a food source.",
        "Ants often form symbiotic relationships with other insects and plants, such as aphids, which they protect in exchange for honeydew.",
        "While worker ants typically live for a few months, queen ants can live for many years, sometimes up to 30 years in certain species."
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