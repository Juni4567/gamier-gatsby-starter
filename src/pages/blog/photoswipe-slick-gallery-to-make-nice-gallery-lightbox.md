---
templateKey: article-page
title: Photoswipe and Slick gallery to make a nice gallery Lightbox
slug: photoswipe-slick-gallery-to-make-nice-gallery-lightbox
date: 2019-07-03T11:55:49.370Z
cover: /img/photoswipe-with-slick-carousel.png
tags:
  - Technology
  - photoswipe
  - javascript
  - slick carousel
meta_title: Photoswipe and Slick gallery to make a nice gallery Lightbox  - Gamier
meta_description: >-
  Slick image gallery with lightbox functionality. This carousel has a grid of
  clickable thumbnails. Click on any thumbnail to open the image in a Lightbox.
---
One of my clients requested to create a Lightbox gallery. The feature requested were as following:

* Ability to have multiple rows 
* A carousel with clickable thumbnails
* Click on any thumbnail to open the image in a Lightbox.

There are really nice plugins that can be used to convert an ordinary list of images into a nice carousel. I am talking about using own carousel or bootstrap’s default carousel but that does not solve the problem.

After doing a google search I found slick slider with the ability to make multi-row carousel. The second problem to make my thumbnails clickable to open the larger version of that image in a Lightbox. I found PhotoSwipe for that.

Feel free to take a quick look at the <a href="http://juni4567.github.io/slick-photoswipe/" target="_blank">demo</a> before continuing with the tutorial. Also, you can find the <a href="https://github.com/Juni4567/Slick-photoswipe" target="_blank">finished code on GitHub</a>.

![Demo Photoswipe and Slick gallery lightbox](/img/slick-photoswipe-gallery-demo.gif)

## 1. Download PhotoSwipe and Slick

