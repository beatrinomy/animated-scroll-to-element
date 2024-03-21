# animated-scroll-to-element

`animated-scroll-to-element` is a lightweight JavaScript library for smoothly scrolling to a specified HTML element on the page.

## Installation

You can install `animated-scroll-to-element` via npm:

```bash
npm install animated-scroll-to-element
```

## Usage

### Basic Usage

First, import the library into your project:

```javascript
import scrollToElement from 'animated-scroll-to-element';
```

Then, you can use the `scrollToElement` function to scroll to a specified element on the page:

```javascript
scrollToElement('#targetElement');
```

### Advanced Usage

You can also customize the scrolling behavior by passing options to the `scrollToElement` function:

```javascript
scrollToElement('#targetElement', {
  speed: 1000, // Duration of the scroll animation in milliseconds
  easing: 'easeInOutCubic', // Easing function to use for the animation
  offset: 100, // Offset in pixels from the top of the target element
  direction: 'horizontal' // Scroll direction: 'vertical' (default) or 'horizontal'
});
```

### HTML Markup

To trigger the scroll behavior, add a `data-scroll-to` attribute to your HTML elements. You can also optionally specify the scroll direction using the `data-scroll-direction` attribute:

```html
<a href="#" data-scroll-to="#targetElement">Scroll to Target (Vertical)</a>
<a href="#" data-scroll-to="#targetElement" data-scroll-direction="horizontal">Scroll to Target (Horizontal)</a>
```

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Scroll to Element Example</title>
</head>
<body>

<div style="height: 2000px;"></div>

<a href="#" data-scroll-to="#targetElement">Scroll to Target (Vertical)</a>
<a href="#" data-scroll-to="#targetElement" data-scroll-direction="horizontal">Scroll to Target (Horizontal)</a>

<div id="targetElement" style="margin-top: 1000px;">
  Target Element
</div>

<script type="module">
  import scrollToElement from 'animated-scroll-to-element';

  // Initialize scroll behavior
  window.addEventListener('DOMContentLoaded', () => {
    const scrollTriggers = document.querySelectorAll('[data-scroll-to]');
    scrollTriggers.forEach(trigger => {
      trigger.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSelector = event.currentTarget.getAttribute('data-scroll-to');
        const direction = event.currentTarget.getAttribute('data-scroll-direction') || 'vertical';
        scrollToElement(targetSelector, { direction });
      });
    });
  });
</script>

</body>
</html>
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
