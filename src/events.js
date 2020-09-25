import $ from 'jquery';
import store from './store';
import api from './api';
import { render } from './render';

const findBookmarkId = function (target) {
  return $(target).closest('li').data('id');
};

const handleToggleExpandBookmark = function () {
  $('main').on('click', '.js-bookmark-name, .collapse-bookmark', event => {
    const id = findBookmarkId(event.currentTarget);
    store.toggleExpandBookmark(id);
    render();
  });
};

const handleRatingChange = function () {
  $('main').on('change', '.js-bookmark-rating', event => {
    const newRating = $(event.currentTarget)
      .find('input[type="radio"]:checked').val();
    const id = findBookmarkId(event.currentTarget);
    const updateData = {
      rating: parseInt(newRating)
    };
    store.updateBookmark(id, updateData);
    api.updateRecord(id, updateData);
    render();
  });
};

const handleDeleteBookmark = function () {
  $('main').on('click', '.js-bookmark-delete', event => {
    const id = findBookmarkId(event.currentTarget);
    store.deleteBookmark(id);
    api.deleteRecord(id);
    render();
  });
};

const handleAddNewBookmark = function () {
  $('main').on('click', '.js-new-bookmark', event => {
    store.currentView = 'newBookmark';
    render();
  });
};

const handleNewBookmarkRatingChange = function () {
  $('main').on('change', '.js-new-bookmark-rating', event => {
    const newBookmark = {
      title: $('#new-bookmark-name').val(),
      rating: parseInt($(event.currentTarget)
        .find('input[type="radio"]:checked').val()),
      url: $('#new-bookmark-url').val(),
      description: $('#new-bookmark-description').val()
    };
    Object.assign(store.newBookmark, newBookmark);
    render();
  });
};

const handleFilterBookmarks = function () {
  $('main').on('change', '#filter-select', event => {
    store.filter = $('#filter-select').val();
    render();
  });
};

const bindEventHandlers = function () {
  handleToggleExpandBookmark();
  handleRatingChange();
  handleDeleteBookmark();
  handleAddNewBookmark();
  handleNewBookmarkRatingChange();
  handleFilterBookmarks();
};

export { bindEventHandlers };