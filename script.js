let skorPemain = 0;
let skorKomputer = 0;
let kesempatan = 20;

// Ambil skor tertinggi dari localStorage
let skorTertinggi = localStorage.getItem('skorTertinggi') || 0;
document.getElementById('high-score').textContent = skorTertinggi;

function playGame(playerChoice) {
  if (kesempatan <= 0) {
    alert('Kesempatan habis! Reset game untuk bermain lagi.');
    return;
  }

  // Komputer memilih secara acak
  let comp = Math.random();
  if (comp <= 0.4) {
    comp = 'gajah';
  } else if (comp > 0.4 && comp < 0.8) {
    comp = 'semut';
  } else {
    comp = 'orang';
  }

  // Menentukan hasil
  let hasil = '';
  if (playerChoice === comp) {
    hasil = 'Seri 🤝';
  } else if (
    (playerChoice === 'gajah' && comp === 'orang') ||
    (playerChoice === 'orang' && comp === 'semut') ||
    (playerChoice === 'semut' && comp === 'gajah')
  ) {
    hasil = 'Kamu MENANG 🎉';
    skorPemain++;
  } else {
    hasil = 'Kamu KALAH 😢';
    skorKomputer++;
  }

  kesempatan--;

  // Tampilkan hasil
  document.getElementById('result').innerHTML = `
    Kamu memilih: ${playerChoice} <br>
    Komputer memilih: ${comp} <br>
    <strong>${hasil}</strong>
  `;

  // Tampilkan skor
  document.getElementById('scoreboard').innerHTML = `
    Skor Kamu: ${skorPemain} | Skor Komputer: ${skorKomputer} <br>
    Sisa Kesempatan: ${kesempatan}
  `;

  // Periksa skor tertinggi
  if (skorPemain > skorTertinggi) {
    skorTertinggi = skorPemain;
    localStorage.setItem('skorTertinggi', skorTertinggi);
    document.getElementById('high-score').textContent = skorTertinggi;
  }

  // Pesan jika kesempatan habis
  if (kesempatan === 0) {
    alert('Permainan selesai! Reset untuk bermain lagi.');
  }
}

function resetGame() {
  skorPemain = 0;
  skorKomputer = 0;
  kesempatan = 20;
  document.getElementById('result').innerHTML = '';
  document.getElementById('scoreboard').innerHTML = `
    Skor Kamu: ${skorPemain} | Skor Komputer: ${skorKomputer} <br>
    Sisa Kesempatan: ${kesempatan}
  `;
}
