//!Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el 
//! siguiente texto: "Hora del Desafío".
let etiquetaH1 = document.querySelector('h1');
let nombreDeCiudad;
let numero1 = 0;
let numero2 = 0;
let sumarNumeros = 0;

etiquetaH1.innerHTML ="Hora del Desafío";

//! Crea una función que muestre en la consola el mensaje 
//! "El botón fue clicado" siempre que se presione el botón "Console".
function presionarBotonConsole(){//dentro de la llave es para lo q queremos q realice esta funcion
    console.log("El botón fue clicado");
}

//!4.	Crea una función que se ejecute cuando se haga clic en el botón "prompt", 
//! preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el 
//! mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé 
//! de ti".
function presionarBotonPrompt(){
    nombreDeCiudad = prompt("Cómo se llama tu ciudad?");
    alert(`Estuve en ${nombreDeCiudad} y me acordé de ti`);
}

//! 5.	Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre 
//! que se presione el botón "Alerta".
function presionarBotonAlert(){
    alert("Yo amo JS");
}

//!6.	Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de 
//! la suma en una alerta.
function presionarBotonSuma(){
    numero1 = parseInt(prompt("Escribir un número por favor:"));
    numero2 = parseInt(prompt("Escribir otro número por favor:"));
    
    sumarNumeros = parseInt(numero1 + numero2);
    alert(`La suma de ambos número es igual a: ${sumarNumeros} .`);
}