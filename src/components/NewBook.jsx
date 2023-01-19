import React from 'react'

function NewBook() {
  return (
    <main className='column new-book'>
      <h2>ADD NEW BOOK</h2>
      <form className='row'>
        <input type="text" name="title" id="form-title" placeholder='Book title'/>
        <input type="text" name="author" id="form-author" placeholder='Author'/>
        <input type="submit" name="btn-add-book" id="btn-add-book" value="ADD BOOK" className='btns-blue'/>
      </form>
    </main>
  )
}

export default NewBook