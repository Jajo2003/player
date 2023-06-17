let pics_arr = [
  "Pics/2pac.jpg",
  "Pics/asap-rocky.jpg",
  "Pics/ice-cube.jpg",
  "Pics/pucci.jpg",
  "Pics/ricardo-milos.jpg",
]
let Pics = [];
for(let i=0;i<pics_arr.length;i++){
  Pics[i]=`<img id="music" src="${pics_arr}">>`;
}
let a = document.getElementById('music-cont');
a.innerHTML = Pics[i];