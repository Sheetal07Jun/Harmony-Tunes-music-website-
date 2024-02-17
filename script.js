console.log("Welcome to Harmony Tunes");

// Instialize the variables
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs=[
    { songName: "Let Me Love You - Justin Bieber", filePath: "songs/1.mp3",coverPath: "covers/1.jpg"},
    { songName: "Maan Meri jaan - King", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Ram Siya Ram - Adipurush", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "What Jhumka?- Rocky Aur Rani Kii", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Everytime - Descendants of the Sun", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Pyar Hota Kayi - Tu Jhoothi Main", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "O Bedardeya - : Tu Jhoothi Main", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Chaleya - Jawan", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Phir Aur Kya - Phir Aur Kya Chahiye ", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Jhume Jo - Pathan", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
    { songName: "Haan Hasi Ban - Hamari Adhuri", filePath: "songs/11.mp3", coverPath: "covers/11.jpg" },
    { songName: "Filhall- B praak", filePath: "songs/12.mp3", coverPath: "covers/12.jpg" },
    { songName: "Zihal e Miskin- Vishal Mishra", filePath: "songs/13.mp3", coverPath: "covers/13.jpg" },
    { songName: "Kahani suno- kaifi khalil ", filePath: "songs/14.mp3", coverPath: "covers/14.jpg" },
    { songName: "O Sahiba- Dil Hai Tumahara", filePath: "songs/15.mp3", coverPath: "covers/15.jpg" }


]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})



// audioElement.play();

// Handle play/pause Click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
    
})

myProgressBar.addEventListener('change' ,()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
}) 


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src= `songs/${songIndex+1}.mp3`;
        masterSongName.innerHTML = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=14){
        songIndex= 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src= `songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex= 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src= `songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})


// // trying 

// const makeAllPause = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-play-circle');
//         element.classList.add('fa-pause-circle');

//     })
// }
// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{
//         makeAllPause();
//         songIndex = parseInt(e.target.id);
//         e.target.classList.remove('fa-pause-circle');
//         e.target.classList.add('fa-play-circle');
//         audioElement.src= `songs/${songIndex+1}.mp3`;
//         masterSongName.innerHTML = songs[songIndex].songName;
//         audioElement.currentTime = 0;
//         audioElement.pause();
//         gif.style.opacity = 1;
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//     })
// })