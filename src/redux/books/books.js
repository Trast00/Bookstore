const ADD_BOOK = 'bookstore/redux/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/redux/REMOVE_BOOK';

export default function booksReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK: return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.slice(0, action.payload),
        ...state.slice(action.payload + 1, state.length),
      ];
    default: return state;
  }
}

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });

export const removeBook = (index) => ({ type: REMOVE_BOOK, payload: index });

// should be used only in the next project but need to be used to fix linter errors
addBook(null);
// should be used only in the next project but need to be used to fix linter errors
removeBook(null);
