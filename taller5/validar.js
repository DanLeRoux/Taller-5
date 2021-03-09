function validar(){
	var nombre, apellido, usuario, pais, cedula, direccion, telefono, email, contraseña, 
	configcontraseña, expresionDir,expresioncc,expresioncont;
	nombre = document.getElementById("nombre").value;
	apellido = document.getElementById("apellido").value;
	usuario = document.getElementById("idU").value;
	pais = document.getElementById("pais").value;
	cedula = document.getElementById("doc").value;
	direccion = document.getElementById("direccion").value;
	telefono = document.getElementById("tel").value;
	email = document.getElementById("email").value;
	contraseña = document.getElementById("password").value;
	configcontraseña =document.getElementById("Cpassword").value;
	
	expresioncont = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#%&/])/;
	expresionDir = /^(cll|cra|av|anv|trans)/;
	expresioncc = /^[0-9]+$/;

	
	if(nombre=="" || apellido=="" || cedula=="" || email=="" || contraseña=="" || configcontraseña=="")
	{
		alert("Los campos con (*) son obligatorios");
		return false;
	}
	else 
	{
		if(nombre.length > 25)
		{
			alert("El nombre no debe tener mas de 25 caracteres");
			return false;
		}
		if(apellido.length > 25)
		{
			alert("El apellido no debe tener mas de 25 caracteres");
			return false;
		}
		if(!expresioncc.test(cedula))
		{
			alert("Solo se permiten numeros en la cedula");
			return false;
		}
		else
		{
			if(cedula.length < 15 || cedula.length > 20 )
			{
				alert("La cedula debe tener minimo 15 caracteres y maximo 20 caracteres");
				return false;
			}
		}
		if(email.length > 20)
		{
			alert("El correo no debe tener mas de 20 caracteres");
			return false;
		}

		if(!expresioncont.test(contraseña))
		{
			alert("la contraseña debe tener minimo mayusculas, minusculas, numeros y caracteres especiales(#, %, &) ");
			return false;
		}
		else
		{
			if(contraseña.length < 15 || contraseña.length > 20 )
			{
				alert("La contraseña debe tener minimo 15 caracteres y maximo 20 caracteres");
				return false;
			}
		}
		if(direccion != "" && !expresionDir.test(direccion))
		{
			alert("Toda direccion debe empezar por cll, cra, av, anv, trans");
			return false;
		}
		if(configcontraseña != contraseña)
		{
			alert("Las contraseñas tienen que ser iguales");
			return false;
		}
		alert("Datos enviados:)")
	}

	
	
}