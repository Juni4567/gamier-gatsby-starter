---
templateKey: article-page
title: '[4 simple steps]Develop WordPress themes with docker'
slug: develop-wordpress-themes-with-docker
date: 2019-08-07T07:19:57.940Z
cover: /img/develop-wordpress-with-docker.jpg
tags:
  - Docker
  - docker-compose
  - wordpress
  - theme development
meta_title: '[4 simple steps]Develop WordPress themes with docker'
meta_description: >-
  How to setup WordPress locally for theme and plugin development with
  docker-compose.xml
---
Deploying containers with Docker isn't nearly as complicated as you might think. Jack Wallen walks you through the process of installing and deploying WordPress, with the help of Docker.

In this article I'll set you up with docker to develop your WordPress theme/plugin. It's a replacement for your traditional wamp, xamp or lamp local server. We will be running inside a docker container on our local computer. Docker must be already installed on your computer before proceeding further.

## Create docker-compose.yml:

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

## Boot up with docker-compose up:

Now open terminal or a command line tool depending on your OS and run this command `docker-compose up`. This will take a while at first run because it needs to download the required repositories from docker hub.

It'll download the following repositories for you:

1. Wordpress:4.9.4
2. Mysql:5.7
3. phpmyadmin


After download is complete it'll start listening on port 7006 on your computer. Congratulations! you can verify that by going to localhost:7006 in any browser and you'll see a new WordPress setup page. You can also see your databases by opening localhost:7005 in your browser.



## Develop your WordPress theme or plugin:

If you look at your folder where you run the command line, you'll see that there is a folder named as `wp-content`. That's a live directory from your docker container where you can add any new theme/plugin or develop right inside and it'll be served on the URL specified.

That's all, You can now start developing your theme or plugin with docker.
