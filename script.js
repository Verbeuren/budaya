// =====================================================
// NUSA CERIA - JELAJAH NUSANTARA
// DATA WILAYAH DAN KUIS
// =====================================================


// =====================================================
// DATA WILAYAH
// =====================================================

const regions = {
  1: {
    name: "Sumatra",
    icon: "detail/sumatera-icon.png",
    desc: "Sumatra memiliki budaya Rumah Gadang, Tari Piring, dan rendang.",
    culture: [
      { icon: "detail/rumah-gadang.png", name: "Rumah Gadang" },
      { icon: "detail/tari-piring.png", name: "Tari Piring" },
      { icon: "detail/rendang.png", name: "Rendang" }
    ]
  },

  2: {
    name: "Jawa",
    icon: "detail/jawa.png",
    desc: "Jawa memiliki budaya keraton, Tari Jaipong, dan angklung.",
    culture: [
      { icon: "detail/keraton.png", name: "Keraton" },
      { icon: "detail/tari-jaipong.png", name: "Tari Jaipong" },
      { icon: "detail/angklung.png", name: "Angklung" }
    ]
  },

  3: {
    name: "Bali & Nusa Tenggara",
    icon: "detail/wae-rebo.png",
    desc: "Bali dan Nusa Tenggara memiliki pura, tarian tradisional, dan Komodo.",
    culture: [
      { icon: "detail/pura-bali.png", name: "Pura Bali" },
      { icon: "detail/tari-wiranjaya.png", name: "Tari Kecak" },
      { icon: "detail/komodo.png", name: "Komodo" }
    ]
  },

  4: {
    name: "Kalimantan",
    icon: "detail/kalimantan.png",
    desc: "Kalimantan memiliki rumah panjang, budaya Dayak, dan orangutan.",
    culture: [
      { icon: "detail/rumah-panjang.png", name: "Rumah Panjang" },
      { icon: "detail/tari-gawai.png", name: "Budaya Dayak" },
      { icon: "detail/orangutan.png", name: "Orangutan" }
    ]
  },

  5: {
    name: "Sulawesi",
    icon: "detail/sulawesi.png",
    desc: "Sulawesi memiliki rumah Tongkonan, Rambu Solo, dan Kolintang.",
    culture: [
      { icon: "detail/rumah-tongkonan.png", name: "Rumah Tongkonan" },
      { icon: "detail/rambu-solo.png", name: "Rambu Solo" },
      { icon: "detail/kolintang.png", name: "Kolintang" }
    ]
  },

  6: {
    name: "Maluku",
    icon: "detail/maluku.png",
    desc: "Maluku memiliki rumah Baileo, Tari Cakalele, dan Banda Neira.",
    culture: [
      { icon: "detail/rumah-sasandu.png", name: "Rumah Baileo" },
      { icon: "detail/cakalele.png", name: "Tari Cakalele" },
      { icon: "detail/banda-neira.png", name: "Banda Neira" }
    ]
  },

  7: {
    name: "Papua",
    icon: "detail/raja-ampat.png",
    desc: "Papua memiliki Rumah Honai, Burung Cenderawasih, dan Papeda.",
    culture: [
      { icon: "detail/rumah-honai.png", name: "Rumah Honai" },
      { icon: "detail/cenderawasih.png", name: "Burung Cenderawasih" },
      { icon: "detail/papeda.png", name: "Papeda" }
    ]
  }
};


// =====================================================
// DATA KUIS
// c = indeks jawaban benar, dimulai dari 0
// =====================================================

