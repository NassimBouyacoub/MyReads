import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Book from './Book';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types'

class Search extends Component {

    state = {
        bookName: '',
        newBooks: [],
        Error: false
    };

    getBooks = event => {
        const bookName = event.target.value;
        this.setState({ bookName });
        if (bookName) {
            BooksAPI.search(bookName.trim(), 20).then(books => {
                books.length > 0
                    ? this.setState({ newBooks: books, Error: false })
                    : this.setState({ newBooks: [], Error: true });
            });
        } else this.setState({ newBooks: [], Error: false });
    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.bookName}
                            onChange={this.getBooks}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    {this.state.newBooks.length > 0 && (
                        <div>
                            <h3>Search returned {this.state.newBooks.length} books </h3>
                            <ol className="books-grid">
                                {this.state.newBooks.map(book => (
                                    <Book
                                        book={book}
                                        books={this.props.books}
                                        key={book.id}
                                        changeShelf={this.props.changeShelf}
                                    />
                                ))}
                            </ol>
                        </div>
                    )}
                    {this.state.Error && (
                        <h3>there is no book named {this.state.bookName}. Please try again!</h3>
                    )}
                </div>
            </div>
        );
    }
}
Search.PropTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}
export default Search;