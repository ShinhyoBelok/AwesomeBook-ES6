import { DateTime } from '../luxon/src/luxon.js';

const dateAndTime = document.querySelector('.datetime');

const time = () => {
  const infoDateTime = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  dateAndTime.innerHTML = infoDateTime;
  setTimeout(time, 1000);
};

export default time;