const ADD_BOOK = "bookstore/redux/ADD_BOOK"

export default function booksReducer(state = [], action) {
  switch(action.type) {
    case ADD_BOOK: return [...state, action.payload]
    default: return state
  }
}

const addBook = (book) => {
  return {type: ADD_BOOK, payload: book}
}