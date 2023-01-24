import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../redux/books/books'
import { v4 as uuidv4 } from "uuid";

function NewBook() {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  return (
    <main className='column new-book'>
      <h2>ADD NEW BOOK</h2>
      <form className='row form-add-book'>
        <input type="text" name="title" id="form-title" placeholder='Book title' 
        value={title} onChange={(event)=> setTitle(event.currentTarget.value)}/>
        <input type="text" name="author" id="form-author" placeholder='Author'
        value={author} onChange={(event)=> setAuthor(event.currentTarget.value)}/>
        <input type="submit" name="btn-add-book" id="btn-add-book" value="ADD BOOK" 
        className='btns-blue'/>
      </form>
    </main>
  )
}

export default NewBook