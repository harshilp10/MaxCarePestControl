    document.addEventListener("DOMContentLoaded", () => {
    const facts = [
     "Squirrels are exceptional jumpers, able to leap distances of up to 10 times their body length. This incredible agility helps them navigate through trees and escape predators.",
     "They have sharp, curved claws and a prehensile tail, which allow them to climb and balance easily on tree branches. Their tail also acts as a rudder to help them steer while jumping.",
     "Squirrels have a remarkable memory for locating their food caches. They bury nuts and seeds in various locations and can remember the locations of many of these caches, though they often forget some, which helps new plants grow.",
     "Their front teeth grow continuously throughout their lives. Squirrels need to gnaw on various objects, including trees and nuts, to keep their teeth from growing too long.",
     "Squirrels communicate with each other using a variety of vocalizations and tail movements. They may make warning calls or use their tails to signal alarm and other messages.",
     "They are omnivores, but their diet primarily consists of nuts, seeds, fruits, and insects. Squirrels have been known to eat small birds and eggs on occasion.",
     "Squirrels can rotate their hind legs 180 degrees, which helps them climb down trees head-first. This unique adaptation is crucial for their arboreal lifestyle.",
     "Their sense of smell is highly developed, helping them locate buried food. They can detect the scent of nuts buried under leaves or snow."
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