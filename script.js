// color variables from css
const mainColor = window.getComputedStyle(document.documentElement).getPropertyValue('--main-color')
const fadeColor = window.getComputedStyle(document.documentElement).getPropertyValue('--fade-color')

const hour   = document.querySelector('.hour .main')
const minute = document.querySelector('.minute .main')

const am = document.querySelector('.amORpm .am')
const pm = document.querySelector('.amORpm .pm')