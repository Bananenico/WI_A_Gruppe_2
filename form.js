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