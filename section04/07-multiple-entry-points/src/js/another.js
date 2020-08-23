import $ from 'jquery';
import velocity from 'velocity-animate';

$('body').css('color', 'red');
velocity($('h1'), 'fadeIn', { duration: 2000, loop: true });
