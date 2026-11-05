# Visual system for the Instagram campaign

Derived from `ai-hub/DESIGN.md` and `PRODUCT.md`: information before atmosphere, high contrast, typography carries hierarchy, no glows, orbs or gradient text, one accent per slide.

## Formats
| Use | Size | Notes |
|---|---|---|
| Feed carousel / text card | 1080×1350 (4:5) | Keep key content inside the central 1080×1080 so grid previews do not crop it |
| Reel and Story | 1080×1920 (9:16) | Keep text clear of the top ~250 px and bottom ~340 px |

## Colour
| Token | Value | Use |
|---|---|---|
| Background (dark) | `#0B0B12` | Carousel slides |
| Background (light) | `#F6F5F1` | Text cards (mirrors the plain reference post) |
| Foreground | `#F4F2EE` on dark, `#0B0B12` on light | Text |
| Muted | `#A3A3B2` dark, `#55555F` light | Supporting copy |
| Governance accent (amber) | `#FBBF24` | Compliance posts |
| Tools accent (teal) | `#2DD4BF` | Tools, learning |
| Brand accent (indigo) | `#7C83FF` | Brand, community |
| Text card ink accent | `#6D28D9` | Brand violet from the site |
| Logo | `aihub-mark.svg` | Pink appears only in the logo mark, never on text or buttons |

Check contrast: accent text on `#0B0B12` passes AA at the sizes used (26 px and up).

## Type
Geist (the site's typeface; SIL OFL, bundled in `fonts/`). Cover headlines Black 118 px at -0.04em tracking; point headlines ExtraBold-weight 92 px; body 48 px Regular; minimum text 26 px.

## Slide anatomy
1. Top row: eyebrow (pillar or series) left, `01/08 →` counter right.
2. Content block, vertically centred, one idea.
3. Footer rule, logo mark and "AI Hub" left, `aihubswiss.org` right.
Last slide: one call to action button, "Link in bio".

## Rules
- One idea per slide; a slide that needs a paragraph becomes two slides.
- Cover must hook and promise the swipe, and be readable at thumbnail size.
- No stock photos, no emoji on slides, no fake UI. Use real screenshots in Reels only.
- Alt text on every post (in each brief).

## Regenerating
```bash
node marketing/design/render.mjs          # all slides to marketing/assets/<day>/
node marketing/design/render.mjs d04 d06  # only some posts
node marketing/design/build-docs.mjs      # briefs, calendar, stories, tracker
```
Needs Node 18+ and the `playwright` package with a Chromium. Fonts and logo are bundled.

## Optional: Canva
The slides are final PNGs. If you prefer editable files, recreate them as `instagram_post` designs in Canva using the tokens above, rotating the accent by pillar (the same workflow as the earlier AIHub campaign).
