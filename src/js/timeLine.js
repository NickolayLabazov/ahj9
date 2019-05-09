import Media from './Media.js';
import Post from './post.js';

export default class timeLine {
  constructor(parent) {
    this.parent = parent;
    this.posts = [];
    this.div = null;
    this.form = null;
    this.input = null;
    this.recorder = null;
    this.audioRec = null;
    this.videoRec = null;
    this.microphone = null;
    this.camera = null;
    this.video = false;
    this.blob = null;
  }

  create() {
    this.div = document.createElement('div');
    this.parent.appendChild(this.div);
    this.form = document.createElement('form');
    this.div.appendChild(this.form);
    this.input = document.createElement('input');
    this.form.appendChild(this.input);
    this.input.setAttribute('class', 'input');
    this.recorder = document.createElement('div');
    this.recorder.setAttribute('class', 'recorder');
    this.form.appendChild(this.recorder);
    this.microphone = document.createElement('div');
    this.microphone.innerHTML = '&#127908';
    this.recorder.appendChild(this.microphone);
    this.camera = document.createElement('div');
    this.camera.style.cursor = 'pointer';
    this.microphone.style.cursor = 'pointer';
    this.camera.innerHTML = '&#127909';
    this.recorder.appendChild(this.camera);
    this.addListener();
  }

  addListener() {
    this.camera.addEventListener('click', (e) => {
      e.stopPropagation();
      this.video = true;
      this.record();
    }, true);

    this.microphone.addEventListener('click', (e) => {
      e.stopPropagation();
      this.video = false;
      this.record();
    }, true);
  }

  async record() {
    if (!navigator.mediaDevices) {
      return;
    }
    try {
      // console.log(audio.currentTime);

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: this.video,
      });
      const recorder = new MediaRecorder(stream);
      const chunks = [];
      recorder.addEventListener('start', (evt) => {
        console.log('recording started');
      });
      recorder.addEventListener('dataavailable', (evt) => {
        console.log('data available');
        chunks.push(evt.data);
      });
      recorder.addEventListener('stop', (evt) => {
        console.log('recording stopped');
        this.blob = new Blob(chunks);
        // this.cont.src = URL.createObjectURL(this.blob);
        const media = new Media(this.video, document.body, this.blob);
        const post = new Post(document.body, media.create());
        post.create();
        // document.body.appendChild(media.create());
      });
      recorder.start();
      setTimeout(() => {
        recorder.stop();
        stream.getTracks().forEach(track => track.stop());
      }, 5000);
      console.log(this.cont);
    } catch (e) {
      console.error(e);
    }
  }
}