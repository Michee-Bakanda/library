import React from 'react'
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import { useState } from "react";

const Books = () => {
    const [bookId,setBookId] = useState("")

    const getBookIdHandler = (id)=>{
      setBookId(id)
      console.log(bookId)
    }
  return (
    <>
      <AddBook/>
      <BooksList getBookId={getBookIdHandler} />
    </>
  )
}

export default Books