const quizzes = {
  // LEVEL 1 - SUMATRA
  1: [
    {
      q: "Apa nama hewan dari sumatra?",
      a: ["Orang Utan", "Anoa", "Maleo", "Kasuari"],
      c: 0,
      img: "hewan/orang-utan.png"
    },
    {
      q: "Apa nama makanan khas sumatra?",
      a: ["Gudeg", "Rendang", "Papeda", "Ayam Betutu"],
      c: 1,
      img: "makanan/rendangg.png"
    },
    {
      q: "Apa nama pakaian adat dari sumatra?",
      a: ["Batak Toba", "Pengantin Jawa", "Adat Toraja", "Payas Agung"],
      c: 0,
      img: "pakaian/batak toba.png"
    },
    {
      q: "Apa nama tari dari gambar tersebut?",
      a: ["Tari piring", "Tari Remong", "Tari Kecak", "Tari yospen"],
      c: 0,
      img: "tarian/tari-piring.png"
    },
    {
      q: "apa nama rumah adat yang ada di sumatra?",
      a: ["Mbaru Niang", "Bale Gede", "Joglo", "Gadang"],
      c: 3,
      img: "rumah/gadang.png"
    }
  ],

  // LEVEL 2 - JAWA
  2: [
    {
      q: "Apa nama rumah adat dari Jawa??",
      a: ["Rumah Joglo", "Rumah Honai", "Rumah Betang", "Rumah Gadang"],
      c: 0,
      img: "rumah/rumah-joglo.png"
    },
    {
      q: "Apa nama pakaian adat dari jawa?",
      a: ["Adat Tanimbar", "Pengantin Jawa", "Bamar Galung", "Payas Agung"],
      c: 1,
      img: "pakaian/pakaian jawa.png"
    },
    {
      q: "Apa nama tari dari gambar tersebut?",
      a: ["Tari Gandrung", "Tari Legong", "Tari Mandau", "Tari Pakarena"],
      c: 0,
      img: "tarian/gandrung.png"
    },
    {
      q: "Apa nama hewan dari jawa?",
      a: ["Elang Jawa", "Bekantan", "lutung", "kasuari"],
      c: 0,
      img: "hewan/elang jawa.png"
    },
    {
      q: "?",
      a: ["papeda", "ayam betutu", "sate lilit", "Gudek"],
      c: 3,
      img: "makanan/gudek.png"
    }
  ],

  // LEVEL 3 - BALI DAN NUSA TENGGARA
  3: [
     {
      q: "apa nama hewan Nusa Tenggara?",
      a: ["Komodo", "Elang Jawa", "Bekantan", "Anoa"],
      c: 0,
      img: "hewan/komodo.png"
    },
    {
      q: "apa makanan khas bali?",
      a: ["Kohu Kohu", "Ketupat", "Gudek", "Ayam Betutu"],
      c: 3,
      img: "makanan/ayam betutu.png"
    },
    {
      q: "Pakaian khas bali?",
      a: ["Dayak Iban", "Adat Toraja", "Adat sasak", "Payas Agung"],
      c: 3,
      img: "pakaian/payas agung.png"
    },
    {
      q: "Tarian khas bali?",
      a: ["Tari Pakarena", "Tari legong", "Tari Yospen", "Tari Gandrung"],
      c: 1,
      img: "tarian/tari legong.png"
    },
    {
      q: "Rumah adat khas bali?",
      a: ["Rumah Bale Gede", "Mbaru Niang", "Rumah Honai", "Rumah Tongkonan"],
      c: 0,
      img: "rumah/bale gede.png"
    }
  ],

 // LEVEL 4 - KALIMANTAN
  4: [
    {
      q: "apa nama hewan kalimantan?",
      a: ["Komodo", "Elang Jawa", "Bekantan", "Anoa"],
      c: 2,
      img: "hewan/bekantan.png"
    },
    {
      q: "apa makanan khas kalimantan?",
      a: ["Kohu Kohu", "Nasi Pecel", "Rendang", "Soto Banjar"],
      c: 3,
      img: "makanan/soto banjar.png"
    },
    {
      q: "Pakaian khas kalimantan?",
      a: ["Dayak Iban", "Adat Toraja", "Adat sasak", "Payas Agung"],
      c: 0,
      img: "pakaian/dayak iban.png"
    },
    {
      q: "Tarian khas kalimantan?",
      a: ["Tari Pakarena", "Tari Mandau", "Tari Yospen", "Tari Gandrung"],
      c: 1,
      img: "tarian/tari mandau.png"
    },
    {
      q: "Rumah adat khas kalimantan?",
      a: ["Rumah Betang", "Mbaru Niang", "Rumah Honai", "Rumah Tongkonan"],
      c: 0,
      img: "rumah/Rumah-Betang.png"
    }
  ],

  // LEVEL 5 - SULAWESI
  5: [
    {
      q: "apa nama hewan sulawesi?",
      a: ["Komodo", "Elang Jawa", "Bekantan", "Anoa"],
      c: 3,
      img: "hewan/anoa.png"
    },
    {
      q: "apa makanan khas sulawesi?",
      a: ["Kohu Kohu", "Ketupat", "Gudek", "Sop Konro"],
      c: 3,
      img: "makanan/sop kunro.png"
    },
    {
      q: "Pakaian khas sulawesi?",
      a: ["Dayak Iban", "Adat Toraja", "Adat sasak", "Payas Agung"],
      c: 1,
      img: "pakaian/adat toraja.png"
    },
    {
      q: "Tarian khas sulawesi?",
      a: ["Tari Pakarena", "Tari legong", "Tari Yospen", "Tari Gandrung"],
      c: 0,
      img: "tarian/tari pakarena.png"
    },
    {
      q: "Rumah adat khas sulawesi?",
      a: ["Rumah Bale Gede", "Mbaru Niang", "Rumah Honai", "Rumah Tongkonan"],
      c: 3,
      img: "rumah/tongkonan.png"
    }
  ],

  // LEVEL 6 - MALUKU
  6: [
    {
      q: "apa nama hewan maluku?",
      a: ["Komodo", "Elang Jawa", "Bekantan", "Kakatua"],
      c: 3,
      img: "hewan/kakatua.png"
    },
    {
      q: "apa makanan khas maluku?",
      a: ["Kohu Kohu", "Ketupat", "Gudek", "Sop Konro"],
      c: 0,
      img: "makanan/kohu kohu.png"
    },
    {
      q: "Pakaian khas maluku?",
      a: ["Dayak Iban", "Adat Toraja", "Adat tanimbar", "Payas Agung"],
      c: 2,
      img: "pakaian/tanimbar.png"
    },
    {
      q: "Tarian khas maluku?",
      a: ["Tari Pakarena", "Tari legong", "Tari Yospen", "Tari Gandrung"],
      c: 0,
      img: "tarian/tari pakarena.png"
    },
    {
      q: "Rumah adat khas sulawesi?",
      a: ["Rumah Bale Gede", "Mbaru Niang", "Rumah Honai", "Rumah Tongkonan"],
      c: 3,
      img: "detail/rumah-sasandu.png"
    }
  ],

  // LEVEL 7 - PAPUA
  7: [
    {
      q: "Apa nama rumah adat Papua pada gambar?",
      a: ["Rumah Gadang", "Rumah Baileo", "Rumah Honai", "Rumah Joglo"],
      c: 2,
      img: "rumah/rumah-honai.png"
    },
    {
      q: "Burung apakah yang menjadi salah satu satwa khas Papua?",
      a: ["Merpati", "Cenderawasih", "Ayam", "Bebek"],
      c: 1,
      img: "hewan/cenderawasih.png"
    },
    {
      q: "Apa nama makanan khas Papua pada gambar?",
      a: ["Rendang", "Gudeg", "Pempek", "Papeda"],
      c: 3,
      img: "makanan/papeda.png"
    },
    {
      q: "Pakaian adat khas papua?",
      a: ["Baju Kurung", "Adat Sasak", "Adat Tanimbar", "Payas Agung"],
      c: 0,
      img: "pakaian/baju-kurung.png"
    },
    {
      q: "Papeda biasanya dibuat dari bahan apa?",
      a: ["Tari Pakarena", "Tari Mandau", "Tari Yospan", "Tari Gandrung"],
      c: 2,
      img: "tarian/tari yospan.png"
    }
  ]
};


