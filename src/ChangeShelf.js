import React, { Component } from 'react'

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
                currentShelf=element.shelf
            }
        });
        return (
            <div className="book-shelf-changer">
                <select value={this.value} onChange={this.updateShelf} defaultValue={currentShelf}>
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
export default ChangeShelf;