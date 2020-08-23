import $ from 'jquery';
import velocity from 'velocity-animate';
import { greet } from './modules/greet';

$('body')
  .css('color', 'red')
  .append(`<p>${greet('Another')}</p>`);
velocity($('h1'), 'fadeIn', { duration: 2000, loop: true });
