/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	// LEO el valor del elemento que obtuve por ID.
	nombre = document.getElementById("elNombre").value;
	// Muestro el valor con alert()
	alert(nombre);
}

