import React from 'react'

function Book(props) {
  return (
    <main className='row book'>
      <div className='column book-left'>
        <p className='book-genre'>Genre</p>
        <h2 className='book-title'>{props.title}</h2>
        <p className='book-author'>{props.author}</p>
        <ul className='no-style row'>
          <li className='btn-book'>Comments</li>
          <li className='btn-book'>Remove</li>
          <li className='btn-book'>Edit</li>
        </ul>
      </div>
      <div className='flex-center column book-mid'>
        <div></div>
        <div>
          <p className='completed-rate'>0%</p>
          <p>Completed</p>
        </div>
      </div>
        <div className="column book-right">
          <div>
            <p className='last-chapter'>CURRENT CHAPTER</p>
            <p >Chapter 17</p>
          </div>
          <button className='btns-blue btn-update-progress'>UPDATE PROGRESS</button>
        </div>
    </main>
  )
}

export default Book