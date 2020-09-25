import store from './store';
import templates from './templates';

const bookmarkList = function () {
  const actionPalette = templates.actionPalette();
  const bookmarks = store.bookmarks.filter(bookmark => bookmark.rating >= store.filter);
  const bookmarkList = templates.bookmarkList(bookmarks);
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