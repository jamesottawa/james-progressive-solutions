# Concept Decisions & Evaluation Matrix

## Evaluation Matrix

| Concept | Visual Strength | Hero Integration | Mobile Potential | Implementation Complexity | Reuse Potential | Notes | Decision |
|---|---|---|---|---|---|---|---|
| **Category Deck** | Clean and organized, but currently too simple/plain compared with the cinematic hero. | Strong structural anchoring and much cleaner than floating cards, but the deck sits too low in the viewport. At the current desktop view, the user must scroll noticeably before the full category navigation is visible. | Good in principle, but not evaluated yet. | Low to moderate. | High. The pattern is clean and reusable for professional/client websites. | - Removes floating-card clutter successfully<br>- All 5 categories remain visible in one system<br>- CLarity emphasis works<br>- Current design lacks enough visual personality<br>- Deck needs stronger upward overlap if ever refined<br>- Not worth further polishing before comparing other concepts | KEEP FOR COMPARISON — DO NOT SELECT YET |
| **Continuous Ribbon** | Strong. Sleek, premium, and much cleaner than floating cards. | Very strong. Fully visible above the fold and does not interfere with the main cinematic artwork. | Good in principle, but not fully evaluated yet. | Low to moderate. | Very high. Strong candidate for future client websites and other visually complex hero sections. | - All 5 categories visible immediately<br>- No scrolling required<br>- 52px height works well<br>- Strong continuous HUD/navigation feel<br>- Cleaner than Category Deck<br>- Less visually distinctive than a more custom portal concept may be<br>- Mid-desktop crowding solved by hiding micro-taglines below 1440px<br>- Width constraint improves cohesion | CURRENT LEADER — KEEP FOR FINAL COMPARISON |
| **Portal Tiles** | | | | | | | TBD |

---

## Detailed Phase Findings

### Baseline Checkpoint
- **Commit**: `b9b536ef79d364937fdea16a7e803720183b9512`
- **Branch**: `main`
- **Status**: Clean baseline checkpoint with approved hero artwork, centered PS emblem, headline typography, and top-left branding lockup.

### Phase 1 — Category Deck
- **Branch**: `experiment/category-deck`
- **Summary**:
  - Successfully replaces the scattered 5 floating category cards with a unified 5-column navigation deck anchored at the base of the desktop hero.
  - Keeps all 5 categories (`For Sale`, `Free Apps`, `Website Redevelopment`, `The CLarity Project`, `AI Creations`) immediately visible without modal or hover states.
  - Highlights `The CLarity Project` as a flagship project via a subtle gold background tint, glowing badge, and `FLAGSHIP` tag.
- **Evaluation**:
  - Removes visual clutter from the upper hero sky, giving prominence to the centered PS emblem and sunburst beam.
  - Sits somewhat low in the viewport, requiring slight scrolling on smaller monitors to see the full bar.
  - Design is clean and highly functional, but currently feels slightly plain against the high-cinematic artwork.
- **Decision**: **KEEP FOR COMPARISON — DO NOT SELECT YET**

### Phase 2 — Continuous Ribbon
- **Branch**: `experiment/category-ribbon`
- **Summary**:
  - Replaces floating cards with a sleek, continuous 52px pill-shaped HUD navigation ribbon floating at `bottom-[13%]`.
  - Keeps all 5 categories immediately visible above the fold without scrolling.
  - Solved text crowding below 1440px by cleanly hiding micro-taglines while preserving category titles.
  - Constrained width to `1480px` with a subtle golden top-light metallic sheen (`inset_0_1px_0_rgba(255,215,0,0.28)`).
- **Evaluation**:
  - Extremely strong integration; 0 scroll required. Leaves PS emblem, person, and desk monitors completely open.
  - Sleek HUD control feel fits the tech/cinematic tone perfectly.
- **Decision**: **CURRENT LEADER — KEEP FOR FINAL COMPARISON**

### Phase 3 — Portal Tiles
*Pending evaluation on `experiment/portal-tiles` branch.*
