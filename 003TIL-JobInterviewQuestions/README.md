#### General Questions:

* What did you learn yesterday/this week?
  * **R**: I've learned a few interesting things reading Clean Code, specially that there are other developers that actually like having small functions with meaningful names on their screens while coding. I thoght I was the only one.
* What excites or interests you about coding?
  * **R**: Being able to connect, entertain, help and solve people's issues through my code. Excites me to see someone using something I did and appreciate my work via making their lives better in some way.
* What is a recent technical challenge you experienced and how did you solve it?
  * **R**: I'm doing some freelance latelly. I had to build four pages and all of them where pretty much the same, except for a few details. I had to do them as fast as I could and in a way that would not give me an headache someday. So I developed a Higher Order Component that would wrap all the forms I was building with all meaningful code; created a generic table component that I could just pass some props and it would render everything I needed hastily; wrote a script that would create a component folder and files (test included) for me, all I had to do was tell it the component's name; created an axios resources library that would make my life calling APIs easier. Results: The freelance expected me to do it in 4 days. I did everything in 1.
* What UI, Security, Performance, SEO, Maintainability or Technology considerations do you make while building a web application or site?
  * **R**: 
* Talk about your preferred development environment.
  * **R**: The environment has to be clean and organized. If I can have some coffee I would be happy too, otherwise I can bring it from home. I use VSCode with a few plugins, like eslint, sonarlint, editorconfig, and snippets. I love working on my Macbook pro.
* Which version control systems are you familiar with?
  * **R**: Pretty much git. Five years ago I worked with Apache Subversion and mercurial.
* Can you describe your workflow when you create a web page?
  * **R**: First I would figure out what the page should do and make a plan on how to do it; Then I would draw a few ideas on how could I develop it; Then I would try to use the component we already have so I can develop faster, DRY, and KISS; After that I would code the page and write some tests to guarantee its working as expected.
* If you have 5 different stylesheets, how would you best integrate them into the site?
  * **R**: If they were all local stylesheets, I would keep them right where they are and use a bundling tool to combine them into a single file for deployment, to minimize HTTP requests. If they were (for any reason) a copy of a CSS framework, I wouldn't use them. Instead, I would replace the CSS files with CDN urls on my HTML.
* Can you describe the difference between progressive enhancement and graceful degradation?
  * **R**: 
* How would you optimize a website's assets/resources?
  * **R**: I would use a bundling tool to minify my CSS and JavaScript code; if the website is a SPA, I would make it Lazy Load and use a tool like WebpackCodeSplitting to have small on demand pieces loaded to client instead of the entire application/website; I would make my server send it gzipped; I would host the application on a CDN server too.
* How many resources will a browser download from a given domain at a time?
  * What are the exceptions?
    * **R**: https://github.com/utatti/Front-end-Developer-Interview-Questions-And-Answers/blob/master/answers/general-questions.md
* Name 3 ways to decrease page load (perceived or actual load time).
  * **R**: minifying and gzipping the code (actual); showing spinners or progress bars (perceived); precaching or preloading the application, respectively using ServiceWorkers or preload attributes or libs like InstantClick 
* If you jumped on a project and they used tabs and you used spaces, what would you do?
  * **R**: I would configure a editorconfig file if the project didn't have one.
* Describe how you would create a simple slideshow page.
  * **R**: 
* If you could master one technology this year, what would it be?
  * **R**: AI.
* Explain the importance of standards and standards bodies.
  * **R**: 
* What is Flash of Unstyled Content? How do you avoid FOUC?
  * **R**: It's when a webpage appears briefly with the browser's default styles before the actual webpage style. I would avoid it placing my CSS on the `<head>` tag.
* Explain what ARIA and screen readers are, and how to make a website accessible.
  * **R**:
    * ARIA ([Accessible Rich Internet Applications](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)) is a set of attributes that define ways to make the web more accessible to people with disabilities. Examples: atia-checked (indicates the state of a checkbox) and aria-disabled (indicates that an element is disabled), etc.;
    * Screen Readers: are software applications that attempt to convey what people with normal eyesight see on a display to their users via non-visual means, like text-to-speech, sound icons or a braille device.
* Explain some pros and cons for CSS animations versus JavaScript animations.
  * **R**: https://css-tricks.com/myth-busting-css-animations-vs-javascript/
* What does CORS stand for and what issue does it address?
  * **R**: Cross-Origin Resource Sharing. Allow restricted resources from a first domain to be requested from another domain that deffers from the first one.

#### HTML Questions:

* What does a `doctype` do?
  * **R**: The `doctype` is used to ensure the browser will render the page in standard mode.
* What's the difference between full standard's mode, almost standard's mode and quirks mode?
  * **R**: 
    * Full Standards mode: the default mode. Will tell the browser that the document was written with the latest standards in mind and could be rendered as normal
    * Almost standards mode: will tell the browser that the document was written with the latest standards, but still have some quirks.
    * Quirks mode: will tell the browser to prepare itself for possible compatibility issues
