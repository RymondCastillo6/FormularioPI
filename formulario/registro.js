// /js/registro.js

// Referencia a Firestore
const db = firebase.firestore();

document.getElementById("registration-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtener los valores del formulario
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Guardar los datos en Firestore
  db.collection("registros").add({
    name: name,
    email: email,
    phone: phone,
    timestamp: firebase.firestore.FieldValue.serverTimestamp() // Fecha y hora de envío
  })
  .then(() => {
    // Mensaje de éxito
    alert("¡Gracias! Te contactaremos pronto.");
    document.getElementById("registration-form").reset(); // Limpiar el formulario
  })
  .catch((error) => {
    console.error("Error al guardar los datos: ", error);
    alert("Hubo un error al registrar tus datos. Intenta nuevamente.");
  });
});
