// Store and load recommendations using localStorage
function addRecommendation() {
  const input = document.getElementById("new_recommendation");
  const text = input.value.trim();

  if (text) {
    const div = document.createElement("div");
    div.className = "recommendation";
    div.textContent = text;

    input.parentNode.insertBefore(div, input);
    input.value = '';
    showPopup(true);

    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem("recommendations") || "[]");
    existing.push(text);
    localStorage.setItem("recommendations", JSON.stringify(existing));
  }
}

function showPopup(show) {
  const popup = document.getElementById("popup");
  popup.style.display = show ? "block" : "none";
  if (show) {
    setTimeout(() => {
      popup.style.display = "none";
    }, 3000);
  }
}

function loadRecommendations() {
  const list = JSON.parse(localStorage.getItem("recommendations") || "[]");
  const input = document.getElementById("new_recommendation");
  list.forEach(text => {
    const div = document.createElement("div");
    div.className = "recommendation";
    div.textContent = text;
    input.parentNode.insertBefore(div, input);
  });
}

// Load existing recommendations on page load
document.addEventListener("DOMContentLoaded", loadRecommendations);
