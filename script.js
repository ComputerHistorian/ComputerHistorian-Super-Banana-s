import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// ===== SUPABASE =====
const supabase = createClient(
  'https://hdnllgvpxjrgvohttaax.supabase.co',
  'sb_publishable_XXXXXXXX'
)

// ===== СЧЁТЧИК ПРОСМОТРОВ =====
async function increaseView() {
  try {
    // увеличиваем только один раз на браузер
    if (!localStorage.getItem('viewed')) {
      localStorage.setItem('viewed', 'true')

      const { data, error } = await supabase.rpc('increment_count')
      console.log('RPC increment:', data, error)
    }

    // получаем текущее значение
    const { data, error } = await supabase
      .from('views')
      .select('count')
      .eq('id', 1)
      .single()

    console.log('SELECT count:', data, error)

    if (data && document.getElementById('view-count')) {
      document.getElementById('view-count').textContent = data.count
    }
  } catch (e) {
    console.error('VIEW ERROR:', e)
  }
}

// вызываем после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  increaseView()

  // ===== ГАМБУРГЕР =====
  const hamburger = document.getElementById('hamburger')
  const sideCard = document.getElementById('sideCard')

  if (hamburger && sideCard) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active')
      sideCard.classList.toggle('show')
    })
  }
})

// ===== СЕКРЕТНАЯ УТОЧКА =====
function sigmo() {
  const bodyElement = document.getElementById('parent')
  if (!bodyElement) return

  if (!bodyElement.querySelector('#batDuck')) {
    const img = document.createElement('img')
    img.src = 'https://mimo.app/i/batduck.png'
    img.id = 'batDuck'
    bodyElement.appendChild(img)

    const msg = document.createElement('p')
    msg.id = 'duckMsg'
    msg.textContent = '💀'
    msg.style.fontSize = '15px'
    bodyElement.appendChild(msg)
  } else {
    const msg = document.getElementById('duckMsg')
    if (msg) msg.textContent = '☠️🦆'
  }
}

function siggg() {
  const img = document.getElementById('batDuck')
  const msg = document.getElementById('duckMsg')

  if (img) img.remove()
  if (msg) msg.remove()
}

// 🔥 ДЕЛАЕМ ФУНКЦИИ ДОСТУПНЫМИ ДЛЯ onclick ИЗ HTML
window.sigmo = sigmo
window.siggg = siggg
