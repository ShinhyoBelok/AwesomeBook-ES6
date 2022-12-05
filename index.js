import addBtnNew from './modules/addBtnNew.js';
import { showAdd, showContact, showList } from './modules/nav_display.js';
import datetime from './modules/datetime.js';

const addBtn = document.querySelector('.add_button');
const navList = document.querySelector('#nav_list');
const navAdd = document.querySelector('#nav_add');
const navContact = document.querySelector('#nav_contact');

addBtn.addEventListener('click', addBtnNew);
navList.onclick = showList;
navAdd.onclick = showAdd;
navContact.onclick = showContact;

datetime();