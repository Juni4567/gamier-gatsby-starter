---
templateKey: article-page
title: 'Develop WordPress Themes with Docker [Complete Guide]'
slug: develop-wordpress-themes-with-docker
date: 2019-08-07T07:19:57.940Z
cover: /img/develop-wordpress-with-docker.jpg
tags:
  - Docker
  - docker-compose
  - wordpress
  - theme development
meta_title: 'Develop WordPress Themes with Docker [Complete Guide]'
meta_description: >-
  Here we have discussed the simple and easy procedure to develop WordPress
  Theme using docker. Even if you are a beginner you can develop your own
  WordPress Theme through docker using this guide.
---
Deploying containers with Docker isn't nearly as complicated as you might think. Jack Wallen walks you through the process of installing and deploying WordPress, with the help of Docker.

In this article, I'll set you up with docker to develop your WordPress theme/plugin. It's a replacement for your traditional wamp, xamp or lamp local server. We will be running inside a docker container on our local computer. Docker must be already installed on your computer before proceeding further.

But jumping to the way to develop WordPress theme through docker, you must know why you need to develop your own WordPress theme when the world of development is full of free and paid WordPress themes. 

## **Why to create WordPress theme?**

If you are a beginner, you might be wondering the need to develop WordPress theme. Fact is you can find a number of Free and Paid WordPress Themes and can customize them the way you want. But you may not get the design and the features that you are looking for. So, the best way is to develop WordPress Theme of your own choice. 

No, developing a WordPress theme is not a difficult process. If you are a beginner you can create WordPress Theme of your own choice by following our below guide. 

**Creating WordPress Theme requires two basic items:**

1. WordPress Website, where you will develop a custom WordPress Theme

2. An efficient Hosting Plan

After having these two essentials, you are all set on your way to develop WordPress Themes. 

## **Step By Step Guide To Develop WordPress Theme with Docker:**

Its time to start creating your own WordPress Themes. Here we will create WordPress Theme and with the help of docker, you can create your theme quickly in just a few steps. 

* ## Create docker-compose.yml:

Create a `docker-compose.yml` file in any directory where you want to develop your plugin or theme. You can create a folder called wp-docker and inside that create the `docker-compose.yml` file. Open the docker-compose.yml file in a text editor. Copy the following code in it and save it.

```
version: '3'
services:
  wordpress:
    depends_on:
      - db
    image: wordpress:4.9.4
    restart: always
    volumes:
      - ./wp-content:/var/www/html/wp-content 
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_PASSWORD: p4ssw0rd!
    ports:
      - 7006:80 # Expose http and https
      - 8443:443
    networks:
      - wp_nwk
  db:
    image: mysql:5.7
    restart: always
    volumes:
       - db_data:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: p4ssw0rd!
    networks:
      - wp_nwk
  phpmyadmin:
    depends_on:
      - db
    image: phpmyadmin/phpmyadmin
    restart: always
    ports:
      - 7005:80
    environment:
      PMA_HOST: db
      MYSQL_ROOT_PASSWORD: p4ssw0rd!
    networks:
      - wp_nwk
networks:
  wp_nwk:
volumes:
  db_data:
```

* ## Boot up with docker-compose up:

Now open terminal or a command line tool depending on your OS and run this command `docker-compose up`. This will take a while at first run because it needs to download the required repositories from docker hub.

It'll download the following repositories for you:

1. Wordpress:4.9.4
2. Mysql:5.7
3. PHPMyAdmin

After the download is complete it'll start listening on port `7006` on your computer. Congratulations! you can verify that by going to `localhost:7006` in any browser and you'll see a new WordPress setup page. You can also see your databases by opening localhost:7005 in your browser.

## Develop your WordPress theme or plugin:

If you look at your folder where you run the command line, you'll see that there is a folder named as `wp-content`. That's a live directory from your docker container where you can add any new theme/plugin or develop right inside and it'll be served on the URL specified.

That's all, you can now start developing your theme or plugin with docker.

## **Conclusion:**

Creating WordPress Theme is not as difficult as you think but it's not that much easy. You need to work very efficiently and wisely while creating WordPress theme or plugin as a single code can change the whole look. But following the above guide can assist you in creating your WordPress theme or plugin without any difficulty. 

## **FAQ:**

* ## **What is Docker?**

Docker is an application that provides a complete local environment only with few docker commands. It is compatible with different CMS and developing platforms including WordPress that allows to create WordPress theme or plugin.

* ## **From where I will get the Docker?**

Before starting developing WordPress theme, download the docker from their official website. Click on the option GET A DOCKER and chose the version of docker according to your platform. Once the file is downloaded, RUN the installer. After installation, restart your computer and your docker app will be ready to use. 

* ## **Can I set up a local WordPress development environment using docker?**

Yes, you can set up your local WordPress development through docker in only three steps:

1.	Download the Docker and Install it

2.	Set the WordPress development container

3.	Run your WordPress container and all set
