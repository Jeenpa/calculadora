const d = document;
let result = d.querySelector(".result");
const botones = document.querySelectorAll('button');
let expresion = "";


// Agrega un evento de clic a cada botón
botones.forEach((boton) => {
  boton.addEventListener('click', (e) => {
    
    if(e.target.matches(".equals")){
      return result.innerHTML = "hello word";
    }

    if(e.target.matches("#danger")){
      expresion = "";
      return result.innerHTML = "0";
    }

    if(e.target.matches("#del")){
      expresion = expresion.slice(0, -1);
      return result.innerHTML = expresion;
    }
    
    expresion+= e.target.id;
    result.innerHTML = expresion;
  });
});

/*
d.querySelector("#cal").addEventListener("click", (e) => {
  let expresion = prompt("Ingresa los valores a calcular");
  let partes;
  let result = 0;
  let operando1 = "";
  let operando2 = "";

  // Estas estructuras condicionales evaluan si la cadena contiene "+ , -, * ó /" y realiza la operacion correspondiente
  if (expresion.includes("+")) {
    partes = expresion.split("+");
    operando1 = parseFloat(partes[0]);
    operando2 = parseFloat(partes[1]);
    result = `${operando1 + operando2}`;
  } else if (expresion.includes("-")) {
    partes = expresion.split("-");
    operando1 = parseFloat(partes[0]);
    operando2 = parseFloat(partes[1]);
    result = `${operando1 - operando2}`;
  } else if (expresion.includes("*")) {
    partes = expresion.split("*");
    operando1 = parseFloat(partes[0]);
    operando2 = parseFloat(partes[1]);
    result = `${operando1 * operando2}`;
  } else if (expresion.includes("/")) {
    partes = expresion.split("/");
    operando1 = parseFloat(partes[0]);
    operando2 = parseFloat(partes[1]);
    operando1 === 0 || operando2 === 0
      ? (result = "Error")
      : (result = `${operando1 / operando2}`);
  }

  console.log(result); // Salida
});

*/