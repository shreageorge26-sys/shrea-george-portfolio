# Portfolio — Working Notes

Running notes from Shrea on each project. Do not turn into case studies yet — wait until all projects are collected, then build a single concise template and apply it.

---

## Project 1 — FYNDNA (current deployment)

**Employer:** Lollypop Design (agency)
**Role:** Consultant — handpicked from Lollipop and deployed at FYNDNA to solve problems on-demand

**What it is:** Product work at FYNDNA. Designs sit inside an established design library. Shrea is knee-deep across the product, which splits into two halves:
- **Customer-facing projects** — the screens end users see
- **Maintenance projects** — the backend/internal screens that power each customer-facing screen (every customer screen has a corresponding maintenance screen)

**Key flow owned:** CIC — fraud/risk module that helps spot fraudulent documents and identify risks tied to a given document.
- _CIC acronym: TBD_
- _User group: TBD — module has very high user attrition_

**Constraints / context:**
- Multiple stakeholder teams, each with different (sometimes contradicting) needs
- Had to run designs by each team and reconcile their requirements
- Users churn fast on this module, so clarity and findability matter more than usual

**What Shrea did:**
- Owned a complex flow end-to-end inside the design library
- Brought clarity so users can complete their task and find what they need quickly
- Adapted to complex problem statements
- Navigated cross-team contradictions using UX best practices + people skills

**What she learned / take-aways:**
- Adapting to complex, ambiguous problem statements
- Working with multiple teams that have competing needs in the same project
- Resolving stakeholder contradictions through UX rationale and communication
- Used Figma MCP to accelerate iteration and maintain design consistency across screens

**Outcome / metrics:** _TBD_

---

## Project 2 — TerraPay (Phase 1)

**Client:** TerraPay — fintech platform specializing in international payments
**Project type:** Beta testing platform, split into two phases (backend = Phase 1, frontend = Phase 2)
**Phase covered here:** Phase 1 — backend
**Spelling check:** user wrote both "TerraPay" and "Terapay" — confirm correct spelling

**What it is:** A beta testing platform that lets TerraPay employees run sample international payments through the system to validate behavior across banks and edge cases.

**What Shrea built (backend / Phase 1):**
- Forms
- Rules
- Projects
- Testing criteria for sample international payments
- Constraints handled: date, name, time, etc.
- Test outcomes covered: payment goes through, payment gets stuck, and other failure modes tied to international payments

**Users:** Internal TerraPay employees (not end customers)

**Constraints / context:**
- Had to interpret client requirements and translate them into testable flows
- Had to identify who the real users were (internal employees) and design accordingly
- Visual consistency required — existing design system was owned by a completely different team, so Shrea had to align her work to a system she didn't author

**Challenges:**
- Understanding the requirements from the client
- Understanding the users (TerraPay employees)
- Keeping designs consistent with an existing design system built by another team

**What Shrea learned / take-aways:** _TBD_

**Outcome / metrics:** _TBD_

---

## Project 3 — TerraPay (Phase 2)

**Client:** TerraPay (continued from Phase 1)
**Phase covered here:** Phase 2 — frontend / customer-facing side of the beta testing platform
**Scope:** Completely different from Phase 1 — research-led design work for the user-facing experience

**What Shrea did:**
- Conducted research with real beta-testers based in South America and Africa
  - These users moonlight on platforms like betatesting.com and competitors as a side income, so they're experienced beta-testers
- Built the research plan
- Wrote the interview questionnaire
- Ran mock interviews to pressure-test the questionnaire against project goals before going live
- Ran the actual user interviews
- Did research analysis — surfaced patterns across user responses
- Translated patterns into design decisions that shaped the final screens
- Delivered responsive designs

**Challenges:**
- Putting together the research plan from scratch
- Cross-cultural research: harder to empathize with users from a country you don't share — had to invest extra effort upfront to make participants comfortable before useful answers came out
- Most users turned out to be genuinely intrigued by the project and wanted to be involved, which helped

**Outcome:**
- Project shipped successfully after a 6-month grind
- Client (TerraPay) was very happy with the work

**What Shrea learned / take-aways:** _TBD — but implicit: cross-cultural research, building a research program end-to-end, going from raw interviews to design decisions_

---

## TerraPay — Shaped Case Study Draft (Walkabout format, NDA-safe)

> Save for when building the TerraPay case study page. Use this as the narrative framework.

**Title:** Building and validating international payment experiences across markets
**Subtitle:** Designed a two-phase beta testing platform for global payments — combining backend tooling (Phase 1) and research-led frontend validation (Phase 2).
**Role:** UX Designer · **Duration:** 6 months · **Scope:** 0→1 platform design, research, validation · **NDA:** Yes — details abstracted

