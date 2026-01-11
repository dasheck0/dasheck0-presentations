<!-- .slide: data-background-image="./assets/ai-background.jpg" data-background-opacity="0.1" -->

# KI in der Software-Entwicklung

Die neue Realität für Entwickler

<div class="bottom-grid">
  <div class="bottom-item">AI</div>
  <div class="bottom-item">Development</div>
  <div class="bottom-item">Agents</div>
</div>

---

## Warum dieses Thema?

KI dominiert aktuell die Software-Branche

<!-- .element: class="fragment" -->

Unsicherheit bei vielen Entwicklern und Studierenden

<!-- .element: class="fragment" -->

---

## Agenda

<div class="agenda-grid">
  <div class="agenda-item">
    <div class="agenda-content">
      <h3>Was ist KI?</h3>
    </div>
  </div>
  <div class="agenda-item">
    <div class="agenda-content">
      <h3>Terminologie</h3>
    </div>
  </div>
  <div class="agenda-item">
    <div class="agenda-content">
      <h3>Praxis Beispiel</h3>
    </div>
  </div>
  <div class="agenda-item">
    <div class="agenda-content">
      <h3>Impact auf die Software Entwicklung</h3>
    </div>
  </div>
  <div class="agenda-item">
    <div class="agenda-content">
      <h3>Die Rolle des Entwicklers in der Zukunft</h3>
    </div>
  </div>
</div>

---

<!-- .slide: data-background-image="./assets/ai-concept-brain.jpg" data-background-opacity="0.1" -->

# Was ist KI?

Grundlagen verstehen

--

## KI ist kein neues Phänomen

**Artificial Intelligence** existiert seit den 1950er Jahren

<!-- .element: class="fragment" -->

**Aber:** Durchbruch in den letzten Jahren durch:

<!-- .element: class="fragment" -->

- Massive Rechenleistung
- Große Datenmengen
- Neue Algorithmen (Deep Learning, Transformer)

<!-- .element: class="fragment" -->

--

## Typen von KI

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">

<div class="fragment" data-fragment-index="1">

### Narrow AI

Spezialisiert auf **eine Aufgabe**

Beispiele:

- Bilderkennung
- Sprachübersetzung
- Schachspielen

**Das haben wir heute**

</div>

<div class="fragment" data-fragment-index="2">

### General AI

Kann **jede Aufgabe** wie ein Mensch

Noch **nicht erreicht**

Gegenstand von Science Fiction

</div>

</div>

---

<!-- .slide: data-background-image="./assets/ai-concept-brain.jpg" data-background-opacity="0.1" -->

# Terminologie

Wichtige Begriffe

--

## Large Language Models (LLMs)

**Was ist das?**

<!-- .element: class="fragment" -->

Transformer Modelle (Neural Networks), trainiert auf riesigen Textmengen

<!-- .element: class="fragment" -->

**Fähigkeiten:**

<!-- .element: class="fragment" -->

- Text generieren auf Basis von Anweisungen (Prompts)
- Code generieren
- Bilder, Audio und Videos erstellen

<!-- .element: class="fragment" -->

**Beispiele:** GPT-4o, Claude Sonnet 4.5, Gemini 2.5 Flash

<!-- .element: class="fragment" -->

Note: LLMs sind der Kern der aktuellen KI-Revolution in der Softwareentwicklung.

--

## AI Agents?

**Was ist das?**

<!-- .element: class="fragment" -->

Autonome Systeme, die **autonom** Aufgaben erledigen

<!-- .element: class="fragment" -->

**Eigenschaften:**

<!-- .element: class="fragment" -->

- Versteht Ziele und handelt danach
- Führt autonom Aktionen aus
- Nutzt Werkzeuge
- Lernt eigenständig

<!-- .element: class="fragment" -->

--

## Agents vs. Chatbots

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">

<div class="fragment" data-fragment-index="1">

### Chatbot

💬 **Reaktiv**

Antwortet auf Anfragen

Braucht klare Anweisungen

Ein Austausch

</div>

<div class="fragment" data-fragment-index="2">

### Agent

🤖 **Proaktiv**

Arbeitet selbstständig

Plant mehrere Schritte

Nutzt Tools

