const bookmarks = [
  {
    id: 'x56w',
    title: 'Title 1',
    rating: 3,
    url: 'http://www.title1.com',
    description: 'lorem ipsum dolor sit',
    expanded: false
  },
  {
    id: '6ffw',
    title: 'Title 2',
    rating: 5,
    url: 'http://www.title2.com',
    description: 'dolorum tempore deserunt',
    expanded: false
  },
  {
    id: 'fw544',
    title: 'Here is a long ass title for you, no joke',
    rating: 4,
    url: 'http://an-ex.ample',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor mi a nunc malesuada iaculis.
      Integer ac aliquet velit, quis vulputate eros. Nulla non porttitor libero. Phasellus suscipit laoreet arcu`,
    expanded: false
  }
];

let adding = false;
let error = null;
let filter = 0;

const updateBookmark = function (id, newData) {
  const item = this.bookmarks.find(currentItem => currentItem.id === id);
  Object.assign(item, newData);
};

const deleteBookmark = function (id) {
  this.bookmarks = this.bookmarks.filter(currentItem => currentItem.id !== id);
};

export default {
  bookmarks,
  adding,
  error,
  filter,

  updateBookmark,
  deleteBookmark
};