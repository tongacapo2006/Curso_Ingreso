function mostrar()
{
  var pais;
  var habitantes;
  var temperatura;
  var contadorTempImpares = 0;
  var habitantesMaximos;
  var paisMasHabitantes;
  var contadorPaisesFrios = 0;
  var sumadorHabitantes = 0;
  var promedioHabitantes;
  var contador = 0;
  var temperaturaMax;
  var paisTempMax;

  do
  {
    pais = prompt ("Introduzca nombre del pais.");

    habitantes = prompt ("Introduzca cantidad de millones de habitantes (entre 1 y 270 millones).");
    habitantes = parseInt (habitantes);
    while (isNaN(habitantes) || habitantes < 1 || habitantes > 270)
    {
      habitantes = prompt ("ERROR. Introduzca cantidad de millones de habitantes (entre 1 y 270 millones).");
      habitantes = parseInt (habitantes);
    }

    temperatura = prompt ("Introduzca la temperatura del pais (entre 50º y -50º).");
    temperatura = parseInt (temperatura);
    while (isNaN(temperatura) || temperatura < -50 || temperatura > 50)
    {
      temperatura = prompt ("ERROR. Introduzca una temperatura entre -50º y 50º.");
      temperatura = parseInt (temperatura);
    }

    if (temperatura % 2 != 0)
    {
      contadorTempImpares++;
    }
    if (temperatura < 20)
    {
      contadorPaisesFrios++;
    }

    if (contador == 0)
    {
      temperaturaMax = temperatura;
      habitantesMaximos = habitantes;
      paisTempMax = pais;
      paisMasHabitantes = pais;
    }
    else
    {
      if (habitantes > habitantesMaximos)
      {
        habitantesMaximos = habitantes;
        paisMasHabitantes = pais;
      }

      if (temperatura > temperaturaMax)
      {
        temperaturaMax = temperatura;
        paisTempMax = pais;
      }
    }

    sumadorHabitantes += habitantes;
    contador++
  }
  while (confirm("Desea ingresar los datos de otro pais? S/N"));

  if (contador == 0)
  {
    promedioHabitantes = habitantes;
  }
  else
  {
    promedioHabitantes = sumadorHabitantes / contador;
  }

  document.write("La cantidad de temperaturas impares: " + contadorTempImpares + "<br>");
  document.write("El nombre del pais con más habitantes: " + paisMasHabitantes + "<br>");
  document.write("La cantidad de paises por debajo de los 20 grados: " + contadorPaisesFrios + "<br>");
  document.write("El promedio de habitantes entre los paises ingresados: " + promedioHabitantes + " millones <br>");
  document.write("La temperatura máxima ingresada, y nombre del pais que registro esa temperatura: " + paisTempMax + temperaturaMax + "ºC <br>");

}
