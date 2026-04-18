<!-- .slide: data-background-image="./assets/ai-background.jpg" data-background-opacity="0.1" -->

# AI in Software Development

The New Reality for Developers

<div class="bottom-grid">
  <div class="bottom-item">AI</div>
  <div class="bottom-item">Development</div>
  <div class="bottom-item">Agents</div>
</div>

---

## Why This Topic?

AI currently dominates the software industry

<!-- .element: class="fragment" -->

Uncertainty among many developers and students

<!-- .element: class="fragment" -->

<div class="fragment">
<img src="./assets/qrcodemiro.png" >
<div class="small">

https://miro.com/app/board/uXjVGSZiNoQ=/?share_link_id=954402751059

</div>
</div>

---

## Agenda

<div class="agenda-grid">
  <div class="agenda-item">
    <div class="agenda-content">
      <h3>What is AI?</h3>
    </div>
  </div>
  <div class="agenda-item">
    <div class="agenda-content">
      <h3>Terminology</h3>
    </div>
  </div>
  <div class="agenda-item">
    <div class="agenda-content">
      <h3>Practical Example</h3>
    </div>
  </div>
  <div class="agenda-item">
    <div class="agenda-content">
      <h3>Impact on Software Development</h3>
    </div>
  </div>
  <div class="agenda-item">
    <div class="agenda-content">
      <h3>The Developer's Role in the Future</h3>
    </div>
  </div>
</div>

---

<!-- .slide: data-background-image="./assets/ai-concept-brain.jpg" data-background-opacity="0.1" -->

# What is AI?

Understanding the Basics

--

## AI is Not a New Phenomenon

**Artificial Intelligence** has existed since the 1950s

<!-- .element: class="fragment" -->

**But:** Breakthrough in recent years through:

<!-- .element: class="fragment" -->

- Massive computing power
- Large amounts of data
- New algorithms (Deep Learning, Transformer)

<!-- .element: class="fragment" -->

--

## Types of AI

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">

<div class="fragment" data-fragment-index="1">

### Narrow AI

Specialized in **one task**

Examples:

- Image recognition
- Language translation
- Playing chess

**This is what we have today**

</div>

<div class="fragment" data-fragment-index="2">

### General AI

Can do **any task** like a human

Not yet **achieved**

Subject of science fiction

</div>

</div>

---

<!-- .slide: data-background-image="./assets/ai-concept-brain.jpg" data-background-opacity="0.1" -->

# Terminology

Important Concepts

--

## Large Language Models (LLMs)

**What is that?**

<!-- .element: class="fragment" -->

Transformer models (Neural Networks), trained on huge amounts of text

<!-- .element: class="fragment" -->

**Capabilities:**

<!-- .element: class="fragment" -->

- Generate text based on instructions (Prompts)
- Generate code
- Create images, audio and videos

<!-- .element: class="fragment" -->

**Examples:** GPT-4o, Claude Sonnet 4.5, Gemini 2.5 Flash

<!-- .element: class="fragment" -->

Note: LLMs are the core of the current AI revolution in software development.

--

## AI Agents?

**What is that?**

<!-- .element: class="fragment" -->

Self contained systems that complete tasks **autonomously**

<!-- .element: class="fragment" -->

**Characteristics:**

<!-- .element: class="fragment" -->

- Understands goals and acts accordingly
- Executes actions autonomously
- Uses tools
- Learns independently

<!-- .element: class="fragment" -->

--

## Agents vs. Chatbots

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">

<div class="fragment" data-fragment-index="1">

### Chatbot

💬 **Reactive**

Responds to requests

Needs clear instructions

One exchange

</div>

<div class="fragment" data-fragment-index="2">

### Agent

🤖 **Proactive**

Works independently

Plans multiple steps

Uses tools

Iterates until goal is reached

</div>

</div>

--

## Agent Example: Code Review

**Task:** "Review my Pull Request"

<!-- .element: class="fragment" -->

**Agent works autonomously:**

<!-- .element: class="fragment" -->

1. Reads code changes
2. Performs static analysis
3. Searches for security vulnerabilities
4. Checks tests
5. Creates structured feedback
6. Suggests improvements

<!-- .element: class="fragment" -->

Note: This would previously require multiple manual steps and tools.

--

## Prompting

**What is that?**

- Instruction given to the AI

<!-- .element: class="fragment" -->

**Bad Prompt:**

<!-- .element: class="fragment" -->

<div class="fragment" style="font-size: 2rem; font-style: italic;">
Write me a function
</div>

**Good Prompt:**

<!-- .element: class="fragment" -->

<div class="fragment" style="font-size: 2rem; font-style: italic;">
Write a TypeScript function that takes an array of numbers and returns the sum. Use functional programming. Add TypeScript types and JSDoc comment.
</div>

--

## Prompt Engineering Principles

**Provide Context**

- Role, situation, goal

**Be Specific**

- Format, structure, constraints

**Show Examples**

- Few-shot learning

