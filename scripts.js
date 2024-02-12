document.addEventListener('DOMContentLoaded', function () {
  const gifImage = document.getElementById('gifImage');
  const yesButton = document.getElementById('yesButton');
  const noButton = document.getElementById('noButton');
  const backButton = document.getElementById('backButton');
  const buttonGroup1 = document.getElementById('buttonGroup1');
  const buttonGroup2 = document.getElementById('buttonGroup2');

  // Load Happy Cat GIF on Yes button click
  yesButton.addEventListener('click', function () {
    gifImage.src = 'happy_cat.gif';
    document.querySelector('h1').textContent = "Yay! You make me so happy! 😻";
    buttonGroup1.style.display = 'none';
    buttonGroup2.style.display = 'block';
  });

  // Load Sad Cat GIF on No button click
  noButton.addEventListener('click', function () {
    gifImage.src = 'sad_cat.gif';
    document.querySelector('h1').textContent = "Oh no! 😿";
    buttonGroup1.style.display = 'none';
    buttonGroup2.style.display = 'block';
  });

  // Load Will you be my valentine on Back button click
  backButton.addEventListener('click', function () {
    gifImage.src = 'goma_peach.gif';
    document.querySelector('h1').textContent = "Will you be my valentine?";
    buttonGroup1.style.display = 'block';
    buttonGroup2.style.display = 'none';
  });
});
