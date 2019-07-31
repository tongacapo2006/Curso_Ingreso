function mostrar()
{

	var contador=0;
	// declarar variables

  var respuesta='s';
  var maximo;
  var minimo;
  var numero;

	while(respuesta!='n')
	{
    maximo = prompt ("vamo de nuevo aver tirame un num");
    maximo = parseInt (maximo);

    contador++

    respuesta = prompt ("averga queres tirar otro?");

    while (respuesta.toUpperCase () != "S" && respuesta.toUpperCase () != "N")
      {
        respuesta = prompt ("bueno bro a ver si nos entendemos me tenes que tirar s o n");
      }

    if (respuesta.toUpperCase() == "S")
      {
        if (maximo > minimo)
          {
            document.getElementById ("maximo").value = numero;
          }
        else if (minimo < maximo)
          {
            document.getElementById ("minimo").value = numero;
          }
      }
  }
/*
if (numero > maximo)
  {
    maximo = numero;
  }

if (numero < minimo)
  {
    minimo = numero;
  }

}//FIN DE LA FUNCIÓN
