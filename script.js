// color variables from css
const mainColor = window.getComputedStyle(document.documentElement).getPropertyValue('--main-color')
const fadeColor = window.getComputedStyle(document.documentElement).getPropertyValue('--fade-color')

const hourElement   = document.querySelector('.hour .main')
const minuteElement = document.querySelector('.minute .main')

const am = document.querySelector('.amORpm .am')
const pm = document.querySelector('.amORpm .pm')

const data = new Date()

let hour   = data.getHours()
let minute = data.getMinutes()

hourElement.innerHTML = hour
minuteElement.innerHTML = minute