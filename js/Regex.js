 let numeros = /[0-9]/;
 let mayusculas = /[A-Z]/;


 let parrafo = "hola soy jaim9e"

 if (mayusculas.test(parrafo) || numeros.test(parrafo) ) {
  console.log("contiene mayusculas o numeros");
  
 } else {
  console.log("No contiene mayusculas");
  
 }
