import {  format  } from 'date-fns'

function a(date) {
    console.log('a:', format(date, "d 'de' MMMM 'de' yyyy"))
}

function b(date) {
    console.log('b:', format(date, "dd/MM/yyyy"))
}

function c(date) {
    console.log('c:', format(date, "d MMM"))
}

function d(date) {
    console.log('d:', format(date, "dd MMM yyyy"))
}

function e(date) {
    console.log('e:', format(date, "dd 'de' MMM 'de' yyyy"))
}

function f(date) {
    console.log('f:', format(date, "dd/MMM"))
}

const agora = new Date(2020, 9, 5)

a(agora)
b(agora)
c(agora)
d(agora)
e(agora)
f(agora)