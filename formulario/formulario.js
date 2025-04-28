document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto de enviar el formulario
  
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const correo = document.getElementById('correo').value;
    const indicativo = document.getElementById('indicativo').value;
    const telefono = document.getElementById('telefono').value;
  
    // Aquí puedes hacer más cosas, como enviar los datos a un servidor (ejemplo: usando fetch)
  
    // Mostrar el mensaje de confirmación
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.style.display = 'block'; // Hacer visible el mensaje
  
    // Limpiar el formulario
    document.getElementById('registration-form').reset();
  
    // Opcional: Guardar los datos o enviarlos a un servidor.
    console.log({
      nombre,
      apellidos,
      correo,
      indicativo,
      telefono
    });
  });
  