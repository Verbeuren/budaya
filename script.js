const regions = {
  1:{
    name:"Sumatra Barat",
    icon:"detail/sumatera-icon.png",
    desc:"Sumatra Barat dikenal dengan rumah adat Gadang yang unik, tari Piring, dan kuliner khas seperti rendang.",
    culture:[
      {icon:"detail/rumah-gadang.png", name:"Rumah Gadang"},
      {icon:"detail/tari-piring.png", name:"Tari Piring"},
      {icon:"detail/rendang.png", name:"Rendang"}
    ]
  },

  2:{
    name:"Jawa",
    icon:"detail/jawa.png",
    desc:"Jawa memiliki budaya yang beragam, seperti Tari Jaipong, angklung, dan rumah adat Sunda.",
    culture:[
      {icon:"detail/keraton.png", name:"Keraton Solo Yogyakarta"},
      {icon:"detail/tari-jaipong.png", name:"Tari Jaipong"},
      {icon:"detail/angklung.png", name:"Angklung"}
    ]
  },

  3:{
    name:"Bali & Nusa Tenggara",
    icon:"detail/wae-rebo.png",
    desc:"Wilayah ini terkenal dengan pura, kain tradisional, tari daerah, serta Komodo di Nusa Tenggara Timur.",
    culture:[
      {icon:"detail/pura-bali.png", name:"Pura Bali"},
      {icon:"detail/tari-wiranjaya.png", name:"Tari Kecak"},
      {icon:"detail/komodo.png", name:"Komodo"}
    ]
  },

  4:{
    name:"Kalimantan",
    icon:"detail/kalimantan.png",
    desc:"Kalimantan memiliki budaya Dayak, rumah panjang, serta satwa khas seperti orangutan.",
    culture:[
      {icon:"detail/rumah-panjang.png", name:"Rumah Panjang"},
      {icon:"detail/tari-gawai.png", name:"Budaya Dayak"},
      {icon:"detail/orangutan.png", name:"Orangutan"}
    ]
  },

  5:{
    name:"Sulawesi",
    icon:"detail/sulawesi.png",
    desc:"Sulawesi memiliki keragaman budaya, termasuk rumah Tongkonan dan berbagai tradisi masyarakat Toraja.",
    culture:[
      {icon:"detail/rumah-tongkonan.png", name:"Rumah Tongkonan"},
      {icon:"detail/rambu-solo.png" , name:"Upacara Rambu Solo"},
      {icon:"detail/kolintang.png", name:"Kolintang"}
    ]
  },

  6:{
    name:"Maluku",
    icon:"detail/maluku.png",
    desc:"Maluku dikenal sebagai wilayah kepulauan dengan kekayaan musik, tarian, dan tradisi maritim.",
    culture:[
      {icon:"detail/rumah-sasandu.png", name:"Rumah Sasandu"},
      {icon:"detail/cakalele.png", name:"Tari Cakalele"},
      {icon:"detail/banda-neira.png", name:"Banda Neira"}
    ]
  },

  7:{
    name:"Papua",
    icon:"detail/raja-ampat.png",
    desc:"Papua memiliki budaya yang sangat beragam, dengan rumah adat, tarian, dan kerajinan tradisional yang khas.",
    culture:[
      {icon:"detail/rumah-honai.png", name:"Rumah Honai"},
      {icon:"detail/cenderawasih.png", name:"Burung Cenderawasih"},
      {icon:"detail/papeda.png", name:"papeda"}
    ]
  }
};

