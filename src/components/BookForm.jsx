import React, { useState, useEffect } from "react";
import { initbook } from "./Books";
const BookForm = ({ book, addBook }) => {
  const [newbook, setNewBook] = useState(initbook);
  useEffect(() => {
    if (book && book.id !== "") setNewBook(book);
    else setNewBook(initbook);
  }, [book]);
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(newbook);
    setNewBook(initbook);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Book Title</label>
          <input
            type="text"
            value={newbook.title}
            onChange={(e) => setNewBook({ ...newbook, title: e.target.value })}
            className="form-control"
            placeholder="Enter Book Title"
          />
        </div>
        <div className="form-group">
          <label>Book Author</label>
          <input
            type="text"
            value={newbook.author}
            onChange={(e) => setNewBook({ ...newbook, author: e.target.value })}
            className="form-control"
            placeholder="Enter Author Name"
          />
        </div>
        <button type="submit" className="btn btn-info btn-block">
          Add
        </button>
      </form>
    </div>
  );
};

export default BookForm;
