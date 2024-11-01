    document.addEventListener("DOMContentLoaded", () => {
    const facts = [
     "Wasps play a crucial role in pollination, just like bees, especially when they visit flowers for nectar.",
     "Unlike bees, wasps can sting multiple times because their stingers don’t have barbs.",
     "Some species of wasps are solitary, while others live in large colonies with a complex social hierarchy, similar to ants.",
     "Certain wasps, like the tarantula hawk, hunt spiders much larger than themselves and paralyze them to use as food for their larvae.",
     "Paper wasps get their name because they build their nests out of a paper-like substance, which they create by chewing wood fibers mixed with their saliva.",
     "Wasps are natural pest controllers, feeding on insects like caterpillars and flies that can damage crops.",
     "Male wasps, known as drones, don’t have stingers, so they can't sting you!",
     "Some parasitic wasps lay their eggs inside or on other insects, and when the larvae hatch, they feed on the host."
     
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