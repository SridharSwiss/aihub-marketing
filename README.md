# AI Hub marketing: Instagram campaign, 4 to 17 Nov 2026

A 14-day Instagram campaign for https://aihubswiss.org, built from the product's own code, data and docs. Moved out of the AI repo into its own repo; no AI Hub code was changed.

## Start here
| File | What it is |
|---|---|
| [`00-strategy.md`](00-strategy.md) | Goal, audience, positioning, phases, pillars, voice, integrity rules |
| [`calendar.md`](calendar.md) | Day-by-day schedule (CET) with links to each brief |
| [`posts/`](posts) | 14 ready-to-post briefs: slide copy, Reel scripts, captions, first comments, hashtags, alt text, tracked links, facts used |
| [`assets/`](assets) | 58 rendered 1080×1350 PNG slides for the carousels and text cards |
| [`stories/stories-plan.md`](stories/stories-plan.md) | Story sequence for every post day |
| [`01-profile-setup.md`](01-profile-setup.md) | Name, bio, link in bio, highlights, DM keywords (do before D01) |
| [`02-engagement-playbook.md`](02-engagement-playbook.md) | Daily routine, reply templates, collabs, cross-posting |
| [`measurement/`](measurement) | Measurement plan, tests, and `tracker.csv` pre-filled with tracked links |
| [`ads/`](ads) | Meta ads plan and specs (prepared, not yet created in Meta); square ad images in `assets-ads/` |
| [`design/`](design) | Design system, bundled Geist fonts and logo, and the scripts that generate everything |

## The 14 days at a glance
Mix: 8 carousels, 4 Reels, 2 text cards. Reels carry reach, carousels carry saves, text cards carry sends, Stories carry retention.

| Day | Date | Post |
|---|---|---|
| D01 | Wed 4 Nov | Launch: the reference layer (carousel) |
| D02 | Thu 5 Nov | The 5-minute habit (text card) |
| D03 | Fri 6 Nov | Stop asking which AI is best (Reel) |
| D04 | Sat 7 Nov | EU AI Act in 6 swipes (carousel) |
| D05 | Sun 8 Nov | Case study: claims triage (carousel) |
| D06 | Mon 9 Nov | 5 free templates (carousel) |
| D07 | Tue 10 Nov | Free Academy and verifiable certificate (Reel) |
| D08 | Wed 11 Nov | API vs self-hosted break-even (Reel) |
| D09 | Thu 12 Nov | Which rules apply to you (text card) |
| D10 | Fri 13 Nov | AI Hub for AI assistants: MCP and markdown (Reel) |
| D11 | Sat 14 Nov | We published nothing on 31 October (carousel) |
| D12 | Sun 15 Nov | Which AI path are you? (carousel) |
| D13 | Mon 16 Nov | The community (carousel) |
| D14 | Tue 17 Nov | Recap: 5 places to start (carousel) |

## How to use it
1. Do `01-profile-setup.md`.
2. Each day open that day's brief. Read the **Before posting** flag, re-check the facts against the live site, then upload the slides (or film the Reel from the script) and paste the caption.
3. Post the first comment, run the Story sequence, log results in `measurement/tracker.csv`.

## Changing content
All copy lives in one file, `content/posts.json`. After editing it:
```bash
node design/build-docs.mjs   # regenerates briefs, calendar, stories, tracker
node design/render.mjs       # regenerates slide PNGs
```
Generated files carry a header saying so. Reel footage is not included; scripts are in the briefs.

## Facts and where they come from
Counts come from `ai-hub/src/data/site-counts.ts` as of 3 Nov 2026 (151 tools, 103 companies, 86 case studies, 44 frameworks, 29 jurisdictions, 357 comparisons, 37 playbooks). The 42 templates are the files in `ai-hub/private/templates/`. EU AI Act dates come from `ai-hub/src/data/compliance.ts`. Each brief lists its sources. Re-check before posting; counts change as the daily update runs.

## Known discrepancies found while reviewing the repo (not fixed, code left untouched)
- `ai-hub/src/app/llms.txt/route.ts` still says EU AI Act high-risk obligations apply from August 2026, while `compliance.ts` says Annex III high-risk was deferred to December 2027 by the Digital Omnibus. The campaign follows `compliance.ts`.
- The root `README.md` describes an earlier Vite version (80+ tools, 15 categories). The live site is the Next.js app in `ai-hub/`.
- `ai-hub/README.md` says the news feed revalidates every 24 hours; `llms.txt` says every 6 hours. Posts say "58 sources" and avoid stating a refresh interval.

## Keeping copies in sync

GitHub (`SridharSwiss/aihub-marketing`, branch `main`) is the single source of truth. Every working copy (your PC, Claude's session) runs `sync.cmd` on Windows or `./sync.sh` elsewhere before and after editing. It pulls, commits local edits and pushes. Content is edited in `content/posts.json` only; the briefs, calendar and PNGs are regenerated from it, so never hand-edit generated files.
