# CSS Basics

## What is CSS?

Cascading Style Sheets (CSS) is a markup language used to apply styles to HTML elements. CSS is used for colors, background images, layouts, and more.

## Basic Anatomy of a CSS Rule

A CSS rule is made up of two main parts: a selector and a declaration block. A selector is a pattern used in CSS to identify and target specific HTML elements for styling. A declaration block applies a set of styles for a given selector or selectors.

Here is the general syntax of a CSS rule:

```css
selector {
    property: value;
}
```

## `meta name="viewport"` Element

This meta element gives the browser instructions on how to control the page's dimensions and scaling on different devices, particularly on mobile phones and tablets.

## Default Browser Styles

Each HTML element has default browser styles applied to it. This usually includes items like default margins and paddings.

## Inline, Internal, and External CSS

### Inline CSS

Inline CSS styles are written directly within an HTML element using the `style` attribute. Most of the time you will not use inline CSS due to separation of concerns.

Example:

```html
<p style="color: red;">This is a red paragraph.</p>
```

### Internal CSS

Internal CSS styles are written within the `<style>` tags inside the head section of an HTML document. This can be useful for short code examples, but usually you will not use internal CSS often.

### External CSS

External CSS styles are written in a separate CSS file and linked to the HTML document using the `<link>` element in the head section. For most projects, you will use an external CSS file over internal or inline CSS.

Example:

```html
<link rel="stylesheet" href="styles.css">
```

## Working With the `width` and `height` Properties

- `width`: specifies the width of an element. If not specified, the default is `auto`, which lets the browser determine the element's width based on content, parent, and display type.
- `min-width`: specifies the minimum width for an element.
- `max-width`: specifies the maximum width for an element.
- `height`: specifies the height of an element. If not specified, the default is `auto`, meaning it adjusts to the content inside.
- `min-height`: specifies the minimum height for an element.
- `max-height`: specifies the maximum height for an element.

## Different Types of CSS Combinators

### Descendant Combinator

The descendant combinator targets elements that are descendants of a specified parent element.

Example:

```html
<ul>
    <li>Example item one</li>
    <li>Example item two</li>
    <li>Example item three</li>
</ul>
```

```css
ul li {
    background-color: yellow;
}
```

### Child Combinator (`>`)

The child combinator selects elements that are direct children of a specified parent element.

Example:

```html
<div class="container">
  <p>This will get styled.</p>
  <div>
    <p>This will not get styled.</p>
  </div>
</div>
```

```css
.container > p {
  background-color: black;
  color: white;
}
```

### Next-sibling Combinator (`+`)

The next-sibling combinator selects an element that immediately follows a specified sibling element.

Example:

```html
<h2>I am a sub heading</h2>
<p>This paragraph element will get a red background.</p>
```

```css
h2 + p {
  background-color: red;
}
```

### Subsequent-sibling Combinator (`~`)

The subsequent-sibling combinator selects all siblings of a specified element that come after it.

Example:

```html
<div class="container">
  <p>This will not get styled.</p>
  <ul>
    <li>Example item one</li>
    <li>Example item two</li>
    <li>Example item three</li>
  </ul>
  <p>This will get styled.</p>
</div>
<p>This will not get styled.</p>
```

```css
ul ~ p {
  background-color: green;
}
```

## Inline, Block, and Inline-Block Level Elements

- Inline level elements only take up as much width as they need and do not start on a new line. They flow within the content, allowing text and other inline elements to appear alongside them. Common inline elements are `span`, `a`, and `img`.
- Block level elements start on a new line and take up the full width available by default, stretching across their container. Common block-level elements are `div`, `p`, and `section`.
- Inline-block level elements behave like inline elements but can have a width and height set like block-level elements via `display: inline-block`.

## Margin and Padding

- `margin`: applies space outside the element, between the element's border and surrounding elements.
- `padding`: applies space inside the element, between the content and its border.
- `margin` shorthand: specify 1–4 values to set margin sides.
  - one value: all four sides
  - two values: top/bottom and right/left
  - three values: top, horizontal, bottom
  - four values: top, right, bottom, left
- `padding` shorthand: same rule as margin shorthand.

## CSS Specificity

