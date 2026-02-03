const NAMESPACE = 'ComputerHistorian'; // ЛЮБОЕ уникальное имя
const KEY = 'ComputerHistorian-Super-Banana-s';

const viewed = localStorage.getItem('viewed');

if (!viewed) {
  fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById('view-count').innerText = data.value;
      localStorage.setItem('viewed', 'true');
    });
} else {
  fetch(`https://api.countapi.xyz/get/${NAMESPACE}/${KEY}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById('view-count').innerText = data.value;
    });
}
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