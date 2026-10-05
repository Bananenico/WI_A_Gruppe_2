// WI_A_Gruppe_2

/**
 * Datenmodell und Startrezepte fuer den Rezeptverwalter.
 * Person C: Daten und Logik
 */

const STORAGE_KEY = "wi_a_gruppe2_rezepte";

const startRezepte = [
  {
    id: 1,
    titel: "Spaghetti Aglio e Olio",
    kategorie: "Kochen",
    ernaehrung: "vegan",
    geschmack: "herzhaft",
    eigenesRezept: false,
    schwierigkeit: "leicht",
    dauerMinuten: 25,
    portionen: 4,
    bild: "images/aglio-e-olio.jpg",
    zutaten: [
      { menge: 400, einheit: "g", name: "Spaghetti" },
      { menge: 4, einheit: "Zehen", name: "Knoblauch" },
      { menge: 150, einheit: "ml", name: "Olivenöl" },
      { menge: 1, einheit: "Prise", name: "Salz" },
      { menge: 1, einheit: "Prise", name: "Pfeffer" }
    ],
    zubereitung: [
      "Spaghetti in Salzwasser bissfest kochen.",
      "Knoblauch schälen und in Scheiben schneiden.",
      "Olivenöl erhitzen und Knoblauch vorsichtig anbraten.",
      "Spaghetti abgiessen und mit dem Knoblauch-Olivenöl vermischen.",
      "Mit Salz und Pfeffer abschmecken."
    ]
  },
  {
    id: 2,
    titel: "Chili sin Carne",
    kategorie: "Kochen",
    ernaehrung: "vegan",
    geschmack: "herzhaft",
    eigenesRezept: false,
    schwierigkeit: "leicht",
    dauerMinuten: 60,
    portionen: 4,
    bild: "images/chili-sin-carne.jpg",
    zutaten: [
      { menge: 2, einheit: "Zehen", name: "Knoblauch" },
      { menge: 1, einheit: "Stück", name: "Zwiebel" },
      { menge: 2, einheit: "Stück", name: "Paprika" },
      { menge: 250, einheit: "g", name: "rote Linsen" },
      { menge: 480, einheit: "g", name: "Kidneybohnen" },
      { menge: 400, einheit: "g", name: "gehackte Tomaten" },
      { menge: 400, einheit: "ml", name: "Gemüsebrühe" }
    ],
    zubereitung: [
      "Zwiebel, Knoblauch und Paprika klein schneiden und anbraten.",
      "Tomatenmark und Gewürze kurz mitbraten.",
      "Linsen, Bohnen und Tomaten hinzufügen.",
      "Mit Gemüsebrühe aufgiessen und köcheln lassen, bis die Linsen weich sind.",
      "Mit Salz und Pfeffer abschmecken."
    ]
  },
  {
    id: 3,
    titel: "Hähnchencurry mit Reis",
    kategorie: "Kochen",
    ernaehrung: "fleisch",
    geschmack: "herzhaft",
    eigenesRezept: false,
    schwierigkeit: "leicht",
    dauerMinuten: 25,
    portionen: 2,
    bild: "images/haehnchencurry.jpg",
    zutaten: [
      { menge: 125, einheit: "g", name: "Basmatireis" },
      { menge: 250, einheit: "g", name: "Hähnchenbrustfilet" },
      { menge: 1, einheit: "Stück", name: "Zwiebel" },
      { menge: 1, einheit: "TL", name: "Curry" },
      { menge: 200, einheit: "ml", name: "Kokosmilch" }
    ],
    zubereitung: [
      "Reis nach Packungsanleitung kochen.",
      "Hähnchen in Stücke schneiden und anbraten, dann herausnehmen.",
      "Zwiebel anbraten, Curry dazugeben.",
      "Mit Brühe und Kokosmilch ablöschen.",
      "Hähnchen wieder dazugeben und kurz köcheln lassen."
    ]
  },
  {
    id: 4,
    titel: "Gemüselasagne",
    kategorie: "Kochen",
    ernaehrung: "vegetarisch",
    geschmack: "herzhaft",
    eigenesRezept: false,
    schwierigkeit: "mittel",
    dauerMinuten: 78,
    portionen: 4,
    bild: "images/gemueselasagne.jpg",
    zutaten: [
      { menge: 450, einheit: "g", name: "Aubergine" },
      { menge: 150, einheit: "g", name: "Zucchini" },
      { menge: 480, einheit: "g", name: "Tomaten" },
      { menge: 180, einheit: "g", name: "Feta" },
      { menge: 250, einheit: "g", name: "Lasagneplatten" }
    ],
    zubereitung: [
      "Aubergine und Zucchini würfeln und anbraten.",
      "Tomatensauce zubereiten, helle Sauce zubereiten.",
      "Lasagneplatten, Gemüse und Saucen abwechselnd schichten.",
      "Mit Feta bestreuen und goldbraun backen."
    ]
  },
  {
    id: 5,
    titel: "Lachs mit Ofengemüse",
    kategorie: "Kochen",
    ernaehrung: "fisch",
    geschmack: "herzhaft",
    eigenesRezept: false,
    schwierigkeit: "mittel",
    dauerMinuten: 47,
    portionen: 2,
    bild: "images/lachs-ofengemuese.jpg",
    zutaten: [
      { menge: 2, einheit: "Stück", name: "Lachsfilet" },
      { menge: 1, einheit: "Stück", name: "Zucchini" },
      { menge: 1, einheit: "Stück", name: "Paprika" },
      { menge: 1, einheit: "Stück", name: "Zwiebel" },
      { menge: 1, einheit: "EL", name: "Olivenöl" }
    ],
    zubereitung: [
      "Gemüse waschen, schneiden und mit Öl, Salz und Pfeffer vermischen.",
      "Auf einem Backblech vorgaren.",
      "Lachs würzen und zum Gemüse aufs Blech legen.",
      "Fertig garen, bis Lachs durch und Gemüse weich ist."
    ]
  },
  {
    id: 6,
    titel: "Veganes Risotto mit Pilzen",
    kategorie: "Kochen",
    ernaehrung: "vegan",
    geschmack: "herzhaft",
    eigenesRezept: false,
    schwierigkeit: "mittel",
    dauerMinuten: 40,
    portionen: 4,
    bild: "images/risotto-pilze.jpg",
    zutaten: [
      { menge: 300, einheit: "g", name: "Champignons" },
      { menge: 2, einheit: "Stück", name: "Zwiebel" },
      { menge: 250, einheit: "g", name: "Risottoreis" },
      { menge: 200, einheit: "ml", name: "veganer Weisswein" },
      { menge: 600, einheit: "ml", name: "Gemüsebrühe" }
    ],
    zubereitung: [
      "Pilze putzen und in Scheiben schneiden.",
      "Zwiebeln anbraten, Risottoreis kurz mitrösten.",
      "Mit Weisswein ablöschen, nach und nach Brühe angiessen und rühren.",
      "Pilze separat anbraten und unter das fertige Risotto mischen."
    ]
  },
  {
    id: 7,
    titel: "Marmorkuchen",
    kategorie: "Backen",
    ernaehrung: "vegetarisch",
    geschmack: "suess",
    eigenesRezept: false,
    schwierigkeit: "leicht",
    dauerMinuten: 85,
    portionen: 12,
    bild: "images/marmorkuchen.jpg",
    zutaten: [
      { menge: 250, einheit: "g", name: "Butter" },
      { menge: 400, einheit: "g", name: "Weizenmehl" },
      { menge: 200, einheit: "g", name: "Zucker" },
      { menge: 4, einheit: "Stück", name: "Eier" },
      { menge: 30, einheit: "g", name: "Kakaopulver" }
    ],
    zubereitung: [
      "Butter, Zucker und Salz cremig rühren, Eier unterrühren.",
      "Mehl, Stärke und Backpulver mit Milch dazugeben.",
      "Hälfte des Teigs abnehmen und mit Kakao vermischen.",
      "Teige abwechselnd in die Form geben und verziehen, dann backen."
    ]
  },
  {
    id: 8,
    titel: "Zitronenkuchen",
    kategorie: "Backen",
    ernaehrung: "vegetarisch",
    geschmack: "suess",
    eigenesRezept: false,
    schwierigkeit: "leicht",
    dauerMinuten: 60,
    portionen: 8,
    bild: "images/zitronenkuchen.jpg",
    zutaten: [
      { menge: 1, einheit: "Stück", name: "Bio-Zitrone" },
      { menge: 180, einheit: "g", name: "Butter" },
      { menge: 150, einheit: "g", name: "Zucker" },
      { menge: 4, einheit: "Stück", name: "Eier" },
      { menge: 250, einheit: "g", name: "Weizenmehl" }
    ],
    zubereitung: [
      "Zitrone abreiben und auspressen.",
      "Butter, Zucker und Vanillezucker cremig rühren, Eier einzeln unterrühren.",
      "Zitronenschale und -saft dazugeben, Mehl und Backpulver unterrühren.",
      "In eine Kastenform füllen und backen, danach mit Zitronenguss überziehen."
    ]
  }
];

