const aranacakVeri = document.querySelector("#aranacak_veri");
const araButtonu = document.querySelector("#ara");
const sonucYazisi = document.querySelector("#sonuc");

araButtonu.onclick = function() {
  const aranacakKelime = aranacakVeri.value;
  console.log(aranacakKelime);
  const liste = [
    "elma",
    "armut",
    "çilek",
    "portakal",
    "muz",
  ];

  let sonuc = false;

  for (let i = 0; i < liste.length; i++) {
    if (liste[i].includes(aranacakKelime)) {
      sonuc = true;
      break;
    }
  }

  if (sonuc) {
    sonucYazisi.innerHTML = `Aranan kelime bulundu: ${aranacakKelime}`;
  } else {
    sonucYazisi.innerHTML = `Aranan kelime bulunamadı.`;
  }
};