Iteriert bis zum Ziel

</div>

</div>

--

## Agent-Beispiel: Code-Review

**Aufgabe:** "Review meinen Pull Request"

<!-- .element: class="fragment" -->

**Agent arbeitet autonom:**

<!-- .element: class="fragment" -->

1. Liest Code-Änderungen
2. Führt statische Analyse durch
3. Sucht nach Sicherheitslücken
4. Prüft Tests
5. Erstellt strukturiertes Feedback
6. Schlägt Verbesserungen vor

<!-- .element: class="fragment" -->

Note: Dies würde vorher mehrere manuelle Schritte und Tools erfordern.

--

## Prompting

**Was ist das?**

- Instruktion, die an die KI gegeben wird

<!-- .element: class="fragment" -->

**Schlechter Prompt:**

<!-- .element: class="fragment" -->

<div class="fragment" style="font-size: 2rem; font-style: italic;">
Schreib mir eine Funktion
</div>

**Gutes Prompt:**

<!-- .element: class="fragment" -->

<div class="fragment" style="font-size: 2rem; font-style: italic;">
Schreibe eine TypeScript-Funktion, die ein Array von Zahlen nimmt und die Summe zurückgibt. Nutze funktionale Programmierung. Füge TypeScript-Typen und JSDoc-Kommentar hinzu.
</div>

--

## Prompt Engineering Prinzipien

**Kontext geben**

- Rolle, Situation, Ziel

**Spezifisch sein**

- Format, Struktur, Constraints

**Beispiele zeigen**

- Few-shot learning

**Iterativ verfeinern**

- Feedback-Loop, Chain of Thought

--

## Context Windows

**Was ist das?**

<!-- .element: class="fragment" -->

Maximale "Gedächtnisspanne" eines LLM -> Short Term Memory

<!-- .element: class="fragment" -->

<div class="fragment">
Früher: ca. 4.000 Tokens (ca. 3.000 Wörter) <br />
Heute: 200.000+ Tokens
</div>

**Bedeutung:**

<!-- .element: class="fragment" -->

- KI kann jetzt **gesamte Projekte** verstehen
- Längere Sessions mit mehreren Schritten möglich

<!-- .element: class="fragment" -->

Note: Dies verändert die Arbeitsweise fundamental - KI versteht den vollen Kontext.

--

## Model Context Protocol

**Was ist das?**

<!-- .element: class="fragment" -->

- Protocol um LLMs mit externen Daten zu verbinden
- Zugriff auf externe Quellen wie APIs, Dateien, Tools

<!-- .element: class="fragment" -->

- Entwickelt von Anthropic

<!-- .element: class="fragment" -->

**Beispiele**

<!-- .element: class="fragment" -->

- Github MCP Server
- Context7 MCP Server
- Playwright MCP Server

<!-- .element: class="fragment" -->

--

## Der KI Eisberg für Entwickler

<div class="comparison-grid">
  <div class="comparison-column fragment">
  <div class="comparison-box">
    <h3>Chat</h3>
    <p>z.b. ChatGPT</p>
  </div>
  <div class="info">
  - Einfache Anfragen
  </div>
  <div class="info">
- Prompting wichtig
  </div>
  <div class="info">
- Kontext wichtig
  </div>
  </div>
  <div class="comparison-column  fragment">
  <div class="comparison-box">
    <h3>CoPilot Systeme</h3>
    <p>z.b. Github CoPilot</p>
  </div>
  <div class="info">
- Oft integriert in die IDE
  </div>
  <div class="info">
- Kontext wird von CoPilot organisiert
  </div>
  <div class="info">
- Inline Suggestions
  </div>
  <div class="info">
- Guidelines wichtig
  </div>
  </div>
  <div class="comparison-column  fragment">
  <div class="comparison-box">
    <h3>Multi Agenten</h3>
    <p>z.b. opencode</p>
  </div>
  <div class="info">
- Oft integriert ins Terminal
  </div>
  <div class="info">
- Kontext Recompacting
  </div>
  <div class="info">
- Spezialisierte Subagents
  </div>
  <div class="info">
