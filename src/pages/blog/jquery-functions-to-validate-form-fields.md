---
templateKey: article-page
title: 9 jQuery functions to validate form input fields
slug: jquery-functions-to-validate-form-fields
date: 2019-09-12T13:10:27.282Z
cover: /img/jquery-functions-to-validate-form-input-fields.png
tags:
  - jQuery Functions
  - Form validation
  - Javascript
meta_title: 9 jQuery functions to validate form input fields
meta_description: >-
  Do you want to validate your form input fields to get the correct data from
  the user? Here we have listed 9 JQuery Functions to validate a form input
  fields
---
Today I am going to list top 9 jQuery functions that can validate different types of input fields The following are the most commonly used input fields that you’ll have to validate in daily routine

## **1. Check if the input is empty The following code shows validation of any input field is empty or not.**

The following script will execute as soon as the user leaves the input field.

`<div class="input-holder">`

`<input type="text" id="nameInput" class="Input-text" placeholder="Enter your name!">`

`<label for="nameInput" class="Input-label">Name</label>`

`</div>`

`<script>`

`   var nameInput = document.querySelector('#nameInput');`

`   var errorMessage = document.createElement('span');`

`   errorMessage.classList.add("alert")`

`   errorMessage.textContent = "This field is required";`

``

`   nameInput.addEventListener('focusout', function(e) {`

`  if(e.target.value == ''){`

`       // Insert the new node before the reference node`

`       nameInput.parentNode.insertBefore(errorMessage, nameInput.nextSibling);`

`     }else{ `

`      errorMessage.remove();`

`    }`

`   });`

` </script>`

