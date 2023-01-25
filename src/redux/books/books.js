import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchBooks } from './bookAPI';

const ADD_BOOK = 'bookstore/redux/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/redux/REMOVE_BOOK';

const listBookDefault = [
  { id: uuidv4(), title: 'The Hunger Games', author: 'Suzanne Collins' },
  { id: uuidv4(), title: 'Title 2', author: 'Trast00' },
  { id: uuidv4(), title: 'Title 3', author: 'Trast00' },
];

export default function booksReducer(state = [...listBookDefault], action) {
  switch (action.type) {
    case ADD_BOOK: return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default: return state;
  }
}

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });

export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });

export const getBooks = () => {
  return (useDispatch)
}

const bookReducer = createSlice({
  name: "bookstore/book/",
  initialState : [],
  reducers: {
    "addBook" : addBook,
    "removeBook" : removeBook
  },
  extraReducers : {
    [postBook.pending]: () => {},
    [postBook.fulfillled]: () => {},
    [postBook.rejected]: () => {},
  }
})