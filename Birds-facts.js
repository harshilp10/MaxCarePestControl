    document.addEventListener("DOMContentLoaded", () => {
    const facts = [
     "Pigeons have an incredible homing ability, allowing them to find their way back to their nest from hundreds of miles away.",
     "They can recognize human faces and remember people who feed them, showing remarkable intelligence.",
     "Pigeons were used during World War I and II to carry important messages, playing a crucial role in communication.",
     "These birds can fly at speeds up to 90 miles per hour, making them surprisingly fast.",
     "European starlings are invasive birds in Ontario, known for their ability to mimic human sounds and other bird species.",
     "Starlings often form large flocks called 'murmurations,' creating stunning aerial displays.",
     "Canada geese are highly protective of their young and can become aggressive if they feel threatened.",
     "They have strong homing instincts and often return to the same nesting sites year after year.",
     "Swallows are often found nesting in barns, sheds, or under the eaves of homes.",
     "They build mud nests in sheltered locations, sometimes causing structural damage to homes."
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