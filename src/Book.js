import React, { Component } from "react"
import ChangeShelf from "./ChangeShelf";

class Book extends Component {
    constructor(props) {
        super(props)
        this.updateShelf = this.updateShelf.bind(this)
    }
    updateShelf(event) {
        this.props.changeShelf(this.props.book, event.target.value);
    }
    coverImg =
        this.props.book.imageLinks && this.props.book.imageLinks.thumbnail
            ? this.props.book.imageLinks.thumbnail
            : null;
    
    render() {

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.coverImg})` }}></div>
                    <ChangeShelf book={this.props.book} changeShelf={this.props.changeShelf} books={this.props.books}/>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book['authors']}</div>
            </div>

        );
    }
}

export default Book
