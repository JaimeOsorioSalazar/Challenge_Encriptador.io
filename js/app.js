// Función para retirar texto e imagen 
function encriptar() {
  // Retirar texto
 

  // Variables declaradas
  let parrafo = document.getElementById("text").value;

  let imagen = document.getElementById("imagen");

  let parrafoLowerCase = parrafo.toLowerCase();
  let separado = parrafoLowerCase.split(" ").join(" ");
  let proceso = [];
  // Proceso de encriptación en curso
  for (let i = 0; i < separado.length; i++) {
    proceso.push(separado[i]);
    
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
    
     let resultado = proceso.join("");
    let parrafoSalidad = document.getElementById("textSalida");

    parrafoSalidad.innerHTML = resultado;
    

    document.getElementById("text").value = "";
    // place.ariaPlaceholder = "Ingresa texto aquí";
    imagen.style.display = "none"
    document.querySelector(".textoParaRetirar").style.display = "none";
    document.querySelector(".textoParaRetirar2").style.display = "none";
  }

  //Retorno de encriptación
  let resultado = proceso.join("");
  let parrafoSalidad = document.getElementById("textSalida");
  
  parrafoSalidad.innerHTML = resultado;
  
 
  visible()
  
  document.getElementById("text").value = "";
  // place.ariaPlaceholder = "Ingresa texto aquí";
  
}

  
// Función desencriptador
function desencriptador() {
  let retirar = document.querySelector(".textoParaRetirar");
  let retirar2 = document.querySelector(".textoParaRetirar2");
  let parrafoSalidad = document.getElementById("textSalida");

  let cambio = ["ai", "enter", "imes", "ober", "ufat"];
  const por = ["a", "e", "i", "o", "u"];

  let parrafor = document.getElementById("text").value;
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
  
  document.getElementById("text").value = "";
  document.querySelector(".textoParaRetirar").style.display = "none";
  document.querySelector(".textoParaRetirar2").style.display = "none";
  visible();
}

// Funcion copiar *** No esta terminado ***
let textoACopiar = document.getElementById("textSalida").textContent;
let textoCopiado = document
  .querySelector(".botonCopia")
  .addEventListener("click", async () => {
    const texto_a_copiar = document.getElementById("textSalida").textContent;
    // console.log(texto_a_copiar);
    try {
      await navigator.clipboard.writeText(texto_a_copiar);
      alert("Texto copiado al portapapeles");
    } catch (err) {
      console.error("Error al copiar el texto: ", err);
      alert("Error al copiar el texto");
    }
  });

//Función que hace visible el boton de copiar
function visible() {
  let botonCopiaVisible = document.querySelector(".contentButtonC");
  botonCopiaVisible.removeAttribute("style");
  // botonCopiaVisible.setAttribute("display", "block")
}