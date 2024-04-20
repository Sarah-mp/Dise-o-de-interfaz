Ejemplo 123456789


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
  document.querySelector('a.btn-primary, ').addEventListener('click', function() {
    updateProgressBar(10); // Aumenta la barra de progreso en un 10%
  });

  // Evento para cuando se muestra el modal
  $('#exampleModal').on('shown.bs.modal', function () {
    updateProgressBar(10); // Aumenta la barra de progreso en un 10%
  });

  document.querySelector('.form-control').addEventListener('input', function(event) {

    var inputValue = event.target.value;
    if (inputValue.length > 0 && inputValue.length === 1) {
      updateProgressBar(10); // Aumenta la barra de progreso en un 10%      
    }
    if (inputValue.length === 0) {
      updateProgressBar(-10); // Disminuye la barra de progreso en un 10%
      
    }
  });

  document.querySelector('a.btn-outline-primary').addEventListener('click', function() {
    updateProgressBar(10); // Aumenta la barra de progreso en un 10%
  });

  document.querySelector('a.btn-outline-primary2').addEventListener('click', function() {
    updateProgressBar(10); // Aumenta la barra de progreso en un 10%
  });

  document.querySelector('a.dropdown-item').addEventListener('click', function() {
    updateProgressBar(10); // Aumenta la barra de progreso en un 10%
  });

.menu {
    display: flex;
    justify-content: center; /* Centra los elementos de la lista horizontalmente */
    background-color: var(--color-menu-fondo);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 10px 20px; /* Mantiene la ampliación de la barra de fondo */
}

.menu li {
    margin: 0 10px;
}

.menu a {
    text-decoration: none;
    color: var(--color-texto-menu);
    padding: 10px 15px;
    display: block;
}

.menu a:hover {
    background-color: var(--color-menu-hover);
}

  