/**
 * Laedt die Rezepte aus dem localStorage.
 * Beim allerersten Aufruf werden die Startrezepte gespeichert und zurueckgegeben.
 * @returns {Array<Object>} Liste aller Rezepte
 */
function ladeRezepte() {
  const gespeichert = localStorage.getItem(STORAGE_KEY);

  if (gespeichert === null) {
    speichereRezepte(startRezepte);
    return startRezepte;
  }

  try {
    return JSON.parse(gespeichert);
  } catch (fehler) {
    console.error("Gespeicherte Rezepte konnten nicht gelesen werden.", fehler);
    return startRezepte;
  }
}

/**
 * Speichert die uebergebene Rezeptliste im localStorage.
 * @param {Array<Object>} rezepte
 */
function speichereRezepte(rezepte) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(rezepte));
}

/**
 * Sucht ein Rezept anhand seiner id.
 * @param {number} id
 * @returns {Object|undefined}
 */
function findeRezeptNachId(id) {
  const rezepte = ladeRezepte();
  return rezepte.find(function (rezept) {
    return rezept.id === id;
  });
} 

  /**
 * Rundet eine Menge auf eine Nachkommastelle, zeigt aber ganze Zahlen ohne Nachkommastelle.
 * @param {number} menge
 * @returns {string}
 */
