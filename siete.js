function mostrar()
{
    
        /*
        var nota;
        var sexo;
        var contador = 0;
        var acumulador = 0;
        var promedio;
        var nota_baja;
    
        do
            {
                while (nota >= 0 && nota <= 10)
                {
                    nota = prompt ("aver esas notas capx");
                    sexo = prompt ("sos nene o nena?");
    
                    nota = parseInt (nota);
                    acumulador =+ nota;
                    contador++
    
                    if (nota < nota_baja)
                    {
                        nota_baja = nota;
                    }
                }
                while (isNaN (nota) || parseInt (nota) < 0 || parseInt (nota) > 10)
                {
                    nota = prompt ("a ver si nos entendemos pone un NUMERO entre 0 y 10 maestro");
                }
                while (sexo.toUpperCase() != "F" && sexo.toLocaleUpperCase() != "M")
                {
                    sexo = prompt ("nono si sos nena mete una F y si sos varoncito una M disculpa mala mia");
                }
            }
        while (contador < 5);
    
        promedio = acumulador / 5;
        alert ("el promedio es " + promedio);
    
        if (nota_baja)
        alert ("amigo tenes " + promedio + " es el promedio mas bajo anda a estudiar");
    
        if (nota >= 6 && sexo == "M")
        {
            alert ()
        }*/
    
        var nota;
        var sexo;
        var promedio;
        var nota_baja;
        var acumulador = 0;
        var nota_baja_Sexo;
        var contador_Varones = 0;
    
        for (var i = 0; i < 5; i++)
        {
            nota = prompt ("aver esas notas capx");
            nota = parseInt (nota);
    
            while (isNaN (nota) || nota < 0 || nota > 10)
                {
                    nota = prompt ("a ver si nos entendemos pone un NUMERO entre 0 y 10 maestro");
                    nota = parseInt (nota);
                }
            
            sexo = prompt ("sos nene o nena?")
    
            while (sexo.toUpperCase () != "F" && sexo.toUpperCase() != "M")
                {
                    sexo = prompt ("nono si sos nena mete una F y si sos varoncito una M disculpa mala mia");
                }
    
            if (i == 0)
                {
                    nota_baja_Sexo = sexo;
                    nota_baja = nota;
                }
            else
                {
                    if (nota < nota_baja)
                    {
                        nota_baja_Sexo = sexo;
                        nota_baja = nota;
                    }
                }
            /* Mas eficiente, ahorra lineas de codigo:
            if (i == 0 || nota < nota_baja)
                {
                    nota_baja_Sexo = sexo;
                    nota_baja = nota;
                }
            */

            sexo = sexo.toUpperCase();
            
            if (nota >= 6 && sexo == "M")
                {
                    contador_Varones++;
                }
            acumulador =+ nota;
        }
    
        promedio = acumulador / 5;
        alert ("el promedio es de todas las notas es " + promedio);
    
        alert ("amigx tenes un " + nota_baja + " es la nota mas baja y sos " + nota_baja_Sexo + " anda a estudiar por favor");
    
        alert ("hay " + contador_Varones + " flacos que sacaron 6 o mas bien ahi pibes sale una birra");
    
    
}
