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
    <div className='container'>
      <div style={{
        background:"white",
        padding:"20px",
        width:"50%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
      }}>
      <AddBook id={bookId} setBookId={setBookId}/>
      <BooksList getBookId={getBookIdHandler} />

      </div>
    </div>
  )
}

export default Books