import React, { Component } from "react";
import Book from "./Book";
import PropTypes from 'prop-types'
class Shelf extends Component {
    render() {
        const { book, shelf, changeShelf } = this.props;
        return (
            <ol className="books-grid">
                {book.filter((books => books.shelf === shelf)).map(filtredBooks =>
                    <li key={filtredBooks.id}
                    >
                        <Book
                            book={filtredBooks}
                            books={book}
                            changeShelf={changeShelf}
                        />
                    </li>
                )}
            </ol>
        );
    }
}
Shelf.PropTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
}
export default Shelf;