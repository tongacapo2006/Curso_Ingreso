function mostrar()
{

	var contador=0;
	var positivo=0;
  var negativo=1;
  var numero;

  var respuesta='si';

  do
    {
      numero = prompt ("manolo tirate un num");
      numero = parseInt (numero);

      if (numero > 0)
        {
          positivo =+ numero;
        }
      else if (numero < 0)
        {
          negativo = negativo * numero; /* negativo =* numero; */
        }

        contador++
        respuesta = prompt ("capo queres meter otro num?");

      while (respuesta.toUpperCase () != "S" && respuesta.toUpperCase () != "N")
        {
          respuesta = prompt ("cacho s o n me tenes que meter dale ponele onda");
        }
    }
  while (respuesta == "s" || respuesta == "S");


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
