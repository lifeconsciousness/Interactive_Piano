const keys = document.querySelectorAll(".key")
const whiteKeysCotainer = document.querySelector('[whiteKeys]')
let note = document.getElementById("note")

keys.forEach(key => key.addEventListener("click", pianoClick))

function pianoClick(){ 
  let keyIndex = this.getAttribute("index")
  keyIndex = Number(keyIndex)

  playSound(keyIndex)
}

 let C = document.getElementById("C")
 let D = document.getElementById("D") 
 let E = document.getElementById("E") 
 let F = document.getElementById("F") 
 let G = document.getElementById("G") 
 let A = document.getElementById("A") 
 let B = document.getElementById("B") 

 let Csh = document.getElementById("C#") 
 let Dsh = document.getElementById("D#") 
 let Fsh = document.getElementById("F#") 
 let Gsh = document.getElementById("G#") 
 let Ash = document.getElementById("A#") 
//detecting keyboard input
window.addEventListener("keydown", checkKeyPressed);

function checkKeyPressed(event) {

  switch(event.keyCode){
    //white keys
    case 90: playSound(1)
    highlightKey(C,true)    //z
    break;
    case 88: playSound(3) 
    highlightKey(D,true)    //x
    break;
    case 67: playSound(5) 
    highlightKey(E,true)    //c
    break;
    case 86: playSound(6) 
    highlightKey(F,true)    //v
    break;
    case 66: playSound(8) 
    highlightKey(G,true)    //b
    break;
    case 78: playSound(10) 
    highlightKey(A,true)    //n
    break;
    case 77: playSound(12) 
    highlightKey(B,true)    //m
    break;

    //black keys
    case 83: playSound(2)  
    highlightKey(Csh,false)  //s
    break;
    case 68: playSound(4)  
    highlightKey(Dsh,false)  //d
    break;
    case 71: playSound(7)  
    highlightKey(Fsh,false)  //g
    break;
    case 72: playSound(9)  
    highlightKey(Gsh,false)  //h
    break;
    case 74: playSound(11) 
    highlightKey(Ash,false)  //j
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
  //d-default sound, s-synth, sh - sharp#

  switch(indexKey){
    case 1:
      note.innerText = "Note: C"
      if(mode == 0){
        let C4_d = new Audio('./sounds/default/C4-d.mp3')
        C4_d.play()}
      else if(mode == 1){
        let C4_s = new Audio('./sounds/synth/C4-s.mp3')
        C4_s.volume = 1.1
        C4_s.play()}
    break;
    case 2:
      note.innerText = "Note: C#"
      if(mode == 0){
        let Csh4_d = new Audio('./sounds/default/Csh4-d.mp3')
        Csh4_d.play()}
      if(mode == 1){
        let Csh4_s = new Audio('./sounds/synth/Csh4-s.mp3')
        Csh4_s.play()}
    break;
    case 3:
      note.innerText = "Note: D"
      if(mode == 0){
        let D4_d = new Audio('./sounds/default/D4-d.mp3')
        D4_d.play()}
      if(mode == 1){
        let D4_s = new Audio('./sounds/synth/D4-s.mp3')
        D4_s.play()}
    break;
    case 4:
      note.innerText = "Note: D#"
      if(mode == 0){
        let Dsh4_d = new Audio('./sounds/default/Dsh4-d.mp3')
        Dsh4_d.play()}
      if(mode == 1){
        let Dsh4_s = new Audio('./sounds/synth/Dsh4-s.mp3')
        Dsh4_s.play()}
    break;
    case 5:
      note.innerText = "Note: E"
      if(mode == 0){
        let E4_d = new Audio('./sounds/default/E4-d.mp3')
        E4_d.play()}
      if(mode == 1){
        let E4_s = new Audio('./sounds/synth/E4-s.mp3')
        E4_s.play()}
    break;
    case 6:
      note.innerText = "Note: F"
      if(mode == 0){
        let F4_d = new Audio('./sounds/default/F4-d.mp3')
        F4_d.play()}
      if(mode == 1){
        let F4_s = new Audio('./sounds/synth/F4-s.mp3')
        F4_s.play()}
    break;
    case 7:
      note.innerText = "Note: F#"
      if(mode == 0){
        let Fsh4_d = new Audio('./sounds/default/Fsh4-d.mp3')
        Fsh4_d.play()}
      if(mode == 1){
        let Fsh4_s = new Audio('./sounds/synth/Fsh4-s.mp3')
        Fsh4_s.play()}
    break;
    case 8:
      note.innerText = "Note: G"
      if(mode == 0){
        let G4_d = new Audio('./sounds/default/G4-d.mp3')
        G4_d.play()}
      if(mode == 1){
        let G4_s = new Audio('./sounds/synth/G4-s.mp3')
        G4_s.play()}
    break;
    case 9:
      note.innerText = "Note: G#"
      if(mode == 0){
        let Gsh4_d = new Audio('./sounds/default/Gsh4-d.mp3')
        Gsh4_d.play()}
      if(mode == 1){
        let Gsh4_s = new Audio('./sounds/synth/Gsh4-s.mp3')
        Gsh4_s.play()}
    break;
    case 10:
      note.innerText = "Note: A"
      if(mode == 0){
        let A4_d = new Audio('./sounds/default/A4-d.mp3')
        A4_d.play()}
      if(mode == 1){
        let A4_s = new Audio('./sounds/synth/A4-s.mp3')
        A4_s.play()}
    break;
    case 11:
      note.innerText = "Note: A#"
      if(mode == 0){
        let Ash4_d = new Audio('./sounds/default/Ash4-d.mp3')
        Ash4_d.play()}
      if(mode == 1){
        let Ash4_s = new Audio('./sounds/synth/Ash4-s.mp3')
        Ash4_s.play()}
    break;
    case 12:
      note.innerText = "Note: B"
      if(mode == 0){
        let B4_d = new Audio('./sounds/default/B4-d.mp3')
        B4_d.play()}
      if(mode == 1){
        let B4_s = new Audio('./sounds/synth/B4-s.mp3')
        B4_s.play()}
    break;
  }
}

function delay(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

function highlightKey(keyContainer, blackOrWhiteKeys){
  let highlightKey = document.createElement('div')

  if(blackOrWhiteKeys){highlightKey.classList.add('darkerWhiteKey')}
  else{highlightKey.classList.add('darkerBlackKey')}

  keyContainer.appendChild(highlightKey)
  delay(180).then(() => { keyContainer.removeChild(highlightKey)});
}
