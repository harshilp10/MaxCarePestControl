    document.addEventListener("DOMContentLoaded", () => {
    const facts = [
     "Raccoons are known for their 'masked' faces, which help reduce glare and improve their night vision.",
     "They have highly dexterous front paws with five fingers, allowing them to open jars, doors, and even manipulate tools.",
     "Raccoons can remember solutions to problems for up to three years, showcasing their impressive memory skills.",
     "Their sense of touch is incredibly sensitive, and raccoons often wet their paws to enhance their tactile abilities.",
     "Raccoons are omnivores and have a very adaptable diet, eating everything from fruits and nuts to insects and small animals.",
     "They are excellent swimmers and can stay afloat for several hours if needed.",
     "Raccoons are nocturnal and mostly active during the night, using their keen sense of hearing and night vision to find food.",
     "The name 'raccoon' comes from the Powhatan word 'aroughcun,' which means 'animal that scratches with its hands.'"
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