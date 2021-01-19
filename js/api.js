window.onload = mostrarNombre( );

/**
 * Defino la función mostrarNombre la cual a través de sessionStorage
 * almacenará los datos del input y se lo mostrará al usuario.
 **/
function mostrarNombre( ) {

	var nombre = document.getElementById( "nombre" )
	.value;

	sessionStorage.setItem( "nombre", nombre );
	var valor = sessionStorage.getItem( "nombre" );

	document.getElementById( "usuario" )
	.innerHTML = "Nombre: " + valor + "<br>";

}

document.getElementById( "nombre" )
.addEventListener( "keydown", teclaPulsada );

/**
 * Defino la función teclaPulsada la cual tras pulsar la tecla Enter 
 * mostrará al usuario el nombre introducido, llamando a la función
 * mostrarNombre.
 **/
function teclaPulsada( evento ) {

	if ( evento.keyCode == 13 || window.onload ) {

		mostrarNombre( );

	}
}
