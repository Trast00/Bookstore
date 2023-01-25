import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';
import { bookAPIReducer } from './books/bookAPI';

//configureStore
export default configureStore({
  reducer: {
    booksReducer,
    categoriesReducer,
    bookAPIReducer: bookAPIReducer.reducer
  },
});

