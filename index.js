const keys = document.querySelectorAll(".key")

keys.forEach(key => key.addEventListener("click", pianoClick))

function pianoClick(e){
  let keyIndex = this.getAttribute("index")
  console.log(keyIndex)
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
if(pianoMode.checked){
  mode = 0
}
if(synthMode.checked){
  mode = 1
}

function playSound(indexKey){
  switch(indexKey){
    case 1:
      C_d.play()
    break;
    case 2:
    break;
    case 3:  
    break;
    case 4:  
    break;
    case 5:  
    break;
    case 6:  
    break;
    case 7:  
    break;
    case 8:  
    break;
    case 9:  
    break;
    case 10:  
    break;
    case 11:  
    break;
    case 12:  
    break;
  }
}

//all sounds || d-default sound

let C_d = new Audio()
