// Función para actualizar la barra de progreso
function updateProgressBar(increment) {
  var progressBar = document.querySelector('.progress-bar');
  var currentValue = parseInt(progressBar.getAttribute('aria-valuenow'));
  var newValue = currentValue + increment;

  // Asegurarte de que el valor nuevo no sea mayor que el máximo
  newValue = Math.min(newValue, parseInt(progressBar.getAttribute('aria-valuemax')));

  // Actualizar la barra de progreso
  progressBar.setAttribute('aria-valuenow', newValue);
  progressBar.style.width = newValue + '%';
  progressBar.textContent = newValue + '%';
}

// Eventos click para botones que incrementan la barra en 10%
document.querySelectorAll('.btn-primary, .btn-outline-primary').forEach(item => {
  item.addEventListener('click', function() {
      updateProgressBar(10); // Aumenta la barra de progreso en un 10%
  });
});

// Evento para cuando se muestra el modal
$('#exampleModal').on('shown.bs.modal', function () {
  updateProgressBar(10); // Aumenta la barra de progreso en un 10%
});

// Control de la entrada de texto para actualizar la barra solo si cambia el contenido
document.querySelectorAll('input[type="text"], textarea').forEach(input => {
  let initialValue = input.value;  // Guarda el valor inicial al cargar la página
  input.addEventListener('change', function() {
      if (input.value !== initialValue) {
          updateProgressBar(10); // Actualiza la barra solo si el contenido final es diferente al inicial
          initialValue = input.value;  // Actualiza el valor inicial después del cambio
      }
  });
});

// Evento para ítems de dropdown que podrían incrementar en una cantidad diferente
document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', function() {
      updateProgressBar(10); // Aumenta la barra de progreso en un 10%
  });
});

// Control de entrada de texto con manejo de longitud específica
document.querySelectorAll('input[type="text"], textarea').forEach(input => {
  input.addEventListener('input', function(event) {
      let inputValue = event.target.value;
      if (inputValue.length > 0 && inputValue.length === 1) {
          updateProgressBar(10); // Aumenta la barra de progreso en un 10%
      }
      if (inputValue.length === 0) {
          updateProgressBar(-10); // Disminuye la barra de progreso en un 10%
      }
  });
});
