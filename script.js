console.log("welcome to spotify")
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let git = document.getElementById('gif')

let songs = [
  {songsName: "my Warriyo - Mortals [NCS Release]",filepath:"songs/1.mp3", coverpath: "covers/1.jpg"},
  {songsName: "myCielo - Huma-Huma song",filepath:"songs/2.mp3", coverpath: "covers/2.jpg"},
  {songsName: "my DEAF KEV - Invincible [NCS Release]-320ksong",filepath:"songs/3.mp3", coverpath: "covers/3.jpg"},
  {songsName: "Different Heaven & EH!DE - My Heart [NCS Release] song",filepath:"songs/4.mp3", coverpath: "covers/4.jpg"},
  {songsName: "myJanji-Heroes-Tonight-feat-Johnning-NCS-Release song",filepath:"songs/5.mp3", coverpath: "covers/5.jpg"},
  {songsName: "my Rabba - Salam-e-Ishqsong",filepath:"songs/6.mp3", coverpath: "covers/6.jpg"},
  {songsName: "my Sakhiyaan - Salam-e-Ishqsong",filepath:"songs/7.mp3", coverpath: "covers/7.jpg"},
  {songsName: "mBhula Dena - Salam-e-Ishqy song",filepath:"songs/8.mp3", coverpath: "covers/8.jpg"},
  {songsName: "Tumhari Kasam - Salam-e-Ishq song",filepath:"songs/9.mp3", coverpath: "covers/9.jpg"},
  {songsName: "my sNa Jaana - Salam-e-Ishqong",filepath:"songs/10.mp3", coverpath: "covers/10.jpg"},
];
             
masterPlay.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime <= 0)
  {
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
  }
  else {
    audioElement.pause(); 
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play'); // Corrected class manipulation
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener('timeupdate',()=>
  {
   // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
  });
  myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
  })