**Refine Iteratively**

- Feedback loop, Chain of Thought

--

## Context Windows

**What is that?**

<!-- .element: class="fragment" -->

Maximum "memory span" of an LLM -> Short Term Memory

<!-- .element: class="fragment" -->

<div class="fragment">
Previously: approx. 4,000 tokens (approx. 3,000 words) <br />
Today: 200,000+ tokens
</div>

**Implications:**

<!-- .element: class="fragment" -->

- AI can now understand **entire projects**
- Longer sessions with multiple steps possible

<!-- .element: class="fragment" -->

Note: This fundamentally changes the way of working - AI understands the full context.

--

## Model Context Protocol

**What is that?**

<!-- .element: class="fragment" -->

- Protocol to connect LLMs with external data
- Access to external sources like APIs, files, tools

<!-- .element: class="fragment" -->

- Developed by Anthropic

<!-- .element: class="fragment" -->

**Examples**

<!-- .element: class="fragment" -->

- Github MCP Server
- Context7 MCP Server
- Playwright MCP Server

<!-- .element: class="fragment" -->

--

## Skills

Specialized instruction sets that an AI agent **automatically recognizes and executes** based on context

<!-- .element: class="fragment" -->

They encapsulate complex, multi-step processes as reusable workflows — comparable to functions in code

<!-- .element: class="fragment" -->

This makes them particularly suited for **orchestrating standardized workflows**

<!-- .element: class="fragment" -->

**Examples:**

<!-- .element: class="fragment" -->

- `story-to-impl-plan` – Create implementation plan from user story
- `epic-to-stories` – Break epic into user stories
- `ui-ux-research` – Research UI/UX best practices
- `skill-creator` – Create and optimize new skills

<!-- .element: class="fragment" -->

--

## The AI Iceberg for Developers

<div class="comparison-grid">
  <div class="comparison-column fragment">
  <div class="comparison-box">
    <h3>Chat</h3>
    <p>e.g. ChatGPT</p>
  </div>
  <div class="info">
  - Simple queries
  </div>
  <div class="info">
- Prompting important
  </div>
  <div class="info">
- Context important
  </div>
  </div>
  <div class="comparison-column  fragment">
  <div class="comparison-box">
    <h3>CoPilot Systems</h3>
    <p>e.g. Github CoPilot</p>
  </div>
  <div class="info">
- Often integrated into the IDE
  </div>
  <div class="info">
- Context is organized by CoPilot
  </div>
  <div class="info">
- Inline Suggestions
  </div>
  <div class="info">
- Guidelines important
  </div>
  </div>
  <div class="comparison-column  fragment">
  <div class="comparison-box">
    <h3>Multi Agents</h3>
    <p>e.g. opencode</p>
  </div>
  <div class="info">
- Often integrated into the terminal
  </div>
  <div class="info">
- Context Recompacting
  </div>
  <div class="info">
- Specialized Subagents
  </div>
  <div class="info">
- Integrated Permission System
  </div>
  </div>
  <div class="comparison-column  fragment">
  <div class="comparison-box">
    <h3>Autonomous Agents</h3>
    <p>e.g. Claude Code</p>
  </div>
  <div class="info">
- Subagents with dedicated Context Windows
  </div>
  <div class="info">
- PRDs or Spec KIT helpful
  </div>
  <div class="info">
- Often deployed on separate servers
  </div>
  </div>
</div>

---

<!-- .slide: data-background-image="./assets/developer.jpg" data-background-opacity="0.1" -->

# Practical Example

<img src="./assets/qrcode2.png" alt="QR Code">

---

<!-- .slide: data-background-image="./assets/developer.jpg" data-background-opacity="0.1" -->

# Impact on Development

What changes concretely?

--

## What AI Can Already Do

✅ Generate boilerplate code

✅ Write tests

✅ Code refactoring

✅ Find and fix bugs

✅ Create documentation

✅ Code reviews

✅ Implement complex features

Note: These are not future visions - this works today.

--

## What AI Can't Do (Yet)

❌ Complex architecture decisions

❌ Stakeholder communication

❌ Understand business logic without context

❌ Creative problem solving with unclear requirements

❌ Long-term strategic planning

**But:** The boundary is shifting **quickly**

<!-- .element: class="fragment" -->

--

## The Changed Workflow

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">

<div class="fragment">

### Previously

Idea → Design → Write code → Test → Review → Deploy

Each step manual

Slow, but controlled

</div>

<div class="fragment">

### With AI

Idea → AI generates → Review & Adjust → Test (automated) → Deploy

**Faster, but:**

New skills required

Quality assurance more important

</div>

</div>

--

## Productivity Increase

**Studies show:**

<!-- .element: class="fragment" -->

- 40-50% faster development
- 60% more tasks completed
- Especially for junior developers

<!-- .element: class="fragment" -->

<small>Source: GitHub Copilot Study 2023, McKinsey Developer Survey 2024</small>

<!-- .element: class="fragment" -->

