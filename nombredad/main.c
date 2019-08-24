#include <stdio.h>
#include <stdlib.h>

int main()
{
    /*
    char nombre [10];
    int edad;

    printf("capo como te llamas: ");
    gets(nombre);

    printf("aver y cuantos años tenes: ");
    scanf("%d", &edad);

    printf("capo te llamas %s y tenes %d anios ", nombre, edad);
    */

    /*
    int numero1;
    int numero2;
    float promedio;

    printf("Ingrese un numero: ");
    scanf("%d", &numero1);

    printf("capardo mete otro numero: ");
    scanf("&d", &numero2);

    promedio = (float) (numero1 + numero2) / 2; // con (float) aclaramos que el resultado "promedio" puede ser un valor float.

    printf("Capardo el promedio de tus dos numeros es %.2f ", promedio);
    */

    int edad;
    char sexo;

    printf("Ingrese su edad: ");
    scanf("%d", &edad);

    printf("Ingrese su sexo: ");
    fflush(stdin);

    scanf("%c", &sexo);

    printf("Su edad es %d y su sexo es %c", edad, sexo);

    return 0;
}
