---
title: "Touch swipe events"
tags: ["CSS", "JavaScript"]
date: 2012-03-30
---

I had to make an iOS like UI today and transition in different 'pages' by swiping.  A few gotcha's and how-to's if you're building something similar.

<!-- more -->
## HTML - Laying out the grid

I first laid out a grid with a visible region the size of one of the pages.

<div class="frame"><img src="/images/journal/touch-grid.jpg" alt=""></div>

```html
<div id="grid-wrap">
  <div id="grid">
    <div id="pos-0-0"></div>
    <div id="pos-1-0"></div>
    <div id="pos-2-0"></div>
    <div id="pos-0-1"></div>
    <div id="pos-1-1"></div>
    <div id="pos-2-1"></div>
    <div id="pos-0-2"></div>
    <div id="pos-1-2"></div>
    <div id="pos-2-2"></div>
  </div>
</div>
```

## CSS
All examples use SASS and Compass.

```css
$height: 748px;
$width: 1024px;
$rows = 3;
$cols = 3;

#grid-wrap {
  height: $height;
  width: $width;
  overflow: hidden;
}
#grid {
  height: $height * $rows;
  width: $width * $cols;
  @include transition(all .3s ease-in-out);
}
#grid > div {
  position: absolute;
  height: $height;
  width: $width;
  -webkit-backface-visibility: hidden;
}
@for $y from 0 through $rows-1 {
  @for $x from 0 through $cols-1 {
    .no-csstransforms {
      .pos-$x-$y {
        top: $y;
        left: $x;
      }
    }
    .csstransforms {
      .pos-$x-$y #grid {
        @include transform(translate($x*-$width, $y*-$height));
      }
    }
  }
}
```

I first just transitioned the top and left values and it worked everywhere but the performance on the iPad wasn't the best.  Webkit has heavily optimised transforms using translate so the result was much better using translate.  You could use modernizr to get the best of both worlds and serve transforms to the browsers that understand it. #winning.

-webkit-backface-visibility: hidden; is necessary so that the device renders the content off screen so that it doesn't repaint when it's scrolled in from one of the edges - without it the images flicker after a transition.

-webkit-backface-visibility did add a problem for me though, I was using a &lt;video&gt; element with video.js and I couldn't click the play button within one of the elements with that property set. It took me a while to figure out but if you add a transform to the elements you need to interact with it somehow pulls them back into line.

```css
.video {
  @include transform(translate(0, 0));
}
```

## JavaScript
I modified the [jQuery Touchwipe Plugin](http://www.netcu.de/jquery-touchwipe-iphone-ipad-library) so that it normalised click and drag as well as touch events.  I also added a afterSwipe callback to make it a little more useful for me.

```js
$body = $('body');
var updatePos = function() {
  $body[0].className = 'pos-' + pos.x + '-' + pos.y;
}
$swiper = $body.swipe({
  swipeLeft: function() {
    if (pos.x < 2 && pos.y !== 0)
    pos.x = pos.x+1;
  },
  swipeRight: function() {
    if (pos.x > 0 && pos.y !== 0)
    pos.x = pos.x-1;
  },
  swipeUp: function() {
    if (pos.y < 2)
    pos.y = pos.y+1;
  },
  swipeDown: function() {
    if (pos.y > 0)
    pos.y = pos.y-1;
  },
  afterSwipe: updatePos,
  threshold: 20,
  preventDefaultEvents: true
});
```

It's fun playing with some of the -webkit features and seeing how they've optimised different features they deemed worthy enough for it.  The ease-in-out transitions with transforms feel just like the native experience - It's worth going the extra steps to optimise for these devices.
