// color variables from css
const mainColor = window.getComputedStyle(document.documentElement).getPropertyValue('--main-color')
const fadeColor = window.getComputedStyle(document.documentElement).getPropertyValue('--fade-color')

const hourElement   = document.querySelector('.hour .main')
const minuteElement = document.querySelector('.minute .main')

const am = document.querySelector('.amORpm .am')
const pm = document.querySelector('.amORpm .pm')

const date = new Date()

let hour   = date.getHours()
let minute = date.getMinutes()

hourElement.innerHTML = hour
minuteElement.innerHTML = minute

let ampm = hour >= 12 ? 'PM' : 'AM';
if(ampm === 'AM'){
    am.style.color = mainColor
}else{
    pm.style.color = mainColor
}