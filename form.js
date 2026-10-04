// WI_A_Gruppe_2

console.log("form.js wurde erfolgreich geladen.");

const zutatenContainer = document.getElementById("zutaten-container");
const zutatHinzufuegenButton = document.getElementById("zutat-hinzufuegen");

zutatHinzufuegenButton.addEventListener("click", function () {
    const neueZutat = document.createElement("div");
    neueZutat.className = "zutat";

    neueZutat.innerHTML = `
        <div>
            <input type="text" class="menge" placeholder="Menge" inputmode="decimal">
            <small class="menge-fehler fehler"></small>
        </div>
        <div>
            <input type="text" class="einheit" placeholder="Einheit">
            <small class="einheit-fehler fehler"></small>
        </div>
        <div>
            <input type="text" class="zutat-name" placeholder="Zutat">
            <small class="zutat-fehler fehler"></small>
        </div>
        <button type="button" class="zutat-entfernen" onclick="entferneZutat(this)">Entfernen</button>
    `;

    zutatenContainer.appendChild(neueZutat);
});
function entferneZutat(button) {
    const zutat = button.parentElement;
    zutat.remove();
}

// Formular-Validierung

const rezeptForm = document.getElementById("rezept-form");

const titelInput = document.getElementById("titel");
const titelFehler = document.getElementById("titel-fehler");

const dauerInput = document.getElementById("dauer");
const dauerFehler = document.getElementById("dauer-fehler");

const portionenInput = document.getElementById("portionen");
const portionenFehler = document.getElementById("portionen-fehler");

const zubereitungInput = document.getElementById("zubereitung");
const zubereitungFehler = document.getElementById("zubereitung-fehler");

rezeptForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const titel = document.getElementById("titel").value.trim();
    const kategorie = document.getElementById("kategorie").value;
    const ernaehrung = document.getElementById("ernaehrung").value;
    const geschmack = document.getElementById("geschmack").value;
    const schwierigkeit = document.getElementById("schwierigkeit").value;
    const dauer = document.getElementById("dauer").value;
    const portionen = document.getElementById("portionen").value;
    const zubereitung = document.getElementById("zubereitung").value.trim();

    const fehler = [];

    if (titel === "") {
        fehler.push("Rezeptname fehlt.");
    }

    if (kategorie === "") {
        fehler.push("Kategorie wurde nicht ausgewählt.");
    }

    if (ernaehrung === "") {
        fehler.push("Ernährungsform wurde nicht ausgewählt.");
    }

    if (geschmack === "") {
        fehler.push("Geschmack wurde nicht ausgewählt.");
    }

    if (schwierigkeit === "") {
        fehler.push("Schwierigkeit wurde nicht ausgewählt.");
    }

    if (dauer === "" || Number(dauer) <= 0) {
        fehler.push("Zubereitungszeit muss größer als 0 sein.");
    } else if (Number(dauer) > 1440) {
        fehler.push("Zubereitungszeit darf maximal 1440 Minuten sein.");
    }

    if (portionen === "" || Number(portionen) <= 0) {
        fehler.push("Portionen müssen größer als 0 sein.");
    } else if (Number(portionen) > 100) {
        fehler.push("Portionen dürfen maximal 100 sein.");
    }

    if (zubereitung === "") {
        fehler.push("Zubereitung fehlt.");
    }

    const zutaten = document.querySelectorAll(".zutat");

    if (zutaten.length === 0) {
        fehler.push("Mindestens eine Zutat muss hinzugefügt werden.");
    } else {
        for (let i = 0; i < zutaten.length; i++) {
            const menge = zutaten[i].querySelector(".menge").value.trim();
            const einheit = zutaten[i].querySelector(".einheit").value.trim();
            const name = zutaten[i]
                .querySelector(".zutat-name")
                .value
                .trim();

            if (menge !== "" && isNaN(Number(menge))) {
        fehler.push("Bei Zutat " + (i + 1) + " muss die Menge eine Zahl sein.");
    }

    if (menge !== "" && Number(menge) < 0) {
        fehler.push("Bei Zutat " + (i + 1) + " darf die Menge nicht negativ sein.");
    }

    if (einheit !== "" && /\d/.test(einheit)) {
        fehler.push("Bei Zutat " + (i + 1) + " darf die Einheit keine Zahlen enthalten.");
    }

    if (name === "") {
        fehler.push("Bei Zutat " + (i + 1) + " fehlt der Name.");
    } else if (!/[a-zA-ZäöüÄÖÜß]/.test(name)) {
        fehler.push("Bei Zutat " + (i + 1) + " muss der Name Buchstaben enthalten.");
            }
        }
    }

    if (fehler.length > 0) {
        alert("Bitte überprüfen Sie folgende Angaben:\n\n" + fehler.join("\n"));
        return;
    }

    const neuesRezept = {
        titel: titel,
        kategorie: kategorie,
        ernaehrung: ernaehrung,
        geschmack: geschmack,
        schwierigkeit: schwierigkeit,
        dauerMinuten: Number(dauer),
        portionen: Number(portionen),
        bild: "images/platzhalter.jpg",
        zutaten: Array.from(zutaten).map(function (zutatElement) {
            return {
                menge: Number(zutatElement.querySelector(".menge").value) || 0,
                einheit: zutatElement.querySelector(".einheit").value.trim(),
                name: zutatElement.querySelector(".zutat-name").value.trim()
            };
        }),
        zubereitung: zubereitung.split("\n").map(function (zeile) {
            return zeile.trim();
        }).filter(function (zeile) {
            return zeile !== "";
        })
    };

    fuegeRezeptHinzu(neuesRezept);

    alert("Das Rezept wurde erfolgreich gespeichert!");
    rezeptForm.reset();
});

