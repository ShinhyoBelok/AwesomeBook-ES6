import Features from './Features.js';/* eslint-disable-line */

let removeBtn = document.querySelectorAll('.removeBtn');
const updateRemoveBtn = () => {
  removeBtn = document.querySelectorAll('.removeBtn');
  removeBtn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      Features.remove(event.target.id);/* eslint-disable-line */
    });
  });
};

export default updateRemoveBtn;