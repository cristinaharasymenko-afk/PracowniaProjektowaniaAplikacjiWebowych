"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let produkty = [];
const nazwa = document.getElementById("nazwa");
const kategoria = document.getElementById("kategoria");
const kod = document.getElementById("kod");
const dodaj = document.getElementById("dodaj");
const komunikat = document.getElementById("komunikat");
const listaProduktow = document.getElementById("listaProduktow");
// KOD EAN - TYLKO CYFRY
kod.addEventListener("input", function () {
    kod.value = kod.value.replace(/\D/g, "");
    if (kod.value.length > 13) {
        kod.value = kod.value.substring(0, 13);
    }
});
// DODAWANIE PRODUKTU
dodaj.addEventListener("click", function () {
    if (nazwa.value.trim() === "" ||
        kategoria.value.trim() === "" ||
        kod.value.trim() === "") {
        komunikat.textContent = "Wypełnij wszystkie pola!";
        return;
    }
    if (kod.value.length !== 13) {
        komunikat.textContent = "Kod EAN musi mieć 13 cyfr!";
        return;
    }
    const produkt = {
        nazwa: nazwa.value,
        kategoria: kategoria.value,
        kod: kod.value
    };
    produkty.push(produkt);
    komunikat.textContent = "Produkt został dodany!";
    pokazProdukty();
    nazwa.value = "";
    kategoria.value = "";
    kod.value = "";
});
// POKAZYWANIE PRODUKTÓW
function pokazProdukty() {
    listaProduktow.innerHTML = "";
    for (let i = 0; i < produkty.length; i++) {
        const produkt = produkty[i];
        if (produkt === undefined) {
            continue;
        }
        const wiersz = document.createElement("tr");
        wiersz.innerHTML =
            "<td>" + produkt.nazwa + "</td>" +
                "<td>" + produkt.kategoria + "</td>" +
                "<td>" + produkt.kod + "</td>" +
                "<td><button class='usun'>Usuń</button></td>";
        listaProduktow.appendChild(wiersz);
        const przyciskUsun = wiersz.querySelector(".usun");
        przyciskUsun.addEventListener("click", function () {
            produkty.splice(i, 1);
            pokazProdukty();
            komunikat.textContent = "Produkt został usunięty!";
        });
    }
}
//# sourceMappingURL=elektro.js.map