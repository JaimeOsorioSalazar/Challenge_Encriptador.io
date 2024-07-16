/* // const re = new RegExp(cambio, "g");

function desencriptador() {
  let cambio = ["ai", "enter", "imes", "ober", "ufat"];
  const por = ["a", "e", "i", "o", "u"];

  let parrafor = `fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!`;

  let arreglo = parrafor.split(" ").join(" ");
  if (parrafor.length == 0) {
    console.log("No has puesto nada");
  } else {
    for (let i = 0; i < cambio.length; i++) {
      if (arreglo.includes(cambio[i])) {
        arreglo = arreglo.replace(new RegExp(cambio[i], "g"), por[i]);
      }
    }
  }
console.log(arreglo);
  return arreglo
}
desencriptador();
 */
/* const str = "To be, or not to be, that is the question.";

console.log(str.includes("To be")); // true
console.log(str.includes("question")); // true
console.log(str.includes("nonexistent")); // false
console.log(str.includes("To be", 15)); // false
console.log(str.includes("TO BE")); // false
console.log(str.includes("")); // true */


// Boton de copia en funcionamiento - Estudiar clipboard.writeText() <= 

/* let textoACopiar = document.getElementById("textSalida").textContent;
let textoCopiado = document.querySelector(".botonCopia").addEventListener('click', async () => {
  const texto_a_copiar = document.getElementById("textSalida").textContent;
  console.log(texto_a_copiar);
  try {
      await navigator.clipboard.writeText(texto_a_copiar);
      alert('Texto copiado al portapapeles');
  } catch (err) {
      console.error('Error al copiar el texto: ', err);
      alert('Error al copiar el texto');
  }
}); */


/* textoCopiado.addEventListener("click", (event)=>{
  console.log("Boton copiado funcionando");
  console.log(textoACopiar);
  let prueba = event.clipboardData.setData("text/plain", textoACopiar.textContent);
  console.log(prueba);
  
  */

 // Creas un evento de escucha para el botón

function visible () {
  let botonCopiaVisible = document.querySelector(".contentButtonC");
  botonCopiaVisible.removeAttribute("style");
  // botonCopiaVisible.setAttribute("display", "block")
}

// probando el git ignore
//