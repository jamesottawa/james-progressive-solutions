# Navigation Experiments Roadmap

## PHASE 0 — BASELINE
- [x] Confirm baseline commit (`b9b536ef79d364937fdea16a7e803720183b9512`)
- [x] Confirm all 3 experiment branches exist (`experiment/category-deck`, `experiment/category-ribbon`, `experiment/portal-tiles`)
- [x] Confirm current hero can be restored exactly

## PHASE 1 — CATEGORY DECK
- [ ] Switch to `experiment/category-deck`
- [ ] Remove floating cards from rendered desktop hero, preserving code if useful
- [ ] Build anchored 5-category deck
- [ ] Keep all 5 categories immediately visible
- [ ] Give CLarity slightly stronger hierarchy
- [ ] Verify desktop layout
- [ ] Verify mobile fallback
- [ ] Run build
- [ ] Capture review screenshot
- [ ] Record findings in `DECISIONS.md`

## PHASE 2 — CONTINUOUS RIBBON
- [ ] Switch to `experiment/category-ribbon`
- [ ] Build single continuous category navigation band
- [ ] Divide into 5 clickable category zones
- [ ] Keep all 5 visible immediately
- [ ] Explore restrained hover/focus behavior
- [ ] Verify desktop layout
- [ ] Verify mobile fallback
- [ ] Run build
- [ ] Capture review screenshot
- [ ] Record findings in `DECISIONS.md`

## PHASE 3 — PORTAL TILES
- [ ] Switch to `experiment/portal-tiles`
- [ ] Build 5 visual category portal tiles
- [ ] Give each category its own visual identity
- [ ] Keep all 5 visible immediately
- [ ] Avoid floating-card appearance
- [ ] Verify desktop layout
- [ ] Verify mobile fallback
- [ ] Run build
- [ ] Capture review screenshot
- [ ] Record findings in `DECISIONS.md`

## PHASE 4 — COMPARISON
- [ ] Compare all 3 concepts
- [ ] Evaluate visual quality
- [ ] Evaluate implementation complexity
- [ ] Evaluate mobile behavior
- [ ] Evaluate reuse potential for future client sites
- [ ] Choose winner
- [ ] Decide whether to merge winner or refine further
