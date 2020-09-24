import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './main.css';

import $ from 'jquery';

import { bindEventHandlers } from './events';
import { render } from './render';
import store from './store';

import api from './api';

// const deleteAllRecords = function () {
//   return api.readRecords()
//     .then(data => {
//       data.forEach(datum => {
//         api.deleteRecord(datum.id);
//       });
//     })
//     .then(api.readRecords())
//     .then(res =>
//       res ? console.log(res) : console.log('database cleared'));
// };

const main = function () {
  // store.bookmarks.forEach(bm => api.createRecord(
  //   {
  //     title: bm.title,
  //     url: bm.url,
  //     desc: bm.description,
  //     rating: bm.rating
  //   }
  // ))


  bindEventHandlers();

  store.bookmarks = [];
  api.readRecords()
    .then(response => {
      console.log('initializing store')
      response.forEach(bookmark => {
        store.bookmarks.push({
          id: bookmark.id,
          title: bookmark.title,
          rating: bookmark.rating,
          url: bookmark.url,
          description: bookmark.description,
          expanded: false
        });
      });
      render('bookmarkList');
    });
};

$(main);