titelInput.addEventListener("input", function () {
    const titel = titelInput.value.trim();

    if (titel === "") {
        titelFehler.textContent = "Bitte Rezeptnamen eingeben.";
    } else if (titel.length < 2) {
        titelFehler.textContent = "Mindestens 2 Zeichen.";
    } else if (!/[a-zA-ZäöüÄÖÜß]/.test(titel)) {
        titelFehler.textContent = "Bitte Buchstaben eingeben.";
    } else if (titel.length > 100) {
        titelFehler.textContent = "Maximal 100 Zeichen.";
    } else {
        titelFehler.textContent = "";
    }
});

dauerInput.addEventListener("input", function () {
    const dauer = Number(dauerInput.value);

    if (dauerInput.value === "") {
        dauerFehler.textContent = "Bitte Zubereitungszeit eingeben.";
    } else if (dauer <= 0) {
        dauerFehler.textContent = "Muss größer als 0 sein.";
    } else if (dauer > 1440) {
        dauerFehler.textContent = "Maximal 1440 Minuten.";
    } else {
        dauerFehler.textContent = "";
    }
});

portionenInput.addEventListener("input", function () {
    const portionen = Number(portionenInput.value);

    if (portionenInput.value === "") {
        portionenFehler.textContent = "Bitte Portionen eingeben.";
    } else if (portionen <= 0) {
        portionenFehler.textContent = "Muss größer als 0 sein.";
    } else if (portionen > 100) {
        portionenFehler.textContent = "Maximal 100 Portionen.";
    } else {
        portionenFehler.textContent = "";
    }
});

document.addEventListener("input", function (event) {
    const zutat = event.target.closest(".zutat");

    if (!zutat) {
        return;
    }

    if (event.target.classList.contains("menge")) {
    const menge = event.target.value.trim();
    const fehler = zutat.querySelector(".menge-fehler");

    if (menge !== "" && menge.startsWith("-")) {
        fehler.textContent = "Menge darf nicht negativ sein.";
    } else if (menge !== "" && !/^\d+([.,]\d+)?$/.test(menge)) {
        fehler.textContent = "Bitte eine Zahl eingeben.";
    } else {
        fehler.textContent = "";
        }
    }

   if (event.target.classList.contains("einheit")) {
    const einheit = event.target.value.trim();
    const fehler = zutat.querySelector(".einheit-fehler");

    if (einheit !== "" && /^\d+$/.test(einheit)) {
        fehler.textContent = "Bitte Einheit eingeben.";
    } else if (/\d/.test(einheit)) {
        fehler.textContent = "Einheit darf keine Zahlen enthalten.";
    } else {
        fehler.textContent = "";
        }
    }

    if (event.target.classList.contains("zutat-name")) {
        const name = event.target.value.trim();
        const fehler = zutat.querySelector(".zutat-fehler");

        if (name === "") {
            fehler.textContent = "Bitte Zutat eingeben.";
        } else if (!/[a-zA-ZäöüÄÖÜß]/.test(name)) {
            fehler.textContent = "Bitte Zutat eingeben.";
        } else {
            fehler.textContent = "";
        }
    }
});

zubereitungInput.addEventListener("input", function () {
    const zubereitung = zubereitungInput.value.trim();

    if (zubereitung === "") {
        zubereitungFehler.textContent = "Bitte Zubereitung eingeben.";
    } else {
        zubereitungFehler.textContent = "";
    }
});