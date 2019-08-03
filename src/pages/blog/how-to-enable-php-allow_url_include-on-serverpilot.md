---
templateKey: article-page
title: How to enable php allow_url_include on ServerPilot
slug: enable-php-allow_url_include-serverpilot
date: 2019-08-03T09:45:39.621Z
cover: /img/enable-php-allow_url_include-on-serverpilot.jpg
tags:
  - Serverpilot
  - PHP
meta_title: How to enable php allow_url_include on ServerPilot
meta_description: >-
  You need ssh access to the ServerPilot server. Once you accessed the server
  run this command: sudo su. Edit the file with any command line editor that is
  available to you by running nano settings.conf or vim settings.conf. Add the
  line php_value[allow_url_include] = 1 and save the file.
---
In this article, I’ll show you how to enable allow_url_include PHP setting on ServerPilot and then modify any core variables which you could not do by using the .user.ini file. So let’s get started, there are only three steps to follow.

## 

Step 1:

Add a file named phpinfo.php with the following code:

```
<?php    
   // Show all information, defaults to INFO_ALL
   phpinfo();

   // Show just the module information.
   // phpinfo(8) yields identical results.
   phpinfo(INFO_MODULES);
?>
```

Once you added that file, go to your website URL (https://www.yourSite.com/phpinfo.php) to see the PHP information.

![php-7.1.14 screenshot](/img/php-7.1.14-screenshot.jpg "php-7.1.14-screenshot")


In the above image, you can see that my app uses PHP version 7.1.14. Now that I know the PHP version let’s get to step 2.

## Step 2:

You need ssh access to the ServerPilot server. Once you accessed the server run this command: `sudo su`

> This command will give you root level access and now you can tweak anything. So navigate to the etc directory on the server and type `ls` and you’ll see something like the following image:

![list directories with command line](/img/list-directories-with-command-line.jpg "List directories with command line")

Notice that there are multiple versions of PHP that are installed, your’s may vary. Now since my app is using a php1.X version of PHP I need to cd into the PHP 1.X version in the ssh (serverPilot) has different naming style but trust me if you know your PHP version you’ll hit the right file right away.



Let’s get into the `php7.1-sp` folder by typing `cd php7.1-sp` then `cd fpmpools.d` and there you’ll see files named as your app’s name. Get into the folder named as your app. My app’s name is one so I have a folder named `one.d` so I’ll do `cd one.d`. 

Create a file there calls it settings.conf by running this command: `touch settings.conf` and edit the file with any command line editor that is available to you by running `nano settings.conf` or `vim settings.conf`. Add the line `php_value[allow_url_include] = 1` and save the file.

## Step 3:

Restart your PHP service for the app by running this command `sudo service php7.1-fpm-sp restart`. Open the `phpinfo.php` file on your website again and search for `allow_url_include`. You’ll see it’s enabled now.
