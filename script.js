function login() {
  const correo = document.getElementById("email").value;
  const clave = document.getElementById("password").value;
  const mensaje = document.getElementById("mensaje");

  // Datos de prueba
  const usuarioValido = "usuario@example.com";
  const claveValida = "123456";

  if (correo === usuarioValido && clave === claveValida) {
    mensaje.style.color = "green";
    mensaje.textContent = "¡Inicio de sesión exitoso!";
  } else {
    mensaje.style.color = "red";
    mensaje.textContent = "Correo o contraseña incorrectos.";
  }
}
