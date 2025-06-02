// Typewriter Effect

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
  