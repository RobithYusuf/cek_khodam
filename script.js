var khodamData = {};

function generateKhodamName() {
  var name = document.getElementById("name").value;
  var notificationElement = document.getElementById("notification");

  if (name.trim() === "") {
    notificationElement.textContent = "Harap masukkan nama Anda.";
    notificationElement.style.display = "block";
    document.getElementById("result").style.display = "none";
    return;
  }

  if (name.trim().length < 3) {
    notificationElement.textContent = "Nama anda terlalu pendek untuk dicarikan khodam (minimal 3 huruf).";
    notificationElement.style.display = "block";
    document.getElementById("result").style.display = "none";
    return;
  }

  if (/\d/.test(name)) {
    notificationElement.textContent = "Anda tidak bisa mamasukkan angka.";
    notificationElement.style.display = "block";
    document.getElementById("result").style.display = "none";
    return;
  }

  notificationElement.style.display = "none";

  name = name.charAt(0).toUpperCase() + name.slice(1);

  var khodamNames = [
    "Kadal Sakti",
    "Burung Hudhud",
    "Kucing Garong",
    "Monyet Sakti",
    "Ular Naga",
    "Kelinci Ajaib",
    "Tupai Gesit",
    "Katak Beracun",
    "Landak Berduri",
    "Kura-kura Ninja",
    "Harimau Putih",
    "Beruang Kutub",
    "Rubah Ekor Sembilan",
    "Singa Emas",
    "Gajah Biru",
    "Jerapah Terbang",
    "Kangguru Perak",
    "Koala Bermata Satu",
    "Panda Raksasa",
    "Kelelawar Vampir",
    "Burung Merak",
    "Burung Hantu",
    "Burung Kolibri",
    "Burung Bangau",
    "Burung Camar",
    "Ikan Hiu",
    "Ikan Pari",
    "Ikan Mas",
    "Ikan Koi",
    "Ikan Piranha",
    "Laba-laba Tarantula",
    "Kalajengking Raksasa",
    "Lebah Madu",
    "Kupu-kupu Raksasa",
    "Belalang Sembah",
    "Kecoa Terbang",
    "Semut Api",
    "Rayap Pelangi",
    "Kepiting Kenari",
    "Udang Galah",
    "Cacing Besar",
    "Siput Raksasa",
    "Keong Racun",
    "Bekicot Emas",
    "Lipan Biru",
    "Kumbang Badak",
    "Kunang-kunang",
    "Capung Raksasa",
    "Lalat Hijau",
    "Nyamuk Sakti",
    "Kadal Licin",
    "Burung Elang",
    "Kucing Anggora",
    "Monyet Salto",
    "Ular Kobra",
    "Kelinci Terbang",
    "Tupai Ninja",
    "Katak Loncat",
    "Landak Cerdas",
    "Kura-kura Perkasa",
    "Harimau Loreng",
    "Beruang Coklat",
    "Rubah Cerdik",
    "Singa Putih",
    "Gajah Afrika",
    "Jerapah Langit",
    "Kangguru Biru",
    "Koala Lucu",
    "Panda Mini",
    "Kelelawar Gua",
    "Burung Cendrawasih",
    "Burung Kakaktua",
    "Burung Merpati",
    "Burung Pelikan",
    "Burung Nuri",
    "Komodo Perkasa",
    "Orangutan Bijak",
    "Rusa Emas",
    "Babi Hutan Garang",
    "Banteng Liar",
    "Buaya Putih",
    "Berang-berang Cerdas",
    "Landak Jawa",
    "Musang Ajaib",
    "Trenggiling Langka",
    "Kukang Lucu",
    "Tarsius Gesit",
    "Macan Tutul",
    "Kucing Hutan",
    "Ajag Kalimantan",
    "Rusa Timor",
    "Kancil Cerdik",
    "Bekantan Pemalu",
    "Kukabura Cerewet",
    "Angsa Hitam",
    "Merpati Pos",
    "Jalak Bali",
    "Elang Jawa",
    "Merak Hijau",
    "Kuau Kerdil",
    "Sempidan Biru",
    "Trulek Ekor Pita",
    "Pelatuk Jambul",
    "Rangkong Badak",
    "Kakatua Jambul Kuning",
    "Nuri Kepala Hitam",
    "Betet Biasa",
    "Gelatik Jawa",
    "Madu Kelapa",
    "Kuntul Kerbau",
    "Bangau Tongtong",
    "Ikan Belida",
    "Ikan Pesut",
    "Lumba-lumba Hidung Botol",
    "Hiu Martil",
    "Pari Manta",
    "Kura-kura Belimbing",
    "Penyu Sisik",
    "Buaya Muara",
    "Biawak Komodo",
    "Bunglon Raksasa",
    "Tokek Pohon",
    "Ular Sanca Kembang",
    "Ular Welang",
    "Berudu Sakti",
    "Katak Pohon",
    "Bangkong Raksasa",
    "Kodok Buduk",
    "Kosong",
  ];

  if (khodamData.hasOwnProperty(name)) {
    var khodamName = khodamData[name].khodamName;
    var khodamDescription = khodamData[name].khodamDescription;
    displayResult(name, khodamName, khodamDescription);
  } else {
    var randomNumber = Math.random();

    if (randomNumber < 0.1) {
      var khodamName = "Kosong";
      showFakeLoadingForEmptyKhodam(name);
    } else {
      var filteredKhodamNames = khodamNames.filter(function (name) {
        return name !== "Kosong";
      });

      var randomIndex = Math.floor(Math.random() * filteredKhodamNames.length);
      var khodamName = filteredKhodamNames[randomIndex];

      generateKhodamDescription(name, khodamName);
    }
  }
}

