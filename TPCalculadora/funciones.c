#include <stdio.h>
#include <stdlib.h>

/** \brief Realiza la suma de dos valores enteros.
 *
 * \param Es el primer numero ingresado por el usuario.
 * \param Es el segundo numero ingresado por el usuario.
 * \return El resultado de la operacion.
 *
 */

int sumar (int a, int b)
{
    int resultado;
    resultado = a + b;

    return resultado;
}

/** \brief Realiza la resta de dos valores enteros.
 *
 * \param Es el primer numero ingresado por el usuario.
 * \param Es el segundo numero ingresado por el usuario.
 * \return El resultado de la operacion.
 *
 */

int restar (int a, int b)
{
    int resultado;
    resultado = a - b;

    return resultado;
}


/** \brief Realiza la multiplicacion de dos valores enteros.
 *
 * \param Es el primer numero ingresado por el usuario.
 * \param Es el segundo numero ingresado por el usuario.
 * \return El resultado de la operacion.
 *
 */

int multiplicar (int a, int b)
{
    int resultado;
    resultado = a * b;

    return resultado;
}


/** \brief Realiza la division de dos valores.
 *
 * \param Es el primer numero ingresado por el usuario.
 * \param Es el segundo numero ingresado por el usuario.
 * \return El resultado de la operacion (con decimales).
 *
 */

float dividir (int a, int b)
{
    float resultado;
    resultado = a / b;

    return resultado;
}


/** \brief Factoriza el primer valor ingresado por el usuario.
 *
 * \param Es el primer numero ingresado por el usuario.
 * \return El resultado de la factorizacion.
 *
 */

int factorial (int a)
{
    int resultado;

    if (a == 1)
    {
        resultado = 1;
    }
    else
    {
        resultado = a*factorial(a-1);
    }

    return resultado;
}
