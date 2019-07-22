---
templateKey: article-page
title: Add new admin field to gatsby + netlify CMS
slug: add-new-admin-field-gatsby-netlify-cms
date: 2019-07-22T12:20:31.893Z
cover: /img/software-development.jpg
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
Add field to the admin

\- Add field meta to static/admin/config.yml (field starts showing)

\- Add your new field under the \`fields:\` object

	(config.yml:26)

\- Re-run the \`npm run start\` command



Show field data on the frontend

\- Find the graphql query in the parent component and bring the data of the newly added field into it

		1(home-page.js:36)

		2(home-page.js:12)



\- If the field is to be shown inside a child component then pass it on as props. Go inside the child component and set the correct proptype for it

		1(HomePageTemplate/index.js:74) - Define correct data type for the field

		2(HomePageTemplate/index.js:14)	- Pass the props to the component for referencing inside the component





Show the field value in the admin frontend

	1(preview-templates/HomePagePreview.js:19)
