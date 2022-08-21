const keys = document.querySelectorAll(".key")

keys.forEach(key => key.addEventListener("click", pianoClick))

function pianoClick(e){
  let keyIndex = this.getAttribute("index")
  //console.log(keyIndex)
  keyIndex = Number(keyIndex)

  playSound(keyIndex) 

}

//detecting keyboard input
window.addEventListener("keydown", checkKeyPressed);

function checkKeyPressed(event) {
  switch(event.keyCode){
    //white keys
    case 90: playSound(1) //z
    break;
    case 88: playSound(3) //x
    break;
    case 67: playSound(5) //c
    break;
    case 86: playSound(6) //v
    break;
    case 66: playSound(8) //b
    break;
    case 78: playSound(10) //n
    break;
    case 77: playSound(12) //m
    break;
    //black keys
    case 83: playSound(2) //s
    break;
    case 68: playSound(4) //d
    break;
    case 71: playSound(7) //g
    break;
    case 72: playSound(9) //h
    break;
    case 74: playSound(11) //j
    break;
  }
}

let pianoMode = document.getElementById("piano")
let synthMode = document.getElementById("synth")
let mode;

function playSound(indexKey){
  if(pianoMode.checked){
    mode = 0
  }
  if(synthMode.checked){
    mode = 1
  }

  //all sounds 
  //d-default sound, sh - sharp#

  switch(indexKey){
    case 1:
      if(mode == 0){
        let C4_d = new Audio('./sounds/default/C4-d.mp3')
        C4_d.play()}
      if(mode == 1){
        let C4_d = new Audio('./sounds/')
        .play()}
    break;
    case 2:
      if(mode == 0){
        let Csh4_d = new Audio('./sounds/default/Csh4-d.mp3')
        Csh4_d.play()}
      if(mode == 1){
        let C4_d = new Audio('./sounds/')
        .play()}
    break;
    case 3:
      if(mode == 0){
        let D4_d = new Audio('./sounds/default/D4-d.mp3')
        D4_d.play()}
      if(mode == 1){
        let C4_d = new Audio('./sounds/')
        .play()}
    break;
    case 4:
      if(mode == 0){
        let Dsh4_d = new Audio('./sounds/default/Dsh4-d.mp3')
        Dsh4_d.play()}
      if(mode == 1){
        let C4_d = new Audio('./sounds/')
        .play()}
    break;
    case 5:
      if(mode == 0){
        let E4_d = new Audio('./sounds/default/E4-d.mp3')
        E4_d.play()}
      if(mode == 1){
        let C4_d = new Audio('./sounds/')
        .play()}
    break;
    case 6:
      if(mode == 0){
        let F4_d = new Audio('./sounds/default/F4-d.mp3')
        F4_d.play()}
      if(mode == 1){
        let C4_d = new Audio('./sounds/')
        .play()}
    break;
    case 7:
      if(mode == 0){
        let Fsh4_d = new Audio('./sounds/default/Fsh4-d.mp3')
        Fsh4_d.play()}
      if(mode == 1){
        let C4_d = new Audio('./sounds/')
        .play()}
    break;
    case 8:
      if(mode == 0){
        let G4_d = new Audio('./sounds/default/G4-d.mp3')
        G4_d.play()}
      if(mode == 1){
        let C4_d = new Audio('./sounds/')
        .play()}
    break;
    case 9:
      if(mode == 0){
        let Gsh4_d = new Audio('./sounds/default/Gsh4-d.mp3')
        Gsh4_d.play()}
      if(mode == 1){
        let C4_d = new Audio('./sounds/')
        .play()}
    break;
    case 10:
      if(mode == 0){
        let A4_d = new Audio('./sounds/default/A4-d.mp3')
        A4_d.play()}
      if(mode == 1){
        let C4_d = new Audio('./sounds/')
        .play()}
    break;
    case 11:
      if(mode == 0){
        let Ash4_d = new Audio('./sounds/default/Ash4-d.mp3')
        Ash4_d.play()}
      if(mode == 1){
        let C4_d = new Audio('./sounds/')
        .play()}
    break;
    case 12:
      if(mode == 0){
        let B4_d = new Audio('./sounds/default/B4-d.mp3')
        B4_d.play()}
      if(mode == 1){
        let C4_d = new Audio('./sounds/')
        .play()}
    break;
  }
}




