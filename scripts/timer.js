let timerInterval;
let time = getCookie('timer') ? parseInt(getCookie('timer')) : 0;
let isRunning = getCookie('isRunning') === 'true';

// Met à jour l'affichage du timer
function updateTimerDisplay() {
  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');
  document.getElementById('timer').textContent = `${minutes}:${seconds}`;
}

// Démarre le timer
function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      time++;
      setCookie('timer', time, 1);
      updateTimerDisplay();
    }, 1000);
    isRunning = true;
    setCookie('isRunning', isRunning, 1);
    updateButtonState();
  }
}

// Met en pause le timer
function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  isRunning = false;
  setCookie('isRunning', isRunning, 1);
  updateButtonState();
}

// Alterne entre Play et Pause
function toggleTimer() {
  if (isRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

// Réinitialise le timer
function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  time = 0;
  isRunning = false;
  setCookie('timer', time, 1);
  setCookie('isRunning', isRunning, 1);
  updateTimerDisplay();
  updateButtonState();
}

// Met à jour l'état du bouton Play/Pause
function updateButtonState() {
  const playPauseButton = document.getElementById('playPause');
  playPauseButton.textContent = isRunning ? "Pause" : "Play";
}

// Gère les cookies
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
    const [key, val] = cookie.split('=');
    if (key === name) return val;
  }
  return null;
}

// Événements des boutons
document.getElementById('playPause').addEventListener('click', toggleTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

// Initialisation au chargement de la page
updateTimerDisplay();
updateButtonState();

// Si le timer était en cours, le relancer
if (isRunning) {
  startTimer();
}

// Ajoute une pénalité de 1 minute
function addPenalty() {
  time += 60; // Ajouter 60 secondes (1 minute)
  setCookie('timer', time, 1);
  updateTimerDisplay();
  
}


    