- Integriertes Permission System
  </div>
  </div>
  <div class="comparison-column  fragment">
  <div class="comparison-box">
    <h3>Autonome Agenten</h3>
    <p>z.b. Claude Code</p>
  </div>
  <div class="info">
- Subagents mit dedizierten Context Windows
  </div>
  <div class="info">
- PRDs oder Spec KIT hilfreich
  </div>
  <div class="info">
- Oft deployed auf separaten Servern
  </div>
  </div>
</div>

---

<!-- .slide: data-background-image="./assets/developer.jpg" data-background-opacity="0.1" -->

# Praxisbeispiel

<img src="./assets/qrcode2.png" alt="QR Code">

---

<!-- .slide: data-background-image="./assets/developer.jpg" data-background-opacity="0.1" -->

# Auswirkungen auf die Entwicklung

Was ändert sich konkret?

--

## Was KI bereits kann

✅ Boilerplate-Code generieren

✅ Tests schreiben

✅ Code refactoring

✅ Bugs finden und fixen

✅ Dokumentation erstellen

✅ Code-Reviews

✅ Komplexe Features implementieren

Note: Dies sind keine Zukunftsvisionen - das funktioniert heute.

--

## Was KI (noch) nicht kann

❌ Komplexe Architektur-Entscheidungen

❌ Stakeholder-Kommunikation

❌ Geschäftslogik verstehen ohne Kontext

❌ Kreative Problemlösung bei unklaren Requirements

❌ Langfristige strategische Planung

**Aber:** Die Grenze verschiebt sich **schnell**

<!-- .element: class="fragment" -->

--

## Der veränderte Workflow

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">

<div class="fragment">

### Früher

Idee → Design → Code schreiben → Testen → Review → Deploy

Jeder Schritt manuell

Langsam, aber kontrolliert

</div>

<div class="fragment">

### Mit KI

Idee → KI generiert → Review & Anpassen → Testen (automatisch) → Deploy

**Schneller, aber:**

Neue Skills erforderlich

Qualitätssicherung wichtiger

</div>

</div>

--

## Produktivitätssteigerung

**Studien zeigen:**

<!-- .element: class="fragment" -->

- 40-50% schnellere Entwicklung
- 60% mehr Aufgaben abgeschlossen
- Besonders für Junior-Entwickler

<!-- .element: class="fragment" -->

<small>Quelle: GitHub Copilot Studie 2023, McKinsey Developer Survey 2024</small>

<!-- .element: class="fragment" -->

**Aber:**

<!-- .element: class="fragment" -->

Code-Qualität muss überwacht werden

<!-- .element: class="fragment" -->

Note: Quellen: GitHub Copilot Studie 2023, McKinsey Developer Survey 2024

--

## Neue Risiken

**Sicherheit:**

<!-- .element: class="fragment" -->

- Generierter Code kann Vulnerabilities enthalten

<!-- .element: class="fragment" -->

**Lizenz-Probleme:**

<!-- .element: class="fragment" -->

- Training auf öffentlichem Code (GPL, etc.)

<!-- .element: class="fragment" -->

**Halluzinationen:**

<!-- .element: class="fragment" -->

- KI erfindet manchmal APIs/Funktionen

<!-- .element: class="fragment" -->

**Over-Reliance:**

<!-- .element: class="fragment" -->

- Verlernen von Grundlagen

<!-- .element: class="fragment" -->

--

## Best Practices

**✅ DO:**

<!-- .element: class="fragment" -->

- KI als Co-Pilot, nicht als Autopilot
- Generierten Code immer reviewen und verstehen
- Tests schreiben (auch KI-generiert)
- Kontext gut beschreiben

<!-- .element: class="fragment" -->

**❌ DON'T:**

<!-- .element: class="fragment" -->

- Blind Copy-Paste
- Credentials in Prompts
- Vertrauliche Daten teilen
- Entwickler Identität aufgeben

<!-- .element: class="fragment" -->

---

<!-- .slide: data-background-image="./assets/developer.jpg" data-background-opacity="0.1" -->

# Die Zukunft der Entwickler

Sollte ich noch eine Ausbildung machen?

--

## Die zentrale Frage

> Wird KI Software-Entwickler ersetzen?

<!-- .element: class="fragment" -->

**Kurze Antwort:** Nein (Opinionated)

