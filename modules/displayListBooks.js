const container = document.querySelector('.container');

const displayListBooks = (listOfBooks) => {
  container.innerHTML = '';
  let backgroundColor = '';
  for (let i = 0; i < listOfBooks.length; i += 1) {
    if (i % 2 === 0) {
      backgroundColor = 'white';
    } else {
      backgroundColor = 'gray';
    }
    const bookTemplate = `
      <div class="book ${backgroundColor}">
        <div class="title" >
          <p>"${listOfBooks[i].title}"&ensp;by</p>
          <p>&ensp;${listOfBooks[i].author}</p>
        </div>
        <div>
          <button id="${i}" class="removeBtn">Remove</button>
        </div>
      </div>
    `;
    container.innerHTML += bookTemplate;
  }
};

export default displayListBooks;