// =====================================================
// VARIABEL GAME
// =====================================================

let currentLevel = 1;
let currentQuestion = 0;
let score = 0;
let selected = null;


// =====================================================
// PINDAH HALAMAN
// =====================================================

function showPage(id) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const page = document.getElementById(id);

  if (page) {
    page.classList.add("active");
  } else {
    console.error("Halaman tidak ditemukan:", id);
  }

  window.scrollTo(0, 0);
}


// =====================================================
// MEMBUKA LEVEL / DETAIL WILAYAH
// =====================================================

function openLevel(level) {
  currentLevel = Number(level);

  const r = regions[currentLevel];

  if (!r) {
    console.error("Level tidak ditemukan:", level);
    return;
  }

  document.getElementById("regionTitle").textContent = r.name;

  document.getElementById("regionImage").innerHTML = `
    <img src="${r.icon}" alt="${r.name}" class="region-photo">
  `;

  document.getElementById("regionDesc").textContent = r.desc;

  document.getElementById("cultureGrid").innerHTML =
    r.culture.map(item => `
      <div class="culture">
        <img src="${item.icon}" alt="${item.name}" class="culture-photo">
        <span>${item.name}</span>
      </div>
    `).join("");

  showPage("detailPage");
}


// =====================================================
// MULAI KUIS
// =====================================================

function startQuiz() {
  if (!quizzes[currentLevel]) {
    alert("Soal untuk wilayah ini belum tersedia.");
    return;
  }

  currentQuestion = 0;
  score = 0;
  selected = null;

  loadQuestion();
  showPage("quizPage");
}


