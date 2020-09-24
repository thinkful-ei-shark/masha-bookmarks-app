import store from './store';
import templates from './templates';

const bookmarkList = function () {
  const actionPalette = templates.actionPalette();
  const bookmarkList = templates.bookmarkList(store.bookmarks);
  return [ actionPalette, bookmarkList ];
};

const newBookmark = function () {
  const newBookmarkForm = templates.newBookmarkForm();
  return [newBookmarkForm];
};

export default {
  bookmarkList,
  newBookmark
};