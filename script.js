function mudartema() {
    const changeMode = document.body.classList.toggle("dark");
    const icon = document.getElementById("mudar");
  
    changeMode ? (icon.innerHTML = "light_mode") : (icon.innerHTML = "dark_mode");
  }