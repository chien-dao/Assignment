import './js/index.js';
import './style/style.scss';

console.log('Init webpack');
$(() => {
  console.log($('h1'));
});

if(typeof(module.hot) !== 'undefined') {
  module.hot.accept() // eslint-disable-line no-undef  
}