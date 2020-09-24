import store from './store';
import templates from './templates';

const bookmarkList = function () {
  return templates.bookmarkList(store.bookmarks);
};

const newBookmark = function () {

};

export default {
  bookmarkList,
  newBookmark
};