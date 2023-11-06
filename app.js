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
  let sonuc = [];

  for (let i = 0; i < liste.length; i++) {
    if (liste[i].includes(aranacakKelime)) {
      sonuc.push(liste[i]);
    }
  }

  sonucYazisi.innerHTML = sonuc.join(", ");
};
