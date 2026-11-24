# mathe-lab: Regeln für die Arbeit an diesem Repository

Materialsammlung „Mathematik zum Ausprobieren“ von S. Thel (Hohe Landesschule Hanau) für seine Schülerinnen und Schüler, veröffentlicht unter https://thelematik.github.io/mathe-lab/. Schwesterseite für Politik und Wirtschaft: Repository `POWI`.

## Ordner
- Tools in `unterstufe/`, `mittelstufe/`, `oberstufe/`; Bilder in `oberstufe/bilder/` usw.; Arbeitsblätter in `arbeitsblaetter/`; gemeinsame Dateien in `assets/`.
- Bestehende Adressen nicht umbenennen, damit Links der Schüler weiter funktionieren.

## Mathematische Schreibweisen
- Kumulierte Binomialverteilung: neben der Summenformel auch F(n; p; k) (Taschenrechner, Abitur).
- Hypothesentests: Nullhypothese, soweit fachlich richtig, mit Gleichheitszeichen (H₀: p = p₀). B(n; p) und F(n; p; k) nie über einen Zeilenumbruch trennen. Für die Prüfung auf Binomialverteilung genügen zwei Bedingungen (genau zwei Ausgänge, konstantes p).
- Ableitung: x-Methode oder h-Methode wählbar, nicht beide gleichzeitig.

## Ablauf
- Neue Tools entstehen zuerst als Claude-Artefakt. Auf GitHub kommen sie erst, wenn Steffen es ausdrücklich sagt, dann immer mit Kachel auf der Startseite (`index.html`, Liste `INHALTE`).
- Änderungen an einem Tool werden auf GitHub **und** im zugehörigen Claude-Artefakt gemacht, sofern es ein Artefakt gibt.
- Kachelbeschreibungen ohne Jahrgangsangabe (kein „Für die E-Phase“).
- Repository-Einstellungen (Umbenennen, GitHub Pages) erledigt Steffen selbst; der Claude-Zugang darf das nicht.
- Commits direkt auf `main` sind üblich; GitHub Pages veröffentlicht nach ein bis zwei Minuten.

## Technik und Datenschutz
- Seiten auf GitHub laden **nichts von fremden Servern**: Schriften, KaTeX, MathJax, three.js, d3 und TopoJSON liegen unter `assets/`. In Artefakten dürfen stattdessen Google Fonts und cdnjs genutzt werden (Artefakte können keine lokalen Dateien laden; Bilder dort als data-URI einbetten).
- Keine Cookies, keine Analyse, keine Besucherzähler. Im Browser werden nur Anzeigeeinstellungen gespeichert (z. B. Schriftgröße, Hell/Dunkel).
- Jedes Tool bindet `<script src="../assets/zur-uebersicht.js" defer></script>` ein (Button „Übersicht“ vor dem Hell/Dunkel-Button). In Artefakten kein solcher Button.
- Impressum: Steffen Thel, c/o Hohe Landesschule Hanau, Alter Rückinger Weg 53, 63452 Hanau. Fußzeile der Seiten: „Verantwortlich: S. Thel“.

## Gestaltung
- Schriften: Fließtext **Source Sans 3**, Überschriften **Source Serif 4**, Zahlen und kleine Beschriftungen **Source Code Pro** (lokal über `assets/fonts/fonts.css`). Keine Schrift mit durchgestrichener Null (Verwechslung mit der Leeren Menge).
- Grundschrift 19 px, Buttons A− und A+, `html{scrollbar-gutter:stable}`.
- Hell/Dunkel: Tools für die Präsentation am Activeboard starten hell; alle anderen folgen der Systemeinstellung. Immer ein Umschaltknopf, die Wahl wird gemerkt; Präsentationsmodus bzw. Vollbild schaltet auf Hell. Das Artefakt „Rotstift Klausurkorrektur“ nicht verändern.
- Handy: nichts verdeckt Graphen oder Text; über Diagrammen muss senkrechtes Wischen die Seite scrollen (`touch-action: pan-y` auf Touchgeräten, kein `overscroll-behavior: contain` auf nicht scrollenden Bereichen); Formeln brechen zeilenweise um (mit `gathered`, nicht `aligned`, weil KaTeX hier als MathML ausgegeben wird); Eingabefelder mit `box-sizing: border-box`.
- Dezimalkomma und Tausenderpunkt. Deutsche Texte ohne Gedankenstriche als Komma-Ersatz.
- Optionale Elemente beim Start ausgeblendet (z. B. σ-Umgebung, kumulierte Verteilung, Tangente), damit die Klasse erst vermuten kann.

## Aufbau neuer Labore
- Kapitel zum Durchklicken mit „Nächster Schritt“ und „Alles zeigen“: kurze Geschichte, Einstiegsbeispiel, Labor, Rechnen, Sicherung mit Quiz.

## Bilder
- Nur gemeinfreie Werke (z. B. Gemälde von Wikimedia Commons; Reprofotos gemeinfreier Gemälde sind nach § 68 UrhG frei). Steffen lädt die Bilder hoch, Claude verkleinert sie (300 bis 480 px Breite) und legt sie unter `bilder/` ab.
- Jedes Bild mit Bildunterschrift (Maler, Jahr, „Gemeinfrei, Wikimedia Commons“) und Alternativtext.
