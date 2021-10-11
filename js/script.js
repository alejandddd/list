const list_container = document.getElementById("list-conteiner");
const audio  = document.getElementById("audio");
const play_btn = document.getElementById("play-btn");
const play_btn = document.getElementById("prev-btn")
const play_btn = document.getElementById("next-btn")
const cover_card_img = document.getElementById("cover-card-img");
const title_card = document.getElementById("title-card");
const progress = document.getElementById("progress-bar")

let is_playing = false;
let index = 1;

const canciones = [
    {
        id: 1,
        title: "Serial Killer",
        audio: "audio/Lana Del Rey - Serial Killer.mp3",
        cover: "img/serial killer.jpg",
        artist: "Lana Del Rey"
    },
    {
        id: 2,
        title: "Last Dance",
        audio: "audio/LAST DANCE.mp3",
        cover: "img/last dance.jpg",
        artist: "BigBANG"
    },
    {
        id: 3,
        title: "Playboy",
        audio: "audio/PLAYBOY.mp3",
        cover: "img/cover.jpg",
        artist: "Exo",
    }
];
const renderizar_canciones = (arr) =>{
    list_container.Enter(
        "beforeend",
        ``
}

canciones.forEach((e) =>{
    list_container.insertAdjacentHTML(
        "beforeend",
        `
        <div class="playing-card" id="${e.id}">
            <imf class="cover" src="${e.cover}" alt="${e.title}" />
            <div class="cover-card">
                <div>${e.title}</div>
                <div>${e.artist}</div>
            </div>
        </div>
        `
    );
});



const play_audio = (a) => {
    audio.src = a.audio;
    audio.play;
};
list_container.addEventListener("click", (e)=>{
    console.log(e.target);
})