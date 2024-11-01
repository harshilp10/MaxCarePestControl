    document.addEventListener("DOMContentLoaded", () => {
    const facts = [
     "Termites are ancient insects, with some species dating back over 250 million years, long before the age of dinosaurs.",
     "Despite their small size, termites play a vital role in breaking down dead wood and returning nutrients to the soil.",
     "A single termite queen can live for up to 30 years and lay thousands of eggs each day, ensuring the colony's growth.",
     "Termites communicate through vibrations and pheromones, which they use to alert the colony of food sources or danger.",
     "Some termite species build massive mounds that can reach over 30 feet in height, acting as complex, climate-controlled homes.",
     "Termites are actually closely related to cockroaches, sharing a common evolutionary ancestor.",
     "Unlike ants, termites do not have a constricted waist, giving them a more uniform body shape.",
     "Termites never sleep! They work 24/7, constantly foraging, building, and caring for their colony."
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