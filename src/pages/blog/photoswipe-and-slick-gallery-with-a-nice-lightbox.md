---
templateKey: article-page
title: Photoswipe and Slick gallery with a nice lightbox
slug: photoswipe-and-slick-gallery-with-a-nice-lightbox
date: 2018-03-29T03:55:49.370Z
cover: /img/photoswipe-with-slick-carousel.png
tags:
  - Technology
  - photoswipe
  - javascript
  - slick carousel
meta_title: Photoswipe and Slick gallery with a nice lightbox  - Gamier
meta_description: >-
  A few days ago I found a client who was asking me to create a gallery with
  lightbox. He required a gallery that has the ability to have multiple rows and
  is a carousel with clickable thumbnails; that when clicked opens in a light
  box(full screen)
---
A few days ago I found a client who was asking me to create a gallery with lightbox. He required a gallery that has the ability to have multiple rows and is a carousel with clickable thumbnails; that when clicked opens in a light box(full screen). There are really nice plugins that can be used to convert an ordinary list of images into a nice carousel. I am talking about using own carousel or bootstrap’s default carousel. but that does not solve the problem of showing thumbnails that can be clicked or I would say they have no image light box that can show the bigger version of the thumb. After having a search I found slick slider that has the ability to make as many rows in the carousel as you want. After that I had to find another plugin that can convert my thumbnails into clickable thumbs that opens a lightbox. I looked in google again and found photoswipe. I kept looking and ended up with Photoswipe and Slick gallery having all the features my client needed. I, Without any delay would like to show how I made this nice gallery with lightbox by combining photoswipe and slick together.

Let me first tell you that both the plugins are opensource so you can use and modify them for your needs.

## 1. The very first thing you need to do is download Photoswipe and Slick

