import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link, Switch, BrowserRouter , Route} from "react-router-dom"
import Shelfs from './Shelfs'
import Search from './Search'
import './App.css'


class BooksApp extends React.Component {
  state = {
    books: [],

  }
  changeShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then(response => {
      // set shelf for new or updated book
      changedBook.shelf = shelf;
      // update state with changed book
      this.setState(prevState => ({
        books: prevState.books
          // remove updated book from array
          .filter(book => book.id !== changedBook.id)
          // add updated book to array
          .concat(changedBook)
      }));
    });
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route path='/search'
              render={() => (

                <Search books={this.state.books} changeShelf={this.changeShelf} />
              )} />
            <Route
              exact
              path="/"
              render={() => (
                <div className="list-books">
                  <div className="list-books-title">
                    <h1>MyReads</h1>
                  </div>
                  <Shelfs book={this.state.books} changeShelf={this.changeShelf} />
                  <div className="open-search">
                    <Link to="/search" />
                  </div>
                </div>
              )} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