- Inline CSS specificity: inline CSS has the highest specificity because it is applied directly to the element. It overrides internal and external CSS. Specificity value: `(1, 0, 0, 0)`.
- Internal CSS specificity: internal CSS is defined within a `<style>` element in the head section. It has lower specificity than inline styles. Its specificity depends on selectors.
- External CSS specificity: external CSS is linked via `<link>` and written in separate `.css` files. Its specificity is also determined by selectors. When two rules have equal specificity, source order determines the winner: the rule that appears later applies.
- Universal selector (`*`): matches any element in the document. It is often used to reset or normalize styles. It has the lowest specificity: `(0, 0, 0, 0)`.
- Type selectors: target elements by tag name and have specificity `(0, 0, 0, 1)`.
- Class selectors: defined with a period (`.`) followed by the class name. Specificity: `(0, 0, 1, 0)`.
- ID selectors: defined with a hash (`#`) followed by the ID name. Specificity: `(0, 1, 0, 0)`.
- `!important` keyword: gives a style rule the highest priority, overriding other declarations for a property. Use it sparingly because it can make CSS harder to maintain.
- Cascade algorithm: decides which CSS rules to apply when multiple styles target the same element.
- CSS inheritance: styles passed down from parent elements to their children, allowing higher-level definitions to apply to multiple elements without specifying them individually.
*******************************************************************************

## Lists, Links, Background and Borders Review

### Styling Lists

- `line-height` Property: This property is used to create space between lines of text. The accepted `line-height` values include the keyword `normal`, numbers, percentages and length units like the `em` unit.
- `list-style-type` Property: This property is used to specify the marker for a list item. Acceptable values can include `circle`, `disc`, or `decimal`.

Example using `list-style-type` to change the bullet style:

```html
<link rel="stylesheet" href="styles.css">
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

```css
ul {
  list-style-type: square;
}
```

- `list-style-position` Property: This property is used to set the position for the list marker. The only two acceptable values are `inside` and `outside`.

Example showing the difference between `inside` and `outside`:

```html
<link rel="stylesheet" href="styles.css">
<ul class="inside-list">
  <li>Item with inside position</li>
  <li>Item with inside position</li>
</ul>
<ul class="outside-list">
  <li>Item with outside position</li>
  <li>Item with outside position</li>
</ul>
```

```css
.inside-list {
  list-style-position: inside;
}

.outside-list {
  list-style-position: outside;
}
```

- `list-style-image` Property: This property is used to use an image for the list item marker. A common use case is to use the `url` function with a value set to a valid image location.
- Spacing list items using margin: Apart from `line-height`, margins can also be used in CSS to enhance the spacing and readability of list items. Margins create space outside each `li` element, allowing control over the gap between list items. `margin-bottom` is used to create space below each list item.

Example using `margin-bottom` to space list items:

```html
<link rel="stylesheet" href="styles.css">
<ul class="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

```css
.list li {
  margin-bottom: 20px;
}
```

### Styling Links

- `pseudo-class`: This is a keyword added to a selector that allows you to select elements based on a particular state. Common states include `:hover`, `:visited`, and `:focus`.
- `:link` pseudo-class: This pseudo-class is used to style links that have not been visited by the user.

Example using the `:link` pseudo-class:

```html
<link rel="stylesheet" href="styles.css">
<a href="/">Example link</a>
```

```css
a:link {
  color: red;
}
```

- `:visited` pseudo-class: This pseudo-class is used to style links where a user has already visited.
- `:hover` pseudo-class: This pseudo-class is used to style elements where a user is actively hovering over them.

Example using the `:hover` pseudo-class:

```html
<link rel="stylesheet" href="styles.css">
<a href="/">Hover over me!</a>
```

```css
a:hover {
  color: green;
  text-decoration: underline;
}
```

- `:focus` pseudo-class: This pseudo-class is used to style an element when it receives focus. Examples include input or select elements when they are clicked or navigated to with the keyboard.

Example using the `:focus` pseudo-class:

```html
<link rel="stylesheet" href="styles.css">
<a href="/">Example link</a>
```

```css
a:focus {
  outline: 2px solid orange;
}
```

- `:active` pseudo-class: This pseudo-class is used to style an element that was activated by the user. A common example is when the user clicks on a link or button.

Example using the `:active` pseudo-class:

```html
<link rel="stylesheet" href="styles.css">
<a href="/">Click me!</a>
```

```css
a:active {
  color: pink;
}
```

### Working with Backgrounds and Borders

- `background-size` Property: This property is used to set the background size for an element. Common values include `cover` for the background image to cover the entire element and `contain` for the background image to fit within the element.

Example using `background-size: cover`:

```html
<style>
  body {
    background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100px;
  }
</style>
```

