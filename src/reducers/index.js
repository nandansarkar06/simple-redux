import { combineReducers } from 'redux';
import BooksReduces from './reducer_books';
import ActiveBook from './reducer_active_book'

const rootReducer = combineReducers({
  books: BooksReduces,
  activeBook: ActiveBook
});

export default rootReducer;
