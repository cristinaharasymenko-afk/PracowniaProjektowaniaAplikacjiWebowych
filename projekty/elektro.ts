interface Produkt {
    nazwa: string;
    kategoria: string;
    kod: string;
}

let produkty: Produkt[] = [];

const nazwa = document.getElementById("nazwa") as HTMLInputElement;
const kategoria = document.getElementById("kategoria") as HTMLInputElement;
const kod = document.getElementById("kod") as HTMLInputElement;

const dodaj = document.getElementById("dodaj") as HTMLButtonElement;
const komunikat = document.getElementById("komunikat") as HTMLParagraphElement;
const listaProduktow = document.getElementById("listaProduktow") as HTMLTableSectionElement;


// kod musi byc 13-cyfrowy

kod.addEventListener("input", function () {

    kod.value = kod.value.replace(/\D/g, "");

    if (kod.value.length > 13) {
        kod.value = kod.value.substring(0, 13);
    }
});


// dodajemy produkt

dodaj.addEventListener("click", function () {
    if (
        nazwa.value.trim() === "" ||
        kategoria.value.trim() === "" ||
        kod.value.trim() === ""
    ) {
        komunikat.textContent = "Wypełnij wszystkie pola!";
        return;
    }
    if (kod.value.length !== 13) {
        komunikat.textContent = "Kod EAN musi mieć 13 cyfr!";
        return;
    }
    const produkt: Produkt = {
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
//pokazywanie produktow
function pokazProdukty(): void {

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
        const przyciskUsun = wiersz.querySelector(".usun") as HTMLButtonElement;
        przyciskUsun.addEventListener("click", function () {
            produkty.splice(i, 1);
            pokazProdukty();

            komunikat.textContent = "Produkt został usunięty!";
        });
    }
}