import $ from 'jquery';
import views from './views';

const render = function (view){
  $('main').html(views[view]());
};

export {render};