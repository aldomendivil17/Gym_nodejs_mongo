// mi-componente.js
class NombreUsuario extends HTMLElement {
  connectedCallback() {
    // Llamado cuando el componente es insertado en el DOM
    const shadow = this.attachShadow({ mode: 'open' });

    // Estilos específicos para el componente dentro del Shadow DOM
    const styles = document.createElement('style');
    styles.textContent = `
      :host {
        /* Puedes agregar estilos específicos para el componente aquí */
      }

      a {
        color: white;
        text-decoration: none; /* Elimina la decoración del enlace */
      }
    `;
    shadow.appendChild(styles);

    // Crea el elemento <a> dentro del shadow DOM
    const anchor = document.createElement('a');
    anchor.href = './index.html';
    anchor.classList.add('d-block');
    anchor.id = 'nombre-usuario';

    // Recupera el nombre de usuario del almacenamiento local
    const nombre = localStorage.getItem('nombre_usuario');

    // Asigna el valor al contenido del elemento <a>
    anchor.textContent = nombre;

    // Agrega el elemento <a> al shadow DOM del componente
    shadow.appendChild(anchor);
  }
}

// Registra el componente personalizado
customElements.define('nombre-usuario', NombreUsuario);