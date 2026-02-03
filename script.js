
const supabaseUrl = "https://hdnllgvpxjrgvohttaax.supabase.co";
const supabaseKey = "sb_publishable_vFLPD28NukcoDdSY77PqqQ_p-zHCQBy";

const supabase = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

const counter = document.getElementById("view-count");

async function updateViews() {
  const { error: incError } = await supabase.rpc("increment_views");

  const { data, error } = await supabase
    .from("views")
    .select("count")
    .eq("id", 1)
    .single();

  if (incError || error) {
    counter.innerText = "—";
  } else {
    counter.innerText = data.count;
  }
}

updateViews();
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