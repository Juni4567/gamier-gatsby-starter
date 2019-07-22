---
templateKey: article-page
title: Add new admin field to gatsby + netlify CMS
slug: add-new-admin-field-gatsby-netlify-cms
date: 2019-07-22T12:20:31.893Z
cover: /img/add-new-admin-field-to-gatsby-netlify-cms.jpg
tags:
  - netlify
  - cms
  - gatsby
  - netlify-cms-gatsby
  - gatsby-starter-netlify-cms
  - static-site-generator
  - reactjs
meta_title: Add new admin field to gatsby + netlify CMS
meta_description: >-
  1. Add new field to netlify admin 2. Show field data on the frontend 3. Show
  the field value in the admin preview
---
## Add field to the admin

* Add your new field under the \`fields:\` object
  in `static/admin/config.yml` (field starts showing)
* Re-run the `npm run start` command

## Show field data on the frontend

* Find the graphql query in the parent component where you want to display the value of the field. In your graphql query put the name of the field you added in your config.yml to get the data of  the field; for me, it was `(home-page.js:36)`. 
* Now if you are using the field value inside another component then you will have to pass it on via props to the child component; for me, it was `(home-page.js:12)`
  * > (HomePageTemplate/index.js:14)	- Pass the props to the component for referencing inside the component
* Inside the child component, set the correct proptype (Protoype is the data type e.g. `string or array or object`) 
  * > (HomePageTemplate/index.js:74) - Define correct data type for the field

## Show the field value in the admin frontend

Pass the field data in the preview component via props. This will help in displaying the field value on page preview in realtime. For me it was: `(preview-templates/HomePagePreview.js:19)`

That’s all you need to know I hope this article clears things up for you.

Here is a video that makes more sense if you are not a good reader 😉

<iframe width="1028" height="578" src="https://www.youtube.com/embed/t8uC0wodL20" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Thanks for reading. Did this article help you out? If it did, I hope you consider [sharing it](<https://twitter.com/share?text=Add%20new%20admin%20field%20to%20gatsby%20netlify%20CMS by @juni4567 👇 &url=https://gamier.co.uk/blog/add-new-admin-field-to-gatsby-netlify-cms/>). You might help someone else out. Thanks so much!
