---
title: "Compass is bad ass"
tags: ["CSS"]
date: 2012-01-26
---

will certainly be using Compass in the future for building sites, whether they are static or dynamic. Pre-compilers and static site generators are all the rage right now, Haml, Sass & CoffeeScript have changed things for the better, there’s no reason to be scared of them.

<!-- more -->
<div class="media"><img src="/images/journal/compass-files.png" alt=""></div>

## Install

- Install the compass gem
- Create a site
- Watch for changes

This will sit in the background and compile your CSS whenever you make changes to any of the files. **Awesome**.

```shell
gem install compass
compass create test-app
compass watch test-app
```

<div class="frame"><img src="/images/journal/compass-watch.png" alt=""></div>

## Sprites
```css
@import "icon/*.png";
@include all-icon-sprites;
```

And, you're done.

That's right. Those two lines will generate the sprite image and styles automagically for you.

I also like to include a sprite class which makes an element behave line a normal image.

```css
.sprite {
  display: inline-block;
  vertical-align: middle;
  height: 16px;
  width: 16px;
  overflow: hidden;
  text-indent: -9999px;
}
```
```html
<b class="sprite icon-tick">Save</b>
```

There's another include for spriting regular, hover & active states as well.

```css
@import "selectors/*.png";
@include all-selectors-sprites;
```

- selectors/comment.png
- selectors/comment_hover.png
- selectors/comment_active.png

## Compass features

I've only played with the css3 & reset utilities so far, a reset stylesheet is included by default. There are [many more utilities](http://compass-style.org/reference/compass/utilities/) though which I'll be playing with.

One of the best features in my opinion of the whole compass piece is the color utilities like lighten(color, amount) & darken(color, amount).
When you're tweaking a design you're often just tweaking contrasts, this is where these two utilities shine.

<div class="frame"><img src="/images/journal/compass-output.png" alt=""></div>

```css
@import "compass/reset";
@import "compass/css3";
$link-color: #0084B4;

a {
  color: $link-color;
}
a:hover {
  color: darken($link-color, 15%);
}
```

Using variables for things makes a lot of sense.

You could define gutter widths for a design and then set widths & margins in your layout using simple maths meaning you can change the spacing globally.

## css3 mixins

There's a background function which will generate vendor prefixes and supports multiple background images.  You can even mix colors into rbga() if you don't know the specific RGB values, a color is a color.

```css
#header {
  @include background(
    linear-gradient(top, rgba(black,0) 50%, rgba(black,.3)),
    image-url("textures/tartan.png")
  );
}
#wrapper {
  @include border-radius(10px);
}
```

## Deploy!

When you're ready to deploy combine and minify your assets

```shell
compass compile -e production --force
```

Easy as pie.