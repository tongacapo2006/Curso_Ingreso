#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <conio.h>

int main()
{
    /* char nombre1 [20] = "Juan";
    char nombre2 [20];

    strcpy(nombre2, nombre1);


    puts(nombre2);*/

    char nombre;
    int nota;
    char sexo;
    char NombreNotaMaximaSexo;
    char NombreNotaMinimaSexo;
    float promedioNotasTotales = 0;
    float promedioNotasMujeres = 0;
    int contador = 0;
    int acumuladorNotas = 0;
    int acumuladorNotasMujeres = 0;
    char respuesta;

    do
    {
        printf("Introduzca su nombre: ");
        fflush(stdin);
        scanf("%c", &nombre);

        printf("Introduzca su nota: ");
        fflush(stdin);
        scanf("%d", &nota);
        while (nota < 0 || nota > 10)
        {
            printf("Introduzca su nota: ");
            fflush(stdin);
            scanf("%d", &nota);
        }

        printf("Introduzca su sexo: ");
        fflush(stdin);
        scanf("%c", &sexo);
        while (sexo != 'f' && sexo != 'm')
        {
            printf("ERROR. Introduzca m o f: ");
            fflush(stdin);
            scanf("%c", &sexo);
        }

        printf("Desea introducir la nota de otrx alumnx? S/N");
        fflush(stdin);
        scanf("%c", &respuesta);
    } while (respuesta == 's');



    return 0;
}
