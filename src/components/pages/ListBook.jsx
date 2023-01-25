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
  console.log('initial state:', result)
  if(result[0] !== undefined){
    const listData = result[0]
    console.log("listdata",listData)
    Object.keys(listData).forEach(id => {
      console.log("id:", id)
      const book = {id, title: listData[id][0].title, author: listData[id][0].author}
      listBook.push(<Book key={book.id} id={book.id} title={book.title} author={book.author}/>)
    })
  }

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