document.addEventListener('DOMContentLoaded', () => {
  class LogoutButton extends HTMLElement {
    constructor() {
      super();

      // Crea un shadow DOM para encapsular el estilo y el comportamiento del componente
      this.attachShadow({ mode: 'open' });

      // Crea un botón en el shadow DOM
      const button = document.createElement('button');
      button.classList.add('btn', 'btn-secondary', 'btn-block');
      button.textContent = 'Cerrar Sesión';

      // Agrega un evento de clic al botón
      button.addEventListener('click', () => {
        // Aquí puedes añadir la lógica para cerrar la sesión
        localStorage.removeItem('token');
        // Redirige al usuario a la página de inicio de sesión
        window.location.href = '/login'; // Cambia la ruta según tu estructura
      });

      // Añade el botón al shadow DOM
      this.shadowRoot.appendChild(button);
    }
  }

  // Define el elemento personalizado 'logout-button'
  customElements.define('logout-button', LogoutButton);
});
