quickTemplate.js
================

quickTemplate.js is a super simple super lightweight templating engine. It´s inspired by projects like handlebars and mustache and aims to make templating even easier.

##Quick Start

quickTemplate.js will render an object's contents onto a string and return the processed string.

```javascript
render("My name is {name}.", {"name": "Tal"}); // --> "My name is Tal."
```

###Templating

Templating is done by enclosing a variable name in **{ and }** without spaces. quickTemplate.js will check your info object for a corresponding property. For example {"name": "Tal"} (in your js) will correspond with {name} (in your html).

#####The template *(html)*:
```html
<html>
  <head>
    <title>My website</title>
  </head>
  <body>
    <header>{heading}</header>
    <section>{content}</section>
    <footer>{footer}</footer>
  </body>
</html>
```

#####The info object *(javascript)*:
```javascript
var info = {
  "heading": "A cool place",
  "content": "This is my personal website...",
  "footer": "Copyright"
}
```

#####The parsed document *(html)*:
```html
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <header>A cool place</header>
    <section>This is my personal website...</section>
    <footer>Copyright</footer>
  </body>
</html>
```

###Rendering

To render your whole document do:

```javascript
var info = {};
document.body.innerHTML = render(document.body.innerHTML, info);
```
