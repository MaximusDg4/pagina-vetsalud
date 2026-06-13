document.addEventListener('DOMContentLoaded', () => {
    const botonModo = document.getElementById('toggle-dark-mode');

    // 1. Al cargar la página, comprobamos si el usuario ya tenía activado el modo oscuro antes
    if (localStorage.getItem('modo-oscuro') === 'activado') {
        document.body.classList.add('dark-mode');
        botonModo.innerText = "☀️ Modo Claro"; // Cambia el texto del botón
    }

    // 2. Escuchamos cuando el cliente hace clic en el botón
    botonModo.addEventListener('click', () => {
        // 'toggle' agrega la clase si no está, y la saca si ya está
        document.body.classList.toggle('dark-mode');
        
        // 3. Guardamos la elección actual en la memoria del navegador y cambiamos el texto
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('modo-oscuro', 'activado');
            botonModo.innerText = "☀️ Modo Claro";
        } else {
            localStorage.setItem('modo-oscuro', 'desactivado');
            botonModo.innerText = "🌙 Modo Oscuro";
        }
    });
});