function UI() { };

// Llenar las opciones de año
UI.prototype.llenarYear = () => {
  const max = new Date().getFullYear();
  const min = max - 20;
  const selectYearElement = document.querySelector('#year');

  for (let i = max; i > min; i--) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;

    selectYearElement.appendChild(option);
  };
};

// Muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje) => {
  const contenidoElement = document.querySelector('.contenido');

  const divElement = document.createElement('div');
  divElement.classList.add('error');
  divElement.textContent = mensaje;

  contenidoElement.appendChild(divElement);
};


const ui = new UI();


document.addEventListener('DOMContentLoaded', () => {
  ui.llenarYear();
});