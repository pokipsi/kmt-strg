
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

window.disableBodyScroll = disableBodyScroll;
window.enableBodyScroll = enableBodyScroll;

 
// 2. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
// Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
// This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.

// const targetElement = document.querySelector('#someElementId');
 
// 3. ...in some event handler after showing the target element...disable body scroll

// disableBodyScroll(targetElement);
 
// 4. ...in some event handler after hiding the target element...

// enableBodyScroll(targetElement);