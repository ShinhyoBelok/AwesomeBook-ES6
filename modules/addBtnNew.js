import Features from './Features.js';
import updateRemoveBtn from './updateRemoveBtn.js';

const title = document.getElementById('title');
const author = document.getElementById('author');

const addBtnNew = () => {
  Features.add(title.value, author.value);
  updateRemoveBtn();
};

export default addBtnNew;