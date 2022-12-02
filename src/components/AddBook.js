import React from "react";
import { useState, useEffect } from "react";
import BookDataService from "../services/book-services";

const AddBook = ({ id, setBookId }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("Available");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (title === "" || author === "") {
      setMessage({ error: true, msg: "All fields are mendatory !" });
      alert("all fields must have values!");
      return;
    }
    const newBook = {
      title,
      author,
      status,
    };

    console.log(newBook);
    try {
      if (id !== undefined && id !== "") {
        await BookDataService.updateBook(id, newBook);
        setBookId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await BookDataService.addBooks(newBook);
        setMessage({ error: false, msg: "New Book added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle("");
    setAuthor("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await BookDataService.getBook(id);
      setAuthor(docSnap.data().author);
      setTitle(docSnap.data().title);
      setStatus(docSnap.data().status);
    } catch (error) {
      setMessage({ error: true, msg: error.message });
    }
  };

  useEffect(() => {
    console.log("here is the id", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                margin: "5px 0px 5px 0px",
              }}
            >
              Title
            </h1>
            <input
              style={{ padding: "12px", width: "70%" }}
              value={title}
              onChange={(e) => setTitle(e.target.value.trim())}
            />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                margin: "5px 0px 5px 0px",
              }}
            >
              Author
            </h1>
            <input
              style={{ padding: "12px", width: "70%" }}
              value={author}
              onChange={(e) => setAuthor(e.target.value.trim())}
            />
          </div>
        </div>

        <div
          style={{
            marginTop: "8px",
          }}
        >
          <button
            disabled={flag}
            style={{
              background: "green",
              color: "white",
              border: "none",
              padding: "12px",
            }}
            onClick={(e) => {
              setStatus("Available");
              setFlag(true);
            }}
            className="form-btn"
          >
            Available
          </button>
          <button
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "12px",
            }}
            disabled={!flag}
            onClick={(e) => {
              setStatus("Not Available");
              setFlag(false);
            }}
            className="form-btn"
          >
            Not Available
          </button>
        </div>
        <div
          style={{
            marginTop: "8px",
          }}
        >
          <button
            style={{
              background: "blue",
              color: "white",
              border: "none",
              padding: "12px",
            }}
            type="Submit"
            className="form-btn"
          >
            ADD/UPDATE
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
