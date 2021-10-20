import React, { Component } from "react";
import Shelf from './Shelf'
class Shelfs extends Component {
    render() {
        return (
            <div className="list-books-content">
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                        <Shelf book={this.props.book} changeShelf={this.props.changeShelf} shelf="currentlyReading"/>
                        </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                        <Shelf book={this.props.book} changeShelf={this.props.changeShelf} shelf="wantToRead"/>
                        </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                        <Shelf book={this.props.book} changeShelf={this.props.changeShelf} shelf="read"/>
                        </ol>
                    </div>
                </div>

            </div>
        );
    }
}
export default Shelfs;