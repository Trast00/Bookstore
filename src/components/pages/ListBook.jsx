import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import Book from '../Book'
import NewBook from '../NewBook'

const ListBook = () => {
  const listBook = []
  useSelector((state) => state.booksReducer, shallowEqual)
  .forEach(book => {
    listBook.push(<Book key={book.id} id={book.id} title={book.title} author={book.author}/>)
  });

  return (
    <main className='list-book-wrapper'>
      <ul className='no-style list-book'>
        {!listBook.length? <p>Empty list</p> : listBook}
      </ul>
      <NewBook />
    </main>
  )
}

export default ListBook