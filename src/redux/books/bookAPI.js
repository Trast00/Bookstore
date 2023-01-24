import { createAsyncThunk } from '@reduxjs/toolkit'


const apiID = "AqeQv4g4DwJVH5Wl0GME"
const apiUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/${apiID}/books`

export const fetchBooks = async () => {
  const result = await fetch(apiUrl)
  console.log('result fetchB: ', result)
  const data = await result.json()
  console.log('data fetchB: ', data)
  return data
}

