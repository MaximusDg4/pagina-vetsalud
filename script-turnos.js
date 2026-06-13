document.getElementById('formulario-turnos').addEventListener('submit', function(event) {
    // 1. Frenamos la recarga automática de la página
    event.preventDefault();

    // 2. Capturamos los elementos de la pantalla
    const mascota = document.getElementById('nombre-mascota').value;
    const contacto = document.getElementById('contacto-usuario').value;
     const contacto = document.getElementBiId('tipo-o-raza').value;
    const mensajeAlerta = document.getElementById('mensaje-alerta');
    const botonEnviar = document.getElementById('btn-enviar-solicitud');

    // Cambiamos el texto del botón temporalmente para que el usuario vea que se está procesando
    botonEnviar.innerText = "Enviando...";
    botonEnviar.disabled = true;

    // 3. Armamos el paquete de datos para enviar
    const datos = {
        "Nombre Mascota": mascota,
        "Contacto": contacto
    };

    // 4. Mandamos los datos a Formspree usando Fetch en segundo plano
    // REEMPLAZÁ "TU_ID_AQUÍ" por el ID que te da Formspree al registrar el formulario
    fetch('https://formspree.io/f/mgobnodd', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => {
        if (response.ok) {
            // SI TODO SALIÓ BIEN:
            // Mostramos el mensaje de éxito usando tus clases del CSS
            mensajeAlerta.innerText = "¡Solicitud enviada con éxito! Nos comunicaremos con vos a la brevedad.";
            mensajeAlerta.className = "mensaje-exito"; // Activa tu diseño verde de éxito
            
            // Limpiamos los casilleros del formulario
            document.getElementById('formulario-turnos').reset();
        } else {
            // SI HUBO UN ERROR EN EL SERVIDOR:
            mensajeAlerta.innerText = "Hubo un problema al enviar. Por favor, intentá de nuevo.";
            mensajeAlerta.className = "mensaje-error"; // Activa tu diseño rojo de error
        }
    })
    .catch(error => {
        // SI SE CORTÓ INTERNET O HUBO UN ERROR DE RED:
        mensajeAlerta.innerText = "Error de conexión. Chequeá tu internet.";
        mensajeAlerta.className = "mensaje-error";
    })
    .finally(() => {
        // Al terminar todo, devolvemos el botón a su estado original
        botonEnviar.innerText = "Enviar Solicitud";
        botonEnviar.disabled = false;
    });
});

// ==========================================
// 3. LÓGICA DE MODO OSCURO
// ==========================================
const btnModoOscuro = document.getElementById('btn-modo-oscuro');

btnModoOscuro.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        btnModoOscuro.innerText = "☀️ Modo Claro";
    } else {
        btnModoOscuro.innerText = "🌙 Modo Oscuro";
    }

