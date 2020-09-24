const ratingId = function (id, rating) {
  return `${id}-rating-${rating}`;
};

const starRating = function(item) {
  let stars = [];
  for(let i=1; i <= item.rating; i++){
    stars.push ({
      rating: i,
      class: 'fas'
    });
  }

  for(let i=item.rating; i < 5; i++){
    stars.push ({
      rating: i + 1,
      class: 'far'
    });
  }
  
  return stars.map(star => {
    return `<label for="${ratingId(item.id, star.rating)}">
    <span class="hidden">
      Give a rating of ${star.rating} to ${item.title}
    </span>
    <i class="${star.class} fa-star"></i></label>
    <input class='hidden' type="radio" 
      name="${item.id}-rating" 
      id="${ratingId(item.id, star.rating)}" value="${star.rating}"/>`;
  }).join('');
};

const listItem = function(item) {
  return `
  <li class="js-bookmark-item bookmark-item" data-id="${item.id}">
    <section class="bookmark-line">
      <button class="bookmark-delete"><i class="fas fa-trash-alt"></i></button>
      <p class="bookmark-name">${item.title}</p>
      <div class="bookmark-rating">
      ${starRating(item)}
      </div>
    </section>
  </li>
  `;
};

const bookmarkList = function (bookmarks){
  let elementList = bookmarks.map(item => listItem(item));
  return `
    <ul class="bookmark-list js-bookmark-list">
      ${elementList.join('')}
    </ul>
  `;
};

const newBookmark = function () {

};

export default {
  bookmarkList,
  newBookmark
};