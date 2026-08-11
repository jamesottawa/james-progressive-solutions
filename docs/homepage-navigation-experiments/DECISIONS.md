# Concept Decisions & Evaluation Matrix

## Evaluation Matrix

| Concept | Visual Strength | Hero Integration | Mobile Potential | Implementation Complexity | Reuse Potential | Notes | Decision |
|---|---|---|---|---|---|---|---|
| **Category Deck** | Clean and organized, but currently too simple/plain compared with the cinematic hero. | Strong structural anchoring and much cleaner than floating cards, but the deck sits too low in the viewport. At the current desktop view, the user must scroll noticeably before the full category navigation is visible. | Good in principle, but not evaluated yet. | Low to moderate. | High. The pattern is clean and reusable for professional/client websites. | - Removes floating-card clutter successfully<br>- All 5 categories remain visible in one system<br>- CLarity emphasis works<br>- Current design lacks enough visual personality<br>- Deck needs stronger upward overlap if ever refined<br>- Not worth further polishing before comparing other concepts | KEEP FOR COMPARISON — DO NOT SELECT YET |
| **Continuous Ribbon** | | | | | | | TBD |
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
*Pending evaluation on `experiment/category-ribbon` branch.*

### Phase 3 — Portal Tiles
*Pending evaluation on `experiment/portal-tiles` branch.*
