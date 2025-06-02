// Typewriter Effect
document.addEventListener("DOMContentLoaded", loadRecommendations);
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
function showPopup(show) {
  const popup = document.getElementById("popup");
  popup.style.display = show ? "block" : "none";
  if (show) {
    setTimeout(() => popup.style.display = "none", 3000);
  }
    loadRecommendations();
}

function addRecommendation() {
  const input = document.getElementById("new_recommendation");
  const text = input.value.trim();
  if (text) {
    const newRef = db.ref("recommendations").push();
    newRef.set({ text });
    input.value = '';
    showPopup(true);
  }
}

function loadRecommendations() {
  const list = document.getElementById("recommendation-list");
  db.ref("recommendations").on("value", snapshot => {
    list.innerHTML = "";
    snapshot.forEach(child => {
      const div = document.createElement("div");
      div.className = "recommendation";
      div.textContent = child.val().text;
      list.appendChild(div);
    });
  });
}

function showPopup(show) {
  const popup = document.getElementById("popup");
  popup.style.display = show ? "block" : "none";
  if (show) {
    setTimeout(() => popup.style.display = "none", 3000);
  }
}
