# Meta ads plan (Facebook + Instagram), aligned to the calendar

Status: **prepared, not created.** Nothing has been created or spent in Meta. Specs are in `ads.json`; square images are in `../assets-ads/`.

## Blockers before anything is created
1. **Page:** the only Page on ad account `10203869002349672` is BRS Switzerland (@brs_switzerland). Add the AI Hub Facebook Page and Instagram account to the ad account, then re-run the Page and Instagram lookups. Do not run AI Hub ads under another brand's Page.
2. **Public images:** this repo is public with GitHub Pages enabled, so the square PNGs in `assets-ads/` are served at `https://sridharswiss.github.io/aihub-marketing/assets-ads/<id>/<file>.png`.
3. **EU legal name:** worldwide includes the EU, so every ad needs a DSA beneficiary. Proposed `AIHub Swiss` (name used in the repo's data-processing record); confirm.
4. **Budget and currency:** no preference given. Default `10` per day in the account currency (not yet confirmed). Change before activating.

## Structure
One campaign, objective **Traffic** (clicks to aihubswiss.org), CBO on, four carousel ads, each a copy of a calendar post. Created **paused**; activate each ad on its start date.

| Ad | Post | Start | Stop | Landing page | Why this one |
|---|---|---|---|---|---|
| A1 | D01 launch carousel | Wed 4 Nov | Tue 10 Nov | `/` | Awareness for the whole Hub |
| A2 | D04 EU AI Act | Sat 7 Nov | Fri 13 Nov | `/compliance/eu-ai-act` | Timely, high save value |
| A3 | D06 templates | Mon 9 Nov | Sun 15 Nov | `/consulting-toolkit` | Lead magnet, free account |
| A4 | D13 community | Mon 16 Nov | Sun 22 Nov | `/switzerland/join` | Community applications |

Reels (D03, D07, D08, D10) are better boosted as videos once filmed; they are not in this batch.

## Targeting
Worldwide as requested. One caution: a worldwide Traffic audience spreads a small budget thinly and mostly buys cheap clicks from markets that may not matter. Suggested refinement once there is data: split an ad set for Switzerland, Germany, Austria and the UK, and cap the rest. Age 25 to 65, all genders, Advantage+ Audience on (no interest stack yet; a first test needs a baseline).

## Rules checked
- Copy is within Meta limits (primary text under 140 characters, card headline under 45, description under 20).
- Same facts as the organic posts: 151, 103, 86, 44, 42 are from `site-counts.ts` and the templates folder as of 3 Nov; re-check before activating.
- EU AI Act ad keeps "general information, not legal advice".
- No employer is named anywhere.
- UTM: `utm_source=meta&utm_medium=paid_social&utm_campaign=hub-nov26&utm_content=ad-dXX`. Instagram organic uses `utm_source=instagram`, so paid and organic stay separable.

## Tool usage note
The Adspirer plan on this account shows a monthly allowance of 15 tool calls. Each lookup and each create counts, so this batch (four ads) is about all one month allows, and re-running lookups wastes it. Check `get_usage_status` before starting.

## Order of operations when unblocked
1. Look up Pages and Instagram accounts (confirm AI Hub appears).
2. Upload the square images (one validation call per ad).
3. Create the campaign with A1 (carousel), then add A2 to A4 as ads. Everything paused.
4. Show you the campaign for approval, then resume each ad on its start date.
