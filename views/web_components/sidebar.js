
class SidebarComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library -->

          <div>
            <li class="nav-item menu-open">
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="./index.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Inicio</p>
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item menu-open">
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="./membresia/membresias.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Membresías</p>
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item menu-open">
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="./clase/clases.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Clases</p>
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item menu-open">
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="./miembro/miembro.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Miembros</p>
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item menu-open">
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="./inventario/inventario.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Inventario</p>
                  </a>
                </li>
              </ul>
            </li>
          </div>
        </ul>
      </nav>
        `;
    }
}

customElements.define('sidebar-component', SidebarComponent);
