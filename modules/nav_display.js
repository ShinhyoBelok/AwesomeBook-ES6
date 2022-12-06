const navList = document.querySelector('#nav_list');
const navAdd = document.querySelector('#nav_add');
const navContact = document.querySelector('#nav_contact');
const sectionList = document.querySelector('#list');
const sectionAdd = document.querySelector('#add_new');
const sectionContact = document.querySelector('#contact');

export const showList = () => {
  sectionList.classList.remove('hide');
  sectionAdd.classList.add('hide');
  sectionContact.classList.add('hide');
  navList.classList.add('blue');
  navAdd.classList.remove('blue');
  navContact.classList.remove('blue');
};

export const showAdd = () => {
  sectionList.classList.add('hide');
  sectionAdd.classList.remove('hide');
  sectionContact.classList.add('hide');
  navList.classList.remove('blue');
  navAdd.classList.add('blue');
  navContact.classList.remove('blue');
};

export const showContact = () => {
  sectionList.classList.add('hide');
  sectionAdd.classList.add('hide');
  sectionContact.classList.remove('hide');
  navList.classList.remove('blue');
  navAdd.classList.remove('blue');
  navContact.classList.add('blue');
};
