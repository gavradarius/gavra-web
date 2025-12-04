// Ambil elemen display
const display = document.getElementById('display');

// ======== Fungsi dasar kalkulator ========
function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

// ======== Shortcut keyboard ========
document.addEventListener('keydown', (e) => {
  const key = e.key;

  // Cegah efek default biar Enter/Backspace gak ganggu halaman
  if (['Enter', 'Backspace', 'Escape'].includes(key)) e.preventDefault();

  // 1️⃣ Angka 0–9
  if (/^[0-9]$/.test(key)) {
    appendValue(key);
  }

  // 2️⃣ Operator umum
  if (['+', '-', 'x', '/'].includes(key)) {
    appendValue(key);
  }

  // 3️⃣ Titik desimal
  if (key === '.') {
    appendValue('.');
  }

  // 4️⃣ Tekan Enter atau = untuk hasil
  if (key === 'Enter' || key === '=') {
    calculate();
  }

  // 5️⃣ Backspace hapus 1 karakter
  if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  }

  // 6️⃣ Escape untuk reset total
  if (key === 'Escape') {
    clearDisplay();
  }

  // 7️⃣ (Opsional) Shortcut alternatif
  if (key.toLowerCase() === 'c') clearDisplay(); // Tekan C buat clear
});
