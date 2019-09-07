#include <stdio.h>
#include <stdlib.h>
#include "funciones.h"

int main()
{
    float resultado;
    int num1;
    int num2;
    int opcion;
    char letra;

    printf("Bienvenido/a a la calculadora!!\nIntroduzca el primer numero: ");
    scanf("%d", &num1);
    printf("Ahora introduzca el segundo numero: ");
    scanf("%d", &num2);

        do
        {
            printf("Primer numero ingresado: %d \nSegundo numero ingresado: %d \n", num1, num2);
            printf("------Menu de Opciones------\n\n Seleccione la operacion que desea realizar con los numeros ingresados. \n\n");

            printf("1. Sumar\n");
            printf("2. Restar\n");
            printf("3. Multiplicar\n");
            printf("4. Dividir\n");
            printf("5. Factorial\n");
            printf("6. Salir\n");

            scanf("%d", &opcion);

            switch (opcion)
            {
                case 1:
                    resultado = sumar(num1,num2);
                    printf("Ud. selecciono Sumar y el resultado es: %.2f \n", resultado);
                    break;

                case 2:
                    resultado = restar(num1,num2);
                    printf("Ud. selecciono Restar y el resultado es: %.2f \n", resultado);
                    break;

                case 3:
                    resultado = multiplicar(num1,num2);
                    printf("Ud. selecciono Multiplicar y el resultado es: %.2f \n", resultado);
                    break;

                case 4:
                    if (num2 == 0 || num1 == 0)
                    {
                        printf("No se puede dividir por cero.");
                    }
                    else
                    {
                        resultado = dividir(num1,num2);
                        printf("Ud. selecciono Dividir y el resultado es: %.2f \n");
                    }
                    break;

                case 5:
                    resultado = factorial(num1);
                    printf("Ud selecciono Factorial. El factorial del primer numero ingresado es: %d", resultado);
                    break;
            }

            printf("Desea realizar otra operacion con los numeros ingresados? s/n:");
            scanf("%s", &letra);

            if (letra != 's')
            {
                opcion = 6;
            }

        }while (opcion!=6);

    return 0;
}