* What's the difference between HTML and XHTML?
  * **R**: 
    * HTML: HyperText markup Language
    * XHTML: eXtensible HyperText markup Language. Is a reformulation of HTML using XML syntax. The differences are: all tags should be closed, and they have draconian error-handling, meaning it will break with the simplest mistake made.
* Are there any problems with serving pages as `application/xhtml+xml`?
  * **R**: browsers pior to IE8 (included) can't parse XHTML.
* How do you serve a page with content in multiple languages?
  * **R**: By changing the `lang` attribute on the html element. 
* What kind of things must you be wary of when design or developing for multilingual sites?
  * **R**: Getting the right language of the audience and making easy to change the language on the page.
* What are `data-` attributes good for?
  * **R**: to store data on the DOM and/or used to keep track of information
* Consider HTML5 as an open web platform. What are the building blocks of HTML5?
  * **R**: 
    * more semantic text markup, like `<aside>`, `<article>`, `<footer>`, etc.;
    * new form elements and video and audio;
    * canvas and SVG;
    * several browsers APIs like: bluetooth, geolocation, web workers, data storage, etc.;
* Describe the difference between a `cookie`, `sessionStorage` and `localStorage`.
  * **R**: 
    * Cookies: It is used to keep key/value data on the browser. It was heavily used in the past;
    * Session Storage: It's another way of storing data on the browse. It is non persistent and its scope is the current window;
    * Local Storage: It's persistant and the scope is the application domain. Could be used with the default mode (storing key/value pairs) or with WebSQL, which is a browser database.
* Describe the difference between `<script>`, `<script async>` and `<script defer>`.
  * **R**: 
    * `<script>`: the browser will load this script as soon as it reads it; render blocking;
    * `<script async>`: the browser will load this script as soon as it reads it, but it's not render blocking and can be loaded asyncronously;
    * `<script defer>`: the browser will postpone the script until the page finishes rendering, but will load before the onload event
* Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?
  * **R**: 
    * It is a good idea to place `<link>` between `<head>` tags because we can avoid having issues like FOUC (Flash of Unstyled Content);
    * Styling metters most for the UX puposes. Placing the `<script>` right before the `</body>` tag will make the page load all CSS and place visual content on screen and, after that, the render blocking JavaScript will be loaded for user interaction;
    * Exceptions: when async or defer are used;
* What is progressive rendering?
  * **R**: Is a technique used to render content as quickly as possible. Examples:
    * Lazy loading images: the browser will load a specific image given the browser viewport size, instead of loading all images at page load;
    * Prioritizing visible content (above the fold rendering): this recommendation is listed on PageSpeed insights and what it tells us is that the application should require as minimum as css/content/javascript as possible to load the [above-the-fold](https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent) content of a web page.
* Have you used different HTML templating languages before?
  * **R**: Yes, pug a.k.a. Jade.

#### CSS Questions:

* What is the difference between classes and IDs in CSS?
  * **R**: 
    * IDs (`#` operator) are unique selectors/hooks in CSS. Each element can have only one ID and each page can have only one element with that ID;
    * Classes (`.` operator) sets a group of elements that will be styled. They are not unique, meaning that the same class can be used on multiple elements and each page can have have the same class on multiple elements;
* What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
  * **R**:
    * Resetting is used to remove all built-in browser styling;
    * Normalizing is used to make built-in browser styling consistent accross browsers;
    * I would use them both; Doing so would guarantee my page styling is consistent across several browsers.
* Describe Floats and how they work.
* Describe z-index and how stacking context is formed.
* Describe BFC(Block Formatting Context) and how it works.
* What are the various clearing techniques and which is appropriate for what context?
* Explain CSS sprites, and how you would implement them on a page or site.
* What are your favourite image replacement techniques and which do you use when?
* How would you approach fixing browser-specific styling issues?
* How do you serve your pages for feature-constrained browsers?
  * What techniques/processes do you use?
* What are the different ways to visually hide content (and make it available only for screen readers)?
* Have you ever used a grid system, and if so, what do you prefer?
* Have you used or implemented media queries or mobile specific layouts/CSS?
* Are you familiar with styling SVG?
* How do you optimize your webpages for print?
* What are some "gotchas" for writing efficient CSS?
* What are the advantages/disadvantages of using CSS preprocessors?
  * Describe what you like and dislike about the CSS preprocessors you have used.
* How would you implement a web design comp that uses non-standard fonts?
* Explain how a browser determines what elements match a CSS selector.
* Describe pseudo-elements and discuss what they are used for.
* Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.
* What does ```* { box-sizing: border-box; }``` do? What are its advantages?
* List as many values for the display property that you can remember.
* What's the difference between inline and inline-block?
* What's the difference between a relative, fixed, absolute and statically positioned element?
* The 'C' in CSS stands for Cascading.  How is priority determined in assigning styles (a few examples)?  How can you use this system to your advantage?
* What existing CSS frameworks have you used locally, or in production? How would you change/improve them?
* Have you played around with the new CSS Flexbox or Grid specs?
* How is responsive design different from adaptive design?
* Have you ever worked with retina graphics? If so, when and what techniques did you use?
* Is there any reason you'd want to use `translate()` instead of *absolute positioning*, or vice-versa? And why?

