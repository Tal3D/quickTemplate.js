quickTemplate.js
================

quickTemplate.js is a super simple super lightweight templating engine. It´s inspired by projects like handlebars and mustache and aims to make templating even easier.

##Quick Start

All you need is a javascript object called **info** where you store all your info.

###Templating

Templating is done by enclosing a variable name in **{ and }** without spaces. quickTemplate.js will check your info object for a corresponding property. For example info.name (in your js) will correspond with {name} (in your html). The whole item will then be replaced. To parse the document simply call **render()**.

#####The template:
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

#####The info:
```javascript
var info = {
  "heading": "A cool place",
  "content": "This is my personal website...",
  "footer": "Copyright"
}
```

#####The parsed document:
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

Simply call **render()** to render your document.