function rundeMenge(menge) {
  const gerundet = Math.round(menge * 10) / 10;
  return Number.isInteger(gerundet) ? String(gerundet) : gerundet.toFixed(1);
}
/**
 * Rendert die Zutatenliste, umgerechnet auf die gewuenschte Portionenzahl.
 * @param {Object} rezept
 * @param {number} portionenAnzahl
 */
function rendereZutatenliste(rezept, portionenAnzahl) {
  const zutatenListe = document.getElementById("detail-zutaten");
  zutatenListe.innerHTML = rezept.zutaten.map(function (zutat) {
    const umgerechnetMenge = (zutat.menge / rezept.portionen) * portionenAnzahl;
    return "<li>" + rundeMenge(umgerechnetMenge) + " " + zutat.einheit + " " + zutat.name + "</li>";
  }).join("");
}
  
/**
 * Ermittelt die naechste freie id fuer ein neues Rezept.
 * @param {Array<Object>} rezepte
 * @returns {number}
 */
function naechsteId(rezepte) {
  if (rezepte.length === 0) {
    return 1;
  }

  const hoechsteId = rezepte.reduce(function (bisherHoechste, rezept) {
    return Math.max(bisherHoechste, rezept.id);
  }, 0);

  return hoechsteId + 1;
}

/**
 * Fuegt ein neues Rezept zur gespeicherten Rezeptliste hinzu.
 * @param {Object} neuesRezept Rezept ohne id
 * @returns {Object} das gespeicherte Rezept inklusive vergebener id
 */
function fuegeRezeptHinzu(neuesRezept) {
  const rezepte = ladeRezepte();
  const rezeptMitId = Object.assign(
    { id: naechsteId(rezepte), eigenesRezept: true },
    neuesRezept
  );

  rezepte.push(rezeptMitId);
  speichereRezepte(rezepte);

  return rezeptMitId;
}

