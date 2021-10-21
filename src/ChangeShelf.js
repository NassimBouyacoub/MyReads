import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChangeShelf extends Component {
    constructor(props) {
        super(props)
        this.updateShelf = this.updateShelf.bind(this)
    }
    state = {
    }
    updateShelf(event) {
        this.props.changeShelf(this.props.book, event.target.value);
    }


    render() {
        let currentShelf = "none"
        this.props.books.forEach(element => {
            if (element.id === this.props.book.id) {
                currentShelf = element.shelf
            }
        });
        return (
            <div className="book-shelf-changer">
                <select value={currentShelf} onChange={this.updateShelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="none">None</option>
                    <option value="currentlyReading" >Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                </select>
            </div>
        );
    }
}
ChangeShelf.PropTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}
export default ChangeShelf;