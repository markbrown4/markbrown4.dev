---
title: "Node, a simple server"
tags: ["JavaScript"]
date: 2012-03-02
---

Firing up a simple web server is super handy, I've started using node so that I can fire up a server from any directory and view the pages from multiple devices and VM's.

<!-- more -->
Most of the things I am working on at the moment are simple front-end prototypes.
Browsing local files via file:///Users/markbrown4/projects/ in different browsers is problematic, you can't make ajax requests, some browsers treat local files differently.

## Enter Node
Node takes a .js file and fires up a web server.  
It has a heap of uses, in this case we only need it to do a little - serve html, css & js.

## Install

```shell
cd ~/projects/
git clone https://github.com/joyent/node.git
cd node
git checkout v0.6.7
./configure
make
sudo make install
```

Write a simple web server that serves html, css & js called.. "front-end-ftw.js" and put it in the directory of your site / app.

```js
var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {

  console.log('request starting...');

  var filePath = '.' + request.url;
  if (filePath == './')
      filePath = './index.htm';

  var extname = path.extname(filePath);
  var contentType = 'text/html';
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
  }

  path.exists(filePath, function(exists) {
    if (exists) {
      fs.readFile(filePath, function(error, content) {
        if (error) {
          response.writeHead(500);
          response.end();
        }
        else {
          response.writeHead(200, { 'Content-Type': contentType });
          response.end(content, 'utf-8');
        }
      });
    }
    else {
      response.writeHead(404);
      response.end();
    }
  });
}).listen(8125);

console.log('Server running at http://127.0.0.1:8125/');
```

http://thecodinghumanist.com/blog/archives/2011/5/6/serving-static-files-from-node-js

## Run it

```shell
cd ~/projects/my-kick-ass-project/
node front-end-ftw
```

## Anywhere
Load http://127.0.0.1:8125/ on an iDevice or test it in your windows vm.

## Content types
From there you can add any extra content types you want to serve differently, if you want to be able to load images directly in the browser you can add the extensions.
Making an offline web app? Add a cache manifest MIME type.

```js
case '.jpg':
  contentType = 'image';
  break;
case '.png':
  contentType = 'image';
  break;
case '.json':
  contentType = "application/json";
  break;
case '.manifest':
  contentType = 'text/cache-manifest';
  break;
```
