// WI_A_Gruppe_2

const zutatenContainer = document.getElementById("zutaten-container");
const zutatHinzufuegenButton = document.getElementById("zutat-hinzufuegen");

// Erstellt eine neue, leere Zutatenzeile und gibt sie zurück
function erstelleZutatZeile() {
    const zutatZeile = document.createElement("div");
    zutatZeile.className = "zutat";

    zutatZeile.innerHTML = `
        <div>
            <label>
                <span class="visuell-versteckt">Menge</span>
                <input type="text" class="menge" placeholder="Menge" inputmode="decimal">
            </label>
            <small class="menge-fehler fehler"></small>
        </div>
        <div>
            <label>
                <span class="visuell-versteckt">Einheit</span>
                <input type="text" class="einheit" placeholder="Einheit">
            </label>
            <small class="einheit-fehler fehler"></small>
        </div>
        <div>
            <label>
                <span class="visuell-versteckt">Zutat</span>
                <input type="text" class="zutat-name" placeholder="Zutat">
            </label>
            <small class="zutat-fehler fehler"></small>
        </div>
        <button type="button" class="zutat-entfernen">Entfernen</button>
    `;

    return zutatZeile;
}

// Beim Laden der Seite die erste leere Zutatenzeile anzeigen
zutatenContainer.appendChild(erstelleZutatZeile());

zutatHinzufuegenButton.addEventListener("click", function () {
    zutatenContainer.appendChild(erstelleZutatZeile());
});

function entferneZutat(button) {
    const zutat = button.parentElement;
    zutat.remove();
}

zutatenContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("zutat-entfernen")) {
        entferneZutat(event.target);
    }
});

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

const bildInput = document.getElementById("bild");
const bildEntfernenButton = document.getElementById("bild-entfernen");

const formularLeerenButton = document.getElementById("formular-leeren");

bildInput.addEventListener("change", function () {
    if (bildInput.files.length > 0) {
        bildEntfernenButton.hidden = false;
    } else {
        bildEntfernenButton.hidden = true;
    }
});

bildEntfernenButton.addEventListener("click", function () {
    bildInput.value = "";
    bildEntfernenButton.hidden = true;
});

function leseBildAlsDataURL(datei) {
    return new Promise(function (resolve, reject) {
        const reader = new FileReader();

        reader.onload = function () {
            resolve(reader.result);
        };

        reader.onerror = function () {
            reject(new Error("Bild konnte nicht gelesen werden."));
        };

        reader.readAsDataURL(datei);
    });
}

async function verarbeiteBild() {
    const bildDatei = bildInput.files[0];

    if (!bildDatei) {
        return "images/platzhalter.jpg";
    }

    if (!bildDatei.type.startsWith("image/")) {
        throw new Error("Bitte wählen Sie eine Bilddatei aus.");
    }

    // Base64-Bilder werden im localStorage gespeichert (ca. 5 MB insgesamt), daher max. 500 KB
    if (bildDatei.size > 500 * 1024) {
        throw new Error("Das Bild darf maximal 500 KB groß sein.");
    }

    return await leseBildAlsDataURL(bildDatei);
}

// Prüffunktionen: geben den Fehlertext zurück oder "", wenn alles passt.
// Sie werden in pruefeFormular() und in den input-Listenern genutzt.
function pruefeTitel(wert) {
    const titel = wert.trim();

    if (titel === "") {
        return "Bitte einen Rezeptnamen eingeben.";
    }
    if (titel.length < 2) {
        return "Der Rezeptname muss mindestens 2 Zeichen enthalten.";
    }
    if (!/[a-zA-ZäöüÄÖÜß]/.test(titel)) {
        return "Der Rezeptname muss Buchstaben enthalten.";
    }
    if (titel.length > 100) {
        return "Der Rezeptname darf maximal 100 Zeichen enthalten.";
    }
    return "";
}

function pruefeDauer(wert) {
    const dauer = Number(wert);

    if (wert === "") {
        return "Bitte eine Zubereitungszeit eingeben.";
    }
    if (dauer <= 0) {
        return "Die Zubereitungszeit muss größer als 0 sein.";
    }
    if (dauer > 1440) {
        return "Die Zubereitungszeit darf maximal 1440 Minuten betragen.";
    }
    return "";
}

function pruefePortionen(wert) {
    const portionen = Number(wert);

    if (wert === "") {
        return "Bitte die Anzahl der Portionen eingeben.";
    }
    if (portionen <= 0) {
        return "Die Portionen müssen größer als 0 sein.";
    }
    if (portionen > 100) {
        return "Es sind maximal 100 Portionen möglich.";
    }
    return "";
}