* You can download Slick from their git repository or simply click [this link](https://github.com/dimsemenov/photoswipe).
* If you did not find PhotoSwipe here is their [git repository URL](https://github.com/dimsemenov/PhotoSwipe)

## 2. Create the necessary files for your gallery

Following is the folder structure you need for the gallery:

* Create a new folder
* Paste the downloaded folders PhotoSwipe and 
* Create `styles.css` and `scripts.js`.
* Create `index.html` and copy the following code in it:


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

## 3. Create our PhotoSwipe Lightbox markup

Put the following code inside the `index.html`. This markup I got from PhotoSwipe’s demo page and modified the image paths to dummy placeholder paths.

```
<div id="SlickPhotoswipGallery" itemscope itemtype="https://schema.org/ImageGallery">
 <figure itemprop="associatedMedia" data-slideId="0" itemscope itemtype="https://schema.org/ImageObject">
 <a href="https://placehold.it/350x300?text=1" class="hover" data-size="1024x1024">
 <img src="https://placehold.it/350x300?text=1" itemprop="thumbnail" alt="Image description" />
 </a>
 </figure>

 <figure itemprop="associatedMedia" data-slideId="1" itemscope itemtype="https://schema.org/ImageObject">
 <a href="https://placehold.it/350x300?text=2" class="hover" data-size="1024x1024">
 <img src="https://placehold.it/350x300?text=2" itemprop="thumbnail" alt="Image description" />
 </a>
 </figure>

 <figure itemprop="associatedMedia" data-slideId="2" itemscope itemtype="https://schema.org/ImageObject">
 <a href="https://placehold.it/350x300?text=3" class="hover" data-size="1024x1024">
 <img src="https://placehold.it/350x300?text=3" itemprop="thumbnail" alt="Image description" />
 </a>
 </figure>
 </div>
```

## 4. Add scripts for initializing PhotoSwipe and Slick together

To make our Lightbox functional with javascript I am adding the following scripts to our `scripts.js`:

```
$(document).ready(function() {
    var initPhotoSwipeFromDOM = function(gallerySelector) {

        // parse slide data (url, title, size ...) from DOM elements 
        // (children of gallerySelector)

        var parseThumbnailElements = function(el) {

            /*  Extension to photoswipe. 
                First fetch the element clicked on. 
                It is used to set the index later */
            var entryElement = el.querySelectorAll('figure');
            var element = entryElement[0].querySelectorAll('a');
            var firstImage = element[0].getAttribute('href');

            /*  Extension to photoswipe. 
                Now overwrite variable "el" and populate it with DOM data
                from the DIV containing the thumbnails                      */
            var allElm = document.querySelectorAll(gallerySelector);
            var el = allElm[0].querySelectorAll('figure');

            var thumbElements = el,
                numNodes = thumbElements.length,
                items = [],
                figureEl,
                linkEl,
                size,
                item;

            for (var i = 0; i < numNodes; i++) {

                figureEl = thumbElements[i]; // <figure> element


                // include only element nodes 
                if (figureEl.nodeType !== 1) {
                    continue;
                }

                linkEl = figureEl.children[0]; // <a> element

                size = linkEl.getAttribute('data-size').split('x');

                // create slide object
                item = {
                    src: linkEl.getAttribute('href'),
                    w: parseInt(size[0], 10),
                    h: parseInt(size[1], 10),
                    /*  Extension to photoswipe. 
                        Extend object ITEM with "start". Set to true when it is the 
                        thumbnail clicked in the browser.
                        Search the source for item.start to see how it is used  */
                    start: linkEl.getAttribute('href') === firstImage ? true : false
                };

                if (figureEl.children.length > 1) {
                    // <figcaption> content
                    item.title = figureEl.children[1].innerHTML;
                }

                if (linkEl.children.length > 0) {
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
            return el && (fn(el) ? el : closest(el.parentNode, fn));
        };

        // triggers when user clicks on thumbnail
        var onThumbnailsClick = function(e) {
            e = e || window.event;
            e.preventDefault ? e.preventDefault() : e.returnValue = false;

            var eTarget = e.target || e.srcElement;
            var currentSlideIndex = eTarget.parentNode.parentNode.dataset.slideid;
            // console.log(currentSlideIndex)
            // find root element of slide
            var clickedListItem = closest(eTarget, function(el) {
                return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
            });

            if (!clickedListItem) {
                return;
            }

            // find index of clicked item by looping through all child nodes
            // alternatively, you may define index via data- attribute
            var clickedGallery = clickedListItem.parentNode.parentNode.parentNode.parentNode.parentNode,
                childNodes = clickedListItem.parentNode.childNodes,
                numChildNodes = childNodes.length,
                nodeIndex = 0,
                index;
            // console.log(clickedGallery);
            // for (var i = 0; i < numChildNodes; i++) {
            //     if (childNodes[i].nodeType !== 1) {
            //         continue;
            //     }

            //     if (childNodes[i] === clickedListItem) {
            //         index = nodeIndex;
            //         break;
            //     }
            //     nodeIndex++;
            // }



            if (currentSlideIndex >= 0) {
                // open PhotoSwipe if valid index found
                openPhotoSwipe(currentSlideIndex, clickedGallery);
            }
            return false;
        };

        // parse picture index and gallery index from URL (#&pid=1&gid=2)
        var photoswipeParseHash = function() {
            var hash = window.location.hash.substring(1),
                params = {};

            if (hash.length < 5) {
                return params;
            }

            var vars = hash.split('&');
            for (var i = 0; i < vars.length; i++) {
                if (!vars[i]) {
                    continue;
                }
                var pair = vars[i].split('=');
                if (pair.length < 2) {
                    continue;
                }
                params[pair[0]] = pair[1];
            }

            if (params.gid) {
                params.gid = parseInt(params.gid, 10);
            }

            return params;
        };

        var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
            // console.log("Index passed to openPhotoSwipe is ",index);
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

                    return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };

                }

            };

            // PhotoSwipe opened from URL
            if (fromURL) {
                if (options.galleryPIDs) {
                    // parse real index when custom PIDs are used 
                    // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                    for (var j = 0; j < items.length; j++) {
                        if (items[j].pid == index) {
                            options.index = j;
                            break;
                        }
                    }
                } else {
                    // in URL indexes start from 1
                    options.index = parseInt(index, 10) - 1;
                }
            } else {
                // console.log("index passed to photoswipe options",index)
                options.index = parseInt(index);
            }

            // exit if index not found
            if (isNaN(options.index)) {
                return;
            }

            if (disableAnimation) {
                options.showAnimationDuration = 0;
            }

            /*  Extension to photoswipe. 
                Set index with item.start */
            // for (var findInd = 0; findInd < items.length; findInd++) {
            //     if (items[findInd].start) {
            //         options.index = findInd;
            //         break;
            //     }
            // }
            // console.log(options);
            // Pass data to PhotoSwipe and initialize it
            gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        };

        // loop through all gallery elements and bind events
        var galleryElements = document.querySelectorAll(gallerySelector);

        for (var i = 0, l = galleryElements.length; i < l; i++) {
            galleryElements[i].setAttribute('data-pswp-uid', i + 1);
            galleryElements[i].onclick = onThumbnailsClick;
        }

        // Parse URL and open gallery if it contains #&pid=3&gid=1
        var hashData = photoswipeParseHash();
        if (hashData.pid && hashData.gid) {
            openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
        }

    };

    // execute above function
    initPhotoSwipeFromDOM('#SlickPhotoswipGallery');
    $("#SlickPhotoswipGallery").slick({
        dots: true,
        arrows: true,
        rows: 2,
        speed: 300,
        infinite: false,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<div class="slick-prev"><i class="i-chev-left-thin"></i><span class="sr-text">Previous</span></div>',
        nextArrow: '<div class="slick-next"><i class="i-chev-right-thin"></i><span class="sr-text">Next</span></div>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});
```

> Note: I have wrapped my code inside `scripts.js` in jQuery’s `document.ready` function just so it don’t get fired before our markup load.

## Wrapping Up

We’ve covered a lot of ground in just 361 words. Here are a few bullets to sum it all up. You have…

* Downloaded PhotoSwipe and Slick from GitHub.
* Created the basic markup structure for starting a web-page.
* Created markup for PhotoSwipe and Slick when combined together.
* Learned how to initialize PhotoSwipe and Slick carousel.

Oh, let me know in the comments if you found this tutorial useful!

Thanks for reading. Did this article help you out? If it did, I hope you consider [sharing it](https://twitter.com/share?text=Photoswipe%20and%20Slick%20gallery%20to%20make%20a%20nice%20gallery%20Lightbox%20by%20@juni4567%20%F0%9F%91%87%20&url=https://gamier.co.uk/blog/photoswipe-and-slick-gallery-with-a-nice-lightbox/). You might help someone else out. Thanks so much!