#### JS Questions:

* Explain event delegation
  * **R**: It's when you delegate the event handling/listening to a parent node
* Explain how `this` works in JavaScript
  * **R**: 
* Explain how prototypal inheritance works
  * **R**: 
* What do you think of AMD vs CommonJS?
  * **R**: 
* Explain why the following doesn't work as an IIFE: `function foo(){ }();`.
  * **R**: Because you're not done declaring something and is trying to execute it. In order to make it work, place the function inside parenthesys then call it.
  * What needs to be changed to properly make it an IIFE?
* What's the difference between a variable that is: `null`, `undefined` or undeclared?
  * **R**: 
    * Null: the variable was declared and has null as value
    * Undefined: the variable was declared, but not defined yet
    * Undeclared: the variable was not declared/created
* How would you go about checking for any of these states?
  * **R**: 
* What is a closure, and how/why would you use one?
  * **R**: closure is created inside functions. It is generally used when there are inner function inside outer functions and closure refers to the hability the inner function has to access the outer function variables.
* What's a typical use case for anonymous functions?
  * **R**: writing IIFEs
* How do you organize your code? (module pattern, classical inheritance?)
  * **R**: module pattern
* What's the difference between host objects and native objects?
* Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?
* What's the difference between `.call` and `.apply`?
  * **R**: `call` and `apply` do the same thing: call a function. The difference is that apply you call the function and pass in parameters as an array and call you pass in parameters as a list
* Explain `Function.prototype.bind`.
  * **R**: that function changes the context on where the function is called. it returns a function with that new scope.
* When would you use `document.write()`?
* What's the difference between feature detection, feature inference, and using the UA string?
* Explain Ajax in as much detail as possible.
* What are the advantages and disadvantages of using Ajax?
* Explain how JSONP works (and how it's not really Ajax).
* Have you ever used JavaScript templating?
  * If so, what libraries have you used?
* Explain "hoisting".
* Describe event bubbling.
* What's the difference between an "attribute" and a "property"?
* Why is extending built-in JavaScript objects not a good idea?
* Difference between document load event and document DOMContentLoaded event?
* What is the difference between `==` and `===`?
* Explain the same-origin policy with regards to JavaScript.
* Make this work:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```
* Why is it called a Ternary expression, what does the word "Ternary" indicate?
* What is `"use strict";`? what are the advantages and disadvantages to using it?
* Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`
* Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?
* Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?
* Explain what a single page app is and how to make one SEO-friendly.
* What is the extent of your experience with Promises and/or their polyfills?
* What are the pros and cons of using Promises instead of callbacks?
* What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
* What tools and techniques do you use debugging JavaScript code?
* What language constructions do you use for iterating over object properties and array items?
* Explain the difference between mutable and immutable objects.
  * What is an example of an immutable object in JavaScript?
  * What are the pros and cons of immutability?
  * How can you achieve immutability in your own code?
* Explain the difference between synchronous and asynchronous functions.
* What is event loop?
  * What is the difference between call stack and task queue?
* Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`

#### Testing Questions:

* What are some advantages/disadvantages to testing your code?
* What tools would you use to test your code's functionality?
* What is the difference between a unit test and a functional/integration test?
* What is the purpose of a code style linting tool?

#### Performance Questions:

* What tools would you use to find a performance bug in your code?
* What are some ways you may improve your website's scrolling performance?
* Explain the difference between layout, painting and compositing.

#### Network Questions:

* Traditionally, why has it been better to serve site assets from multiple domains?
* Do your best to describe the process from the time you type in a website's URL to it finishing loading on your screen.
* What are the differences between Long-Polling, Websockets and Server-Sent Events?
* Explain the following request and response headers:
  * Diff. between Expires, Date, Age and If-Modified-...
  * Do Not Track
  * Cache-Control
  * Transfer-Encoding
  * ETag
  * X-Frame-Options
* What are HTTP methods? List all HTTP methods that you know, and explain them.

#### Coding Questions:

*Question: What is the value of `foo`?*
```javascript
var foo = 10 + '20';
```

*Question: How would you make this work?*
```javascript
add(2, 5); // 7
add(2)(5); // 7
```

*Question: What value is returned from the following statement?*
```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

*Question: What is the value of `window.foo`?*
```javascript
( window.foo || ( window.foo = "bar" ) );
```

*Question: What is the outcome of the two alerts below?*
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

*Question: What is the value of `foo.length`?*
```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

*Question: What is the value of `foo.x`?*
```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

*Question: What does the following code print?*
```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');
```

#### Fun Questions:

* What's a cool project that you've recently worked on?
* What are some things you like about the developer tools you use?
* Who inspires you in the front-end community?
* Do you have any pet projects? What kind?
* What's your favorite feature of Internet Explorer?
* How do you like your coffee?