**But:**

<!-- .element: class="fragment" -->

Code quality must be monitored

<!-- .element: class="fragment" -->

Note: Sources: GitHub Copilot Study 2023, McKinsey Developer Survey 2024

--

## New Risks

**Security:**

<!-- .element: class="fragment" -->

- Generated code may contain vulnerabilities

<!-- .element: class="fragment" -->

**License Issues:**

<!-- .element: class="fragment" -->

- Training on public code (GPL, etc.)

<!-- .element: class="fragment" -->

**Hallucinations:**

<!-- .element: class="fragment" -->

- AI sometimes invents APIs/functions

<!-- .element: class="fragment" -->

**Over-Reliance:**

<!-- .element: class="fragment" -->

- Unlearning fundamentals

<!-- .element: class="fragment" -->

--

## Best Practices

**✅ DO:**

<!-- .element: class="fragment" -->

- AI as co-pilot, not as autopilot
- Always review and understand generated code
- Write tests (also AI-generated)
- Describe context well

<!-- .element: class="fragment" -->

**❌ DON'T:**

<!-- .element: class="fragment" -->

- Blind copy-paste
- Credentials in prompts
- Share confidential data
- Give up developer identity

<!-- .element: class="fragment" -->

---

<!-- .slide: data-background-image="./assets/developer.jpg" data-background-opacity="0.1" -->

# The Future of Developers

Should I still pursue a degree?

--

## The Central Question

> Will AI replace software developers?

<!-- .element: class="fragment" -->

**Short answer:** No (Opinionated)

<!-- .element: class="fragment" -->

**Long answer:** The role is fundamentally changing

<!-- .element: class="fragment" -->

--

## What Remains Important?

**Problem Solving & Critical Thinking**

<!-- .element: class="fragment" -->

AI provides solutions → You decide if they are good

<!-- .element: class="fragment" -->

**Architecture & Design**

<!-- .element: class="fragment" -->

Systems thinking remains human

<!-- .element: class="fragment" -->

**Domain Knowledge**

<!-- .element: class="fragment" -->

Understanding business context

<!-- .element: class="fragment" -->

**Communication**

<!-- .element: class="fragment" -->

With people, stakeholders, teams

<!-- .element: class="fragment" -->

--

## The New Developer Role

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">

<div class="fragment">

### Traditional

**Code Writer**

Syntax knowledge

Frameworks by heart

Debugging

Implementation

</div>

<div class="fragment">

### With AI

**Solution Architect**

Prompt Engineering

Systems thinking

Code Review

Orchestration

Quality Assurance

</div>

</div>

<!-- .element: class="fragment" -->

--

## Will There Be Fewer Jobs?

**Realistic Scenario:**

<!-- .element: class="fragment" -->

Jobs change, not disappear

<!-- .element: class="fragment" -->

**Why:**

<!-- .element: class="fragment" -->

- More features = more demand
- New use cases possible
- AI itself must be developed
- Quality assurance becomes more important

<!-- .element: class="fragment" -->

**But:** Requirements increase

<!-- .element: class="fragment" -->

--

## Should I Still Become a Developer?

# YES!

<!-- .element: class="fragment" -->

**But with different focuses:**

<!-- .element: class="fragment" -->

- Fundamentals **more intensive** than ever
- Understand **why** something works
- Architecture and design more important
- Communication and context essential
- Master AI as a **tool**

<!-- .element: class="fragment" -->

Note: Those who only copy-paste will be replaceable. Those who understand, orchestrate and evaluate will become more valuable.

--

## Skills for the AI Era

**Must-have:**

1. **Solid fundamentals** (Algorithms, data structures)
2. **System Design** (Architectural thinking)
3. **Prompt Engineering** (Communicating with AI)
4. **Code Review** (Assessing quality)
5. **Testing** (Assurance)
6. **Domain Knowledge** (Understanding context)

<!-- .element: class="fragment" -->

--

## How Do I Prepare?

**Now:**

<!-- .element: class="fragment" -->

- Use AI tools regularly
- Learn fundamentals **deeply**
- Understand what AI does well / poorly
- Experiment with Agents
- Stay curious

<!-- .element: class="fragment" -->

**Long-term:**

<!-- .element: class="fragment" -->

- Specialize (AI, Security, DevOps)
- Develop soft skills
- Understand business side

<!-- .element: class="fragment" -->

--

## The AI Developer 2026+

**Is simultaneously:**

<!-- .element: class="fragment" -->

- Architect (Design decisions)
- Orchestrator (Coordinating AI tools)
- Quality Guardian (Review & Testing)
- Problem Solver (Creative solutions)
- Communicator (People & Machines)

<!-- .element: class="fragment" -->

**No longer:** Pure code writer

<!-- .element: class="fragment" -->

---

## Open questions

1. How do you look into the future regarding your role / industry?
2. What are your experiences with AI tools so far?
3. Where do you see opportunities in this transformation? And how are you preparing for it today?
