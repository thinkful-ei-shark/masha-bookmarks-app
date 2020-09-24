import $ from 'jquery';
import store from './store';
import api from './api';
import { render } from './render';

const handleRatingChange = function () {
  $('main').on('change', '.bookmark-rating', event => {
    const newRating = $(event.currentTarget)
      .find('input[type="radio"]:checked').val();
    const id = $(event.currentTarget).closest('li').data('id');
    const updateData = {
      rating: parseInt(newRating)
    };
    store.updateBookmark(id, updateData);
    api.updateRecord(id, updateData);
    render('bookmarkList');
  });
};

const bindEventHandlers = function () {
  handleRatingChange();
};

export {bindEventHandlers};