/**
 * Loescht ein Rezept anhand seiner id aus der gespeicherten Rezeptliste.
 * @param {number} id
 */
function loescheRezept(id) {
  const rezepte = ladeRezepte();
  const uebrigeRezepte = rezepte.filter(function (rezept) {
    return rezept.id !== id;
  });

  speichereRezepte(uebrigeRezepte);
}

/**
 * Erzeugt das HTML fuer eine einzelne Rezeptkarte.
 * @param {Object} rezept
 * @returns {string} HTML-String der Karte
 */

function erstelleRezeptKarte(rezept) {
  return `
    <article class="rezept-karte">
      <img class="rezept-bild" src="${rezept.bild}" alt="${rezept.titel}">
      <h3 class="rezept-titel">${rezept.titel}</h3>
      <p class="rezept-meta">${rezept.schwierigkeit} · ${rezept.dauerMinuten} Min. · ${rezept.geschmack} · ${rezept.ernaehrung}</p>
      <a class="rezept-link" href="details-rezept.html?id=${rezept.id}">Details ansehen</a>
    </article>
  `;
}

/**
 * Zeigt die uebergebene Rezeptliste im angegebenen Container an.
 * @param {Array<Object>} rezepte
 * @param {string} containerId id des Containers, in den die Karten gerendert werden
 */
function zeigeRezepte(rezepte, containerId) {
  const liste = document.getElementById(containerId);
  if (liste === null) {
    return;
  }

  if (rezepte.length === 0) {
    liste.innerHTML = "<p>Keine Rezepte gefunden.</p>";
    return;
  }

  liste.innerHTML = rezepte.map(erstelleRezeptKarte).join("");
}

// Beim Laden von rezepte.html direkt alle Rezepte anzeigen
document.addEventListener("DOMContentLoaded", function () {
  const alleRezepte = ladeRezepte();
  zeigeRezepte(alleRezepte, "rezept-liste");
});

/**
 * Waehlt eine zufaellige Auswahl von Rezepten aus einer Liste.
 * @param {Array<Object>} rezepte
 * @param {number} anzahl wie viele Rezepte ausgewaehlt werden sollen
 * @returns {Array<Object>}
 */
function waehleZufaelligeRezepte(rezepte, anzahl) {
  const kopie = rezepte.slice();
  const auswahl = [];

  while (kopie.length && auswahl.length < anzahl) {
    const zufallsIndex = Math.floor(Math.random() * kopie.length);
    auswahl.push(kopie[zufallsIndex]);
    kopie.splice(zufallsIndex, 1);
  }
  return auswahl;
}

document.addEventListener("DOMContentLoaded", function () {
  const popularContainer = document.getElementById("popular-recipes");
  if (popularContainer === null) {
    return;
  }
  const alleRezepte = ladeRezepte();
  const beliebteRezepte = waehleZufaelligeRezepte(alleRezepte, 3);
  zeigeRezepte(beliebteRezepte, "popular-recipes");
});


/**
 * Prueft, ob ein Rezept zu einem Suchbegriff passt (Titel oder Zutatenname).
 * @param {Object} rezept
 * @param {string} suchbegriff
 * @returns {boolean}
 */
function rezeptPasstZurSuche(rezept, suchbegriff) {
  const begriff = suchbegriff.trim().toLowerCase();

  if (begriff === "") {
    return true;
  }

  const titelPasst = rezept.titel.toLowerCase().includes(begriff);
  const zutatPasst = rezept.zutaten.some(function (zutat) {
    return zutat.name.toLowerCase().includes(begriff);
  });

  return titelPasst || zutatPasst;
}

/**
 * Prueft, ob ein Rezept zum gewaehlten Geschmack passt.
 * @param {Object} rezept
 * @param {string} geschmack "alle", "suess" oder "herzhaft"
 * @returns {boolean}
 */
function rezeptPasstZumGeschmack(rezept, geschmack) {
  if (geschmack === "alle") {
    return true;
  }
  return rezept.geschmack === geschmack;
}

