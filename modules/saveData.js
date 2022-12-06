const saveData = (listOfBooks) => {
  localStorage.setItem('listOfBooksKey', JSON.stringify(listOfBooks));
};

export default saveData;