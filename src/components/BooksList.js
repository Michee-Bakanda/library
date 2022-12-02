import React, { useEffect, useState } from "react";
import BookDataService from "../services/book-services";

const BooksList = ({ getBookId }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const data = await BookDataService.getAllBooks();
    console.log(data.docs);
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await BookDataService.deleteBook(id);
    getBooks();
  };
  return (
    <>
      <div className="mb-2">
        <button
          style={{
            background: "gray",
            color: "white",
            border: "none",
            padding: "12px",
            marginBottom: "8px",
          }}
          variant="dark edit"
          onClick={getBooks}
          className="form-btn"
        >
          Refresh List
        </button>
      </div>

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
      <table
        style={{
          border: "1px black solid",
          maginTop: "8px",
        }}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody
          style={{
            border: "1px black solid",
          }}
        >
          {books.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td
                  style={{
                    border: "1px black solid",
                    padding: "8px",
                  }}
                >
                  {index + 1}
                </td>
                <td
                  style={{
                    border: "1px black solid",
                    padding: "8px",
                  }}
                >
                  {doc.title}
                </td>
                <td
                  style={{
                    border: "1px black solid",
                    padding: "8px",
                  }}
                >
                  {doc.author}
                </td>
                <td
                  style={{
                    border: "1px black solid",
                    padding: "8px",
                  }}
                >
                  {doc.status}
                </td>
                <td
                  style={{
                    border: "1px black solid",
                    padding: "8px",
                  }}
                >
                  <button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getBookId(doc.id)}
                  >
                    Edit
                  </button>
                  <button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default BooksList;
