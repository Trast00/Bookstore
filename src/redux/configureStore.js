import { combineReducers } from 'redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

export default combineReducers({
  booksReducer,
  categoriesReducer,
});
