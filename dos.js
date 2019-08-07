function mostrar() {
  var nombre;
  var genero;
  var edad;
  var peso;
  var sumadorEdades = 0;
  var promedioEdades;
  var contadorEdadMayor = 0;
  var pesoMenor;
  var nombreMenosPesada;
  var contadorNoMasculinoOPesoMayor = 0;

  for (var i = 0; i < 4; i++) {
    nombre = prompt("Ingrese su nombre.");

    genero = prompt("Ingrese su genero (masculino, femenino u otro).");
    while (genero != "masculino" && genero != "femenino" && genero != "otro") {
      genero = prompt("ERROR. Debe introducir un genero que sea masculino, femenino u otro.");
    }

    edad = prompt("Introduzca su edad (entre 18 y 100 años)");
    edad = parseInt(edad);
    while (isNaN(edad) || edad < 18 || edad > 100) {
      edad = prompt("ERROR. Debe introducir una edad entre 18 y 100 años");
      edad = parseInt(edad);
    }

    peso = prompt("Introduzca su peso (1 kg minimo)");
    peso = parseInt(peso);
    while (isNaN(peso) || peso <= 1) {
      peso = prompt("ERROR. Debe introducir un peso que sea mayor a 1 kg.");
      peso = parseInt(peso);
    }

    if (edad >= 25) {
      sumadorEdades += edad;
      contadorEdadMayor++;
    }

    if (i == 0) {
      pesoMenor = peso;
      nombreMenosPesada = nombre;
    }
    else if (peso < pesoMenor) {
      pesoMenor = peso;
      nombreMenosPesada = nombre;
    }

    if (genero != "masculino" || peso > 80) {
      contadorNoMasculinoOPesoMayor++;
    }
  }

  if (contadorEdadMayor < 0)
  {
    promedioEdades = alert("No se puede calcular.");
  }
  else
  {
    promedioEdades = sumadorEdades / contadorEdadMayor;
  }
  alert("Promedio de las edades mayores o iguales a 25: " + promedioEdades + " aprox.");
  alert("Nombre de la persona menos pesada y su peso: " + nombreMenosPesada + " (" + pesoMenor + "kg.) ");
  alert("Cantidad de personas de género distinto a masculino ó peso mayor a 80: " + contadorNoMasculinoOPesoMayor);

}
