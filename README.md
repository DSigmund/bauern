# Bauern aus dem Land vertreiben

Einfaches Kartenspiel mit Simulation zur Ausbildung und Übung.

Der Code ist als Müsterlösung zu sehen.

Empfehlon wird die Nutzung der Spielregeln und Aufgaben, damit eine eigene Lösung entwickelt werden kann.

## Ziele

- Strukturierung eines TypeScript-Projekts
- Analyse von Abläufen
- Analyse von Ergebnissen

## Spielregeln

Das Spiel "Jag den Bauern aus dem Land" (https://www.spielwiki.de/Jag_den_Bauern_aus_dem_Land_hinaus) ist ein altes bayrisches Trinkspiel, das in leicht abgewandelter Form auch Kinderfreundlich bespielt werden kann.

Es gibt 1 - n Spieler.

Verwendet wird ein Bayerisches Blatt (6, 7, 8, 9, 10, Unter, Ober, König, Ass) (Herz, Gras, Eichel, Schelln)

Das Blatt wird gemischt und an alle Spieler ausgeteilt.

Jeder Spieler erhält dabei gleich viele Karten.

In jeder Spielrunde legt jeder Spieler die oberste Karte aus.

Der Spieler mit der höchsten Karte gewinnt dabei alle Karten und legt diese unter seinen Stapel.

Bei gleichen Karten legt jeder Spieler die nächste Karte verdeckt aus und anschließend eine neue Karte.

Gewinner ist der Spieler, der am Ende alle Karten besitzt.

## Vorgaben

Die Entwicklung erfolgt in TypeScript für node.js
Ergebnis ist jeweils eine Anwendung, die per Konsole gestartet werden kann und den Output auch auf der Konsole ausgibt.
Wichtig ist eine vollständige Testabdeckung mittels jest.
Die Dokumentation erfolgt mittels passenden UML-Diagrammen, im Code mit TSDoc.

## Aufgaben

### Ein volles Blatt

TODO: Klassen und Tests Karte, Deck, Mischen

### Player Two Ready

TODO: Spiel mit 2 Spielern simulieren

### A Million Ways to Play in the West

TODO: Viele Spiele simulieren, Auswertungen

### Die unglaublichen 4

TODO: Spiel mit 4 Spielern, Sim, Auswertung

### Phantastische Parameter und wo sie zu finden sind

TODO: Parameter finden, änderbar machen, simulieren, vergleich der Auswertungen


## Installation

`git clone https://github.com/DSigmund/bauern.git && cd bauern && npm install && npm run build`

## Use

TODO:

## Test

Powered by Jest, just use `npm run test`

## Linting

Powered by standard-js, just use `npm run lint`

## Build

`npm run build`

## Dependencies

* none

## Changelog

See CHANGELOG.md

## Authors

* Dominik Sigmund <dominik.sigmund@br.de>
