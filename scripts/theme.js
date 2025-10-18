const themeIcon = document.querySelector(".theme-toggle");
const themeIconImage = document.querySelector(".theme-toggle--image");
const body = document.querySelector("body");

const switchThemes = (value) => {
  if (body.hasAttribute("data-theme") || value === "dark theme") {
    body.removeAttribute("data-theme");
    themeIconImage.setAttribute("src", "/images/icon-sun.svg");
    localStorage.setItem("theme", "dark theme");
  } else {
    body.setAttribute("data-theme", "light");
    themeIconImage.setAttribute("src", "/images/icon-moon.svg");
    localStorage.setItem("theme", "light theme");
  }
};

const getStoredTheme = () => {
  const value = localStorage.getItem("theme");
  if (value === "dark theme") {
    switchThemes("dark theme");
  } else {
    switchThemes("light theme");
  }
};

export const theme = () => {
  getStoredTheme();
  themeIcon.addEventListener("click", switchThemes);
  themeIcon.addEventListener(
    "keypress",
    (event) => event.key === "Enter" && switchThemes
  );
};
