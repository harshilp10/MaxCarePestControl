    document.addEventListener("DOMContentLoaded", () => {
    const facts = [
      "Silverfish are ancient insects, believed to have been around for over 400 million years, making them one of the oldest species on Earth.",
      "They get their name from their shiny, metallic appearance and fish-like movements as they scuttle across surfaces.",
      "Silverfish can survive without food for several months, as long as they have access to moisture.",
      "These insects are nocturnal, meaning they're most active at night and prefer dark, damp environments like basements or bathrooms.",
      "Silverfish shed their skin throughout their life, even after reaching adulthood, which is unusual among insects.",
      "They have a strong preference for starchy materials, often feeding on items like paper, book bindings, wallpaper, and clothing.",
      "Despite their prehistoric origins, silverfish have no wings and move by wiggling their bodies in a manner similar to fish.",
      "Silverfish have long antennae and tail-like appendages that help them sense their surroundings and escape predators."
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