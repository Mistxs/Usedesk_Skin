let parent = document.querySelector('.page-container');
let before = document.querySelector('.main-content');

let p = document.createElement('div');
p.id = "backtop";
p.innerHTML = '&uarr;';

parent.insertBefore(p, before);



/* begin Up-Down button  */
(function() {
  'use strict';

  var upDownBtn = document.querySelector('#backtop');
  var check;

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      upDownBtn.classList.add('up_down_btn-show');
      upDownBtn.innerHTML = '&uarr;';
      upDownBtn.setAttribute('title', 'Наверх');
      check = false;
    }
    if (scrolled === 0) {
      upDownBtn.innerHTML = '&darr;';
      upDownBtn.setAttribute('title', 'Вниз');
      check = true;
    }
  }
  
  
  function backToTop() {
    upDownBtn.classList.add('up_down_btn-disabled');
    if (!check) {
      (function goTop() {

        if (window.pageYOffset !== 0) {
          window.scrollBy(0, -80);
          setTimeout(goTop, 10);
        } else {
          upDownBtn.classList.remove('up_down_btn-disabled');
        }

      })();
      return;

    } else if (check) {
      (function goBottom() {
        var match = Math.ceil(window.pageYOffset + document.documentElement.clientHeight);

        if (match != document.documentElement.scrollHeight) {
          window.scrollBy(0, 80);
          setTimeout(goBottom, 10);
        } else {
          upDownBtn.classList.remove('up_down_btn-disabled');
        }

      })();
      return;
    }

  }

  window.addEventListener('scroll', trackScroll);
  upDownBtn.addEventListener('click', backToTop);
})();
/* end Up-Down button  */


/* кнопочки для перехода из форм */
let ya_track = document.querySelector('div.editable-input input[data-id="19029"]');

let ya_link = document.createElement('a');
  ya_link.id = "problem";
  ya_link.href = 'https://tracker.yandex.ru/'+ya_track.value;
  ya_link.innerHTML = '<img src="https://img.icons8.com/fluency-systems-regular/344/external-link-squared.png">'
  ya_link.target = "on_blank";

ya_track.parentElement.insertBefore(ya_link,ya_track);


let ud_problem = document.querySelector('div.editable-input input[data-id="18931"]');

let link = document.createElement('a');
  link.id = "problem";
  link.href = 'https://secure.usedesk.ru/tickets/'+ud_problem.value;
  link.innerHTML = '<img src="https://img.icons8.com/fluency-systems-regular/344/external-link-squared.png">'
  link.target = "on_blank";

ud_problem.parentElement.insertBefore(link, ud_problem);