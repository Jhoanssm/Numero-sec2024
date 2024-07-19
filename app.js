// // document.querySelector: Conexión al HTML /// (''): Se selecciona la etiqueta --- 
// let titulo = document.querySelector('h1');
// // variable.innerHTML = Comando que se asigna para hacer un parrafo dinámico con JS en la pag
// titulo.innerHTML = 'Juego del Número Secreto';
// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Dame un número del 1 al 100';

// // Se incluyen funciones, las CSSFontFeatureValuesRule, su nombre debe estar en html y en js en el mismo nombre


// REDUCIR Y MEJORAR EL CÓDIGO

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados= [];
let numeroMaximo = 100;

function asignarTextoElemento (element, texto){
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = texto;
    return; //Es importante que al termnar cada función realicemos un return
    
}

function intentoDeUsuario() {//Aqui se le asigna la actividad de la varible numeroSecreto
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

        if(numeroUsuario === numeroSecreto){ //===: significa que una variable es igual a otra es decir:(numeroUsuario === numeroSecreto) 
            asignarTextoElemento('p',`Acertaste el número secreto en ${intentos} ${(intentos===1) ? 'intento' : 'intentos'}`)//templte String ${} 
            document.getElementById('reiniciar').removeAttribute('disabled'); // el comando removeAttribute, elimina el atributo que se quiera y que se encuentra en el html
            //dentro del --> ('')
        } else{ //El usuario no acertó
            if (numeroSecreto > numeroUsuario){
            asignarTextoElemento('p','El número secreto es mayor')
            } else{
                asignarTextoElemento('p','El número secreto es menor')
            }
            intentos ++;
            vaciarCampo(); //Como la función principal se origina aqui, se realiza la función de vaciar y se le asigna la intetoDeUsuario
        }
        return; //Es importante que al termnar cada función realicemos un return
     };

function vaciarCampo() {
    document.querySelector('#valorUsuario').value =''; // AQUI, EL # indica que se quiere seleccionar el id así como en CSS
}

function asignarNumeroSecreto() {
    let numeroGener = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGener);
    console.log(listaNumerosSorteados);
    //Lo que se sigue es una función if, para saber si el número está incluido en la lista
    if (listaNumerosSorteados.length == numeroMaximo) { //includes, si está incluido en una fúnción o variable y es de arrays
         asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else{
         //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGener)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGener);
            return numeroGener;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto')
    asignarTextoElemento('p','Indica un número del 1 al 100') 
    numeroSecreto = asignarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    // Limpiar caja
    vaciarCampo();
    // asignar número aleatorio
    //asignarNumeroSecreto();
    // número de intentos
    // Indicar mensaje de intervalo de números
    condicionesIniciales();
    // deshabilitar el boton de reinicio
    document.querySelector('#reiniciar').setAttribute('disabled','true');//Vuelve a deshabilitar el boton de reinicio
}

condicionesIniciales();
