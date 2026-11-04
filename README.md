<!-- WI_A_Gruppe_2 -->

# Rezeptbuch

## Projektidee

Ein Rezeptverwalter als kleine Webanwendung: Nutzende können durch eine Sammlung von Rezepten
stöbern, nach Schwierigkeit, Geschmack, Ernährungsart und Zubereitungsdauer filtern, sich die
Zutaten und Zubereitungsschritte eines Rezepts im Detail ansehen und eigene Rezepte hinzufügen
oder wieder löschen.

## Startanleitung

Die Anwendung besteht aus reinem HTML, CSS und JavaScript ohne Build-Schritt oder Server.
Es reicht, `index.html` im Browser zu öffnen. Die Daten werden im `localStorage` des Browsers
gespeichert und bleiben nach einem Neuladen der Seite erhalten.

## Umgesetzte Funktionen

- Rezeptübersicht mit Filter nach Suchbegriff, Schwierigkeit, Geschmack (süß/herzhaft),
  Ernährungsart und maximaler Zubereitungsdauer
- Detailansicht eines Rezepts mit Zutatenliste und Zubereitungsschritten
- Portionsrechner: Die Zutatenmengen in der Detailansicht passen sich automatisch an eine
  frei wählbare Portionenzahl an
- Eigene Rezepte über ein Formular anlegen, inklusive optionalem Bildupload (ohne Bild wird
  ein Platzhalterbild verwendet)
- Eigene Rezepte wieder löschen, sowohl auf der Detailseite als auch direkt über die
  Rezeptkarte in der Übersicht; die acht mitgelieferten Startrezepte lassen sich bewusst
  nicht löschen
- Zufällige Auswahl von "Beliebten Rezepten" auf der Startseite
- Speicherung aller Daten im `localStorage`, sodass eigene Rezepte und Löschungen einen
  Neuladevorgang überstehen

## Hinweis zu Hilfsmitteln

Im Bereich Datenmodell, Startrezepte, localStorage, Filter/Suche, Portionsrechner und
Detailansicht habe ich KI (Claude) als Unterstützung genutzt, unter anderem zur Erklärung
von JavaScript-Konzepten, beim Debugging und bei der Code-Struktur. Umsetzung und
Entscheidungen lagen bei mir.

## Hinweise

In der ursprünglichen Rezeptdatei wurden Umlaute als "ae", "oe", "ue" geschrieben statt als
echte Umlaute. Nachdem wir herausgefunden haben, dass Umlaute im sichtbaren Text erlaubt
sind, haben wir das angepasst. Variablen-, Funktions- und Dateinamen im Code verwenden
weiterhin bewusst keine Umlaute, um Kompatibilitätsprobleme zu vermeiden.

## Zusammenführen zweier Authoridentitäten

Zu Beginn hat einer der drei Authoren namens Nico Weber unter dem Namen "Bananenico" und der
Email "nico.weberli@web.de" gearbeitet. Dies ist der Github-Account dieser Person.

Aufgrund einer weiteren Einrichrung von VS-Code und Github durch ein anderes Projekt, mussten
wir uns dort ebenfalls mit Namen und Email (git config [...]) anmelden. Da ich mich dort
jedoch mit git config --global unter dem Namen "Nico Weber" und der Email-Adresse
"nic.weber.25@lehre.mosbach.dhbw.de" angemeldet habe, werden seither auch in diesem Projekt
alle weiteren Commits unter dieser Identität commitet.

Um Missverständlichkeiten zu vermeiden wurden beide Namen und Mails durch eine .mailmap-Datei
zusammengeführt und dieser Kommentar in der README-Datei verfasst.
