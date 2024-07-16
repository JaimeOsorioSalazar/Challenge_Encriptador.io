
function encriptar() {
  // Retirar texto 
  let retirar = document.querySelector(".textoParaRetirar");
  let retirar2 = document.querySelector(".textoParaRetirar2");


  // Variables declaradas
  let parrafo = document.getElementById("text").value;
  // let place = document.getElementById("text");
  let imagen = document.getElementById("imagen");
  console.log(parrafo);
  let parrafoLowerCase = parrafo.toLowerCase();
  let separado = parrafoLowerCase.split(" ").join(" ");
  let proceso = [];
  
  // Proceso de encriptación en curso
  for (let i = 0; i < separado.length; i++) {
    proceso.push(separado[i]);
    console.log(proceso);
    if (separado[i] == "a") {
      proceso.push("i");
    }
    if (separado[i] == "e") {
      proceso.push("nter");
    }
    if (separado[i] == "i") {
      proceso.push("mes");
    }
    if (separado[i] == "o") {
      proceso.push("ber");
    }
    if (separado[i] == "u") {
      proceso.push("fat");
    }
  }
  //Retorno de encriptación 
  let resultado = proceso.join("");
  let parrafoSalidad = document.getElementById("textSalida");
  
  parrafoSalidad.innerHTML = resultado;
  console.log(`Resultado: ${resultado}`);
  retirar.remove();
  retirar2.remove();
  visible();
  
  document.getElementById("text").value = "";
  // place.ariaPlaceholder = "Ingresa texto aquí";
  imagen.remove();
}
// Función desencriptador
function desencriptador() {
  let retirar = document.querySelector(".textoParaRetirar");
  let retirar2 = document.querySelector(".textoParaRetirar2");
  let parrafoSalidad = document.getElementById("textSalida");
  
  let cambio = ["ai", "enter", "imes", "ober", "ufat"];
  const por = ["a", "e", "i", "o", "u"];

  let parrafor = document.getElementById("text").value ;
  let arreglo = parrafor.split(" ").join(" ");
  console.log();
  if (parrafor.length == 0) {
    console.log("No has puesto nada");
  } else {
    for (let i = 0; i < cambio.length; i++) {
      if (arreglo.includes(cambio[i])) {
        arreglo = arreglo.replace(new RegExp(cambio[i], "g"), por[i]);
      }
    }
  }
  parrafoSalidad.innerHTML = arreglo;

  retirar.remove();
  retirar2.remove();
  imagen.remove();
  visible();
}

// Funcion copiar *** No esta terminado ***
let textoACopiar = document.getElementById("textSalida").textContent;
let textoCopiado = document.querySelector(".botonCopia").addEventListener('click', async () => {
  const texto_a_copiar = document.getElementById("textSalida").textContent;
  // console.log(texto_a_copiar);
  try {
      await navigator.clipboard.writeText(texto_a_copiar);
      alert('Texto copiado al portapapeles');
  } catch (err) {
      console.error('Error al copiar el texto: ', err);
      alert('Error al copiar el texto');
  }
});

//Función que hace visible el boton de copiar
function visible () {
  let botonCopiaVisible = document.querySelector(".contentButtonC");
  botonCopiaVisible.removeAttribute("style")
  // botonCopiaVisible.setAttribute("display", "block")
}