# AI Hub Instagram campaign: "The Reference Layer" (14 days)

**Window:** Wed 4 Nov to Tue 17 Nov 2026 · **Times:** CET · **Campaign tag:** `hub-nov26`
**Site:** https://aihubswiss.org · **Facts as of:** 3 Nov 2026 (re-check `siteCounts` before each post)

## 1. One goal, one metric

**Goal:** turn Instagram discovery into qualified visits and free sign-ups on AI Hub.
**Primary metric:** tracked site visits from Instagram (UTM `utm_campaign=hub-nov26`), then free Academy and account sign-ups and community applications.
**Supporting signals (native Insights):** sends per reach, saves, non-follower reach, profile visits, follows. Follower count is a vanity number; do not optimise for it.

Targets are not set here because there is no baseline yet. Day 1 to 3 establishes one; the Day 7 review sets targets for week 2 (see `measurement/measurement-plan.md`).

## 2. What the product actually is (from the code and docs)

AI Hub (aihubswiss.org) is an independent, vendor-neutral AI reference. Verified from `ai-hub/src/data/site-counts.ts` and the app routes:

| Asset | Count / detail | Instagram angle |
|---|---|---|
| AI tools | 151, 13 categories | Comparison, "stop asking which AI is best" |
| Head-to-head comparisons | 357 | Contrarian Reel |
| Companies | 103 | Reference proof |
| Case studies | 86 (index public, full text with free sign-in) | Proof carousels, sign-up driver |
| Governance frameworks | 44 across 29 jurisdictions; compliance gate matrix | Time-sensitive EU AI Act content |
| Free Academy | Governance and leadership courses, written assessment graded on the server, verifiable certificate; AI Basics needs no sign-up | Trust and conversion |
| Playbooks and templates | 37 playbooks, 42 Excel templates, free with an account | Save-worthy lead magnets |
| Calculators | API vs self-hosted LLM break-even | Builder Reel |
| Machine-readable layer | `.md` twins, `llms.txt`, read-only MCP server | Builder differentiator |
| Community | AI Hub Swiss: free, four working groups, applications reviewed by a person | Network applications |
| Method | Two named sources for every claim, never fabricate; daily update log | Trust story |

**Position (one line):** the independent reference layer for AI: compare, comply, learn. No vendor in the room.

## 3. Audience and the four entry paths

From `PRODUCT.md` and the home page persona selector. Every post speaks to one path and says so in the first line.

1. **Curious beginner:** needs a start. AI Basics, no sign-up.
2. **Builder / practitioner (primary persona):** skims, compares, acts. Tools, MCP, break-even calculator.
3. **Manager / decision-maker:** wants evidence. Case studies, templates, vendor scorecards.
4. **Executive / governance lead:** wants precision. EU AI Act, gate matrix, frameworks.

## 4. Diagnosis and approach (growth system)

Instagram in 2026 is a discovery engine: most reach to new people comes through Reels and recommendations, and the strongest signals are watch time and **sends** (DM shares), then saves. A new campaign account's real problem is reach to non-followers, then converting profile visits. So:

- **Reels = reach.** 4 Reels, each with a muted-first hook inside 3 seconds and a keyword-rich spoken script. Publish as Trial Reels first if the account allows it.
- **Carousels = saves and authority.** 8 carousels, one idea per slide, a cover that promises the swipe, a save-leaning CTA.
- **Text cards = sends.** 2 relatable, identity-led text cards in the style of the reference post ("My manager calls me the AI guy..."), rewritten for AI Hub. They are built to be forwarded.
- **Stories = retention.** One sequence per post: tease, sticker, link. Stories keep the warm audience and lift early engagement on the next post.
- **DM keywords = conversion.** Every post has one keyword (for example `EUAI`, `TEMPLATES`). Reply with the tracked link. Use an automation tool or reply by hand; the campaign works either way.

### What we borrowed from the reference post
The example ("My manager calls me the 'AI guy' now because I do this for 5 mins every day: I read the TLDR AI newsletter...") works because it has: an identity payoff (being "the AI person"), a tiny time cost ("5 mins"), a named, concrete habit, a self-deprecating close ("embarrassing how easy"), plain high-contrast type with no imagery, and zero visible selling. D02 and D09 reuse the mechanics, with AI Hub's own words. They use second person ("you'll be the AI person"), not a made-up first-person testimonial, so nothing is presented as someone else's real experience.

## 5. Three phases, one story

| Phase | Days | Job | Posts |
|---|---|---|---|
| 1 Establish | D01 to D05 (4 to 8 Nov) | Say what the Hub is, earn the first saves and sends | Launch carousel, 5-minute habit card, comparison Reel, EU AI Act carousel, case study |
| 2 Demonstrate | D06 to D09 (9 to 12 Nov) | Show the product working | Templates, Academy Reel, break-even Reel, gate matrix card |
| 3 Convert | D10 to D14 (13 to 17 Nov) | Trust, segment, ask | MCP Reel, two-source rule, persona quiz, community, recap |

Hero moments: **D04** (EU AI Act, timely, 2 Dec 2026 is the next date), **D07** (Academy, founder voice), **D11** (two-source rule, the independence proof).

## 6. Content pillars (colour-coded)

| Pillar | Accent | Share | Purpose |
|---|---|---|---|
| Governance and compliance | amber | 2 of 14 | Authority; time-sensitive; saved by managers |
| Tools and learning | teal | 7 of 14 | Utility; reach; Reels |
| Brand and network | indigo | 5 of 14 | Trust; independence; community |

These match the accent system already used for the earlier AIHub campaign, so the feeds look like one family.

## 7. Voice

From `PRODUCT.md`: clinical, precise, direct, data-first, confident without inflation. Independent analyst, not vendor or consultant. Specific numbers and named things. Banned words: discover, explore, curate, empower, revolutionize, transformative, all-in-one. Written "AI Hub".

## 8. Integrity rules (apply to every post)

1. Use only facts listed in each brief's "Facts used" section, and re-check `site-counts.ts` and the live page on the morning of posting.
2. Never invent a testimonial, a user count, a result or a quote. The site's own rule is two named sources per claim.
3. Case study numbers are attributed as "reported in the case study entry".
4. Regulation posts carry "general information, not legal advice". Use `ai-hub/src/data/compliance.ts` for EU AI Act dates; `llms.txt` is out of step (see D04 flag).
5. Keep AI Hub separate from any employer. Do not name or imply an employer in captions, comments, Stories or the bio.
6. No fake urgency. The only dated hook is the real 2 Dec 2026 milestone.

## 9. Cadence and timing

One feed post per day at 12:30 or 18:00 to 18:30 CET (10:00 on Saturdays, 18:00 on Sundays), plus a Story sequence. Adjust after Day 7 using Insights "most active times".

## 10. Risks and open items

- **Account handle and profile** are not set in this pack. See `01-profile-setup.md`.
- **Reels need filming.** Scripts are ready; recording is a screen capture plus voiceover (about 20 minutes each).
- **Sign-in gates** (case studies, templates) need a clear "free account" message, which every relevant post carries.
- **Production site uses Supabase env**; confirm sign-up and the Academy work on production before D06 and D07.
- **EU AI Act timeline** is moving; re-check before D04 and D09.
- The repo has an in-app social post generator (`ai-hub/src/lib/social`). This campaign is the planned layer; the generator can supply daily news posts after day 14.
