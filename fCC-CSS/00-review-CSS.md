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
