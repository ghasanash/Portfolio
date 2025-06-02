// Typewriter Effect
document.addEventListener("DOMContentLoaded", () => {
  const text = "Hi, I'm Ghasan Ashkar 👋";
  let i = 0;
  const el = document.getElementById("typewriter");

  function typing() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 70);
    }
  }
  typing();

  // Load stored recommendations
  loadRecommendations();
});

function addRecommendation() {
  const input = document.getElementById("new_recommendation");
  const text = input.value.trim();
  if (text) {
    const div = document.createElement("div");
    div.className = "recommendation";
    div.textContent = text;

    document.getElementById("recommendation-list").appendChild(div);
    input.value = '';
    showPopup(true);

    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem("recommendations") || "[]");
    existing.push(text);
    localStorage.setItem("recommendations", JSON.stringify(existing));
  }
}

function loadRecommendations() {
  const list = JSON.parse(localStorage.getItem("recommendations") || "[]");
  const container = document.getElementById("recommendation-list");
  list.forEach(text => {
    const div = document.createElement("div");
    div.className = "recommendation";
    div.textContent = text;
    container.appendChild(div);
  });
}

function showPopup(show) {
  const popup = document.getElementById("popup");
  popup.style.display = show ? "block" : "none";
  if (show) {
    setTimeout(() => popup.style.display = "none", 3000);
  }
}
