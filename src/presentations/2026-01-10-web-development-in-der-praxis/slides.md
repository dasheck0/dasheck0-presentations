<!-- .slide: data-background-image="./assets/coding-background.jpg" data-background-opacity="0.1" -->

# Web Development in der Praxis

Theorie vs. Realität

---

## Agenda

<div class="agenda-grid">
  <div class="agenda-item">
    <div class="agenda-content">
      <h3>Tech Stack</h3>
    </div>
  </div>
  <div class="agenda-item">
    <div class="agenda-content">
      <h3>Decision Matrix</h3>
    </div>
  </div>
  <div class="agenda-item">
    <div class="agenda-content">
      <h3>Tech Radar</h3>
    </div>
  </div>
  <div class="agenda-item">
    <div class="agenda-content">
      <h3>Developer Roadmaps</h3>
    </div>
  </div>
</div>

---

<!-- .slide: data-background-image="./assets/tech-stack-bg.jpg" data-background-opacity="0.1" -->

# Tech Stack

--

## Was ist ein Tech Stack?

Liste aller Technologien für Entwicklung und Betrieb

<!-- .element: class="fragment" -->

<div class="chip-grid">
  <span class="chip">Daten / Persistierung</span>
  <span class="chip">Backend</span>
  <span class="chip">Frontend</span>
  <span class="chip">Runtime Environment</span>
</div>

<!-- .element: class="fragment chip-grid" -->

<div class="image-grid">
  <img class="image-item" src="./assets/react.png" alt="React" />
  <img class="image-item" src="./assets/node.png" alt="Node.js" /
  <img class="image-item" src="./assets/mysql.jpg" alt="MySQL" />
  <img class="image-item" src="./assets/mysql.jpg" alt="MySQL" />
  <img class="image-item" src="./assets/vue.png" alt="Vue.js" />
  <img class="image-item" src="./assets/nest.svg" alt="NestJS" />
</div>

<!-- .element: class="fragment image-grid" -->

--

## Reality Check

Vielseitiger Tech Stack im Startup

- Learning on the job (continuously)
- Agiles arbeiten
- Migration vom Programmierer zum Produktentwickler

<div class="note">
Der moderne Tech Stack ist kein statisches Konzept mehr. Entwickler müssen kontinuierlich lernen und sich anpassen.
</div>

<!-- .element: class="fragment note" -->

--

## Tech Stack Dimensionen

Tech Stack umfasst allerdings mehr als nur die direkten Technologien

- IT Infrastructure
- Collaboration Framework
- CI/CD Pipeline
- Dokumentation
- Monitoring & Observability

<!-- .element: class="fragment" -->

--

## Beispiel Stack

**Datenbank:** MongoDB

**Backend:** Express

**Frontend:** React

**Runtime:** Node

Wird auch MERN Stack genannt

<!-- .element: class="fragment note" -->

--

## Die zentralen Fragen

Wie komme ich zu einem Tech Stack?

<!-- .element: class="fragment" -->

Wie verwalte ich einen Tech Stack in einer Organisation?

<!-- .element: class="fragment" -->

---

<!-- .slide: data-background-image="./assets/decision-matrix-bg.jpg" data-background-opacity="0.1" -->

# Decision Matrix

Systematische Entscheidungsfindung

--

## Warum eine Decision Matrix?

Wichtige technische Entscheidungen sollten:

- **Explizit** getroffen werden
- **Systematisch** ablaufen
- **Transparent** dokumentiert sein

<!-- .element: class="fragment" -->

--

## Der 7-Schritte Prozess

1. Situation vergegenwärtigen
2. Zielzustand definieren
3. Kontext analysieren
4. Kriterien definieren
5. Alternativen finden
6. Alternativen bewerten
7. Risiken mitigieren

--

## 1. Situation vergegenwärtigen

**Ziel:** Gemeinsames Problemverständnis

- Problem sehr spezifisch beschreiben
- Warum ist eine Entscheidung nötig?
- Was passiert bei **keiner Entscheidung**?

<!-- .element: class="fragment" -->

Note: Dieser Schritt verhindert, dass Teams unwissentlich unterschiedliche Probleme lösen.

--

## 2. Zielzustand definieren

**Technik:** Von → Nach Formulierung

**Beispiel:**

Von: Keine klare Tech-Strategie, blockiert Fortschritt

Nach: Definierter Tech Stack mit Plan für weitere Entscheidungen

<!-- .element: class="fragment" -->

--

## 3. Kontext analysieren

Alle **Constraints** und Einflussfaktoren verstehen:

- Technologische Einschränkungen
- Organisatorische Rahmenbedingungen
- Rechtliche/regulatorische Anforderungen
- Zeitliche Constraints
- Markt und Wettbewerb
- Stakeholder

<!-- .element: class="fragment" -->

Note: Kontext definiert was möglich ist, nicht was wünschenswert ist.

--

## 4. Kriterien definieren

**Gute Kriterien sind:**

- <span class="highlight-first">M</span>essbar (idealerweise objektiv)
- <span class="highlight-first">U</span>mfassen
- <span class="highlight-first">R</span>elevant
- <span class="highlight-first">K</span>lar
- <span class="highlight-first">S</span>pezifisch

<!-- .element: class="fragment" -->

--

## Kriterien Priorisierung

**Best Practice:** 8-10 Kriterien

**Priorisierung:**

<div class="chip-grid">
  <span class="chip">Must have</span>
  <span class="chip">Should have</span>
  <span class="chip">Could have</span>
</div>

<!-- .element: class="fragment" -->

❌ Vage Kriterien: "Technologie soll gut sein"

<!-- .element: class="fragment" -->

--

