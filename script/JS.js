let z=10
console.log (z)

/* -- -- -- Début -- -- -- */
let propulsion = document.querySelector(".launch")
let countdown = document.querySelector('.nombre')
let rocket = document.querySelector(".rocket")
let img2 = document.querySelector(".img2")

let number = 21

propulsion.addEventListener(
'click',
function () {
setInterval(decollage, 1000);
}, false);

function decollage() {

sounds.play()
if(number > 0){
countdown.innerHTML = (number -= 1)
} else {
  sounds.pause ()
countdown.innerHTML = 0
rocket.style.transform = "translateY(-15000px)"
rocket.style.transition = "all 15s"
img2.style.transform = "translateY(-15000px)"
img2.style.transition = "all 15s"
}
}
/* -- -- -- Fin -- -- -- */
let sounds = document.querySelector(".bruit")