function pruefeFormular() {
    const titel = document.getElementById("titel").value.trim();
    const kategorie = document.getElementById("kategorie").value;
    const ernaehrung = document.getElementById("ernaehrung").value;
    const geschmack = document.getElementById("geschmack").value;
    const schwierigkeit = document.getElementById("schwierigkeit").value;
    const dauer = document.getElementById("dauer").value;
    const portionen = document.getElementById("portionen").value;
    const zubereitung = document.getElementById("zubereitung").value.trim();

    const fehler = [];

    const titelMeldung = pruefeTitel(titel);
    if (titelMeldung !== "") {
        fehler.push(titelMeldung);
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

    const dauerMeldung = pruefeDauer(dauer);
    if (dauerMeldung !== "") {
        fehler.push(dauerMeldung);
    }

    const portionenMeldung = pruefePortionen(portionen);
    if (portionenMeldung !== "") {
        fehler.push(portionenMeldung);
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
            const name = zutaten[i].querySelector(".zutat-name").value.trim();

            if (menge !== "" && !/^\d+([.,]\d+)?$/.test(menge)) {
                fehler.push("Bei Zutat " + (i + 1) + " muss die Menge eine Zahl sein.");
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

    return fehler;
}

function erstelleRezept(bild) {
    const titel = document.getElementById("titel").value.trim();
    const kategorie = document.getElementById("kategorie").value;
    const ernaehrung = document.getElementById("ernaehrung").value;
    const geschmack = document.getElementById("geschmack").value;
    const schwierigkeit = document.getElementById("schwierigkeit").value;
    const dauer = document.getElementById("dauer").value;
    const portionen = document.getElementById("portionen").value;
    const zubereitung = document.getElementById("zubereitung").value.trim();
    const zutaten = document.querySelectorAll(".zutat");

    return {
        titel: titel,
        kategorie: kategorie,
        ernaehrung: ernaehrung,
        geschmack: geschmack,
        schwierigkeit: schwierigkeit,
        dauerMinuten: Number(dauer),
        portionen: Number(portionen),
        bild: bild,
        zutaten: Array.from(zutaten).map(function (zutatElement) {
            return {
                menge: Number(zutatElement.querySelector(".menge").value.replace(",", ".")) || 0,
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
}

// Setzt das Formular komplett zurück: Eingaben, Zutatenzeilen, Fehlertexte und Bild-Button
function setzeFormularZurueck() {
    rezeptForm.reset();

    zutatenContainer.innerHTML = "";
    zutatenContainer.appendChild(erstelleZutatZeile());

    titelFehler.textContent = "";
    dauerFehler.textContent = "";
    portionenFehler.textContent = "";
    zubereitungFehler.textContent = "";

    bildEntfernenButton.hidden = true;
}

function speichereRezept(neuesRezept) {
    const gespeichertesRezept = fuegeRezeptHinzu(neuesRezept);

    // fuegeRezeptHinzu() gibt null zurück, wenn der localStorage voll ist
    if (gespeichertesRezept === null) {
        alert(
            "Das Rezept konnte nicht gespeichert werden, weil der Speicher voll ist.\n\n" +
            "Bitte wählen Sie ein kleineres Bild oder löschen Sie eigene Rezepte, die Sie nicht mehr brauchen."
        );
        return;
    }

    alert("Das Rezept wurde erfolgreich gespeichert!");
    setzeFormularZurueck();
}

rezeptForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const fehler = pruefeFormular();

    if (fehler.length > 0) {
        alert("Bitte überprüfen Sie folgende Angaben:\n\n" + fehler.join("\n"));
        return;
    }

    let bild;

    try {
        bild = await verarbeiteBild();
    } catch (error) {
        alert(error.message);
        return;
    }

    const neuesRezept = erstelleRezept(bild);

    speichereRezept(neuesRezept);
});

titelInput.addEventListener("input", function () {
    titelFehler.textContent = pruefeTitel(titelInput.value);
});

dauerInput.addEventListener("input", function () {
    dauerFehler.textContent = pruefeDauer(dauerInput.value);
});

portionenInput.addEventListener("input", function () {
    portionenFehler.textContent = pruefePortionen(portionenInput.value);
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

formularLeerenButton.addEventListener("click", function () {
    if (!confirm("Möchtest du wirklich alle Eingaben löschen?")) {
        return;
    }

    setzeFormularZurueck();
});