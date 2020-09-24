import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './main.css';

import $ from 'jquery';

import {render} from './render';

// import api from './api';

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
  render('bookmarkList');
};

$(main);