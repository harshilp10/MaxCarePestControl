    document.addEventListener("DOMContentLoaded", () => {
    const facts = [
      "Mosquitoes have been around for over 100 million years, surviving through major environmental changes and evolving into more than 3,000 species.",
      "Only female mosquitoes bite humans and animals, as they need the protein from blood to develop their eggs. Male mosquitoes feed on nectar and plant juices.",
      "A mosquito can drink up to three times its body weight in blood during a single feeding session.",
      "Mosquitoes are attracted to people by the carbon dioxide they exhale, as well as body heat and sweat, which is why they tend to target humans.",
      "These tiny insects are responsible for more human deaths each year than any other creature, largely due to the diseases they can transmit, such as malaria, dengue fever, and Zika virus.",
      "Despite their small size, mosquitoes can fly at speeds of 1.5 to 2.5 kilometers per hour, making them surprisingly fast for their size.",
      "Mosquitoes beat their wings about 300 to 600 times per second, which creates the distinctive high-pitched buzzing sound they make.",
      "The average lifespan of a mosquito is only about two months, but in that short time, they can lay hundreds of eggs in stagnant water."
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