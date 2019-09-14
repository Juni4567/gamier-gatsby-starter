---
templateKey: article-page
title: 'Remove Sora Templates Copyright Without Redirecting [Tested]'
slug: remove-sora-templates-copyright-without-redirecting
date: 2019-09-14T11:38:32.844Z
cover: /img/how-to-remove-copyright-from-sora-templates.png
tags:
  - Sora
  - Blogger Templates
  - Copyright Text
meta_title: 'Remove Sora Templates Copyright Without Redirecting [Tested]'
meta_description: >-
  Do you want to remove copyrights of sora blogger template? Here is the 100%
  Working and Tested method to remove Sora Templates Copyright Without
  Redirecting
---
You like a blogger template and do not have enough money to buy it. Don’t worry, you are on the right page. Having spent many years in the field of web technologies I am now able to share a few tricks how you can Re-use, Optimize and fix bugs in your blogger theme. 

## **Why Use Sora Blogger Templates?**

Sora Blogger Template is one of the most used blogger template and is highly recommended for the beginners. It is available in free version and does not want the beginners to invest even a single penny. Plus, it is highly responsive and offers all the features in free version to bloggers. 

## **Steps To Remove Sora Copyrights Without Redirecting**

Following is the 100% working technique to remove attribution from Sora Templates. Follow the below steps one by one and you can change the footer copyright text without redirecting. We can assure you 100% that you will not be redirected to another site or page. 

## **STEP 1:**

Go to your website where you have installed the template using chrome browser and scroll all the way down to the bottom of page. You’ll see an arrow appearing on the bottom right corner(shown in the following screenshot too). Right-click on it and press “Inspect Element”, set a break on attribute modification(demonstrated in the following image). Then scroll back to top you will see the browser stops scrolling, don’t worry about that and keep reading.

![Step 1 Remove Sora Copyright Without Redirecting](/img/inspector-window-opened.png "Step 1 Remove Sora Copyright Without Redirecting")

![A gif image demonstrating the browser debugger stopping at a breakpoint ](/img/see-the-pointer.gif "A gif image demonstrating the browser debugger stopping at a breakpoint ")

## **STEP 2:**

When the browser stops scrolling you’ll see some code showing in the inspector window, in that window locate the file as demonstrated in the following screenshot (there is an anonymous function where all the magic is).

![Image showing browser debugger stopped at certain event break](/img/screenshot-demonstrating-debugger-window-showing-hex-code-converted-to-javascript.png "Image showing browser debugger stopped at certain event break")

## **STEP 3:**

Copy the code from the left side window and save it in a file. Open that file in sublime text and search for this line: “window.onload”. Remove the code as selected/demonstrated in the following screenshot and then save the file somewhere(you can name it step3.txt, we will need this file in a moment):

![Step 3 Screenshot showing code selected](/img/screenshot-showing-code-selected-that-cause-the-attribute-issue.png "Screenshot showing code selected")

## **STEP 4:**

To be able to edit the template code please first login to your Blogger dashboard then click on “Theme” and then “Edit HTML”.

> **NOTE:**
>
>  EDITING BLOGGER THEME DIRECTLY IN THE BROWSER IS NOT A PREFERED METHOD SO YOU NEED A CODE EDITOR E.G. [SUBLIMETEXT](https://www.sublimetext.com/). TO EDIT YOUR TEMPLATE. PLEASE BACKUP YOUR CURRENT THEME.

## **STEP 5:**

If you are using a code editor and have already backed up your theme files then search for the following lines. Select the code starting from var _NXG1F1 to eval(_NXG1Fl); inclusive and replace it with the code you saved in a file(step3.txt).

`// Main Scripts`

`or`

`var _NXG1Fl=`

> **NOTE:**
>
>  THE FOLLOWING IMAGE SHOWS HOW THE CODE ACTUALLY LOOKS LIKE. THIS CODE HAS SOME IMPORTANT THEME FEATURES TOO, SO BE CAREFUL.

![An image showing HTML/Oct/Hex encoded javscript](/img/horrible-screen-with-hex-coded-javascript.png "An image showing HTML/Oct/Hex encoded javscript")

## **STEP 6:**

Replace the modified theme code with the code in the “Edit HTML” section of your blogger admin. Save theme and try to modify the copyright text now, it will definitely work.

Was this article helpful? Please share and subscribe for more awesome tricks!

Are you lazy like me and could not follow along? I have created a patched version for you. You can download it from here: [Top news blogger template by Sora templates free version without attribution text 100%
](https://www.blogger.com/blogin.g?blogspotURL=https://gamier.blogspot.com/2017/09/top-news-sora-templates-free-version-without-copyright.html)

Don’t forget to share your views with us. Comment down and we will get back to you.
