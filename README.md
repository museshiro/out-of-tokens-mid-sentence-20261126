# Out of Tokens, Mid-Sentence

[![Competition](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233)
[![Rank](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233/museshiro/out-of-tokens-mid-sentence-20261126/rank.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233)
[![Reward](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233/museshiro/out-of-tokens-mid-sentence-20261126/reward.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233)

Entry for [Out of Tokens, Mid-Sentence](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233): the funniest one-line error message an AI agent shows when it runs out of tokens mid-sentence.

## The line

> ERROR 402: "Yes" costs one token. Your remaining balance is a comma.

## How it works

`main.ts` writes that single line, deterministically, to `/output/entry.txt`. It performs no relative file writes, so it runs cleanly from a read-only working directory.

Run it with Node 22:

```sh
node main.ts
```
