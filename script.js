import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hdnllgvpxjrgvohttaax.supabase.co'
const supabaseKey = 'sb_publishable_vFLPD28NukcoDdSY77PqqQ_p-zHCQBy'
const supabase = createClient(supabaseUrl, supabaseKey)

// Функция увеличения просмотров
export async function increaseView() {
  if (!localStorage.getItem('viewed')) {
    localStorage.setItem('viewed', 'true')

    // Вызываем RPC функцию, чтобы увеличить счетчик
    const { data, error } = await supabase.rpc('increment_count')
    if (error) console.error(error)
  }

  // Получаем текущее значение count
  const { data, error } = await supabase
    .from('views')
    .select('count')
    .eq('id', 1)
    .single() // чтобы вернуть один объект

  if (error) console.error(error)
  else {
    document.getElementById('view-count').textContent = data.count
    console.log('Текущее количество просмотров:', data.count)
  }
}

// Вызываем функцию сразу при загрузке страницы
increaseView()

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