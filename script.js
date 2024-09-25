console.log("Welcome to Spotify");
let songIndex =0;
let audioElement = new Audio('song/1.mp3');
let masterplay =document.getElementById('masterplay');
let myProgressber =document.getElementById('myProgressber');
let gif =document.getElementById('gif');
let masterSong =document.getElementById('masterSong');
let songItems=Array.from(document.getElementsByClassName('songItem'))
let songs=[
    {songName:"LEGION", filepath:"song/1.mp3",coverpath:"covers/1.jpg"},
    {songName:"TRAP", filepath:"song/2.mp3",coverpath:"covers/2.jpg"},
    {songName:"THEY MAD", filepath:"song/3.mp3",coverpath:"covers/3.jpg"},
    {songName:"PLUG WALK", filepath:"song/4.mp3",coverpath:"covers/4.jpg"},
    {songName:"ARTIST-NAME", filepath:"song/5.mp3",coverpath:"covers/5.jpg"},
    {songName:"SAFETY PATH", filepath:"song/6.mp3",coverpath:"covers/6.jpg"},
    {songName:"BACK-IT-UP", filepath:"song/7.mp3",coverpath:"covers/7.jpg"},
    {songName:"The Love", filepath:"song/8.mp3",coverpath:"covers/8.jpg"},
]

songItems.forEach((element,i)=>{
    // console.log(element,i)
    element.getElementsByTagName("img")[0].src= songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText= songs[i].songName;

})

/// Handle play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
        
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity =0;
        
    }
})

//listen to Events
audioElement.addEventListener('timeupdate',()=>{
    
    //update seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressber.value = progress;
})

myProgressber.addEventListener('change',()=>{
    audioElement.currentTime = myProgressber.value * audioElement.duration/100;
})

const makeallplays = ()=>{
   
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    makeallplays();
    
    songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src =`song/${songIndex+1}.mp3`;
        masterSong.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity =1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex =0;
    }
    else{
        songIndex +=1;
    }

    audioElement.src =`song/${songIndex+1}.mp3`;
    masterSong.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex>0){
        songIndex =0;
    }
    else{
        songIndex -=1;
    }

    audioElement.src =`song/${songIndex+1}.mp3`;
    masterSong.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

})

