document.getElementById("next-btn").addEventListener("click", function() {
  // Show the next paragraph or image
  showNextContent();
  
  // Create flying hearts
  for (let i = 0; i < 10; i++) { // Change the number for more hearts
      createHeart();
  }
});

let currentIndex = 0; // To track which content to show

function showNextContent() {
  const content = document.querySelectorAll("#letter-content > *");
  if (currentIndex < content.length) {
      content[currentIndex].classList.remove("hidden");
      currentIndex++;
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️"; // Heart symbol
  document.getElementById("hearts-animation").appendChild(heart);

  // Set random horizontal position and size
  const randomX = Math.random() * 100; // Random X position
  const randomSize = Math.random() * 30 + 10; // Random size
  heart.style.left = randomX + "vw"; // Set the left position
  heart.style.fontSize = randomSize + "px"; // Set the font size
  heart.style.position = 'fixed'; // Make the heart fixed position

  // Use GSAP to animate the heart
  gsap.fromTo(heart, { y: window.innerHeight + 50, opacity: 1 }, {
      y: -100,
      opacity: 0,
      duration: 10,
      onComplete: () => heart.remove() // Remove heart after animation
  });
}

let currentPara = 0;

function nextParagraph() {
    const paragraphs = document.querySelectorAll('#letter-content p');
    if (currentPara < paragraphs.length) {
        paragraphs[currentPara].classList.remove('hidden');
        currentPara++;

        // If it's the last paragraph, hide the Next button and show the Memories button
        if (currentPara === paragraphs.length) {
            document.getElementById('next-btn').style.display = 'none'; // Hide Next button
            document.getElementById('memories-btn').style.display = 'inline-block'; // Show Memories button
        }
    }
}
