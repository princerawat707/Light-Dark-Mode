const toogleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toogleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const para = document.querySelector('p');

// Dark Mode Styles
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    para.style.color = 'rgb(255 255 255 / 60%)';
    image1.src = 'img/undraw_proud_coder_dark.svg';
    image2.src = 'img/undraw_feeling_proud_dark.svg';
    image3.src = 'img/undraw_conceptual_idea_dark.svg';
}

// Light Mode setting for images
function lightMode() {
    image1.src = 'img/undraw_proud_coder_light.svg';
    image2.src = 'img/undraw_feeling_proud_light.svg';
    image3.src = 'img/undraw_conceptual_idea_light.svg';
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem('theme', 'dark');
    darkMode()
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem('theme', 'light');
    lightMode()
  }
}

// Event Listener
toogleSwitch.addEventListener("change", switchTheme);


// Check local storage for theme

// const currentTheme = localStorage.getItem('theme');

