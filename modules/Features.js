import CreateObjectBook from './createObjectBook.js';
import displayListBooks from './displayListBooks.js';
import updateRemoveBtn from './updateRemoveBtn.js';/* eslint-disable-line */
import saveData from './saveData.js';

let listOfBooks = [];

export default class Features {
  static add = (title, author) => {
    if (title === '' || author === '') return;
    const newBook = new CreateObjectBook(title, author);
    listOfBooks.push(newBook);
    displayListBooks(listOfBooks);
    saveData(listOfBooks);
  }

  static remove = (id) => {
    id = parseInt(id, 10);
    listOfBooks = listOfBooks.filter((book) => listOfBooks.indexOf(book) !== id);
    displayListBooks(listOfBooks);
    updateRemoveBtn();
    saveData(listOfBooks);
  }
}

window.addEventListener('load', () => {
  if (localStorage.getItem('listOfBooksKey') === null) return;
  listOfBooks = JSON.parse(localStorage.getItem('listOfBooksKey'));
  displayListBooks(listOfBooks);
  updateRemoveBtn();
});