    document.addEventListener("DOMContentLoaded", () => {
    const facts = [
        "Spiders can produce up to seven different types of silk, each with a specific purpose like building webs, catching prey, or creating egg sacs.",
        "Most spiders have eight eyes, but some species have six or even fewer.",
        "Spiders don’t have ears, but they can sense vibrations through the tiny hairs on their legs to detect sounds and movements.",
        "The Goliath birdeater is the world’s largest spider, with a leg span of up to 12 inches – roughly the size of a dinner plate!",
        "Some species of jumping spiders can leap up to 50 times their body length, making them expert hunters.",
        "Spiders liquefy their prey before eating, as they can only consume liquid food.",
        "Spiders help control insect populations by feeding on pests like mosquitoes, flies, and other small bugs.",
        "Spiders can survive for weeks without food, and some species can go for months by slowing down their metabolism."
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