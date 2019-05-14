import Media from './media.js';
import Post from './post.js';

export default class timeLine {
  constructor(parent) {
    this.parent = parent;
    this.posts = [];
    this.div = null;
    this.form = null;
    this.input = null;
    this.recorder = null;
    this.recorderStart = null;
    this.audioRec = null;
    this.videoRec = null;
    this.microphone = null;
    this.camera = null;
    this.video = false;
    this.blob = null;
    this.stopCanc = null;
    this.cancel = null;
    this.stop = null;
    this.stream = null;
    this.chunks = [];
    this.timerDiv = null;
    this.timeout = null;
    this.stop = true;
    this.duplication = null;
  }

  create() {
    this.div = document.createElement('div');
    this.parent.appendChild(this.div);
    this.form = document.createElement('form');
    this.div.appendChild(this.form);
    this.input = document.createElement('input');
    this.form.appendChild(this.input);
    this.input.setAttribute('class', 'input');
    this.recorderStart = document.createElement('div');
    this.recorderStart.setAttribute('class', 'recorder');
    this.form.appendChild(this.recorderStart);
    this.microphone = document.createElement('div');
    this.microphone.innerHTML = '&#127908';
    this.recorderStart.appendChild(this.microphone);
    this.camera = document.createElement('div');
    this.camera.style.cursor = 'pointer';
    this.microphone.style.cursor = 'pointer';
    this.camera.innerHTML = '&#127909';
    this.recorderStart.appendChild(this.camera);


    this.stopCanc = document.createElement('div');
    this.stopCanc.setAttribute('class', 'recorder');
    this.stop = document.createElement('div');
    this.stop.innerHTML = '&#10003';
    this.stopCanc.appendChild(this.stop);
    this.cancel = document.createElement('div');
    this.cancel.style.cursor = 'pointer';
    this.stop.style.cursor = 'pointer';
    this.cancel.innerHTML = '&#10008';
    this.timerDiv = document.createElement('div');
    this.stopCanc.appendChild(this.timerDiv);
    this.stopCanc.appendChild(this.cancel);


    this.addListener();
  }

  addListener() {
    this.camera.addEventListener('click', (e) => {
      e.stopPropagation();
      this.video = true;
      this.record();
      this.form.removeChild(this.recorderStart);
      this.form.appendChild(this.stopCanc);
      this.timer();
    }, true);

    this.microphone.addEventListener('click', (e) => {
      e.stopPropagation();
      this.video = false;
      this.record();
      this.form.removeChild(this.recorderStart);
      this.form.appendChild(this.stopCanc);
      this.timer();
    }, true);

    this.stop.addEventListener('click', (e) => {
      e.stopPropagation();
      this.stop = true;
      this.recorder.stop();
      this.form.removeChild(this.stopCanc);
      this.form.appendChild(this.recorderStart);
      clearInterval(this.timeout);
    }, true);

    this.cancel.addEventListener('click', (e) => {
      e.stopPropagation();
      this.stop = false;
      this.recorder.stop();


      this.stream.getTracks().forEach(track => track.stop());
      this.form.removeChild(this.stopCanc);
      this.form.appendChild(this.recorderStart);
      clearInterval(this.timeout);
    }, true);

    this.input.addEventListener('keydown', (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        if (this.input.value !== '') {
          const content = document.createElement('p');
          content.innerHTML = `${this.input.value}`;
          const post = new Post(document.body, content, true);
          post.create();
          this.input.value = '';
        }
      }
    });
  }

  timer() {
    let min = 0;
    let sec = 0;
    this.timerDiv.innerHTML = `0${min}.0${sec}`;
    this.timeout = setInterval(() => {
      sec += 1;
      if (sec === 60) {
        sec = 0;
        min += 1;
      }
      let s = 0;
      let m = 0;
      if (sec < 10) {
        s = 0;
      } else {
        s = '';
      }
      if (min < 10) {
        m = 0;
      } else {
        m = '';
      }
      this.timerDiv.innerHTML = `${m}${min}.${s}${sec}`;
    }, 1000);
  }

  async record() {
    if (!navigator.mediaDevices) {
      return;
    }
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: this.video,
        // video: true,
      });
      if (this.video) {
        this.duplication = document.createElement('video');
        this.duplication.setAttribute('class', 'duplication');
        document.body.appendChild(this.duplication);
        this.duplication.srcObject = this.stream;
        this.duplication.muted = true;
        this.duplication.play();
      }


      this.recorder = new MediaRecorder(this.stream);
      this.chunks = [];
      this.recorder.addEventListener('start', () => {
        console.log('recording started');
      });
      this.recorder.addEventListener('dataavailable', (evt) => {
        console.log('data available');
        this.chunks.push(evt.data);
      });
      this.recorder.addEventListener('stop', () => {
        this.stream.getTracks().forEach(track => track.stop());
        this.blob = new Blob(this.chunks);
        const media = new Media(this.video, document.body, this.blob);
        const post = new Post(document.body, media.create(), this.stop);
        post.create();

        document.body.removeChild(this.duplication);
        this.duplication = null;
      });
      this.recorder.start();
      /* setTimeout(() => {
        this.recorder.stop();
        this.stream.getTracks().forEach(track => track.stop());
      }, 5000);
      console.log(this.cont) */
    } catch (e) {
      console.error(e);
    }
  }
}