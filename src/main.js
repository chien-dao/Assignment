import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all'
import './style/style.scss';
import profileImg from './assets/images/profile.png';
import splitMessage from './js/index.js';

const setHeight = (ele) => {
  const minHeight = ele.css('min-height');
  ele.css('height', minHeight);

  const scrollHeight = ele[0].scrollHeight;
  const height = ele.height();
  const innerHeight = ele.innerHeight();
  const padding = innerHeight - height;

  ele.height(scrollHeight - padding);
}

const postTweet = (content) => {
  const layout = `
    <div class="tweet-info">
      <div class="avatar">
        <img class="avatar__pic" src="${profileImg}" alt="avatar profile">
      </div>
      <div class="tweet-content">
        <div class="tweet-content__header">
          <h5 class="title">Username</h5>
          <p class="tag">@Username</p>
        </div>
        <div class="tweet-content__body">
          <p class="content">
            ${content}
          </p>
        </div>
      </div>
    </div>
  `;

  $('[data-tweet-list]').append(layout);
}

$(() => {
  let isAlerted = false;
  const $splitMessageAlertModal = $('#splitMessageAlertModal');

  $('[data-expand]')
    .on('input', (e) => {
      const $self = $(e.currentTarget);

      setHeight($self);
    })
    .on('blur', (e) => {
      const $self = $(e.currentTarget);

      if (!$self.val().length) {
        $self.css('height', '');
      }
    });

  $('[data-submit]').on('click', (e) => {
    const $input = $(e.currentTarget).prev();
    const message = $input.val().trim();

    if (message.length) {
      const messageChunk = splitMessage(message);

      if (messageChunk) {
        if (!isAlerted) {
          $splitMessageAlertModal.modal();
        }
        messageChunk.forEach(message => {
          postTweet(message);
        });
        $input.val('');
      } else {
        $('#invalidAlertModal').modal();
      }
    }
  });

  $('[data-gotIt]').on('click', () => {
    isAlerted = true;
    $splitMessageAlertModal.modal('hide');
  });
});

if(typeof(module.hot) !== 'undefined') {
  module.hot.accept();
}