Example using `background-size: contain`:

```html
<style>
  body {
    background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    min-height: 100px;
  }
</style>
```

- `background-repeat` Property: This property is used to determine how background images should be repeated along the horizontal and vertical axes. The default value is `repeat`, meaning the image will repeat both horizontally and vertically. Use `no-repeat` to prevent repetition.

Example using `background-repeat: no-repeat`:

```html
<style>
  body {
    background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    min-height: 100px;
  }
</style>
```

- `background-position` Property: This property is used to specify the position of the background image. It can use specific lengths, percentages, or keywords like `top`, `bottom`, `left`, `right`, and `center`.

Example using `background-position`:

```html
<style>
  body {
    background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center top;
    min-height: 100px;
  }
</style>
```

- `background-attachment` Property: This property is used to specify whether the background image should scroll with the content or remain fixed. The main values are `scroll` (default) and `fixed`.
- `background-image` Property: This property is used to set the background image of an element. You can set multiple background images and use `url()`, `radial-gradient()`, or `linear-gradient()` as values.

Example using `background-image`:

```html
<style>
  body {
    background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
    min-height: 100px;
  }
</style>
```

- `background` Property: This is the shorthand property for setting all background properties in one declaration. Example: `background: no-repeat url("example-url-goes-here");`.

Example using the `background` shorthand property:

```html
<style>
  body {
    background: center top no-repeat url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
    min-height: 100px;
  }
</style>
```

- Good Contrast for Background and Foreground Colors: Ensure that background and foreground colors have good contrast to keep text readable. WCAG recommends a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text.

#### Borders

- `border-top` Property: Sets the styles for the top border of an element. Example: `border-top: 3px solid blue;`.
- `border-right` Property: Sets the styles for the right border of an element. Example: `border-right: 2px solid red;`.
- `border-bottom` Property: Sets the styles for the bottom border of an element. Example: `border-bottom: 1px dashed green;`.
- `border-left` Property: Sets the styles for the left border of an element. Example: `border-left: 4px dotted orange;`.

Example using individual border properties:

```html
<link rel="stylesheet" href="styles.css">
<div class="bordered-box">Box with different borders</div>
```

```css
.bordered-box {
  border-top: 3px solid blue;
  border-right: 2px solid red;
  border-bottom: 1px dashed green;
  border-left: 4px dotted orange;
  padding: 20px;
}
```

- `border` Property: This is the shorthand property for setting width, style, and color for an element's border. Example: `border: 1px solid black;`.

Example using the `border` shorthand property:

```html
<link rel="stylesheet" href="styles.css">
<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute cat lying on its back.">
```

```css
img {
  border: 2px solid red;
}
```

- `border-radius` Property: This property is used to create rounded corners for an element's border.

Example using `border-radius`:

```html
<link rel="stylesheet" href="styles.css">
<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute cat lying on its back.">
```

```css
img {
  border: 2px solid black;
  border-radius: 10px;
}
```

- `border-style` Property: This property is used to set the style of an element's border. Accepted values include `solid`, `dashed`, `dotted`, and `double`.

Example using different border-style values:

```html
<link rel="stylesheet" href="styles.css">
<div class="solid-border">Solid border</div>
<div class="dashed-border">Dashed border</div>
<div class="dotted-border">Dotted border</div>
<div class="double-border">Double border</div>
```

```css
.solid-border {
  border: 3px solid blue;
  margin-bottom: 10px;
  padding: 10px;
}

.dashed-border {
  border: 3px dashed red;
  margin-bottom: 10px;
  padding: 10px;
}

.dotted-border {
  border: 3px dotted green;
  padding: 10px;
}

.double-border {
  border: 3px double blueviolet;
  padding: 10px;
}
```

### Gradients

- `linear-gradient()` Function: This CSS function creates a transition between multiple colors along a straight line.

Example using `linear-gradient()`:

```html
<link rel="stylesheet" href="styles.css">
<div class="linear-gradient"></div>
```

```css
.linear-gradient {
  background: linear-gradient(to right, red, blue);
  height: 40vh;
}
```

- `radial-gradient()` Function: This CSS function creates an image that radiates from a point like a circle or ellipse and gradually transitions between multiple colors.

Example using `radial-gradient()`:

```html
<link rel="stylesheet" href="styles.css">
<div class="radial-gradient"></div>
```

```css
.radial-gradient {
  background: radial-gradient(circle, red, blue);
  height: 40vh;
}
```
