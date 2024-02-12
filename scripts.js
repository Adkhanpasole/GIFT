document.addEventListener('DOMContentLoaded', function () {
  const gifImage = document.getElementById('gifImage');
  const yesButton = document.getElementById('yesButton');
  const noButton = document.getElementById('noButton');

  // Load Happy Cat GIF on Yes button click
  yesButton.addEventListener('click', function () {
    gifImage.src = 'happy_cat.gif';
    document.querySelector('h1').textContent = "Yay! You make me so happy! 😻";
  });

  // Load Sad Cat GIF on No button click
  noButton.addEventListener('click', function () {
    gifImage.src = 'sad_cat.gif';
    document.querySelector('h1').textContent = "Oh no! 😿";
  });
});
