import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import { bookAPIReducer } from './books/book';

// configureStore
export default configureStore({
  reducer: {
    booksReducer: bookAPIReducer.reducer,
    categoriesReducer,
  },
});
