const btn = document.getElementById("toggleTheme");

btn.onclick = () => {
  document.body.dataset.theme =
    document.body.dataset.theme === "dark" ? "light" : "dark";
};
