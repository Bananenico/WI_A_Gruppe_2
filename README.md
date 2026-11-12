<!-- WI_A_Gruppe_2 -->

# Rezeptbuch

## Gruppenmitglieder

- Madlen Hahn
- Lukas Krebelder
- Nico Weber

## Projektidee

Ein Rezeptverwalter als kleine Webanwendung: Nutzende können durch eine Sammlung von Rezepten
stöbern, nach Schwierigkeit, Geschmack, Ernährungsart und Zubereitungsdauer filtern, sich die
Zutaten und Zubereitungsschritte eines Rezepts im Detail ansehen und eigene Rezepte hinzufügen
oder wieder löschen.

## Startanleitung

Die Anwendung besteht aus reinem HTML, CSS und JavaScript ohne Build-Schritt oder Server.
Es reicht, `index.html` im Browser zu öffnen. Die Daten werden im `localStorage` des Browsers
gespeichert und bleiben nach einem Neuladen der Seite erhalten.

Um wieder mit den acht Startrezepten zu beginnen, den `localStorage`-Eintrag
`wi_a_gruppe2_rezepte` in den Entwicklertools des Browsers löschen und die Seite neu laden.

## Umgesetzte Funktionen

- Rezeptübersicht mit Filter nach Suchbegriff (Rezeptname oder Zutat), Schwierigkeit,
  Geschmack (süß/herzhaft), Ernährungsart und maximaler Zubereitungsdauer; die Filter lassen
  sich kombinieren und zurücksetzen, bei keinem Treffer erscheint ein Hinweis
- Detailansicht eines Rezepts mit Bild, Zutatenliste und Zubereitungsschritten; bei einer
  unbekannten Rezept-ID erscheint ein Hinweis statt einer leeren Seite
- Portionsrechner: Die Zutatenmengen in der Detailansicht passen sich automatisch an eine
  frei wählbare Portionenzahl an
- Eigene Rezepte über ein Formular anlegen, mit beliebig vielen Zutatenzeilen, die sich
  hinzufügen und wieder entfernen lassen, sowie einem Button zum Leeren des Formulars
- Formularvalidierung: Fehlermeldungen erscheinen direkt unter den Feldern während der
  Eingabe, beim Absenden werden alle fehlenden oder ungültigen Angaben zusammengefasst
- Optionaler Bildupload bis 500 KB (ohne Bild wird ein Platzhalterbild verwendet); ist der
  Speicher des Browsers voll, erscheint eine verständliche Meldung
- Eigene Rezepte wieder löschen, sowohl auf der Detailseite als auch direkt über die
  Rezeptkarte; die Karte verschwindet sofort und aktive Filter bleiben erhalten. Die acht
  mitgelieferten Startrezepte lassen sich bewusst nicht löschen
- Zufällige Auswahl von "Beliebten Rezepten" auf der Startseite
- Eingaben werden immer als Text angezeigt und nicht als HTML ausgeführt
- Speicherung aller Daten im `localStorage`, sodass eigene Rezepte und Löschungen einen
  Neuladevorgang überstehen
- Responsives Layout mit Grid und Flexbox, getestet in einer schmalen Ansicht (375 px) und
  einer Desktop-Ansicht (1280 px)

## Hinweis zu Hilfsmitteln

Im Bereich Datenmodell, Startrezepte, localStorage, Filter/Suche, Portionsrechner und
Detailansicht habe ich KI (Claude) als Unterstützung genutzt, unter anderem zur Erklärung
von JavaScript-Konzepten, beim Debugging. Umsetzung und
Entscheidungen lagen bei mir.

## Hinweise

In der ursprünglichen Rezeptdatei wurden Umlaute als "ae", "oe", "ue" geschrieben statt als
echte Umlaute. Nachdem wir herausgefunden haben, dass Umlaute im sichtbaren Text erlaubt
sind, haben wir das angepasst. Variablen-, Funktions- und Dateinamen sowie die intern
gespeicherten Werte (z. B. `suess`) verwenden weiterhin bewusst keine Umlaute, um
Kompatibilitätsprobleme zu vermeiden. Für die Anzeige werden sie in lesbare Namen
(z. B. "Süß") umgewandelt.

## Zusammenführen zweier Autor-Identitäten

Zu Beginn hat Nico Weber unter dem Namen "Bananenico" und der E-Mail-Adresse
"nico.weberli@web.de" committet. Das ist sein GitHub-Account.

Durch die Einrichtung von VS Code und GitHub für ein anderes Projekt hat Nico mit
`git config --global` den Namen "Nico Weber" und die E-Mail-Adresse
"nic.weber.25@lehre.mosbach.dhbw.de" hinterlegt. Seitdem werden auch in diesem Projekt alle
weiteren Commits von Nico unter dieser Identität erstellt.

Um Missverständnisse zu vermeiden, werden beide Identitäten über die Datei `.mailmap`
zusammengeführt. `git shortlog -sne` zeigt dadurch alle Commits von Nico unter einem Namen an.
