//Variables
let songIndex = 0;
let audioElement=new Audio('songs/mehbooba.mp3');
let playButton = document.getElementById('play-button');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let navSong = document.getElementById('navSong');
let songItemPlay = document.getElementById('songItemPlay');
let songs=[
  {songName:"Mehbooba - KGF Chapter 2", filePath:"songs/mehbooba.mp3", coverPath: "images/kgf.jpg"},
  {songName:"Tu Hai Wohi - Jonita Gandhi", filePath:"songs/tuhaiwohi.mp3", coverPath: "images/tuhai.jpg"},
  {songName:"Aap ki Nazron ne - Sanam", filePath:"songs/aknns.mp3", coverPath: "images/aknns.jpg"},
  {songName:"Perfect - Ed Sheeran", filePath:"songs/perfect.mp3", coverPath: "images/perfect.jpg"},
  {songName:"Tera Woh Pyaar - Asim & Momina", filePath:"songs/twp.mp3", coverPath: "images/twp.jpg"},
  {songName:"Chand si Mehbooba - Rahul Vaidya", filePath:"songs/chandsi.mp3", coverPath: "images/chandsi.jpg"},
  {songName:"Tum Ho - Mohit Chauhan", filePath:"songs/tumho.mp3", coverPath: "images/tumho.jpg"},
  {songName:"Can't help falling in love - Elvis Presley", filePath:"songs/chfilwy.mp3", coverPath: "images/chfilwy.jpg"},
  {songName:"Sagar Jaisi Ankhon Wali - Saagar", filePath:"songs/sagarjaisi.mp3", coverPath: "images/sagar.jpg"},
  {songName:"Afreen Afreen - Rahat & Momina", filePath:"songs/afreen.mp3", coverPath: "images/afreen.jpg"}
]

songItems.forEach(function(element,i){
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songTitle")[0].innerText = songs[i].songName;

});

//events
playButton.addEventListener('click',playPause);
audioElement.addEventListener('timeupdate', timeUpdate);
myProgressBar.addEventListener('change',seekbarMove);
Array.from(document.getElementsByClassName('songItemPlay')).forEach(function(element){
  element.addEventListener('click',(e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = songs[songIndex].filePath;
    navSong.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    playButton.classList.remove('fa-play-circle');
    playButton.classList.add('fa-pause-circle');
    //playButton.classList.remove("fa-heart");
    //playButton.classList.add("fa-heart-pulse");
  });
})

document.getElementById('next').addEventListener('click',()=>{
  if (songIndex>=9){
    songIndex=0;
  }
  else{
    songIndex+=1;
  }
  audioElement.src = songs[songIndex].filePath;
  navSong.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  playButton.classList.remove('fa-play-circle');
  playButton.classList.add('fa-pause-circle');
  //playButton.classList.remove("fa-heart");
  //playButton.classList.add("fa-heart-pulse");
})

document.getElementById('previous').addEventListener('click',()=>{
  if (songIndex<=0){
    songIndex=0;
  }
  else{
    songIndex-=1;
  }
  audioElement.src = songs[songIndex].filePath;
  navSong.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  playButton.classList.remove('fa-play-circle');
  playButton.classList.add('fa-pause-circle');
  //playButton.classList.remove("fa-heart");
  //playButton.classList.add("fa-heart-pulse");
})

function playPause(){
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    navSong.innerText = songs[songIndex].songName;
    playButton.classList.remove("fa-play-circle");
    playButton.classList.add("fa-pause-circle");
//     playButton.classList.remove("fa-heart");
//     playButton.classList.add("fa-heart-pulse");
    gif.style.opacity = 1;
  }else if(timeUpdate==100){
    playButton.classList.remove("fa-pause-circle");
    playButton.classList.add("fa-play-circle");
//     playButton.classList.remove("fa-heart-pulse");
//     playButton.classList.add("fa-heart");
    gif.style.opacity = 0;
  }
  else {
    audioElement.pause();
    makeAllPlays();
    playButton.classList.remove("fa-pause-circle");
    playButton.classList.add("fa-play-circle");
//     playButton.classList.remove("fa-heart-pulse");
//     playButton.classList.add("fa-heart");
    gif.style.opacity = 0;
  }
}

function timeUpdate(){
  progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
  myProgressBar.value=progress;
}

function seekbarMove(){
  audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
}

function makeAllPlays(){
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
  })
}