## 5. Alternativen finden

**Regeln:**

- Minimum 3, Maximum 5 Alternativen
- Noch nicht bewerten (außer Machbarkeit)
- Externe Perspektiven einbeziehen
- Auch nicht-offensichtliche Optionen

<!-- .element: class="fragment" -->

Note: Alternativen können multiple Dimensionen kombinieren: Sprache + Framework + Hosting.

--

## 6. Alternativen bewerten

**Zwei-Schritt Evaluation:**

1. **Fakten sammeln** (objektive Beschreibung)
2. **Interpretation** im gegebenen Kontext

<!-- .element: class="fragment" -->

--

## Bewertungssystem

**Ampel-Modell:**

🟢 Grün = erfüllt Kriterium vollständig

🟡 Gelb = erfüllt Kriterium teilweise

🔴 Rot = erfüllt Kriterium größtenteils nicht

**Optional:** Scoring mit Gewichtung

<!-- .element: class="fragment" -->

--

## Beispiel: Alternativen bewerten

<table class="decision-matrix">
  <thead>
    <tr>
      <th>Kriterium</th>
      <th>Priorität</th>
      <th>NestJS + VueJS + AWS</th>
      <th>Spring Boot + JSP + Azure</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Das umsetzende Team hat genügend Erfahrung mit der Technologie</td>
      <td>Should Have</td>
      <td>Das Team hat in den letzten 3 Jahren 4 Projekte mit dem Tech Stack in Produktion gebraucht</td>
      <td>Nur 2 von 5 Entwickeln haben bereits Erfahrung mit Sprint Boot. Azure ist allen bekannt.</td>
    </tr>
    <tr>
      <td>Die Projektanforderungen können umgesetzt werden</td>
      <td>Must Have</td>
      <td>Umsetzbar</td>
      <td>Umsetzbar</td>
    </tr>
    <tr>
      <td>Die Auswahl der Technologie darf in keinem Widerspruch zu Vorgaben stehen</td>
      <td>Must Have</td>
      <td>Nicht Java Technologien müssen als begründete Ausnahme von einem Architekturboard genehmigt werden</td>
      <td>Widerspricht keinen Vorgaben.</td>
    </tr>
  </tbody>
</table>

--

## 7. Risiken mitigieren

Jede Entscheidung hat Nebeneffekte

**Typische Fragen:**

- Welche neuen Risiken entstehen?
- Was wird schwieriger oder unmöglich?
- Wie können Risiken reduziert werden?

<!-- .element: class="fragment" -->

--

## Template

Template mit Erklärung, Beispiel und Vorlage
https://miro.com/app/board/uXjVLe4L0co=/

<img src="./assets/qrcode.png">

--

## Wann einsetzen?

- High-Impact Entscheidungen
- Unklare oder kontroverse Entscheidungen
- Situationen mit starker Bias
- Entscheidungen mit Kommunikationspflicht

--

## Vorteile der Decision Matrix

- Reduziert kognitive und persönliche Bias
- Verbessert Entscheidungsqualität im Durchschnitt
- Schafft Transparenz und Nachvollziehbarkeit
- Fördert Team-Partizipation
- Produziert dauerhafte Dokumentation

---

<!-- .slide: data-background-image="./assets/tech-radar-bg.jpg" data-background-opacity="0.1" -->

# Tech Radar

Technologie-Landkarte der Organisation

--

## Was ist ein Tech Radar?

Visualisiert und steuert die **Technologie-Landschaft**

- Dokumentationstool
- Strategisches Steuerungsinstrument
- Lebendiges Artefakt

<!-- .element: class="fragment" -->

--

## Technologie-Status

**Adopt** – Produktionserprobt, voll empfohlen

**Trial** – Erfolgreich in Use Cases, leicht höheres Risiko

**Assess** – Vielversprechend, noch nicht validiert

**Hold** – Nicht für neue Projekte empfohlen

<!-- .element: class="fragment" -->

--

## Struktur

**Segmente:**

- Frameworks
- Sprachen
- DevOps
- SaaS

**Essentiell:** Such- und Filterfunktionen

<!-- .element: class="fragment" -->

--

## Organisatorischer Wert

Ein Tech Radar:

- Schafft Klarheit und Alignment
- Hilft Entwicklern bei Orientierung
- Unterstützt Recruiting und Onboarding
- Leitet Sales bei Kundenakquise
- Dient als strategischer Zielzustand
- Ermöglicht geplante Migrationen

<!-- .element: class="fragment" -->

---

<!-- .slide: data-background-image="./assets/roadmap-bg.png" data-background-opacity="0.1" -->

# Developer Roadmaps

Karriere bewusst gestalten

--

## Kernbotschaft

Karrierewachstum und Skill-Entwicklung sind **planbar**

Ein Roadmap ist eine **Strategie**, keine Checkliste

<!-- .element: class="fragment" -->

--

## Wichtige Erkenntnisse

- Es gibt mehr als Web Development
- Bewusst Bereiche wählen zum Erkunden oder Ignorieren
- Lebenslanges Lernen ist eine Haltung, keine Phase
- Awareness für Disruption ist kritisch

<!-- .element: class="fragment" -->

--

## Lernstrategie

**Entwickler sollten:**

- Langfristiges Ziel definieren
- Skill-Aufbau entsprechend planen
- Regelmäßig Richtung überprüfen
- Spaß daran haben

<!-- .element: class="fragment" -->

--

## Nützliche Ressourcen

- Udemy: https://udemy.com
- Coursera: https://coursera.org
- Awesome Github Lists https://github.com/topics/awesome
- roadmap.sh: https://roadmap.sh
- TLDR Newsletter: https://tldr.tech
