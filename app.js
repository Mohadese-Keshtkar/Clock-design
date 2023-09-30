let hrs = document.querySelector('#hrs')
let min = document.querySelector('#min')
let sec = document.querySelector('#sec')

setInterval(() => {

  let currentTime = new Date(); //Get the current time

  hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours(); //get hours
  min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes(); //get minute
  sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds(); //get second
}, 1000)
