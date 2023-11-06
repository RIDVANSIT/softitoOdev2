const aranacakVeri = document.querySelector("#aranacak_veri");
const araButtonu = document.querySelector("#ara");
const sonucYazisi = document.querySelector("#sonuc");

araButtonu.onclick = function() {
  const aranacakKelimeler = aranacakVeri.value.split(" ");
  const liste = [
    "elma",
    "armut",
    "çilek",
    "portakal",
    "muz",
  ];

  let sonuc = [];

  for (let i = 0; i < aranacakKelimeler.length; i++) {
    for (let j = 0; j < liste.length; j++) {
      if (liste[j].includes(aranacakKelimeler[i])) {
        sonuc.push(liste[j]);
      }
    }
  }

  sonucYazisi.innerHTML = sonuc.join(", ");
};
