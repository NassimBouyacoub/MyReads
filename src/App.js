import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link, Switch, BrowserRouter, Route } from "react-router-dom"
import Shelfs from './Shelfs'
import Search from './Search'
import error404 from './error404'
import './App.css'


class BooksApp extends React.Component {
  state = {
    books: [],

  }
  changeShelf = (theBook, shelf) => {
    BooksAPI.update(theBook, shelf).then(response => {
      theBook.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books
          .filter(book => book.id !== theBook.id)
          .concat(theBook)
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
            <Route component={error404} />

          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
