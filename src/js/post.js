const moment = require('moment');

moment.locale('ru');


export default class Post {
  constructor(parent, content, stop) {
    this.content = content;
    this.postDiv = null;
    this.parent = parent;
    this.time = null;
    this.stop = stop;
    this.message = null;
    this.valid = null;
    this.inputMes = null;
    this.ok = null;
    this.cancel = null;
    this.form = null;
    this.label = null;
    this.handInput = null;
  }

  create() {
    if (this.stop) {
      this.postDiv = document.createElement('div');
      this.postDiv.setAttribute('class', 'postDiv');
      this.parent.insertBefore(this.postDiv, this.parent.childNodes[0]);
      this.time = document.createElement('p');
      this.time.innerHTML = moment().format('DD.MM.YYYY hh:mm');
      this.time.setAttribute('class', 'time');
      this.postDiv.appendChild(this.time);
      this.postDiv.appendChild(this.content);
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const cord = document.createElement('p');
            cord.innerHTML = `[${latitude}   ${longitude}]`;
            this.postDiv.appendChild(cord);
          },
        );
      } else {
        this.messageCord();
      }
    }
  }


  messageCord() {
    this.message = document.createElement('div');
    this.form = document.createElement('form');
    this.label = document.createElement('label');
    this.valid = document.createElement('p');
    this.inputMes = document.createElement('input');
    this.ok = document.createElement('button');
    this.cancel = document.createElement('button');
    this.label.innerHTML = 'Введите координаты';
    this.ok.innerHTML = 'Ok';
    this.cancel.innerHTML = 'Cancel';
    this.message.setAttribute('class', 'message');
    this.form.setAttribute('class', 'formCord');
    this.inputMes.setAttribute('class', 'inputMes');
    this.ok.setAttribute('class', 'butt');
    // this.cancel.setAttribute('class', 'butt');
    document.body.appendChild(this.message);
    this.message.appendChild(this.form);
    this.form.appendChild(this.label);
    this.form.appendChild(this.inputMes);
    this.form.appendChild(this.ok);
    this.form.appendChild(this.cancel);
    this.mesListener();
  }

  mesListener() {
    this.ok.addEventListener('click', (event) => {
      event.preventDefault();
      const input = this.inputMes.value;
      // this.handInput = input;
      // console.log(input)
      // console.log(typeof(input))
      if (input.search(/\[\d{2}\.\d+, \d{2}\.\d+\]/) !== -1) {
        const cord = document.createElement('p');
        this.handInput = input;
        cord.innerHTML = this.handInput;
        this.postDiv.appendChild(cord);
      } else if (input.search(/\d{2}\.\d+, \d{2}\.\d+/) !== -1) {
        const cord = document.createElement('p');
        this.handInput = `[${input}]`;
        cord.innerHTML = this.handInput;
        this.postDiv.appendChild(cord);
      } else if (input.search(/\[\d{2}\.\d+,\d{2}\.\d+\]/) !== -1) {
        const num = input.indexOf(',');
        const cord = document.createElement('p');
        this.handInput = `${input.slice(0, num)}, ${input.slice(num + 1)}`;
        cord.innerHTML = this.handInput;
        this.postDiv.appendChild(cord);
      } else if (input.search(/\d{2}\.\d+,\d{2}\.\d+/) !== -1) {
        const num = input.indexOf(',');
        this.handInput = `[${input.slice(0, num)}, ${input.slice(num + 1)}]`;
        const cord = document.createElement('p');
        cord.innerHTML = this.handInput;
        this.postDiv.appendChild(cord);
      } else {
        this.postDiv.parentNode.removeChild(this.postDiv);
      }
      this.message.parentNode.removeChild(this.message);
    });
    this.cancel.addEventListener('click', (event) => {
      event.preventDefault();
      this.message.parentNode.removeChild(this.message);
      this.postDiv.parentNode.removeChild(this.postDiv);
    });
  }
}