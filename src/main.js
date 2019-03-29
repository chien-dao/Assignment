import 'bootstrap';
import './js/index.js';
import '@fortawesome/fontawesome-free/js/all'
import './style/style.scss';

const setHeight = (ele) => {
  const minHeight = ele.css('min-height');
  ele.css('height', minHeight);

  const scrollHeight = ele[0].scrollHeight;
  const height = ele.height();
  const innerHeight = ele.innerHeight();
  const padding = innerHeight - height;

  ele.height(scrollHeight - padding);
}

$(() => {
  $('[data-expand]')
    .on('input', (e) => {
      const $self = $(e.currentTarget);

      setHeight($self);
    })
    .on('blur', (e) => {
      const $self = $(e.currentTarget);

      if (!$self.val().length) {
        $self.css('height', '');
      } else {
        setHeight($self);
      }
    });

});

if(typeof(module.hot) !== 'undefined') {
  module.hot.accept();
}