### Challenge 1 — How do you test something that behaves differently everywhere?
Tension: Cross-border payments aren't one flow — they change by country, currency, and regulation. A single rigid testing flow wouldn't scale; internal teams needed flexibility.
Approach: Designed a modular testing system (framework, not flow). Reusable components. Dynamic configuration per corridor.
Outcome: Faster testing across multiple markets. Reduced dependency on redesigning flows per region.
Learning: Moved from designing flows to designing systems that generate flows.

### Challenge 2 — Internal tooling vs real user experience
Tension: Phase 1 = backend tooling for internal teams. Phase 2 = validating real user behavior across markets. Very different design problems on the same platform.
Approach: Phase 1 — streamlined backend workflows for test configuration/monitoring. Phase 2 — simplified research-led frontend for beta testers. Both layers share the same underlying logic.
Outcome: Smooth internal-to-external handoff. Reduced friction between teams and users.
Learning: Learned to design across layers of a system, not just the user-facing surface.

### Challenge 3 — Designing for cultural and behavioral differences
Tension: Users in South America and Africa interacted with payments differently — expectations, trust signals, usage patterns. Assumptions from one market didn't translate.
Approach: Cross-cultural user research with beta testers. Identified differences in trust signals, payment habits, and error tolerance. Adapted flows to reduce ambiguity.
Outcome: More resilient, globally adaptable experience. Reduced friction during beta testing.
Learning: Stopped assuming good UX is universal. Started designing for contextual behavior.

### Visual strategy (NDA-safe)
- System architecture diagrams (how testing flows worked)
- Modular flow breakdowns (how experiences adapted per region)
- Backend to frontend interaction maps
- Abstracted wireframes (no branding, no sensitive data)

### Impact
- Platform shipped after 6 months
- Enabled structured beta testing across international markets
- Improved coordination between internal teams and real users
- Informed product decisions before full-scale rollout

---

## Project 4 — ICICI Bank

**Client:** ICICI Bank
**Project type:** Research-centric — no design deliverable, output was a research handbook
**Scope:** Primary research into UPI behavior of ICICI Bank users

**Research setup:**
- 30 users across Tier 1 cities in India: Mumbai, Delhi, Chennai, Indore
- ICICI users only (not general population)
- Questionnaire + prototyped the current ICICI app UPI journey for sessions

**What Shrea did:**
- Conducted primary research (interviews)
- Put together the questionnaire
- Prototyped the existing UPI flow within the ICICI app to use during research sessions
- Analyzed findings and surfaced patterns
- Assembled a research handbook for ICICI Bank — a strategic document to help them understand how to stand out as a UPI provider

**Key findings:**
- Most users preferred other UPI platforms over ICICI Bank
- Even users who preferred ICICI faced a steep learning curve understanding how transactions worked
- Compiled data/numbers to quantify why users don't rely on ICICI's UPI for payments

**Deeper insights surfaced:**
- How users perceive money and mentally define amounts (psychology of money)
- Scenarios when users reach for UPI vs card payments
- When users would actually open their bank app (vs a standalone UPI app)
- Psychology of having UPI inside a bank app vs a standalone UPI app — a key strategic insight for ICICI

**Challenges:** _TBD_

**What Shrea learned / take-aways:** _TBD_

**Outcome / metrics:** Research handbook delivered to ICICI Bank. _Any further outcome or client response TBD._

---

## Project 5 — Royal Enfield ⚠️ NDA

**Client:** Royal Enfield
**Project type:** E-commerce / apparel store redesign
**NDA:** Yes — share gist only, no specifics in public portfolio. Confirm what can be shown.

**What Shrea did:**
- Was given a vision to bring to life for the Royal Enfield apparel store
- Fixed navigation using storytelling to serve different user types the platform caters to
- Used storytelling + UX best practices as the core design approach
- Immersed herself in the mindset of a rider to answer the key question: what would make a rider buy a ₹30,000 jacket online vs offline — without being able to feel the material?

**Challenges:**
- Competitor benchmarking was harder than expected — client knew their direct competitors, but apparel competitors are a different universe:
  - Discovery channels differ by category
  - Casual apparel = different competitive set than riding/technical apparel
  - Had to reframe what "competitor" means in this context before benchmarking could begin

**What Shrea learned / take-aways:** _TBD_

**Outcome / metrics:** _TBD — check what is shareable under NDA_

---

## Logo-only clients (no case study)
- Informist Media
- Kotak Bank
- Money Control

---

## Open questions to resolve before writing case studies
- FYNDNA: CIC full name, user group, measurable outcomes
- TerraPay: confirm spelling (TerraPay vs Terapay), take-aways, measurable outcomes
- TerraPay Phase 2: any quotable client feedback, # of users interviewed, regions specifically
- ICICI Bank: challenges faced, take-aways, client response to the handbook, any outcomes or follow-on work
- Royal Enfield: confirm what is shareable under NDA, take-aways, outcomes
- Overall: target audience for the portfolio (recruiters? design leads? clients?), tone, how many projects total
