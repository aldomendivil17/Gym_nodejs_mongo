class FooterComponent extends HTMLElement {
    constructor() {
        super();

        // Create a shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Create a container element
        const container = document.createElement('div');
        container.className = 'my-web-component';

        // Add the HTML content to the container
        container.innerHTML = `
            <strong>Copyright &copy; 2023 Olimpo Fitness.</strong>
        `;

        // Append the container to the shadow DOM
        shadow.appendChild(container);
    }
}

// Define the custom element
customElements.define('footer-component', FooterComponent);