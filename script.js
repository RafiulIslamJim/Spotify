console.log("welcome to spotify");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let git = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
  {songsName: "my Warriyo - Mortals [NCS Release]",filepath:"songs/1.mp3", coverpath: "covers/1.jpg"},
  {songsName: "myCielo - Huma-Huma song",filepath:"songs/2.mp3", coverpath: "covers/2.jpg"},
  {songsName: "my DEAF KEV - Invincible ",filepath:"songs/3.mp3", coverpath: "covers/3.jpg"},
  {songsName: "Different Heaven & EH!DE ",filepath:"songs/4.mp3", coverpath: "covers/4.jpg"},
  {songsName: "myJanji-Heroes-Tonight-feat-Johnning-NCS-Release song",filepath:"songs/5.mp3", coverpath: "covers/5.jpg"},
  {songsName: "my Rabba - Salam-e-Ishqsong",filepath:"songs/6.mp3", coverpath: "covers/6.jpg"},
  {songsName: "my Sakhiyaan - Salam-e-Ishqsong",filepath:"songs/7.mp3", coverpath: "covers/7.jpg"},
  {songsName: "mBhula Dena - Salam-e-Ishqy song",filepath:"songs/8.mp3", coverpath: "covers/8.jpg"},
  {songsName: "Tumhari Kasam - Salam-e-Ishq song",filepath:"songs/9.mp3", coverpath: "covers/9.jpg"},
  {songsName: "my sNa Jaana - Salam-e-Ishqong",filepath:"songs/10.mp3", coverpath: "covers/10.jpg"},
];


songItems.forEach((element, jim) =>{ // this part is not working in console
  //console.log(element,jim);
  element.getElementsByTagName('img')[0].src = songs[jim].coverpath;
  element.getElementsByClassName('songName')[0].innerText = songs[jim].songsName;
});

             
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
 
myProgressBar.addEventListener('change',()=>
{
  audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
});

const makeAllplays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
  });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    makeAllplays();
    masterSongName.innerText = songs[songIndex].songsName;
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
  });
});

document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex>=9){
      songIndex = 0
  }
  else{
      songIndex += 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songsName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
});
document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex<=0){
      songIndex = 9
  }
  else{
      songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songsName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
});
  