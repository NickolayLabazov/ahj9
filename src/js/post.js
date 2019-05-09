const moment = require('moment');
moment.locale('ru');


export default class Post {
  constructor(parent, content) {
    this.content = content;
    this.postDiv = null;
    this.parent = parent;
    this.time = null;
  }

  create() {
    // console
    this.postDiv = document.createElement('div');
    this.postDiv.setAttribute('class', 'postDiv');
    this.parent.appendChild(this.postDiv);

    this.time = document.createElement('p');
    this.time.innerHTML = moment().format('DD.MM.YYYY hh:mm');
    this.time.setAttribute('class', 'time');
    this.postDiv.appendChild(this.time);
    this.postDiv.appendChild(this.content);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude, accuracy } = position.coords;
          const cord = document.createElement('p');
          cord.innerHTML = `[${latitude}   ${longitude}]`;
          this.postDiv.appendChild(cord);
        },
      );
    }
  }
}