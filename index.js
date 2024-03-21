import smoothScroll from 'smooth-scroll';
import throttle from 'lodash.throttle';

const scrollToElement = (selector, options = {}) => {
  const element = document.querySelector(selector);
  if (!element) {
    console.warn(`Element not found: ${selector}`);
    return;
  }

  const defaultOptions = {
    speed: 800,
    easing: 'easeInOutCubic',
    offset: 0,
    direction: 'vertical', // Default direction is vertical
    ...options,
  };

  const { direction } = defaultOptions;
  const scrollOptions = {
    speed: defaultOptions.speed,
    easing: defaultOptions.easing,
    offset: defaultOptions.offset,
  };

  if (direction === 'horizontal') {
    scrollOptions.horizontal = true;
  }

  smoothScroll.animateScroll(element, null, scrollOptions);
};

window.addEventListener('DOMContentLoaded', () => {
  const scrollTriggers = document.querySelectorAll('[data-scroll-to]');
  scrollTriggers.forEach(trigger => {
    trigger.addEventListener('click', throttle((event) => {
      event.preventDefault();
      const targetSelector = event.currentTarget.getAttribute('data-scroll-to');
      const direction = event.currentTarget.getAttribute('data-scroll-direction') || 'vertical';
      scrollToElement(targetSelector, { direction });
    }, 300));
  });
});

export default scrollToElement;