<!-- .element: class="fragment" -->

**Lange Antwort:** Die Rolle verändert sich fundamental

<!-- .element: class="fragment" -->

--

## Was bleibt wichtig?

**Problemlösung & kritisches Denken**

<!-- .element: class="fragment" -->

KI gibt Lösungen → Du entscheidest, ob sie gut sind

<!-- .element: class="fragment" -->

**Architektur & Design**

<!-- .element: class="fragment" -->

Systemisches Denken bleibt menschlich

<!-- .element: class="fragment" -->

**Domänenwissen**

<!-- .element: class="fragment" -->

Business-Kontext verstehen

<!-- .element: class="fragment" -->

**Kommunikation**

<!-- .element: class="fragment" -->

Mit Menschen, Stakeholdern, Teams

<!-- .element: class="fragment" -->

--

## Die neue Entwickler-Rolle

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">

<div class="fragment">

### Traditionell

**Code Writer**

Syntaxkenntnisse

Frameworks auswendig

Debugging

Implementation

</div>

<div class="fragment">

### Mit KI

**Solution Architect**

Prompt Engineering

Systemdenken

Code Review

Orchestrierung

Quality Assurance

</div>

</div>

<!-- .element: class="fragment" -->

--

## Wird es weniger Jobs geben?

**Realistisches Szenario:**

<!-- .element: class="fragment" -->

Jobs ändern sich, nicht verschwinden

<!-- .element: class="fragment" -->

**Warum:**

<!-- .element: class="fragment" -->

- Mehr Features = mehr Nachfrage
- Neue Anwendungsfälle möglich
- KI selbst muss entwickelt werden
- Qualitätssicherung wird wichtiger

<!-- .element: class="fragment" -->

**Aber:** Anforderungen steigen

<!-- .element: class="fragment" -->

--

## Sollte ich noch Entwickler werden?

# JA!

<!-- .element: class="fragment" -->

**Aber mit anderen Schwerpunkten:**

<!-- .element: class="fragment" -->

- Grundlagen **intensiver** als je zuvor
- Verstehen, **warum** etwas funktioniert
- Architektur und Design wichtiger
- Kommunikation und Kontext essentiell
- KI als **Werkzeug** beherrschen

<!-- .element: class="fragment" -->

Note: Wer nur Copy-Paste macht, wird ersetzbar. Wer versteht, orchestriert und bewertet, wird wertvoller.

--

## Skills für die KI-Ära

**Must-have:**

1. **Solide Grundlagen** (Algorithmen, Datenstrukturen)
2. **System Design** (Architektur-Denken)
3. **Prompt Engineering** (Mit KI kommunizieren)
4. **Code Review** (Qualität beurteilen)
5. **Testing** (Absicherung)
6. **Domänenwissen** (Kontext verstehen)

<!-- .element: class="fragment" -->

--

## Wie bereite ich mich vor?

**Jetzt:**

<!-- .element: class="fragment" -->

- Nutze KI-Tools regelmäßig
- Lerne Grundlagen **tief**
- Verstehe, was KI gut / schlecht kann
- Experimentiere mit Agents
- Bleib neugierig

<!-- .element: class="fragment" -->

**Langfristig:**

<!-- .element: class="fragment" -->

- Spezialisiere dich (AI, Security, DevOps)
- Entwickle Soft Skills
- Verstehe Business-Seite

<!-- .element: class="fragment" -->

--

## Der KI-Entwickler 2026+

**Ist gleichzeitig:**

<!-- .element: class="fragment" -->

- Architekt (Design-Entscheidungen)
- Orchestrator (KI-Tools koordinieren)
- Qualitätswächter (Review & Testing)
- Problemlöser (Kreative Lösungen)
- Kommunikator (Menschen & Maschinen)

<!-- .element: class="fragment" -->

**Nicht mehr:** Reiner Code-Schreiber

<!-- .element: class="fragment" -->

---

## Open questions

1. Wie blickt ihr in die Zukunft in Bezug auf eure Rolle / Branche?
2. Was sind eure Erfahrung mit KI-Tools bisher?
3. Wo seht ihr Chancen in dem Wandel? Und wie bereitet ihr euch heute schon darauf vor?
