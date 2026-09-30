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
    schwierigkeit: "Anfaenger",
    dauerMinuten: 25,
    portionen: 4,
    bild: "images/aglio-e-olio.jpg",
    zutaten: [
      { menge: 400, einheit: "g", name: "Spaghetti" },
      { menge: 4, einheit: "Zehen", name: "Knoblauch" },
      { menge: 150, einheit: "ml", name: "Olivenoel" },
      { menge: 1, einheit: "Prise", name: "Salz" },
      { menge: 1, einheit: "Prise", name: "Pfeffer" }
    ],
    zubereitung: [
      "Spaghetti in Salzwasser bissfest kochen.",
      "Knoblauch schaelen und in Scheiben schneiden.",
      "Olivenoel erhitzen und Knoblauch vorsichtig anbraten.",
      "Spaghetti abgiessen und mit dem Knoblauchoel vermischen.",
      "Mit Salz und Pfeffer abschmecken."
    ]
  },
  {
    id: 2,
    titel: "Chili sin Carne",
    kategorie: "Kochen",
    ernaehrung: "vegan",
    geschmack: "herzhaft",
    schwierigkeit: "Anfaenger",
    dauerMinuten: 60,
    portionen: 4,
    bild: "images/chili-sin-carne.jpg",
    zutaten: [
      { menge: 2, einheit: "Zehen", name: "Knoblauch" },
      { menge: 1, einheit: "Stueck", name: "Zwiebel" },
      { menge: 2, einheit: "Stueck", name: "Paprika" },
      { menge: 250, einheit: "g", name: "rote Linsen" },
      { menge: 480, einheit: "g", name: "Kidneybohnen" },
      { menge: 400, einheit: "g", name: "gehackte Tomaten" },
      { menge: 400, einheit: "ml", name: "Gemuesebruehe" }
    ],
    zubereitung: [
      "Zwiebel, Knoblauch und Paprika klein schneiden und anbraten.",
      "Tomatenmark und Gewuerze kurz mitbraten.",
      "Linsen, Bohnen und Tomaten hinzufuegen.",
      "Mit Gemuesebruehe aufgiessen und koecheln lassen, bis die Linsen weich sind.",
      "Mit Salz und Pfeffer abschmecken."
    ]
  },
  {
    id: 3,
    titel: "Haehnchencurry mit Reis",
    kategorie: "Kochen",
    ernaehrung: "fleisch",
    geschmack: "herzhaft",
    schwierigkeit: "Anfaenger",
    dauerMinuten: 25,
    portionen: 2,
    bild: "images/haehnchencurry.jpg",
    zutaten: [
      { menge: 125, einheit: "g", name: "Basmatireis" },
      { menge: 250, einheit: "g", name: "Haehnchenbrustfilet" },
      { menge: 1, einheit: "Stueck", name: "Zwiebel" },
      { menge: 1, einheit: "TL", name: "Curry" },
      { menge: 200, einheit: "ml", name: "Kokosmilch" }
    ],
    zubereitung: [
      "Reis nach Packungsanleitung kochen.",
      "Haehnchen in Stuecke schneiden und anbraten, dann herausnehmen.",
      "Zwiebel anbraten, Curry dazugeben.",
      "Mit Bruehe und Kokosmilch abloeschen.",
      "Haehnchen wieder dazugeben und kurz koecheln lassen."
    ]
  },
  {
    id: 4,
    titel: "Gemueselasagne",
    kategorie: "Kochen",
    ernaehrung: "vegetarisch",
    geschmack: "herzhaft",
    schwierigkeit: "Mittel",
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
      "Aubergine und Zucchini wuerfeln und anbraten.",
      "Tomatensauce zubereiten, helle Sauce zubereiten.",
      "Lasagneplatten, Gemuese und Saucen abwechselnd schichten.",
      "Mit Feta bestreuen und goldbraun backen."
    ]
  },
  {
    id: 5,
    titel: "Lachs mit Ofengemuese",
    kategorie: "Kochen",
    ernaehrung: "fisch",
    geschmack: "herzhaft",
    schwierigkeit: "Mittel",
    dauerMinuten: 47,
    portionen: 2,
    bild: "images/lachs-ofengemuese.jpg",
    zutaten: [
      { menge: 2, einheit: "Stueck", name: "Lachsfilet" },
      { menge: 1, einheit: "Stueck", name: "Zucchini" },
      { menge: 1, einheit: "Stueck", name: "Paprika" },
      { menge: 1, einheit: "Stueck", name: "Zwiebel" },
      { menge: 1, einheit: "EL", name: "Olivenoel" }
    ],
    zubereitung: [
      "Gemuese waschen, schneiden und mit Oel, Salz und Pfeffer vermischen.",
      "Auf einem Backblech vorgaren.",
      "Lachs wuerzen und zum Gemuese aufs Blech legen.",
      "Fertig garen, bis Lachs durch und Gemuese weich ist."
    ]
  },
  {
    id: 6,
    titel: "Veganes Risotto mit Pilzen",
    kategorie: "Kochen",
    ernaehrung: "vegan",
    geschmack: "herzhaft",
    schwierigkeit: "Mittel",
    dauerMinuten: 40,
    portionen: 4,
    bild: "images/risotto-pilze.jpg",
    zutaten: [
      { menge: 300, einheit: "g", name: "Champignons" },
      { menge: 2, einheit: "Stueck", name: "Zwiebel" },
      { menge: 250, einheit: "g", name: "Risottoreis" },
      { menge: 200, einheit: "ml", name: "veganer Weisswein" },
      { menge: 600, einheit: "ml", name: "Gemuesebruehe" }
    ],
    zubereitung: [
      "Pilze putzen und in Scheiben schneiden.",
      "Zwiebeln anbraten, Risottoreis kurz mitroesten.",
      "Mit Weisswein abloeschen, nach und nach Bruehe angiessen und ruehren.",
      "Pilze separat anbraten und unter das fertige Risotto mischen."
    ]
  },
  {
    id: 7,
    titel: "Marmorkuchen",
    kategorie: "Backen",
    ernaehrung: "vegetarisch",
    geschmack: "suess",
    schwierigkeit: "Anfaenger",
    dauerMinuten: 85,
    portionen: 12,
    bild: "images/marmorkuchen.jpg",
    zutaten: [
      { menge: 250, einheit: "g", name: "Butter" },
      { menge: 400, einheit: "g", name: "Weizenmehl" },
      { menge: 200, einheit: "g", name: "Zucker" },
      { menge: 4, einheit: "Stueck", name: "Eier" },
      { menge: 30, einheit: "g", name: "Kakaopulver" }
    ],
    zubereitung: [
      "Butter, Zucker und Salz cremig ruehren, Eier unterruehren.",
      "Mehl, Staerke und Backpulver mit Milch dazugeben.",
      "Haelfte des Teigs abnehmen und mit Kakao vermischen.",
      "Teige abwechselnd in die Form geben und verziehen, dann backen."
    ]
  },
  {
    id: 8,
    titel: "Zitronenkuchen",
    kategorie: "Backen",
    ernaehrung: "vegetarisch",
    geschmack: "suess",
    schwierigkeit: "Anfaenger",
    dauerMinuten: 60,
    portionen: 8,
    bild: "images/zitronenkuchen.jpg",
    zutaten: [
      { menge: 1, einheit: "Stueck", name: "Bio-Zitrone" },
      { menge: 180, einheit: "g", name: "Butter" },
      { menge: 150, einheit: "g", name: "Zucker" },
      { menge: 4, einheit: "Stueck", name: "Eier" },
      { menge: 250, einheit: "g", name: "Weizenmehl" }
    ],
    zubereitung: [
      "Zitrone abreiben und auspressen.",
      "Butter, Zucker und Vanillezucker cremig ruehren, Eier einzeln unterruehren.",
      "Zitronenschale und -saft dazugeben, Mehl und Backpulver unterruehren.",
      "In eine Kastenform fuellen und backen, danach mit Zitronenguss ueberziehen."
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
 * Erzeugt das HTML fuer eine einzelne Rezeptkarte.
 * @param {Object} rezept
 * @returns {string} HTML-String der Karte
 */
function erstelleRezeptKarte(rezept) {
  return `
    <article class="rezept-karte">
      <img src="${rezept.bild}" alt="${rezept.titel}">
      <h3><a href="details-rezept.html?id=${rezept.id}">${rezept.titel}</a></h3>
      <p>${rezept.dauerMinuten} Minuten &middot; ${rezept.schwierigkeit}</p>
    </article>
  `;
}

/**
 * Zeigt die uebergebene Rezeptliste im Ergebnisbereich der Rezepteseite an.
 * @param {Array<Object>} rezepte
 */
function zeigeRezepte(rezepte) {
  const liste = document.getElementById("rezept-liste");
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
  zeigeRezepte(alleRezepte);
});
