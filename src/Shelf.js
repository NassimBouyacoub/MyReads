import React, { Component } from "react";
import Book from "./Book";
class Shelf extends Component {
    render() {
        const { book, shelf, changeShelf} = this.props;
        return (
            <ol className="books-grid">
                {book.filter((books => books.shelf === shelf)).map(filtredBooks =>
                    <li key={filtredBooks.id}
                    >
                        <Book
                            book={filtredBooks}
                            changeShelf={changeShelf}
                        />
                    </li>
                )}
            </ol>
        );
    }
}
export default Shelf;