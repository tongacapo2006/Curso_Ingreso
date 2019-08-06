function mostrar()
{
  var marca;
  var peso;
  var temperatura;
  var marcaProdMasPesado;
  var productosBajoCero = 0;
  var temp_Par = 0;
  var sumadorPesos = 0;
  var peso_Promedio;
  var peso_max;
  var peso_min;
  var contadorPesos = 0;
  var flagSeguir;

  do
  {
    //Pide ingreso de la marca
    marca = prompt ("Introduzca la marca del producto");

    //Pide ingreso del peso
    peso = prompt ("Ingrese el peso del producto (entre 1 y 100 kg)");
    peso = parseInt (peso);

    //Validacion del peso
    while (isNaN(peso) || peso > 100 || peso < 1)
    {
      peso = prompt ("ERROR CAPOOOOO ingresa un peso menor a 100 y mayor a 1");
      peso = parseInt (peso);
    }

    //Pide la temperatura
    temperatura = prompt ("Ingrese la temperatura de almacenamiento (entre -30º y 30º)");
    temperatura = parseInt (temperatura);

    //Validacion de la temperatura
    while (isNaN(temperatura) || temperatura > 30 || temperatura < -30)
    {
      temperatura = prompt ("ERROR CAPOOOOOO ingresa una temperatura menor a 30º o mayor a -30º");
      temperatura = parseInt (temperatura);
    }

    if (contadorPesos == 0)
    {
      peso_max = peso;
      peso_min = peso;
      marcaProdMasPesado = marca;
    }
    else if (peso > peso_max)
    {
      peso_max = peso;
      marcaProdMasPesado = marca;
    }
    else if (peso < peso_min)
    {
      peso_min = peso;
    }
    sumadorPesos =+ peso;

    //Considero al 0 como numero par
    //Cuento temperaturas que sean pares
    if (temperatura % 2 == 0)
    {
      temp_Par++;
    }

    if (temperatura < 0)
    {
      productosBajoCero++
    }

    contadorPesos++;

    flagSeguir = confirm("Desea introducir los datos de otro producto? S/N");
  }
  while (flagSeguir);

  peso_Promedio = sumadorPesos / contadorPesos;

  document.write("Hay " + temp_Par + " productos que se almacenan a temperaturas pares <br>");
  document.write("El producto mas pesado es marca " + marcaProdMasPesado + "<br>");
  document.write("Hay " + productosBajoCero + " productos que deben ser almacenados por debajo de 0º <br>");
  document.write("El promedio del peso de todos los productos es " + peso_Promedio + " kg. <br>");
  document.write("El producto menos pesado es " + peso_min + " y el mas pesado es " + peso_max + "<br>");

}
