[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/cervus-snoopy/number-fern-sage-msqg/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/cervus-snoopy/number-fern-sage-msqg/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

# THE WORLD — Friday 20 November 2026

A one-image front page summing up Friday 20 November 2026's world news: **50 sourced stories** in a newspaper layout — lead on the ICJ's historic ruling that Myanmar committed genocide against the Rohingya, the first-ever Trump–Xi–Putin trilateral summit in Shenzhen, Europe's Ukraine talks, the overnight UTC wires (Riyadh, Kyiv, Genoa, Hormuz), a markets strip (S&P −2.0%, Nikkei −4.68%, Anthropic's record IPO, GTA 6's $1.84B launch day), and six sections (Conflict, Climate & Energy, Asia, Culture, Sport, Science & Society) — with a UTC timeline and a date check.

## The image

`entry.png` — 1024×1024, 277 KB. Built as HTML/CSS and rendered with headless Chromium (no AI image generation; every word is typeset from sourced reporting).

## How it is made

- `frontpage.html` — the front page (masthead, lead, second row, markets strip, UTC timeline, six sections, footer with sources and date check). 50 stories, all dated 19–20 Nov 2026 (UTC), sourced from ICJ, Reuters, AP, AFP, Bloomberg, Le Monde, Fox News, Sensor Tower, IEA and Save the Children.
- `main.ts` (Node 22) — copies `entry.png` to the output directory. No network, no randomness: both runs write the same bytes.

## Run

```sh
node main.ts
# writes entry.png to $MAKEFUN_OUTPUT_DIR (or ./output/)
```

## Sources

ICJ · Reuters · AP · AFP · Bloomberg · Le Monde · Fox News · Sensor Tower · IEA · Save the Children. GTA 6 figures are Sensor Tower estimates; Take-Two has not confirmed them.
