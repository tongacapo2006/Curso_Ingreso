function mostrar()
{

  var numero = prompt("ingrese un número entre 0 y 9.");

  while (isNaN (numero) || parseInt (numero) > 9 || parseInt (numero) < 0)
  {
    numero = prompt ("mete el num y ahora hacelo BIEN");

   /* if (numero >= 0 && numero <= 9)
    {
      document.getElementById ("Numero").value = "Muy bien capo metiste " + +numero+ + " y es un numero valido.";
    }*/
  }

  numero = parseInt (numero);

  document.getElementById ("Numero").value = numero;


}//FIN DE LA FUNCIÓN