const quizzes = {
  1:[
    {q:"Rumah adat Sumatera Barat disebut ...",img:"🏠",a:["Rumah Gadang","Honai","Tongkonan","Joglo"],c:0},
    {q:"Makanan khas Sumatera Barat yang terkenal adalah ...",img:"🍛",a:["Rendang","Gudeg","Pempek","Papeda"],c:0},
    {q:"Tari Piring berasal dari ...",img:"💃",a:["Sumatera Barat","Papua","Maluku","Bali"],c:0},
    {q:"Rumah Gadang memiliki bentuk atap seperti ...",img:"🏠",a:["Tanduk kerbau","Perahu","Bola","Daun"],c:0},
    {q:"Rendang biasanya dibuat dari daging yang dimasak dengan ...",img:"🍛",a:["Rempah-rempah","Cokelat","Sirup","Keju"],c:0}
  ],
  2:[
    {q:"Tari Jaipong berasal dari ...",img:"💃",a:["Jawa Barat","Papua","Bali","Maluku"],c:0},
    {q:"Alat musik tradisional Jawa Barat yang terbuat dari bambu adalah ...",img:"🎵",a:["Angklung","Sasando","Tifa","Kolintang"],c:0},
    {q:"Rumah adat Jawa Barat dikenal sebagai rumah ...",img:"🏡",a:["Sunda","Honai","Gadang","Tongkonan"],c:0},
    {q:"Kesenian angklung dimainkan dengan cara ...",img:"🎵",a:["Digoyangkan","Ditiup","Dipukul dengan tongkat","Digesek"],c:0},
    {q:"Jaipong merupakan seni ...",img:"💃",a:["Tari","Lukisan","Masakan","Rumah"],c:0}
  ],
  3:[
    {q:"Hewan komodo berasal dari wilayah ...",img:"🦎",a:["Nusa Tenggara Timur","Sumatera Barat","Jawa Barat","Maluku"],c:0},
    {q:"Bangunan tempat ibadah umat Hindu di Bali disebut ...",img:"🛕",a:["Pura","Gereja","Masjid","Honai"],c:0},
    {q:"Salah satu kain tradisional Indonesia adalah ...",img:"🧵",a:["Tenun","Kertas","Plastik","Kaca"],c:0},
    {q:"Bali terkenal dengan berbagai seni ...",img:"💃",a:["Tari","Es krim","Sepak bola","Balap"],c:0},
    {q:"Komodo termasuk jenis ...",img:"🦎",a:["Reptil","Burung","Ikan","Mamalia"],c:0}
  ],
  4:[
    {q:"Rumah panjang merupakan rumah adat masyarakat ...",img:"🏡",a:["Dayak","Betawi","Jawa","Bali"],c:0},
    {q:"Hewan yang terkenal hidup di hutan Kalimantan adalah ...",img:"🦧",a:["Orangutan","Komodo","Cenderawasih","Anoa"],c:0},
    {q:"Kalimantan merupakan salah satu pulau besar di ...",img:"🌴",a:["Indonesia","Jepang","Korea","Mesir"],c:0},
    {q:"Salah satu kelompok masyarakat asli Kalimantan adalah ...",img:"🎭",a:["Dayak","Asmat","Baduy","Toraja"],c:0},
    {q:"Hutan Kalimantan merupakan habitat bagi banyak ...",img:"🌳",a:["Tumbuhan dan hewan","Mobil","Pesawat","Gedung"],c:0}
  ],
  5:[
    {q:"Rumah adat Toraja disebut ...",img:"🏡",a:["Tongkonan","Honai","Gadang","Joglo"],c:0},
    {q:"Toraja merupakan salah satu budaya dari pulau ...",img:"🗺️",a:["Sulawesi","Jawa","Bali","Sumatera"],c:0},
    {q:"Sulawesi memiliki banyak budaya dan ...",img:"🎭",a:["Tradisi","Gurun pasir","Salju","Menara"],c:0},
    {q:"Tongkonan adalah contoh ...",img:"🏡",a:["Rumah adat","Makanan","Tarian","Alat musik"],c:0},
    {q:"Indonesia memiliki banyak rumah adat karena memiliki banyak ...",img:"🇮🇩",a:["Suku dan budaya","Gunung es","Kereta","Gedung tinggi"],c:0}
  ],
  6:[
    {q:"Maluku dikenal sebagai wilayah ...",img:"⛵",a:["Kepulauan","Pegunungan es","Gurun","Padang salju"],c:0},
    {q:"Tari Cakalele merupakan tarian dari ...",img:"💃",a:["Maluku","Jawa Barat","Papua","Bali"],c:0},
    {q:"Salah satu kekayaan budaya Maluku adalah ...",img:"🎶",a:["Musik dan tarian","Salju","Piramida","Kastil"],c:0},
    {q:"Masyarakat Maluku memiliki hubungan yang erat dengan kehidupan ...",img:"⛵",a:["Laut","Gurun","Salju","Padang pasir"],c:0},
    {q:"Maluku berada di wilayah ... Indonesia",img:"🗺️",a:["Timur","Barat","Utara saja","Selatan saja"],c:0}
  ],
  7:[
    {q:"Rumah adat Papua yang terkenal disebut ...",img:"🛖",a:["Honai","Gadang","Joglo","Tongkonan"],c:0},
    {q:"Burung khas Papua yang terkenal adalah ...",img:"🪶",a:["Cenderawasih","Merpati","Ayam","Bebek"],c:0},
    {q:"Papua berada di bagian ... Indonesia",img:"🗺️",a:["Timur","Barat","Tengah saja","Utara saja"],c:0},
    {q:"Papua memiliki banyak ...",img:"🎭",a:["Suku dan budaya","Istana salju","Gurun pasir","Kastil"],c:0},
    {q:"Tari tradisional merupakan bagian dari ...",img:"💃",a:["Budaya","Cuaca","Teknologi","Transportasi"],c:0}
  ]
};

