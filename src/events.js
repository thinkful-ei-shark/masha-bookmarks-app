import $ from 'jquery';
import store from './store';
import api from './api';
import { render } from './render';

const findBookmarkId = function (target) {
  return $(target).closest('li').data('id');
};

const handleToggleExpandBookmark = function () {
  $('main').on('click', '.bookmark-name, .collapse-bookmark', event => {
    const id = findBookmarkId(event.currentTarget);
    store.toggleExpandBookmark(id);
    render('bookmarkList');
  });
};

const handleRatingChange = function () {
  $('main').on('change', '.bookmark-rating', event => {
    const newRating = $(event.currentTarget)
      .find('input[type="radio"]:checked').val();
    const id = findBookmarkId(event.currentTarget);
    const updateData = {
      rating: parseInt(newRating)
    };
    store.updateBookmark(id, updateData);
    api.updateRecord(id, updateData);
    render('bookmarkList');
  });
};

const handleDeleteBookmark = function () {
  $('main').on('click', '.bookmark-delete', event => {
    const id = findBookmarkId(event.currentTarget);
    store.deleteBookmark(id);
    api.deleteRecord(id);
    render('bookmarkList');
  });
};

const bindEventHandlers = function () {
  handleToggleExpandBookmark();
  handleRatingChange();
  handleDeleteBookmark();
};

export {bindEventHandlers};