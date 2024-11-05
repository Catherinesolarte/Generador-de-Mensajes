function generarMensaje(nombre, momentoDelDia) {
  let saludo = momentoDelDia === "mañana" ? "Buenos Días" : "¡Buenas tardes";
  console.log(`${saludo}, ${nombre} !Espero que tengas un lindo día.`);
  let mensaje = `${saludo}, ${nombre}! Espero que tengas un lindo día.`;

  // Mostrar el mensaje en el párrafo con id "mensajeResultado"
  document.getElementById("mensajeResultado").innerText = mensaje;
}

// Evento para generar el mensaje cuando se presiona el botón
document.getElementById("generarBtn").addEventListener("click", function () {
  const nombre = document.getElementById("nombre").value;
  const momentoDelDia = document.getElementById("momentoDelDia").value;
  generarMensaje(nombre, momentoDelDia);
});

// Ejemplo de uso
generarMensaje("Juan", "mañana"); // ¡Buenos días, Juan! Espero que tengas un gran día.
generarMensaje("María", "tarde"); // ¡Buenas tardes, María! Espero que tengas un gran día.
