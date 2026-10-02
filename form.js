// WI_A_Gruppe_2

console.log("form.js wurde erfolgreich geladen.");

const zutatenContainer = document.getElementById("zutaten-container");
const zutatHinzufuegenButton = document.getElementById("zutat-hinzufuegen");

zutatHinzufuegenButton.addEventListener("click", function () {
    const neueZutat = document.createElement("div");
    neueZutat.className = "zutat";

    neueZutat.innerHTML = `
        <input type="number" class="menge" placeholder="Menge" min="0">
        <input type="text" class="einheit" placeholder="Einheit">
        <input type="text" class="zutat-name" placeholder="Zutat">
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
    }

    if (portionen === "" || Number(portionen) <= 0) {
        fehler.push("Portionen müssen größer als 0 sein.");
    }

    if (zubereitung === "") {
        fehler.push("Zubereitung fehlt.");
    }

    const zutaten = document.querySelectorAll(".zutat");

    if (zutaten.length === 0) {
        fehler.push("Mindestens eine Zutat muss hinzugefügt werden.");
    } else {
        for (let i = 0; i < zutaten.length; i++) {
            const name = zutaten[i]
                .querySelector(".zutat-name")
                .value
                .trim();

            if (name === "") {
                fehler.push("Bei Zutat " + (i + 1) + " fehlt der Name.");
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