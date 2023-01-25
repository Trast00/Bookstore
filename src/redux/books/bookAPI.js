import { createAsyncThunk } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useStore } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';



const apiID = "dEKTcaMjVTpVo4TTyLFG"
const apiUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiID}/books`

export const fetchBooks = createAsyncThunk("bookstore/book/GET_BOOK", async () => {
  const result = await fetch(apiUrl)
  const data = await result.json()

  const listBook = []
  Object.keys(data).forEach(keys => {
    const book = {id: keys, title: data[keys][0].title, author: data[keys][0].author}
    listBook.push(book)
  })

  return listBook
}) 

export const postBook = createAsyncThunk("bookstore/book/POST_BOOK", async (book) => {
  await fetch(apiUrl, {
    method: 'POST',
    headers: {'Content-Type': "application/json"},
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: "Fiction"
    })
  })
  return book
})

export const removeBook = createAsyncThunk("bookstore/book/REMOVE_BOOK", async (id) => {
  await fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
    headers: {'Content-Type': "application/json"},
    body: JSON.stringify({
      item_id: id,
    })
  })
  return id
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
      return {...state, listBook: [...action.payload]}
    })
    .addCase(postBook.fulfilled, (state, action) => {
      state.listBook.push(action.payload)
    })
    .addCase(removeBook.fulfilled, (state, action) => {
      return {...state, listBook: state.listBook.filter(book=> book.id !== action.payload)}
    })
  }
})
