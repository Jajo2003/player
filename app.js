let Main_arr= [
  {
    img:"Pics/2pac.jpg",
    art_name:"2Pac",
    song_name:"Changes",
    song_url: "MP3/2Pac.mp3",
},
{
  img:"Pics/asap-rocky.jpg",
  art_name:"Asap Rocky",
  song_name:"Praise The Lord",
  song_url: "MP3/Praise lord.mp3",
},
{
  img:"Pics/ice-cube.jpg",
  art_name:"Ice Cube",
  song_name:"It was a good day",
  song_url: "MP3/Cube.mp3"
},
{
  img:"Pics/pucci.jpg",
  art_name:"Pucci",
  song_name:"Crucified",
  song_url:"MP3/Crucified.mp3",
},
{
  img:"Pics/ricardo-milos.jpg",
  art_name:"Halogen",
  song_name:"U got that",
  song_url: "MP3/U got that.mp3",
}, 
]

let Pics = [];
for(let i=0;i<Main_arr.length;i++){
  Pics[i]=`<img id="music" src="${Main_arr[i].img}">`;
}
let setpic = document.getElementById('music-cont');
const artist_name = document.querySelector('.artist-name');
const song_name = document.querySelector('.song-name');
let play = document.getElementById(`play-pause`);
let counter = 0;
let ctr2 =0;
let pause_play = document.getElementById('play-pause');
let music = document.getElementById('AudioFile');



function aaa(value){
 setpic.innerHTML = Pics[value];
  artist_name.innerHTML = Main_arr[value].art_name;
  song_name.innerHTML = Main_arr[value].song_name;
  for(let i =0;i<Main_arr.length;i++){
      play = document.getElementById(`play-pause${i}`);
       if(i===value){
        play.classList.add('fa-pause');
        play.classList.remove('fa-play');
       pause_play.classList.add('fa-pause');
       pause_play.classList.remove('fa-play');
       }
       else if(play.classList.contains('fa-pause')){
       play.classList.remove('fa-pause');
       play.classList.add('fa-play');
       pause_play.classList.add('fa-play');
       pause_play.classList.remove('fa-pause');
       }
   }
  counter = value;
  return counter;
}
function changeforward(cvladi){
  if(counter === Main_arr.length -1 ){
  setpic.innerHTML = Pics[0];
  artist_name.innerHTML = Main_arr[0].art_name;
  song_name.innerHTML = Main_arr[0].song_name;
  counter = 0;

}
else {
  setpic.innerHTML = Pics [counter+1];
  artist_name.innerHTML = Main_arr[counter+1].art_name;
  song_name.innerHTML = Main_arr[counter+1].song_name;
  counter++;
}
playmusic(cvladi);
return counter;
}
function changebackward(){
  let a = Main_arr.length - 1;
  if(counter === 0 ){
    setpic.innerHTML = Pics[a];
    artist_name.innerHTML = Main_arr[a].art_name;
    song_name.innerHTML = Main_arr[a].song_name;
    counter = a;
  }
  else {
    setpic.innerHTML = Pics [counter-1];
  artist_name.innerHTML = Main_arr[counter-1].art_name;
  song_name.innerHTML = Main_arr[counter-1].song_name;
  counter--;
  }
  return counter;
}
function playmusic(value){
  music.setAttribute('src',Main_arr[value].song_url);
  let duration = music.duration;
  duration /=60;
  console.log(duration);
    if(!music.classList.contains('playing')){
      music.classList.add('playing');
      music.play();
      pause_play.classList.add('fa-pause');
       pause_play.classList.remove('fa-play');
    }
    else if(music.classList.contains('playing')){
      music.classList.remove('playing');
      music.pause;
      pause_play.classList.add('fa-play');
       pause_play.classList.remove('fa-pause');
    }
    return value;
}