let currentLevel=1,currentQuestion=0,score=0,selected=null;

function showPage(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0,0);
}

function openLevel(level){
  currentLevel = level;

  const r = regions[level];

  document.getElementById("regionTitle").textContent = r.name;

  document.getElementById("regionImage").innerHTML =
    `<img src="${r.icon}" alt="${r.name}" class="region-photo">`;

  document.getElementById("regionDesc").textContent = r.desc;

  document.getElementById("cultureGrid").innerHTML =
    r.culture.map(x => `
      <div class="culture">
        <img src="${x.icon}" alt="${x.name}" class="culture-photo">
        <span>${x.name}</span>
      </div>
    `).join("");

  showPage("detailPage");
}

function startQuiz(){
  currentQuestion=0;score=0;selected=null;
  loadQuestion();
  showPage("quizPage");
}

function loadQuestion(){
  const data=quizzes[currentLevel][currentQuestion];
  selected=null;
  document.getElementById("questionCounter").textContent=`${currentQuestion+1}/5`;
  document.getElementById("questionText").textContent=data.q;
  document.getElementById("questionImage").textContent=data.img;
  document.getElementById("checkBtn").disabled=false;
  document.getElementById("checkBtn").textContent="Periksa Jawaban";
  document.getElementById("answers").innerHTML=data.a.map((a,i)=>`<button class="answer" onclick="selectAnswer(${i},this)">${String.fromCharCode(65+i)}. ${a}</button>`).join("");
}

function selectAnswer(i,el){
  document.querySelectorAll(".answer").forEach(b=>b.classList.remove("selected"));
  el.classList.add("selected");selected=i;
}

function checkAnswer(){
  if(selected===null){alert("Pilih jawaban terlebih dahulu 😊");return}
  const data=quizzes[currentLevel][currentQuestion];
  const correct=selected===data.c;
  if(correct) score++;
  document.getElementById("feedbackIcon").textContent=correct?"✓":"✕";
  document.getElementById("feedbackIcon").style.color=correct?"#2baa59":"#e85252";
  document.getElementById("feedbackTitle").textContent=correct?"Hebat!":"Ups!";
  document.getElementById("feedbackTitle").style.color=correct?"#2baa59":"#e85252";
  document.getElementById("feedbackText").textContent=correct?"Jawaban kamu benar!":`Jawaban yang benar adalah: ${data.a[data.c]}.`;
  document.getElementById("feedbackImage").textContent=data.img;
  showPage("feedbackPage");
}

function nextQuestion(){
  currentQuestion++;
  if(currentQuestion>=5){
    document.getElementById("finalScore").textContent=`${score}/5`;
    const stars=Math.max(1,Math.round(score));
    document.getElementById("resultStars").textContent="⭐".repeat(stars);
    document.getElementById("awardText").textContent=score===5?"Luar biasa! Semua benar!":score>=3?"Hebat! Terus belajar!":"Tetap semangat belajar budaya Indonesia!";
    document.getElementById("starCount").textContent=score;
    showPage("resultPage");
  }else{
    loadQuestion();showPage("quizPage");
  }
}

