import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { checkStatus } from '../../redux/categories/categories'

function ListCategories() {
  const dispatch = useDispatch()
  const status = useSelector((state)=>state.categoriesReducer, shallowEqual)
  const handleClick = () => {
    dispatch(checkStatus())
  }
  return (
    <main className='flex-center column list-categories'>
      <h2>{status}</h2>
      <button type='button' className='btns-blue' 
      onClick={handleClick}>Check Status</button>
    </main>
  )
}

export default ListCategories