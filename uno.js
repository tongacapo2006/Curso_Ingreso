
function mostrar()
{
  var ladoA;
  var ladoB;
  var angulosRectos;
  var area;
  var perimetro;
  var sumaLados;
  var multiplicacionLados;

  ladoA = document.getElementById ("ladoA").value;
  ladoA = parseInt (ladoA);
  ladoB = document.getElementById ("ladoB").value;
  ladoB = parseInt (ladoB);
  angulosRectos = document.getElementById ("angulosRectos").value;

  if (angulosRectos == "SI")
  {
    if (ladoA == ladoB)
    {
      multiplicacionLados = (ladoA*ladoA) * (ladoB*ladoB);
      alert ("Lados concatenados: " + ladoA + ladoB + ". La multiplicacion de sus lados es: " + multiplicacionLados);
    }
    else
    {
      area = ladoA * ladoB;
      alert ("Lados concatenados: " + ladoA + ladoB + ". La supeficie es " + area);
    }
  }
  else
  {
    if (ladoA == ladoB)
    {
      sumaLados = ladoA + ladoB;
      alert ("Lados concatenados: " + ladoA + ladoB + ". La suma de sus lados es " + sumaLados);
    }
    else
    {
      perimetro = ladoA*2 + ladoB*2;
      alert ("Lados concatenados: " + ladoA + ladoB + ". El perimetro es " + perimetro);
    }
  }
}