function showFakeLoadingForEmptyKhodam(name) {
  var emptyKhodamDescriptions = [
   
    "Anda tidak memiliki khodam, Khodam Anda masih dalam perjalanan ghaib menuju Anda",
  ];

  Swal.fire({
    title: "Mohon Tunggu...",
    html: "Meminta bantuan dari alam gaib untuk mencari informasi tentang khodam Anda...",
    allowOutsideClick: false,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    },
    timer: 2000,
  }).then(() => {
    var randomIndex = Math.floor(Math.random() * emptyKhodamDescriptions.length);
    var khodamDescription = emptyKhodamDescriptions[randomIndex];
    khodamData[name] = {
      khodamName: "Kosong",
      khodamDescription: khodamDescription,
    };
    displayResult(name, "Kosong", khodamDescription);
  });
}

function generateKhodamDescription(name, khodamName) {
  var promptText =
    "Jelaskan khodam " +
    khodamName +
    " dalam Bahasa indonesia hanya 15 kata saja menggunakan lelucon dan berikan arti yang terlihat meyakinkan dengan mengaitkannya pada karakteristik hewan atau makhluk astral yang terkait dari nama " +
    name +
    ", contohnya jika khodamnya adalah Khodam kadal sakti maka contoh jawabanya kamu suka bersembunyi dengan cepat dan sangat lincah memikat hati wanita.";

  Swal.fire({
    title: "Mohon Tunggu...",
    html: "Meminta bantuan dari alam gaib untuk mencari informasi tentang khodam Anda...",
    allowOutsideClick: false,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  axios
    .post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        messages: [
          {
            role: "user",
            content: promptText,
          },
        ],
        model: "mixtral-8x7b-32768",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer ",
        },
      }
    )
    .then(function (response) {
      var khodamDescription = response.data.choices[0].message.content.trim();
      khodamData[name] = {
        khodamName: khodamName,
        khodamDescription: khodamDescription,
      };
      displayResult(name, khodamName, khodamDescription);
      Swal.close();
    })
    .catch(function (error) {
      Swal.fire("Oops...", "Terjadi kesalahan saat meminta bantuan dari alam gaib. Silakan coba lagi nanti.", "error");
    });
}

function displayResult(name, khodamName, khodamDescription) {
  document.getElementById("output-name").textContent = name;
  document.getElementById("khodam-name").textContent = khodamName;
  document.getElementById("khodam-description").textContent = khodamDescription;
  document.getElementById("result").style.display = "block";
}
