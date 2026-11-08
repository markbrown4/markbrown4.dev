---
title: "Vendor prefixes"
tags: ["CSS"]
date: 2012-02-12
---

There are two things that should happen.  
Developers should stop coding vendor prefixes by hand & vendors shouldn't add any more prefixes into production releases.

<!-- more -->
I agree with Remy Sharp that other vendors including -webkit vendor prefix support is [bat shit crazy](http://remysharp.com/2012/02/09/vendor-prefixes-about-to-go-south/ "Vendor Prefixes - about to go south").

**Developers should stop coding vendor prefixes by hand**

During development you can use [prefix-free](http://leaverou.github.com/prefixfree/) and for production pre-compile your css.  [Compass' CSS3 module](http://compass-style.org/reference/compass/css3/) makes short work of this.  Just include the feature and use it.

```css
@import "compass/css3";

div {
  @include border-radius(10px);
}
```

This centralisation of vendor-prefixing is what is needed.  As support is added in browsers Compass can be updated to include new prefixes all without you having to change source code plugging in all the holes.

**Vendors shouldn't add any more prefixes into production releases**.
"Non-production ready browsers should support experimental prefixes, production ready releases should not." - [@rem](http://twitter/rem/)

The prefixes should be kept to nightly / beta builds for testing purposes only.  That was the intention for them anyway, those really interested in testing the features and giving feedback will and we won't have this problem going forward.
This means the CSS working group will need to standardize these properties fast so they can hit the stable releases.
