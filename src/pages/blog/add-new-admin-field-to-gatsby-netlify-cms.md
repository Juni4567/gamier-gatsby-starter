---
templateKey: article-page
title: Add New Admin Field To Gatsby + Netlify CMS
slug: add-new-admin-field-gatsby-netlify-cms
date: 2019-07-22T12:20:31.893Z
cover: /img/add-new-admin-field-to-gatsby-netlify-cms.jpg
tags:
  - netlify
  - cms
  - gatsby
  - netlify-cms-gatsby
  - gatsby starter netlify cms
  - static site generator
  - reactjs
meta_title: Add New Admin Field To Gatsby + Netlify CMS
meta_description: >-
  Are you facing difficulty in adding new admin field to Gatsby coupled with
  Netlify? Here is the complete step by step guide on how to add new admin field
  to Gatsby Blog with Netlify CMS
---
Today we are going to have a look that how to add new admin field to Gatsby and Netlify CMS. But before that lets have a quick overview of Gatsby and Netlify. 

## **Overview of Gatsby and Netlify:**

Netlify is one of the most used open-source apps that provides an opportunity to the webmasters to edit the content and other data of their site on Github repository. It is a one-page app written in React. The goal of Netlify is to reduce the gap and interact with modern site generators. 

Gatsby is one of the most trendy site generators that makes an ideal combination with Netlify. It does not require any technicalities just install the Gatsby Plugin for Netlify and it will set up the complete static site. The best part about the Gatsby is that it divides the CSS and Javascript files into smaller chunks in an efficient way that increase the speed of the site. 

> Today, we will guide you on how to add new admin field to Gatsby and Netlify CMS. Below we have explained the whole process step by step so you can do it yourself with full ease. 

## Add field to the admin

* Add your new field under the \`fields:\` object
  in `static/admin/config.yml` (field starts showing)
* Re-run the `npm run start` command

## Show field data on the frontend

* Find the graphql query in the parent component where you want to display the value of the field. In your graphql query put the name of the field you added in your config.yml to get the data of  the field; for me, it was `(home-page.js:36)`. 
* Now if you are using the field value inside another component then you will have to pass it on via props to the child component; for me, it was `(home-page.js:12)`
  * > (HomePageTemplate/index.js:14)	- Pass the props to the component for referencing inside the component
* Inside the child component, set the correct Prototype (Prototype is the data type e.g. `string or array or object`) 
  * > (HomePageTemplate/index.js:74) - Define correct data type for the field

## Show the field value in the admin frontend

Pass the field data in the preview component via props. This will help in displaying the field value on page preview in realtime. For me, it was: `(preview-templates/HomePagePreview.js:19)`

That’s all you need to know I hope this article clears things up for you.

Here is a video that makes more sense if you are not a good reader 😉

<iframe width="1028" height="578" src="https://www.youtube.com/embed/t8uC0wodL20" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## **Benefits Of Using Gatsby Blog with Netlify CMS:**

* It allows the web editor to preview the editing or a live view while making changes in CMS
* It allows to make changes or edit the footer through CSS
* The combination of Gatsby and Netlify increases the web speed
* It loads only the small portion or chunks of the web to make it load faster and save the user time
* Adding New blog post or content will save it not only on the website but will also update the version on Github
* Netlify keeps on updating to provide the best user experience
* 

Thanks for reading. Did this article help you out? If it did, I hope you consider [sharing it](<https://twitter.com/share?text=Add%20new%20admin%20field%20to%20gatsby%20netlify%20CMS by @juni4567 👇 &url=https://gamier.co.uk/blog/add-new-admin-field-to-gatsby-netlify-cms/>). You might help someone else out. Thanks so much!

If you still face any query, contact us and we will get back to you.