* You can download slick from their git repository or simply click [this link](https://github.com/dimsemenov/photoswipe).
* If you did not find photoswipe here is their git repository url

## 2. Create the basic files for your gallery

Now that you have downloaded both of the plugins you need create a folder( a project) where you will want to use these two plugins. the following is the folder structure you need to adapt.

* Create a folder and name it whatever you want
* Inside the folder paste your downloaded folders photoswipe and slick
* Create an index.html and basic html markup structure into it (if you are using sublime text it’s easy to create a basic markup structure in sublime text. Press (shift+1) and then press tab button.)
* In your index.html include the required file for the plugins e.g. (photoswipe.css and photoswipe/default-skin/default-skin.css) and (slick.css and slick-theme.css)
* create a scripts.js file a styles.css file and include them in your index.html

If you are unsure about your html and have done the 2 step successfully(created file structure as demonstarted in the image) then you can simply copy the following code and follow along.

```
<!DOCTYPE html>
<html lang="en">
 <head>
 <meta charset="UTF-8">
 <title>Photoswipe+slick by Juni</title>
 
 <link rel="stylesheet" href="slick/slick-theme.css">
 <link rel="stylesheet" href="slick/slick.css">
 <link rel="stylesheet" href="photoswipe/photoswipe.css">
 <link rel="stylesheet" href="photoswipe/default-skin/default-skin.css">
 <link rel="stylesheet" href="styles.css">
 </head>
 <body>
 <div class="container">
 
 </div>
 
 <!-- scripts -->
 <script src="jquery.js"></script>
 <script src="slick/slick.js"></script>
 <script src="photoswipe/photoswipe.js"></script>
 <script src="photoswipe/photoswipe-ui-default.js"></script>
 <script src="scripts.js"></script>
 </body>
</html>
```

The above code loads all the required files from the directory structure I mentioned before.

## 3. Create our photoswipe lightbox with thumbnails and lightbox

The next step after setting all the structure up is to create a list of images for our gallery. I have saved you from finding images and adding their path to the html in the following code

```
<div id="SlickPhotoswipGallery" itemscope itemtype="https://schema.org/ImageGallery">
 <figure itemprop="associatedMedia" itemscope itemtype="https://schema.org/ImageObject">
 <a href="https://placehold.it/350x300?text=1" class="hover" data-size="1024x1024">
 <img src="https://placehold.it/350x300?text=1" itemprop="thumbnail" alt="Image description" />
 </a>
 </figure>

 <figure itemprop="associatedMedia" itemscope itemtype="https://schema.org/ImageObject">
 <a href="https://placehold.it/350x300?text=2" class="hover" data-size="1024x1024">
 <img src="https://placehold.it/350x300?text=2" itemprop="thumbnail" alt="Image description" />
 </a>
 </figure>

 <figure itemprop="associatedMedia" itemscope itemtype="https://schema.org/ImageObject">
 <a href="https://placehold.it/350x300?text=3" class="hover" data-size="1024x1024">
 <img src="https://placehold.it/350x300?text=3" itemprop="thumbnail" alt="Image description" />
 </a>
 </figure>
 </div>
```

This markup I got from photoswipe’s demo page and modified the image paths to dummy placeholder paths Now to make our lightbox function properly I am adding the photoswipe lightbox scripts to our scripts.js. here is the javascript code for it

```
$(document).ready(function(){
 var initPhotoSwipeFromDOM = function(gallerySelector) {

 // parse slide data (url, title, size ...) from DOM elements 
 // (children of gallerySelector)
 
 var parseThumbnailElements = function(el) {
 
 /* Extension to photoswipe. 
 First fetch the element clicked on. 
 It is used to set the index later */
 var entryElement = el.querySelectorAll('figure');
 var element = entryElement[0].querySelectorAll('a');
 var firstImage = element[0].getAttribute('href');

 /* Extension to photoswipe. 
 Now overwrite variable "el" and populate it with DOM data
 from the DIV containing the thumbnails */
 var allElm = document.querySelectorAll(gallerySelector);
 var el = allElm[0].querySelectorAll('figure');

 var thumbElements = el,
 numNodes = thumbElements.length,
 items = [],
 figureEl,
 linkEl,
 size,
 item;

 for(var i = 0; i < numNodes; i++) {

 figureEl = thumbElements[i]; // <figure> element


 // include only element nodes 
 if(figureEl.nodeType !== 1) {
 continue;
 }

 linkEl = figureEl.children[0]; // <a> element

 size = linkEl.getAttribute('data-size').split('x');

 // create slide object
 item = {
 src: linkEl.getAttribute('href'),
 w: parseInt(size[0], 10),
 h: parseInt(size[1], 10),
 /* Extension to photoswipe. 
 Extend object ITEM with "start". Set to true when it is the 
 thumbnail clicked in the browser.
 Search the source for item.start to see how it is used */
 start: linkEl.getAttribute('href') === firstImage ? true : false
 };

 if(figureEl.children.length > 1) {
 // <figcaption> content
 item.title = figureEl.children[1].innerHTML; 
 }

 if(linkEl.children.length > 0) {
 // <img> thumbnail element, retrieving thumbnail url
 item.msrc = linkEl.children[0].getAttribute('src');
 } 

 item.el = figureEl; // save link to element for getThumbBoundsFn
 items.push(item);
 }

 return items;
 };
// End parseThumbnailElements. 

 // find nearest parent element
 var closest = function closest(el, fn) {
 return el && ( fn(el) ? el : closest(el.parentNode, fn) );
 };

 // triggers when user clicks on thumbnail
 var onThumbnailsClick = function(e) {
 e = e || window.event;
 e.preventDefault ? e.preventDefault() : e.returnValue = false;

 var eTarget = e.target || e.srcElement;

 // find root element of slide
 var clickedListItem = closest(eTarget, function(el) {
 return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
 });

 if(!clickedListItem) {
 return;
 }

 // find index of clicked item by looping through all child nodes
 // alternatively, you may define index via data- attribute
 var clickedGallery = clickedListItem.parentNode,
 childNodes = clickedListItem.parentNode.childNodes,
 numChildNodes = childNodes.length,
 nodeIndex = 0,
 index;

 for (var i = 0; i < numChildNodes; i++) {
 if(childNodes[i].nodeType !== 1) { 
 continue; 
 }

 if(childNodes[i] === clickedListItem) {
 index = nodeIndex;
 break;
 }
 nodeIndex++;
 }



 if(index >= 0) {
 // open PhotoSwipe if valid index found
 openPhotoSwipe( index, clickedGallery );
 }
 return false;
 };

 // parse picture index and gallery index from URL (#&pid=1&gid=2)
 var photoswipeParseHash = function() {
 var hash = window.location.hash.substring(1),
 params = {};

 if(hash.length < 5) {
 return params;
 }

 var vars = hash.split('&');
 for (var i = 0; i < vars.length; i++) {
 if(!vars[i]) {
 continue;
 }
 var pair = vars[i].split('='); 
 if(pair.length < 2) {
 continue;
 } 
 params[pair[0]] = pair[1];
 }

 if(params.gid) {
 params.gid = parseInt(params.gid, 10);
 }

 return params;
 };

 var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
 var pswpElement = document.querySelectorAll('.pswp')[0],
 gallery,
 options,
 items;

 items = parseThumbnailElements(galleryElement);

 // define options (if needed)
 options = {

 // define gallery index (for URL)
 galleryUID: galleryElement.getAttribute('data-pswp-uid'),

 getThumbBoundsFn: function(index) {
 // See Options -> getThumbBoundsFn section of documentation for more info
 var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
 pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
 rect = thumbnail.getBoundingClientRect(); 

 return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};

 }

 };

 // PhotoSwipe opened from URL
 if(fromURL) {
 if(options.galleryPIDs) {
 // parse real index when custom PIDs are used 
 // https://photoswipe.com/documentation/faq.html#custom-pid-in-url
 for(var j = 0; j < items.length; j++) {
 if(items[j].pid == index) {
 options.index = j;
 break;
 }
 }
 } else {
 // in URL indexes start from 1
 options.index = parseInt(index, 10) - 1;
 }
 } else {
 options.index = parseInt(index, 10);
 }

 // exit if index not found
 if( isNaN(options.index) ) {
 return;
 }

 if(disableAnimation) {
 options.showAnimationDuration = 0;
 }
 
 /* Extension to photoswipe. 
 Set index with item.start */
 for (var findInd = 0; findInd < items.length; findInd++) {
 if (items[findInd].start) {
 options.index = findInd;
 break;
 } 
 }

 // Pass data to PhotoSwipe and initialize it
 gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
 gallery.init();
 };

 // loop through all gallery elements and bind events
 var galleryElements = document.querySelectorAll( gallerySelector );

 for(var i = 0, l = galleryElements.length; i < l; i++) {
 galleryElements[i].setAttribute('data-pswp-uid', i+1);
 galleryElements[i].onclick = onThumbnailsClick;
 }

 // Parse URL and open gallery if it contains #&pid=3&gid=1
 var hashData = photoswipeParseHash();
 if(hashData.pid && hashData.gid) {
 openPhotoSwipe( hashData.pid , galleryElements[ hashData.gid - 1 ], true, true );
 }

};

// execute above function
initPhotoSwipeFromDOM('#SlickPhotoswipGallery');
});
```

Note: I have wrapped my code inside scripts.js in jquery’s document.ready function just so it don’t get fired before our markup load.

## 4. Now that we have our Photoswipe plugin working let me move on and add our slick carousel into the game

The slick carousel is a really nice plugin for converting anything into a touch friendly carousel and all it needs is just load the plugin into your index.html and initialize it by targeting your gallery container with an id and append slick() with a dot in the end of your selector as you do in jquery like this `$(“#id”).slick();` The following is the code that you need to put in your `scripts.js` before our document.ready ends and after the photoswipe calls and you are good to see a nice photoswipe and slick gallery.
