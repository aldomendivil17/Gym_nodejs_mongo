const token = localStorage.getItem('token'); // Obtén el token JWT almacenado
console.log('Token JWT en localStorage en INDEX:', localStorage.getItem('token'));
// Si hay un token almacenado, realiza una solicitud GET a la ruta protegida
fetch('/index', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Incluye el token en el encabezado
    }
})
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Token inválido');
        }
    })
    .then(data => {
        console.log(data);
        // El token es válido y el usuario puede acceder a la página principal
    })
    .catch(error => {
        // El token es inválido o ha expirado, puedes redirigir al usuario a la página de inicio de sesión, por ejemplo
        window.location.href = '/login';
    });


// Agrega un manejador de eventos para cerrar sesión
document.getElementById('logoutButton').addEventListener('click', () => {
    // Elimina el token del almacenamiento local al cerrar sesión
    localStorage.removeItem('token');
    // Redirige al usuario a la página de inicio de sesión
    window.location.href = '/login'; // Cambia la ruta según tu estructura
});
