import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Book from '../Book'
import NewBook from '../NewBook'
import { fetchBooks } from '../../redux/books/bookAPI'
import { useEffect } from 'react'

const ListBook = () => {
  const listBook = []

  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(fetchBooks())
  }, [])

  const result = useSelector((state) => state.bookAPIReducer, shallowEqual)
  if (result.length !== 0){
    result.listBook.forEach(book => {
      listBook.push(<Book key={book.id} id={book.id} title={book.title} author={book.author}/>)
    })
  }
  console.log(listBook)


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