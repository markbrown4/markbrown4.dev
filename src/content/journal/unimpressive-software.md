---
title: "Unimpressive Software"
tags: ["AI"]
date: 2026-10-29
---

I built an app recently called [Rituals](https://rituals.markbrown4.dev/), for iOS and Android.
I have no plans to monetise it, but it's the bees knees.
It's a simple idea aimed at helping me remember and measure the things I want to do be doing weekly.
I built it for myself, but it's free and open for anyone to use.

Here's what it looks like:

<div class="carousel" role="region" aria-label="Rituals iOS screenshots" tabindex="0">
  <img src="/images/journal/unimpressive-software/1-board.png" alt="The Board, showing this week's rituals: steps, walking Milly, push-ups, sleep and quality time" width="600" height="1301" loading="lazy">
  <img src="/images/journal/unimpressive-software/2-automations.png" alt="A ritual's menu listing the automations it can complete from" width="600" height="1305" loading="lazy">
  <img src="/images/journal/unimpressive-software/9-challenge-setup.png" alt="Setting up a challenge for running 30 minutes" width="600" height="1305" loading="lazy">
  <img src="/images/journal/unimpressive-software/7-sets.png" alt="Today's push-ups on The Board, with two sets completed" width="600" height="1305" loading="lazy">
  <img src="/images/journal/unimpressive-software/5-monthly-insights.png" alt="Monthly trends for push-ups" width="600" height="1305" loading="lazy">
  <img src="/images/journal/unimpressive-software/4-weekly-insights.png" alt="Weekly trends across all rituals" width="600" height="1305" loading="lazy">
  <img src="/images/journal/unimpressive-software/3-suggestions.png" alt="Suggested rituals to add" width="600" height="1305" loading="lazy">
  <img src="/images/journal/unimpressive-software/6-widgets.png" alt="Rituals widgets on the iPhone Home Screen" width="600" height="1305" loading="lazy">
</div>

Three years ago, if someone had shown me this I would have been impressed. Today, this is all deeply _unimpressive_ software. Anyone with a Claude Code subscription and an idea can do the same.  Indeed, the bulk of this was built over two weeks, a few hours each night, doing just that.

<!-- more -->

## What we built

Working full time with two young kids(4 years and 9 months) does not leave a lot room for side projects.
Keep in mind this was created mostly between the hours of 10pm - 12am, giving the agent minimal specificity, maximum autonomy.

Rituals isn't a toy demo. Under the hood, it has everything I'd expect from a professional product:

- High-quality native iOS and Android apps
- An Elixir GraphQL backend
- Thorough automated testing
- Terraformed infrastructure
- A CI/CD pipeline
- Zero downtime deployments
- Database backups
- Distribution in the App Store and Google Play
- A website

And the app itself has a real feature set:

- Email verification and sign-in with passkeys
- Checked or counted rituals with weekly targets and sets
- Suggested rituals
- Automations with HealthKit on iOS, and Health Connect on Android
- Phone Sleep™️, long stretches of no motion are recorded as Time in bed
- Challenges with increasing targets
- Insights over the last 6 months
- Home-screen widgets
- Dark mode
- Push notifications for reminders, challenges and weekly recaps

## Fast, cheap, and good

The old rule was that you could pick two: fast, cheap, or good. Rituals was fast and cheap to build. But from where I stand, it has all the hallmark signs of quality software too.

Now, this is a dangerous and even _offensive_ idea, that AI can produce high quality software.  But it's what I've found to be true by looking at the output, and honestly comparing it to a similar app that I built with a small team in the past.  What once took a team months is now a side project for one person after dinner.  In fact, I'd argue it's higher quality than a team of veterans was able to produce.

Software is unimpressive because it's no longer rare, there will be an abundance of fast, cheap and _good_ software.
Don't get me wrong, there will also be an abundance of _bad_ software.  That won't come from AIs producing slop, it'll come from the builders not knowing what to build.  Skilled designers and engineers who understand software products will have an edge on the unskilled in knowing what to build.

## How good sofware is built

Good software comes about through iteration.

I've worked with rare talents who could make a beeline to great designs quickly, but most of us get to good software through trial and error.  Starting with a rough draft of the core idea, making a prototype, testing and refining our ideas until good emerges.  Gating quality until it's something we're proud to release.  Then weighing it in production with real people using it, seeing what works and continuing to care for it and improve it over time.

AI _massively_ speeds up this process of iteration.  Research, prototyping, design, coding, code reviews, bug fixing and performance improvements can be done continuously and asynchronously to build good software.

The manual testing loop required for iteration like this does put limits on how fast quality products can built.
I'm comfortable working within those constraints, fast, but not so fast that we take our eyes off the code _completely_ or lose the human interaction involved in shaping quality output.

## So what should we build then?

Now that we can build _anything_, where should we spend our time?

With agents as personal assistants a whole class of software doesn't need to be built in advance. It can be built on demand, when someone has a need for it.

## What's it good and bad at?

I found it's tools for computer use, research, prototyping, and coding to be mind blowingly good.

And it's very good at ports from iOS to Android.  I built Rituals for iOS first, then ported to Android when the core was there.  For new features I'd iterate on ios until I was happy with it, then port.  So the "build once run anywhere" rule no longer applies.  If complete parity is wanted you might want to reach for a unifying framework, but it's no longer burdensome to write for both platforms.

It was _ok_ at design, though it seems that what was being produced would be produced again and again for similar requests by others.  That's especially true for branding, where you're aiming for something truly creative and unique.
Case in point, after releasing mine I discovered [Ritual+](https://play.google.com/store/apps/details?id=com.ritualplus.com&hl=en) which was released suspiciously at the same time.  Most likely, both the branding elements and copy ideas came from the mind of Claude, which of course came from the minds of others.

It also struggled a bit with animations, it got a lot of things right but it missed some jankiness that an eye easily picks up.

I expect the current weaknesses to be a thing of the past soon enough, the trajectory of progress to date makes it seem foolish to doubt it's future capabilities.

## Existential dread or joy?

I concede that coding is a solved problem.  Anyone can build.

Yet I'm still amazed by what can be built.  Building Rituals has shown me what's possible, my next project will be more ambitious.  The only answer is to aim high and have fun along the way.
