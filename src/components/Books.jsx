import React, { useEffect, useState } from "react";
import BookForm from "./BookForm";
import BookList from "./BookList";
import { v4 as uuidv4 } from "uuid";

export const initbook = {
  id: "",
  title: "",
  author: "",
};

const Books = () => {
  const [bookList, setBookList] = useState([]);
  const [book, setBook] = useState(initbook);

  useEffect(() => {
    getBookList();
  }, []);

  const addBook = (book) => {
    if (book.id === "") {
      book = { ...book, id: uuidv4() };
      fetch("http://localhost:3001/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      })
        .then((response) =>
          response.json().then((data) => {
            getBookList();
          })
        )
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      fetch(`http://localhost:3001/books/${book.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      })
        .then((response) =>
          response.json().then((data) => {
            getBookList();
          })
        )
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const editBook = async (id) => {
    await fetch(`http://localhost:3001/books/${id}`).then((response) => {
      response
        .json()
        .then((data) => {
          setBook(data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const deleteBook = async (id) => {
    await fetch("http://localhost:3001/books/" + id, {
      method: "DELETE",
    }).then((response) => {
      response
        .json()
        .then((data) => {
          getBookList();
        })
        .catch((err) => console.log(err));
    });
  };

  const getBookList = async () => {
    await fetch("http://localhost:3001/books").then((response) => {
      response
        .json()
        .then((data) => {
          setBookList(data);
        })
        .catch((err) => console.log(err));
    });
  };

  return (
    <div>
      <div className="jumbotron text-center">
        <h1>BOOKS</h1>
      </div>
      <div className="row">
        <div className="col-4">
          <BookForm book={book} addBook={addBook} />
        </div>
        <div className="col-8">
          <BookList
            bookList={bookList}
            deleteBook={deleteBook}
            editBook={editBook}
          />
        </div>
      </div>
    </div>
  );
};

export default Books;