View this [**DEMO**](https://codepen.io/juni4567/pen/xjazYO) for better understanding.

## **2. Validate an input field for valid URL input**

The following code checks an input field and tells if a valid URL is inserted. This solution uses regular expressions to validate input content.

`<script type="text/javascript">`

` // isValidUrl: check if the value passed is a valid url (True if valid, false if invalid)`

`   urlRegex = /^(?:(?:(?:https?|ftp):)?/ / )( ? : S + ( ? ::S * ) ? @) ? ( ? : ( ? !( ? : 10 | 127)( ? : .d { 1, 3 }) { 3 })( ? !( ? : 169.254 | 192.168)( ? : .d { 1, 3 }) { 2 })( ? !172.( ? : 1[6 - 9] | 2 d | 3[0 - 1])( ? : .d { 1, 3 }) { 2 })( ? : [1 - 9] d ? | 1 dd | 2[01] d | 22[0 - 3])( ? : .( ? : 1 ? d { 1, 2 } | 2[0 - 4] d | 25[0 - 5])) { 2 }( ? : .( ? : [1 - 9] d ? | 1 dd | 2[0 - 4] d | 25[0 - 4])) | ( ? : ( ? : [a - zu00a1 - uffff0 - 9] - * ) * [a - zu00a1 - uffff0 - 9] + )( ? : .( ? : [a - zu00a1 - uffff0 - 9] - * ) * [a - zu00a1 - uffff0 - 9] + ) * ( ? : .( ? : [a - zu00a1 - uffff] { 2, })). ? )( ? ::d { 2, 5 }) ? ( ? : [/?#]S*)?$/i;`

` $("#urlInput").on('focusout', function() {`

`   var urlTest = false;`

`   if (!urlRegex.test($(this).val())) {`

``

`    if (!$(this).next(".error").length) {`

`     $(this).after("<span class='error'> Please insert a valid url<span>");`

`    }`

`  } else {`

`    $(this).next(".error").remove();`

`  }`

` });`

`</script>`

## **3. Validate an input field for valid email input**

`<input id="emailInput" type="text" />`

` <script type="text/javascript">`

`   // isValidEmail: check if the value passed is a valid email (True if valid, false if invalid)`

`   emailRegex = /^[A-Za-z0-9_-.]+@[A-Za-z0-9_-.]{2,}.[A-Za-z0-9]{2,}(.[A-Za-z0-9])?/;`

`  $("#emailInput").on('focusout', function(){`

`   if(!emailRegex.test($(this).val())){`

`    if(!$(this).next(".error").length){`

`     $(this).after("<span class='error'> Please insert a valid email<span>");`

`    }`

`   }else{`

`     $(this).next(".error").remove();`

`   }`

`  });`

` </script>`

## **4. Validate a Textarea field if it’s empty or not**

The following code validates if the textarea was filled with text or left empty.

`<textarea id="textareaInput" cols="30" name="" rows="10"></textarea> <script type="text/javascript">`

` // isEmpty : check if the textarea is empty (true if empty false if filled)`

` $("#textareaInput").on('focusout', function(){`

` if(($(this).val() == '') ? true : false){`

` if(!$(this).next(".error").length){`

` $(this).after("<span class='error'> Please input text<span>");`

` }`

` }else{`

` $(this).next(".error").remove();`

` }`

` });`

` </script>`

## **5. Validate an input field for valid password input**

The following code validates an input field and identifies if the password requires the given criteria. The criteria are “Input must contain at least one digit/lowercase/uppercase letter and be at least six characters long”.

`<input id="passwordInput" type="password" />`

` <script type="text/javascript">`

` // isValidEmail: check if the value passed is a valid email (True if valid, false if invalid)`

` emailRegex = /^(?=.*d)(?=.*[a-z])(?=.*[A-Z])w{6,}$/;`

` $("#passwordInput").on('focusout', function(){`

` if(!emailRegex.test($(this).val())){`

` if(!$(this).next(".error").length){`

` $(this).after("<span class='error'> Input must contain at least one digit/lowercase/uppercase letter and be at least six characters long<span>");`

` }`

` }else{`

` $(this).next(".error").remove();`

` }`

` });`

` </script>`

## **6. Check if the Checkbox is checked or not**

The following code shows/hides more fields if the checkbox is checked/not checked.

`<label><input id="checkboxInput" type="checkbox" />Check this to show more fields</label></pre>`

`<div class="more-fields" style="display: none;"><label><input type="checkbox" />more fields 1</label> <label><input type="checkbox" />more fields 2</label> <label><input type="checkbox" />more fields 3</label></div>`

`<script>`

` // isChecked : check if the checkbox is checked (true if checked false if not checked)`

` $("#checkboxInput").on('click', function(){`

` if(!$(this).is(":checked")){`

` if(!$(this).next(".error").length){`

` $(this).after("<span class='error'> Please input text<span>");`

` }`

` }else{`

` $(this).next(".error").remove();`

` }`

` });`

` </script>`

Check this to show more fields

## **8. Validate if user input is a number**

The following code will show an error message when something other than numbers is inserted.

`<input id="numberInput" type="text" />`

` <script>`

` // isEmpty : check if the input is empty (true if empty false if filled)`

` $("#nameInput").on('focusout', function(){`

`   if(isNaN($(this).val())){`

`     if(!$(this).next(".error").length){`

`       $(this).after("<span class='error'> Please input a number<span>");`

`     }`

`   }else{`

`       $(this).next(".error").remove();`

`   }`

` });`

` </script>`

## **9. Validate if user input is a valid phone number**

The code validates if the user inserted a correct phone number. If the given criteria are not matched then an error will be shown. The criteria are given as following. All valid:

* 1 800 5551212
* 800 555 1212
* 8005551212
* 18005551212
* +1800 555 1212 extension65432
* 800 5551212 ext3333

Invalid #s

* 234-911-5678
* 314-159-2653
* 123-234-5678

`<input type="text" id="phoneInput">`

` <script type="text/javascript">`

` // isValidPhone: check if the value passed is a valid phone number (True if valid, false if invalid)`

` phoneRegex = /(?:(?:+?1s*(?:[.-]s*)?)?(?:(s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]‌​)s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))s*(?:[.-]s*)?)([2-9]1[02-9]‌​|[2-9][02-9]1|[2-9][02-9]{2})s*(?:[.-]s*)?([0-9]{4})s*(?:s*(?:#|x.?|ext.?|extension)s*(d+)s*)?$/i;`

` var html = "";`

` html += "<span class='error'> Please insert a valid phone number<span>";`

` html += "<div>"`

` html += "<ul>"`

` html += "<li>1 800 5551212</li>"`

` html += "<li>800 555 1212</li>"`

` html += "<li>8005551212</li>"`

` html += "<li>18005551212</li>"`

` html += "<li>+1800 555 1212 extension65432</li>"`

` html += "<li>800 5551212 ext3333</li>"`

` html += "<li><h1>Invalid #s</h1></li>"`

` html += "<li>234-911-5678</li>"`

` html += "<li>314-159-2653</li>"`

` html += "<li>123-234-5678</li>"`

` html += "</ul>"`

` html += "</div>"`

``

` $("#phoneInput").on('focusout', function(){`

`   if(!phoneRegex.test($(this).val())){`

`     if(!$(this).next(".error").length){`

`       $(this).after(html);`

`     }`

`   }else{`

`     $(this).next(".error").remove();`

`   }`

` });`

` </script>`
