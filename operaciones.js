console.log(document)
"use strict";
const pantalla = document.getElementById('pantalla')
//numeros
const numbre_0 = document.getElementById('number_0')
const numbre_1 = document.getElementById('number_1')
const numbre_2 = document.getElementById('number_2')
const numbre_3 = document.getElementById('number_3')
const numbre_4 = document.getElementById('number_4')
const numbre_5 = document.getElementById('number_5')
const numbre_6 = document.getElementById('number_6')
const numbre_7 = document.getElementById('number_7')
const numbre_8 = document.getElementById('number_8')
const numbre_9 = document.getElementById('number_9')
//operadores
const suma = document.getElementById('suma')
const resta = document.getElementById('resta')
const multiplicacion = document.getElementById('multiplicacion')
const division = document.getElementById('division')
const porcentaje = document.getElementById('porcentaje')
//botones borrar, limpiar e igual
const borrar = document.getElementById('borrar')
const limpiar = document.getElementById('limpiar')
const igual = document.getElementById('igual')

let numeros = []
//funcion para botones
function escribir(evento) {
    try {
        cadena = ''
        if (pantalla.textContent == '0') {
            pantalla.textContent = ''

            let valor = evento.target;
            cadena = pantalla.textContent + valor.textContent
            pantalla.textContent = cadena
        } else {
            if (pantalla.textContent.length < 17) {
                let valor = evento.target;
                cadena = pantalla.textContent + valor.textContent
                pantalla.textContent = cadena
            }
        }

    } catch (error) {
        console.log(error)
    }
}

function operaciones(evento) {
    try {
        let operacion = evento.target
        if (operacion.textContent == '%') {
            let numero = pantalla.textContent
            let resul = numero / 100
            pantalla.textContent = resul.toString()
        } else {
            if (pantalla.textContent != '0') {
                let numero1 = parseInt(pantalla.textContent)
                numeros.push(numero1)
                numeros.push(operacion.textContent)
                pantalla.textContent = '0'
            }
        }
    } catch (error) {
        console.log(error)
    }
}

function resultado() {
    try {
        if (numeros.length != 0) {
            let numero2 = parseInt(pantalla.textContent)
            numeros.push(numero2)
            let operador = numeros[1]
            let total = 0
            switch (operador) {
                case '+':
                    total = numeros[0] + numeros[2]
                    pantalla.textContent = total.toString()
                    break;
                case '-':
                    total = numeros[0] - numeros[2]
                    pantalla.textContent = total.toString()
                    break;
                case 'X':
                    total = numeros[0] * numeros[2]
                    pantalla.textContent = total.toString()
                    break;
                case '/':
                    total = numeros[0] / numeros[2]
                    pantalla.textContent = total.toString()
                    break;
                default:
                    console.log('No se realizo ninguna operación')
            }
            numeros = []
        }
    } catch (error) {
        console.log(error)
    }
}
//eventos de click

numbre_0.addEventListener('click', escribir)
numbre_1.addEventListener('click', escribir)
numbre_2.addEventListener('click', escribir)
numbre_3.addEventListener('click', escribir)
numbre_4.addEventListener('click', escribir)
numbre_5.addEventListener('click', escribir)
numbre_6.addEventListener('click', escribir)
numbre_7.addEventListener('click', escribir)
numbre_8.addEventListener('click', escribir)
numbre_9.addEventListener('click', escribir)

limpiar.addEventListener('click', () => {
    pantalla.textContent = 0
})

suma.addEventListener('click', operaciones)
resta.addEventListener('click', operaciones)
multiplicacion.addEventListener('click', operaciones)
division.addEventListener('click', operaciones)
porcentaje.addEventListener('click', operaciones)

igual.addEventListener('click', resultado)