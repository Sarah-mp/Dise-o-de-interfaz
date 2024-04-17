
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

  // Evento clic para un botón
  document.querySelector('a.btn-primary').addEventListener('click', function() {
    updateProgressBar(10); // Aumenta la barra de progreso en un 10%
  });

  // Evento para cuando se muestra el modal
  $('#exampleModal').on('shown.bs.modal', function () {
    updateProgressBar(10); // Aumenta la barra de progreso en un 10%
  });

  // Puedes agregar más eventos aquí para otros componentes...