/**
 * Prueft, ob ein Rezept zur gewaehlten Ernaehrungsart passt.
 * @param {Object} rezept
 * @param {string} ernaehrung "alle", "vegan", "vegetarisch", "fleisch" oder "fisch"
 * @returns {boolean}
 */
function rezeptPasstZurErnaehrung(rezept, ernaehrung) {
  if (ernaehrung === "alle") {
    return true;
  }
  return rezept.ernaehrung === ernaehrung;
}

/**
 * Prueft, ob die Zubereitungszeit eines Rezepts innerhalb der gewuenschten Hoechstdauer liegt.
 * @param {Object} rezept
 * @param {string} maxDauer Wert aus dem Eingabefeld, leer bedeutet keine Obergrenze
 * @returns {boolean}
 */
function rezeptPasstZurDauer(rezept, maxDauer) {
  if (maxDauer === "") {
    return true;
  }
  return rezept.dauerMinuten <= Number(maxDauer);
}

/**
 * Prueft, ob ein Rezept zur gewaehlten Schwierigkeit passt.
 * @param {Object} rezept
 * @param {string} schwierigkeit "alle", "leicht", "mittel" oder "schwer"
 * @returns {boolean}
 */
function rezeptPasstZurSchwierigkeit(rezept, schwierigkeit) {
  if (schwierigkeit === "alle") {
    return true;
  }
  return rezept.schwierigkeit === schwierigkeit;
}

// Filterformular: bei Absenden nach Suchbegriff und Schwierigkeit filtern
document.addEventListener("DOMContentLoaded", function () {
  const filterFormular = document.getElementById("filter-formular");
  if (filterFormular === null) {
    return;
  }

  filterFormular.addEventListener("submit", function (event) {
    event.preventDefault();

    const suchbegriff = document.getElementById("suche").value;
    const schwierigkeit = document.getElementById("schwierigkeit").value;
    const geschmack = document.querySelector('input[name="geschmack"]:checked').value;
    const ernaehrung = document.querySelector('input[name="ernaehrung"]:checked').value;
    const maxDauer = document.getElementById("max-dauer").value;
    const alleRezepte = ladeRezepte();

    const gefundeneRezepte = alleRezepte.filter(function (rezept) {
      return rezeptPasstZurSuche(rezept, suchbegriff)
        && rezeptPasstZurSchwierigkeit(rezept, schwierigkeit)
        && rezeptPasstZumGeschmack(rezept, geschmack)
        && rezeptPasstZurErnaehrung(rezept, ernaehrung)
        && rezeptPasstZurDauer(rezept, maxDauer);
    });

    zeigeRezepte(gefundeneRezepte , "rezept-liste");
  });
});

// Detailansicht: Rezept anhand der id aus der URL anzeigen
document.addEventListener("DOMContentLoaded", function () {
  const titelElement = document.getElementById("detail-titel");
  if (titelElement === null) {
    return;
  }

  const parameter = new URLSearchParams(window.location.search);
  const id = Number(parameter.get("id"));
  const rezept = findeRezeptNachId(id);

  if (rezept === undefined) {
    titelElement.textContent = "Rezept nicht gefunden";
    return;
  }

  titelElement.textContent = rezept.titel;

  const bildElement = document.getElementById("detail-bild");
  bildElement.src = rezept.bild;
  bildElement.alt = rezept.titel;

  const metaElement = document.getElementById("detail-meta");
  metaElement.textContent = rezept.schwierigkeit + " · " + rezept.dauerMinuten + " Min. · " + rezept.portionen + " Portionen";

 rendereZutatenliste(rezept, rezept.portionen);

 const portionenEingabe = document.getElementById("portionen-eingabe");
  portionenEingabe.value = rezept.portionen;
  portionenEingabe.addEventListener("input", function () {
    const neuePortionenAnzahl = Number(portionenEingabe.value);
    if (neuePortionenAnzahl > 0) {
      rendereZutatenliste(rezept, neuePortionenAnzahl);
    }
  });


  const zubereitungListe = document.getElementById("detail-zubereitung");
  zubereitungListe.innerHTML = rezept.zubereitung.map(function (schritt) {
    return "<li>" + schritt + "</li>";
  }).join("");
});
