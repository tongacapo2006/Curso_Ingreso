#include <stdio.h>
#include <stdlib.h>

int main()
{
    char opcion;
    char salir = 'n';
    int flag1 = 0;



    do
    {
        system("cls");
        printf ("----- Menu de Opciones -----\n\n");
        printf ("a- Sumar\n");
        printf ("b- Restar \n");
        printf ("c- Multiplicar\n");
        printf ("d- Dividir\n");
        printf ("e- Salir\n\n");
        printf ("Indique Opcion:");
        fflush (stdin);
        opcion = getchar();

        switch (opcion)
        {
            case 'a':
                printf("Usted eligio Sumar\n");
                flag1 = 1;
                system("pause");
                break;

            case 'b':
                printf("Usted eligio Restar\n");
                system("pause");
                break;

            case 'c':
                printf("Usted eligio Multiplicar\n");
                system("pause");
                break;

            case 'd':
                printf("Usted eligio Dividir\n");
                system("pause");
                break;

            case 'e':
                printf("Confirma salida?\n");
                fflush (stdin);
                salir = getchar();
                break;

            default:
                printf ("Opcion invalida, master\n\n");
                system ("pause");
                break;
        }

    }while (salir == 'n');


    return 0;
}
