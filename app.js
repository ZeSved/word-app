const but = document.querySelector('.but')
const p = document.querySelector('.p')

let arr = ''
let item
let inp
let ar
let finishedAr
let word

but.addEventListener('click', () => {
  inp = document.querySelector('.in').value
  arr = inp
  ar = arr.split(' ')

  word = document.querySelector('.word').value

  finishedAr = ar.filter(w => w === word)
  
  if(finishedAr.length == 0){
    p.innerText = "Couldn't find that..."
  } else {
    p.innerText = `${word}: ${finishedAr.length}`
  }
})
