---
title: "Client-side MVC"
tags: ["JavaScript"]
date: 2013-07-09
---

What role should frameworks play in the front-end architecture of rich web applications?
People are [working](http://angularjs.org/) [hard](http://emberjs.com/) on frameworks to give us a more powerful, easier way to build the types of applications that have become common (single page applications).
I find myself agreeing with [Jeremy Ashkenas](https://twitter.com/jashkenas) that these all-singing, all-dancing frameworks are not the answer - a minimal framework that leaves you in control of when things happen and doesn't make assumptions about your UI is a much better place to start.

<!-- more -->
## The end game
We are setting out to build interactions on the web that look and feel like native applications.  The biggest challenge that web applications face in achieving this is *the network*, we rely on making requests across the internet to fetch and update data.  A large part of making an application feel native is remaining in control of *what* and *when* we request data from web servers.

By default, HTML is requested from a server and parsed by the browser discarding all of the state from previous requests.  We follow a link to move around, when we do this we trash and rebuild the 'native environment' on the client with each request.  If the HTML contains references to other assets it needs(images, CSS, JavaScript) they are requested by the browser automatically.

Having server-side techniques like russian-doll caching and turbolinks to make requests *just fast enough* isn't the answer, though their speed gains are impressive and worthwhile we still need to be able to manipulate important details with JavaScript. [Stop drawing dead fish](http://vimeo.com/64895205) by [Bret Victor](https://twitter.com/worrydream) is a brilliant articulation of why we should embrace the digital nature of the web to get the best experiences out of it.  The fact is that JavaScript gives us a much richer environment to work with, it allows us to store and maintain application state inside the browser, gain control over network requests and respond to user interaction instantly without waiting for the network.  We can respond to interactions programatically, close to the metal where it counts.

The end result is for us to [take JavaScript seriously](https://www.youtube.com/watch?v=4udR30JYenA).

## What's not a problem
Fetching HTML from the server is perfectly fine and has been the foundation of the web since the beginning, there are great tools and frameworks to help us build HTML and being dogmatic about squeezing all of this content into JSON doesn't make any sense to me.  It's still often the best method.

The time when rendering HTML server side becomes sub-par is when you need to dynamically change the DOM based on user interaction, relying on a web server to construct our UI simply will not do in these cases. If we already have the data we need, waiting for *the network* to provide us with a UI is slow and is the heart of the reason for client-side frameworks.

## Solving the problem

### Models and Views
Our content needs to live in two places on the client, in HTML so the users can see and interact with it, as well as in JavaScript objects so that we can manipulate it programatically.  All frameworks provide us with Models to give structure to our data in JavaScript and Views for responding to events and updating our HTML.

### Events
Having Views respond to changes in a Model is a great help in decoupling components.  If one piece of code makes a change to a model it doesn't need to know about all the views making use of it.  Each view can listen to changes in the models that it needs to know about and apply relevant updates to the page.

### Ajax
Rather than blowing away our environment with full page requests we need to be able to fetch new content when appropriate and update our models and views with new data.  Keeping local models allows us to make use of data in the page without asking the server what the current state is every time.

### Templates
Templates are just a clean way for us to turn JavaScript objects into HTML.  They are necesary if we want to be able to construct HTML client-side cleanly.

### URL's
We only need URL's for sharing a particular view that needs to be accessible.  
I have never once needed to share or load a specific URL inside GMail, I'd argue that URL's aren't important to that application.
When we do have distinct pages of our application Pjax is a great solution for rendering new views into the page fast whilst keeping the shell of our application the same.

## Remain in control
My biggest beef with frameworks like Angular and Ember is that they take control from you, do too much, making too many assumptions along the way about your UI and what features the authors deem important.  Both frameworks take control of when and how the DOM is rendered, you don't get to choose when this occurs, it's just part of the magic.  The entire page is rendered by the machine, you are just there to pass the machine some inital instructions and then you sit back and watch it behave.

When you adopt a heavyweight framework and say "This is an angular/ember application", from there on in you are encouraged to use their methods from start to finish, the whole hog.  Angular encourages you to write HTML templates with a lot of embedded logic and attribute hooks in your HTML to prevent the boilerplate being in JavaScript. I find this littering of the HTML templates ugly and a mix of concerns.  
Ember makes a feature of fetching data automatically for you as the data is required and updating the view for you, great right? No.  
We need to be able to control network requests for data and to control how our DOM is updated to achieve a polished result.

A feature that is always in demos for these frameworks is two way binding.  
"<b>Behold!</b> As I type in this text box you see before you, the views are updated automatically! I don't need to write any code to make this happen."  It's a neat magic trick but it's not a particular UI pattern that I want or need, I would rather be pulling the strings and choosing when things happen.

### A life sentence
Another concern I have is that if things turn bad, or another better framework is written you can't change frameworks or scale back, you're in rewrite terriority.  So, be sure you want to use this framework *forever* before signing up.

## Size matters
On the web it's best to be small.  I've always believed that you should have read, understood and agree with a framework before you adopt it.  These are the development versions of Ember, Angular, jQuery and Backbone full of comments just waiting for you to read them.  
Skimming through Backbone and jQuery it's easy to get a feel for how things are structured, Ember and Angular are beasts already and they're still in their infancy.

### lines of code

1. [Ember](http://builds.emberjs.com/ember-1.0.0-rc.6.js) - 30,971
1. [Angular](https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.js) - 14,847
1. [jQuery](http://code.jquery.com/jquery-2.0.3.js) - 8,880
1. [Backbone](http://backbonejs.org/backbone.js) - 1,572

### Mobile

The best mobile experiences I have had online are ones with minimal JavaScript and CSS3.
I know that devices will continue to improve and allow for more heavyweight applications but we're not there yet, the size and constant updating of the DOM will never be as fast as applications that focus on *less*.

## Code speaks

Nicholas Zakas' presentation [Enough with the JavaScript already!](http://www.slideshare.net/nzakas/enough-withthejavascriptalready/24) got a lot of attention recently, one slide in particular resonated with me.  As rich web applications are developed the time spent on JS grows inproportionally to the rest of the application, I've seen it happen.

Keeping any complex web application maintainable is a difficult task, it requires keeping things small, putting a lot of thought into decoupled components, as well as foresight into how the components will be used in the future.  Every time we add a component we're writing API's for future use.  I find it much easier to maintain a client-side application when you can choose the right set of tools and are not governed by strict rules, flexibility is key.

- Perhaps rendering HTML on the server is the simplest and best thing for an interaction.
- Maybe a small targetted javascript library does just what you need.
- Perhaps a component that initialises itself based on hooks in the HTML.
- Maybe using strict REST will be more inefficient than it could be.
- Hopefully tomorrow's templating language will be better than today's.

There are so many small decisions to be made when crafting an application, you must remain in control over the code execution and be able to choose appropriate tools.  Frameworks that make too many of these decisions for you do away with flexibility.

## One right way
There isn't one.

The complexity and tools you use on the front-end should entirely depend on your UI.  What is the simplest, fastest, most enjoyable interface we can build to help our users do something?
This is the main reason why a minimal framework like Backbone is *best*, it doesn't make any assumptions yet gives us practical tools to help us solve the real problems.

### Rules of thumb
- Don't aim to create a single-page app
- Create as few pages as possible
- Keep your JavaScript small
- Use libraries that you have read and agree with
- Render HTML on the server initially
- Use Pjax to change between pages
- Use Backbone Views and Models for complex components.

This won't always be the best path, it does work for a lot of real web applications though.