// =====================================================
// MENAMPILKAN SOAL
// =====================================================

function loadQuestion() {
  const levelQuestions = quizzes[currentLevel];

  if (!levelQuestions || !levelQuestions[currentQuestion]) {
    console.error("Data soal tidak ditemukan.");
    return;
  }

  const data = levelQuestions[currentQuestion];

  selected = null;

  document.getElementById("questionCounter").textContent =
    `${currentQuestion + 1}/${levelQuestions.length}`;

  document.getElementById("questionImage").innerHTML = `
    <img
      src="${data.img}"
      alt="Gambar soal"
      class="question-photo"
      onerror="this.style.display='none'"
    >
  `;

  document.getElementById("checkBtn").disabled = false;
  document.getElementById("checkBtn").textContent = "Periksa Jawaban";

  document.getElementById("answers").innerHTML =
    data.a.map((answer, index) => `
      <button
        type="button"
        class="answer"
        onclick="selectAnswer(${index}, this)"
      >
        ${String.fromCharCode(65 + index)}. ${answer}
      </button>
    `).join("");
}


// =====================================================
// MEMILIH JAWABAN
// =====================================================

function selectAnswer(index, element) {
  if (selected !== null) {
    return;
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.classList.remove("selected");
  });

  element.classList.add("selected");
  selected = index;
}


// =====================================================
// MEMERIKSA JAWABAN
// =====================================================

function checkAnswer() {
  if (selected === null) {
    alert("Silakan pilih jawaban terlebih dahulu!");
    return;
  }

  const data = quizzes[currentLevel][currentQuestion];
  const benar = selected === data.c;

  if (benar) {
    score++;
  }

  document.getElementById("checkBtn").disabled = true;

  const feedbackIcon = document.getElementById("feedbackIcon");
  const feedbackTitle = document.getElementById("feedbackTitle");
  const feedbackText = document.getElementById("feedbackText");

  if (benar) {
    feedbackIcon.textContent = "✓";
    feedbackTitle.textContent = "Hebat!";
    feedbackText.textContent =
      "Jawaban kamu benar! Kamu hebat dalam mengenal budaya Indonesia.";
  } else {
    feedbackIcon.textContent = "✕";
    feedbackTitle.textContent = "Belum Tepat";
    feedbackText.textContent =
      `Jawaban yang benar adalah ${data.a[data.c]}. Jangan menyerah, coba lagi!`;
  }

  showPage("feedbackPage");
}


// =====================================================
// SOAL BERIKUTNYA DAN HASIL AKHIR
// =====================================================

function nextQuestion() {
  const totalQuestions = quizzes[currentLevel].length;

  if (currentQuestion < totalQuestions - 1) {
    currentQuestion++;
    loadQuestion();
    showPage("quizPage");
    return;
  }

  // Tampilkan nilai akhir
  document.getElementById("finalScore").textContent =
    `${score}/${totalQuestions}`;

  // Tampilkan bintang sesuai skor
  document.getElementById("resultStars").textContent =
    score === 0 ? "☆" : "⭐".repeat(score);

  // Pesan hasil
  let message;

  if (score === totalQuestions) {
    message = "Luar biasa! Semua jawaban benar!";
  } else if (score >= 3) {
    message = "Hebat! Terus belajar budaya Indonesia!";
  } else {
    message = "Tetap semangat! Ayo belajar lagi!";
  }

  document.getElementById("awardText").textContent = message;
  document.getElementById("starCount").textContent = score;

  showPage("resultPage");
}


// =====================================================
// KEMBALI KE DETAIL WILAYAH
// =====================================================

function backToDetail() {
  showPage("detailPage");
}


// =====================================================
// KEMBALI KE PETA
// =====================================================

function backToMap() {
  showPage("mapPage");
}


// =====================================================
// KEMBALI KE BERANDA
// =====================================================

function backToHome() {
  showPage("homePage");
}


// =====================================================
// MULAI DARI BERANDA
// =====================================================

function startGame() {
  showPage("mapPage");
}


// =====================================================
// MAIN LAGI
// =====================================================

function playAgain() {
  startQuiz();
}


// =====================================================
// DEBUG
// =====================================================

console.log("Nusa Ceria berhasil dimuat.");
console.log("Jumlah wilayah:", Object.keys(regions).length);

console.log(
  "Jumlah soal:",
  Object.values(quizzes).reduce(
    (total, questions) => total + questions.length,
    0
  )
);