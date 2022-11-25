import React from 'react'
import { useState } from "react";
import BookDataService from "../services/book-services";

const AddBook = () => {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("Available");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit =async(e)=>{
    e.preventDefault()
    setMessage("")
    if(title ==="" || author === "" ){
      setMessage({ error: true, msg: "All fields are mendatory !" });
    }
    const newBook={
      title,
      author,
      status
    }

    console.log(newBook)

    try {
      await BookDataService.addBooks(newBook)
      setMessage({ error: false, msg: "Added successfully" });
    } catch (error) {
      setMessage({ error: true, msg: error.msg});
    }

    setTitle("")
    setAuthor("")
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <div>
            <h1>Title</h1>
            <input value={title} onChange={(e)=>setTitle(e.target.value)}/>
          </div>
          <div>
            <h1>Author</h1>
            <input value={author} onChange={(e)=>setAuthor(e.target.value)}/>
          </div>
          <div>
            <button>Not available</button>
            <button>available</button>
          </div>
          <div>
            <button>ADD</button>
          </div>
      </form>
    </div>
  )
}

export default AddBook