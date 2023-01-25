import { createAsyncThunk } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useStore } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';



const apiID = "dEKTcaMjVTpVo4TTyLFG"
const apiUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiID}/books`

export const fetchBooks = createAsyncThunk("bookstore/book/GET_BOOK", async () => {
  const result = await fetch(apiUrl)
  //console.log('result fetchB: ', result)
  const data = await result.json()
  //console.log('data fetchB: ', data)
  return data
}) 

export const postBook = createAsyncThunk("bookstore/book/POST_BOOK", async (book) => {
  const result = await fetch(apiUrl, {
    method: 'POST',
    headers: {'Content-Type': "application/json"},
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: "Fiction"
    })
  })
  console.log('result fetchB: ', result)
  return result.ok
})

const removeBook = createAsyncThunk("bookstore/book/REMOVE_BOOK", async (id) => {
  const result = await fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
    headers: {'Content-Type': "application/json"},
    body: JSON.stringify({
      item_id: id,
    })
  })
  console.log('result fetchB: ', result)
  return result.ok
})

const createBookApi = async () => {
  const result = await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/',
    {
      method: 'POST',
      headers: {"Content-Type": "application/json"}
    }
  )
  console.log(result)
  await result.json().then(id => {
    console.log(id)
  })
}

export const bookAPIReducer = createSlice({
  name: "bookstore/book/",
  initialState : [],
  reducers: {},
  extraReducers : (builder) => {
    builder
    .addCase(fetchBooks.fulfilled, (state, action) => {
      console.log('I RUN !!! and I have the money :', action.payload)
      state.push(action.payload)
      //console.log('HERE IS IT: ',useStore().getState())
    })
  }
})

/*const book1 = {
  id: uuidv4(),
  title: "book.title 1",
  author: "book.author 2"
}

console.log(postBook(book1))
console.log(removeBook("6ec19de3-8f33-4953-a5f3-006628272c45"))
console.log(fetchBooks())*/