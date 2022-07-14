console.log("Welcome to Spotify")
let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay')
let progress_bar=document.getElementById('progress_bar');
let gif=document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let song =[

    {songName:" Shri krishna govind",  filePath: "songs/1.mp3" ,  CoverPath: "krishna.jpg"},
    {songName:" Madhurashtakam",       filePath: "songs/2.mp3" ,  CoverPath: "krishna_2.jpg"},
    {songName:" Hare krishna",         filePath: "songs/3.mp3" ,  CoverPath: "krishna_3.jpg"},
   {songName:" krishna nanda kumara",  filePath: "songs/4.mp3" ,  CoverPath: "krishna_4.jpg"},
   {songName:" Achuthan keshavan",     filePath: "songs/5.mp3" ,  CoverPath: "krishna_5.jpg"}
]

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }

    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})




audioElement.addEventListener('timeupdate',()=>{
    progress =parseInt((audioElement.currentTime/audioElement.duration) *100);
    
    progress_bar.value=progress;
})


progress_bar.addEventListener('change', ()=>{
    audioElement.currentTime=progress_bar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = song[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=5){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementsById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})