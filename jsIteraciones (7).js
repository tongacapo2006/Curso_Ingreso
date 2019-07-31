function mostrar()
{

	var contador=0;
	var acumulador=0;
  var respuesta='si';
  var numero;

  do
    {
      numero = prompt ("aver cacho tirame un num");
      numero = parseInt (numero);
      acumulador = acumulador + numero; /* acumulador =+ numero */
      contador++

      respuesta = prompt ("si queres meter otro num pone s");

      while (respuesta.toUpperCase () != "S" && respuesta.toUpperCase () != "N")
        {
          respuesta = prompt ("cacho s o n me tenes que meter dale ponele onda");
        }
    }
  while (respuesta == "s" || respuesta == "S");


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
