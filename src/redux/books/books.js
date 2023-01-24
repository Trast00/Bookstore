const ADD_BOOK = 'bookstore/redux/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/redux/REMOVE_BOOK';
import { v4 as uuidv4 } from "uuid";

const listBookDefault = [
  {id: uuidv4(), title: "The Hunger Games", author: "Suzanne Collins"},
  {id: uuidv4(), title: "Title 2", author: "Trast00"},
  {id: uuidv4(), title: "Title 3", author: "Trast00"}
]

export default function booksReducer(state = [...listBookDefault], action) {
  switch (action.type) {
    case ADD_BOOK: return [...state, action.payload];
    case REMOVE_BOOK:
      console.log(state, action.payload)
      console.log(state.filter((book) => book.id !== action.payload))
      return state.filter((book) => book.id !== action.payload);
    default: return state;
  }
}

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });

export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });

// should be used only in the next project but need to be used to fix linter errors
addBook(null);
// should be used only in the next project but need to be used to fix linter errors
removeBook(null);
