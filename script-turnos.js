// 1. MODO OSCURO PRIMERO (Para que funcione independiente de Formspree)
const btnModoOscuro = document.getElementById('btn-modo-oscuro');
if (btnModoOscuro) {
    btnModoOscuro.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            btnModoOscuro.innerText = "☀️ Modo Claro";
        } else {
            btnModoOscuro.innerText = "🌙 Modo Oscuro";
        }
    });
}

// 2. ENVÍO DEL FORMULARIO A FORMSPREE
document.getElementById('formulario-turnos').addEventListener('submit', function(event) {
    event.preventDefault();

    const mascota = document.getElementById('nombre-mascota').value;
    const raza = document.getElementById('raza-mascota').value; 
    const contacto = document.getElementById('contacto-usuario').value;
    const mensajeAlerta = document.getElementById('mensaje-alerta');
    const botonEnviar = document.getElementById('btn-enviar-solicitud');

    botonEnviar.innerText = "Enviando...";
    botonEnviar.disabled = true;

    const datos = {
        Nombre Mascota: mascota,
        Tipo o Raza: raza, 
        Contacto: contacto
    };

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
            mensajeAlerta.innerText = "¡Solicitud enviada con éxito! Nos comunicaremos con vos a la brevedad.";
            mensajeAlerta.className = "mensaje-exito";
            document.getElementById('formulario-turnos').reset();
        } else {
            mensajeAlerta.innerText = "Hubo un problema al enviar. Por favor, intentá de nuevo.";
            mensajeAlerta.className = "mensaje-error";
        }
    })
    .catch(error => {
        mensajeAlerta.innerText = "Error de conexión. Chequeá tu internet.";
        mensajeAlerta.className = "mensaje-error";
    })
    .finally(() => {
        botonEnviar.innerText = "Enviar Solicitud";
        botonEnviar.disabled = false;
    });
});
