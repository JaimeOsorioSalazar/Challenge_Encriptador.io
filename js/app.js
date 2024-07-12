function encriptar() {
  // Retirar texto 

  // Variables declaradas
  let retirar = document.querySelector(".textoParaRetirar");
  let retirar2 = document.querySelector(".textoParaRetirar2");

  let parrafo = document.getElementById("text").value;
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

  
  document.getElementById("text").value = " ";
  document.getElementById("tex")
  imagen.remove();
}

