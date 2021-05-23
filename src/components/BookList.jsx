import React from "react";

const BookList = ({ bookList, deleteBook, editBook }) => {
  return (
    <div>
      <table className="table table-bordered">
        <thead className="text-center">
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookList.length === 0 && (
            <tr>
              <td className="text-center" colSpan="3">
                No Books
              </td>
            </tr>
          )}
          {bookList.length > 0 &&
            bookList.map((book, index) => {
              return (
                <tr key={index}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>
                    <button
                      onClick={(e) => editBook(book.id)}
                      className="btn btn-sm btn-info mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => deleteBook(book.id)}
                      className="btn btn-sm btn-info mr-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
