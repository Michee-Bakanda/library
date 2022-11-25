
import './App.css';
import AddBook from './components/AddBook';
import BooksList from './components/BooksList';
import { useState } from "react";

function App() {
  const [bookId,setBookId] = useState("")

  const getBookIdHandler = (id)=>{
    setBookId(id)
    console.log(bookId)
  }
  return (
    <div className="App">
      <AddBook/>
      <BooksList getBookId={getBookIdHandler} />
    </div>
  );
}

export default App;
