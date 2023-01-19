import React from 'react'
import { useState } from 'react'
import Book from '../Book'
import NewBook from '../NewBook'

const ListBook = () => {
  const [listBook, setListBook] = useState([
    <Book title="The Hunger Games" author="Suzanne Collins"/>,
    <Book title="Title 2" author="Trast00"/>,
    <Book title="Title 3" author="Trast00"/>
  ])

  return (
    <main className='list-book-wrapper'>
      <ul className='no-style list-book'>
        {listBook.length? listBook : <p>Empty list</p>}
      </ul>
      <NewBook />
    </main>
  )
}

export default ListBook