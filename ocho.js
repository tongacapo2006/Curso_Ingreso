function mostrar()
{
    var numero;
    /*var num_positivo;*/
    /*var num_negativo;*/
    var letra;
    var respuesta;
    var num_par = 0;
    var num_impar = 0;
    var ceros = 0;
    var promedio_positivos = 0;
    var contador_positivos = 0;
    var suma_negativos = 0;
    var num_max;
    var letra_max;
    var num_min;
    var letra_min;
    var contador = 0;

    do
    {
        numero = prompt ("maese dame un num");
        numero = parseInt (numero);

        while (numero < -100 || numero > 100)
        {
            numero = prompt ("nono man un numero entre 100 negativo y 100 positivo porfa");
            numero = parseInt (numero);
        }

        letra = prompt ("y una letra aver");

        while ((letra < "A" || letra > "Z") && ( letra < "a" || letra > "z"))
        {
            letra = prompt ("ajajaj chabon en que idioma hablas? una letra valida tirame");
        }

        if (numero > 0)
        {
            promedio_positivos =+ numero;
            contador_positivos++
        }
        
        else if (numero < 0)
        {
            suma_negativos =+ numero;
        }

        else
        {
            ceros++;
        }

        if (numero % 2 == 0)
        {
            num_par++;
        }

        else
        {
            num_impar++;
        }

        if (contador == 0)
        {
            num_max = numero;
            num_min = numero;
        }
        else
        {
            if (numero > num_max)
            {
                num_max = numero;
            }

            else if (numero < num_min)
            {
                num_min = numero;
            }
        }

        

        if (contador == 0)
        {
            letra_max = letra;
            letra_min = letra;
        }

        else
        {
            if (letra > letra_max)
            {
                letra_max = letra;
            }

            if (letra < letra_min)
            {
                letra_min = letra;
            }
        }

        respuesta = prompt ("queres meter otros? decime decime dale");

        while (respuesta.toUpperCase() != "s" || respuesta.toUpperCase() != "n")
        {
            respuesta = prompt ("s o n tenes que poner webon dale");
        }

        contador++
    }
    while (respuesta == "s" || respuesta == "S");

    alert (num_par);

    alert (num_impar);

    alert (ceros);

    promedio_positivos = parseInt (promedio_positivos);
    contador_positivos = parseInt (contador_positivos);
    promedio_positivos = promedio_positivos / contador_positivos;

    alert (promedio_positivos);

    alert (suma_negativos);

    alert (num_max + num_min + letra_max + letra_min);

}
