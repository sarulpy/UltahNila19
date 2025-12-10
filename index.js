const btn = document.getElementById("playMusic");
const bgm = document.getElementById("bgm");

bgm.loop = true; // agar musik otomatis mengulang

btn.addEventListener("click", () => {
  if (bgm.paused) {
    bgm.play();
    btn.textContent = "⏸ Hentikan Musik";
    btn.classList.remove("off");
    btn.classList.add("on");
  } else {
    bgm.pause();
    btn.textContent = "🎶 Putar Musik";
    btn.classList.remove("on");
    btn.classList.add("off");
  }
});