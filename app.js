let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroIntentos=4;
let numeroMaximo = 10;
//let numeroMinimo = 1;

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return; //Apesar de no devolver nada, el instructor dijo que lo ponia por buena practica
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    //Si ya todos los numeros fueron sorteados
    if(listaNumerosSorteados.length === numeroMaximo){
        listaNumerosSorteados=[];
        generarNumeroSecreto();
    }else{
        //jugamos
        //Si el numeroGenerado esta incluido esta en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            // console.log(numeroGenerado);
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }  
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value="";
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario == numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos==1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        // Si el usuario no acerto
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento(".texto__parrafo", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    // Limpiar la caja
    limpiarCaja();
    // Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Reiniciar el numero de intentos
    condicionesIniciales();
    // Desahabilitar el boton de nuevo Juego
    document.querySelector("#reiniciar").setAttribute('disabled','true');
}

condicionesIniciales();

// console.log(numeroSecreto)
