import '../css/style.css';
import Media from './Media.js';
import TimeLine from './timeLine.js';


// const validator = new Validator(document.body);
// const validLogic = new ValidLogic(validator);

// validLogic.paySyst();


const timeLine = new TimeLine(document.body);
timeLine.create();

// let media = new Media(false, document.body);
// media.create();


/*
let audio = document.createElement('audio');
audio.controls = true;
document.body.appendChild(audio);
//audio.innerHTML = 'Запись';


//const audio = document.querySelector('#audio');


(async() => {
    if (!navigator.mediaDevices) {
    return;
    }
    try {

        //console.log(audio.currentTime);

    const stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: false,
    });
    const recorder = new MediaRecorder(stream);
const chunks = [];
recorder.addEventListener('start', (evt) => {
console.log('recording started');
});
recorder.addEventListener("dataavailable", (evt) => {
console.log('data available');
chunks.push(evt.data);
});
recorder.addEventListener('stop', (evt) => {
console.log('recording stopped');
const blob = new Blob(chunks);
audio.src = URL.createObjectURL(blob);
})
recorder.start();
setTimeout(() => {
    recorder.stop();
    stream.getTracks().forEach(track => track.stop());
    }, 5000)
    console.log(audio);
    } catch (e) {
    console.error(e);
    }
    })()

    let play = document.createElement('div');
    play.style.width = '50px';
    play.style.height = '50px';
    play.style.cursor = 'pointer';
    play.style.background = 'red';
    //audio.controls = true;
    document.body.appendChild(play);
    play.addEventListener('click', () => {
        console.log('+')
        audio.play();
        })

        audio.addEventListener('timeupdate', () => {
          //  console.log(audio.currentTime)
            let n = `${Math.round(audio.currentTime * 100 / audio.duration)}%`;
            //let n = 50;
        console.log(n)
        let polz = document.createElement('div');
        polz.setAttribute('class', 'polz');
        polz.style.width = n;
        polz.style.height = '50px';
        //play.style.cursor = 'pointer';
        polz.style.background = 'red';
        //audio.controls = true;
       try{let p = document.querySelector('.polz')
           p.parentNode.removeChild(p);
        document.body.appendChild(polz)}catch(e){
            document.body.appendChild(polz)
        };
        //document.write = audio.currentTime;
        })


        */
