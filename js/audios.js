const list_container = document.getElementById("list-container")
const audio = document.getElementById("audio");
const play_btn = document.getElementById("play-btn")
const next_btn = document.getElementById("next-btn")
const back_btn = document.getElementById("back-btn")

const volume_down_btn = document.getElementById("volume-down")

const canciones = [
    {
        id:1,
        title:"Last Dance ",
        audio:"audio/LAST DANCE.mp3",
        cover:"img/caratulas/last dance.jpg",
        artist: "Big Bang"
    },
    {
        id:2,
        title:"F2020",
        audio:"audio/TXT F2020 .mp3",
        cover:"img/caratulas/f2020.jpg",
        artist: "Tomorrow x Together"
    },
    {
        id:3,
        title:"View",
        audio:"audio/view.mp3",
        cover:"img/caratulas/shinee.jpg",
        artist: "Shinee"
    },
    {
        id:4,
        title:"우리끼리",
        audio:"audio/우리끼리.mp3",
        cover:"img/caratulas/mamamoo.png",
        artist: "--"
    },
    {
        id:5,
        title:"FXXK IT",
        audio:"audio/BIGBANG - FXXK IT.mp3",
        cover:"img/caratulas/fxxk it.jpg",
        artist: "Big Bang"
    },
    {
        id:6,
        title:"Break the Distance 2.0",
        audio:"audio/Break the Distance 2.0.mp3",
        cover:"img/caratulas/600x600.jpg",
        artist: "Ashton Edminster"
    },
    
]

canciones.forEach((e)=>{
    list_container.insertAdjacentHTML("beforeend",
    `
    <div class="list-item" id="${e.id}">
            <img class="cover" src="${e.cover}" alt="${e.title}">
            <div class="song-data">
                <div>${e.title}</div>
                <div>${e.artist}</div>
            </div>
        </div>
    `
    )
});

const play_card = (obj_audio)=>{
    const cover_card_img = document.getElementById("cover-card-img");
    cover_card_img.src = obj_audio.cover;
}

const play_audio=(id)=>{
const res = canciones.find((e) => e.id == id)
    if(res)
    {
        audio.src = res.audio,
        audio.play();
    }
};

list_container.addEventListener("click",(e)=>{
    if(e.target.matches(".list-item"))
    { 
        play_audio(e.target.id);
        
    }
    else if(e.target.matches(".cover"))
    {
        play_audio(e.target.parentNode.id);
    }
    else if(e.target.matches(".song-data")){
        play_audio(e.target.parentNode.id);
    }
    else if(e.target.matches("song-data div")){
        play_audio(e.target.parentNode.parentNode.id);
    }
});

let is_playing = false;
play_btn.addEventListener("click",()=>{
    if(is_playing){  
        audio.pause(); 
        is_playing=false;  
        play_btn.innerHTML = "play"; 
    }
    else{
        is_playing=true;
        audio.play();
        play_btn.innerHTML = "pause";
    }
})


volume_down_btn.addEventListener("click",()=>{
    audio.volume = audio.volume - 0.1;
})

