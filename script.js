const NAMESPACE = 'ComputerHistorian';
const KEY = 'ComputerHistorian-Super-Banana-s';

document.addEventListener('DOMContentLoaded', () => {
  const counter = document.getElementById('view-count');

  if (!counter) return;

  const viewed = localStorage.getItem('viewed');

  const url = viewed
    ? `https://api.countapi.xyz/get/${NAMESPACE}/${KEY}`
    : `https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (!data || data.value === undefined) {
        counter.innerText = 'err';
        return;
      }

      counter.innerText = data.value;
      localStorage.setItem('viewed', 'true');
    })
    .catch(err => {
      console.error('CountAPI error:', err);
      counter.innerText = '?';
    });
});
const hamburger = document.getElementById("hamburger");
    const sideCard = document.getElementById("sideCard");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      sideCard.classList.toggle("show");
    });
    function sigmo() {
  const bodyElement = document.getElementById("parent");

  if (!bodyElement.querySelector("#batDuck")) {
    const img = document.createElement("img");
    img.src = "https://mimo.app/i/batduck.png";
    img.id = "batDuck"; // 💥 помечаем уточку
    bodyElement.appendChild(img);

    const msg = document.createElement("p");
    msg.id = "duckMsg"; // 💥 помечаем сообщение
    msg.textContent = "💀";
    msg.style.fontSize = "15px";
    bodyElement.appendChild(msg);
  } else {
    const msg = document.getElementById("duckMsg");
    if (msg) msg.textContent = "☠️🦆";
  }
}
function siggg() {
  // ищем картинку уточки по id
  const img = document.getElementById("batDuck");
  const msg = document.getElementById("duckMsg");

  if (img) img.remove(); // удаляем картинку
  if (msg) msg.remove(); // удаляем сообщение
} 