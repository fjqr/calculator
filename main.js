const add = require('./add.js')

const screen = document.querySelector('.screen') //pantalla de la calculadora
const buttons = [...document.querySelectorAll('.buttons > div')] //botones

console.log(add.add(45,56))