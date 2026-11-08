---
title: "Unimpressive Software"
tags: ["AI"]
date: 2026-10-29
---

I built an app called [Rituals](https://rituals.markbrown4.dev/), for iOS and Android.  It won't win any awards, but to me it's the bees knees.  It's a simple idea aimed at helping me remember and measure the things I want to do be doing weekly.

<div class="carousel" role="region" aria-label="Rituals iOS screenshots" tabindex="0">
  <img src="/images/journal/unimpressive-software/1-board.webp" alt="The Board, showing this week's rituals: steps, walking Milly, push-ups, sleep and quality time" width="600" height="1301" loading="lazy">
  <img src="/images/journal/unimpressive-software/5-monthly-insights.webp" alt="Monthly trends for push-ups" width="600" height="1305" loading="lazy">
  <img src="/images/journal/unimpressive-software/2-automations.webp" alt="A ritual's menu listing the automations it can complete from" width="600" height="1305" loading="lazy">
  <img src="/images/journal/unimpressive-software/4-weekly-insights.webp" alt="Weekly trends across all rituals" width="600" height="1305" loading="lazy">
  <img src="/images/journal/unimpressive-software/7-sets.webp" alt="Today's push-ups on The Board, with two sets completed" width="600" height="1305" loading="lazy">
  <img src="/images/journal/unimpressive-software/9-challenge-setup.webp" alt="Setting up a challenge for running 30 minutes" width="600" height="1305" loading="lazy">
  <img src="/images/journal/unimpressive-software/3-suggestions.webp" alt="Suggested rituals to add" width="600" height="1305" loading="lazy">
  <img src="/images/journal/unimpressive-software/6-widgets.webp" alt="Rituals widgets on the iPhone Home Screen" width="600" height="1305" loading="lazy">
</div>

Three years ago, if someone had shown me this I would have been deeply impressed. Now however, this is all deeply _unimpressive_ software. Anyone with a Claude Code subscription and an idea can do the same.  Indeed, the bulk of this was built in two weeks, a few hours each night, doing just that.

<!-- more -->

## What we built

Rituals isn't a toy demo. Under the hood, it has everything I'd expect from a professional product:

- High-quality native iOS and Android apps
- A secure GraphQL API and fast backend
- Thorough automated testing
- Terraformed infrastructure
- A CI/CD pipeline
- Zero downtime deployments
- Database backups
- A marketing website
- Distribution in the App Store and Google Play

And the app itself has a real feature set:

- Email verification and sign-in with passkeys
- Creating your own rituals
- Suggested rituals
- Automations with HealthKit on iOS, and Health Connect on Android
- Phone Sleep™️ - long stretches without motion at night
- Challenges with increasing targets
- Insights over the last 6 months
- Home-screen widgets
- Dark mode
- Push notifications and deep links

## Fast, cheap, and good

The old rule was that you could pick two: fast, cheap, or good. Rituals was fast and cheap to build. But from where I stand, it also has all the hallmarks of quality software too.

Now, this is a dangerous and even _offensive_ idea, that AI can produce high quality software without expertise.  But it's what I've found to be true by looking at the output, and comparing it against a comparable app that I built with a small team over months.  What once took a team months is now a side project for one person after dinner.

Claude near-instantly got me 95% of the way to production-ready code.  The only times I redirected it were occasionally pushing back on complexity, and prompting it to fix a few visual glitches it missed without a set of eyeballs.  It understood my intent and coded as skillfully as I would have much faster.

Software is unimpressive because it's no longer rare, there will be an abundance of fast, cheap and _good_ software.
Don't get me wrong, there will also be an abundance of _bad_ software.  That won't come from AIs producing slop, it'll come from the builders not knowing what to build.

Skilled designers and engineers obviously have an edge on the unskilled in knowing what to build.

## How good sofware is built

Good software usually comes about through iteration.
I've worked with rare talents who could make a beeline to great designs quickly, but most of us get to good software products through trial and error.  Starting with a rough draft of the core idea, making a prototype, testing and refining our ideas until good emerges.  Gating quality until it's something we're proud to release.  Then weighing it in production with real people using it, seeing what works and improving it over time.

AI _massively_ speeds up this process of iteration.  Research, prototyping, design, coding, code reviews, bug fixing and performance improvements can be done _continuously_ to improve a product.

## So what should we build then?

Now that we can build _anything_, where should we spend our time?

With agents as personal assistants a whole class of software doesn't need to be built in advance. It can be built on demand, when someone has a need for it.

## Existential dread, or excitement?

I concede that coding is a solved problem.  Anyone can build.

Yet I'm still amazed by what can be built. Building Rituals has shown me what's possible, my next project will be more ambitious.  The only answer is to aim higher and have fun along the way.
