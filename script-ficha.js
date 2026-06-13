// ==========================================
// 1. LÓGICA DE LA CALCULADORA DE EDAD HUMANA
// ==========================================
document.getElementById('form-calculadora').addEventListener('submit', function(event) {
    event.preventDefault();

    // Capturamos los datos que ingresó el usuario
    const tipoMascota = document.getElementById('tipo-mascota').value;
    const edadMascota = parseInt(document.getElementById('edad-mascota').value);
    const resultadoDiv = document.getElementById('resultado-calculadora');

    let edadHumana = 0;

    // Cálculo según las fórmulas veterinarias generales
    if (tipoMascota === 'gato') {
        if (edadMascota === 1) {
            edadHumana = 15;
        } else if (edadMascota === 2) {
            edadHumana = 24;
        } else {
            edadHumana = 24 + ((edadMascota - 2) * 4);
        }
    } else {
        // Lógica para perros según su tamaño
        if (edadMascota === 1) {
            edadHumana = 15;
        } else if (edadMascota === 2) {
            edadHumana = 24;
        } else {
            let factorMultiplicador = 4; // Pequeños
            if (tipoMascota === 'perro-mediano') factorMultiplicador = 5;
            if (tipoMascota === 'perro-grande') factorMultiplicador = 6;

            edadHumana = 24 + ((edadMascota - 2) * factorMultiplicador);
        }
    }

    // Mostramos el resultado en la pantalla con un texto lindo
    resultadoDiv.innerHTML = `
        <div class="alerta-exito">
            ¡Tu mascota tiene el equivalente a <strong>${edadHumana} años humanos</strong>! 🐾
        </div>
    `;
});

// ==========================================
// 2. LÓGICA DEL CALENDARIO DE VACUNACIÓN
// ==========================================
function mostrarVacunas(etapa) {
    const infoDiv = document.getElementById('info-vacunas');
    
    if (etapa === 'cachorro') {
        infoDiv.innerHTML = `
            <h3>Calendario para Cachorros (Menos de 1 año)</h3>
            <ul class="lista-vacunas">
                <li><strong>A las 45 días:</strong> Vacuna contra la Parvovirosis.</li>
                <li><strong>A las 6 semanas:</strong> Vacuna Quíntuple (Parvovirus, Moquillo, Hepatitis, Parainfluenza y Leptospirosis).</li>
                <li><strong>A las 9 semanas:</strong> Segunda dosis de la vacuna Quíntuple.</li>
                <li><strong>A las 12 semanas:</strong> Tercera dosis de la vacuna Quíntuple.</li>
                <li><strong>A partir de los 3 meses:</strong> Vacuna Antirrábica (Obligatoria por ley).</li>
            </ul>
            <p class="nota-medica">⚠️ <em>Importante: No saques a pasear a tu cachorro a la calle hasta que tenga el esquema completo de vacunas.</em></p>
        `;
    } else if (etapa === 'adulto') {
        infoDiv.innerHTML = `
            <h3>Calendario para Adultos (Más de 1 año)</h3>
            <ul class="lista-vacunas">
                <li><strong>Cada 1 año (Anual):</strong> Refuerzo de la vacuna Séxtuple o Quíntuple para mantener sus defensas altas.</li>
                <li><strong>Cada 1 año (Anual):</strong> Refuerzo de la vacuna Antirrábica (Obligatoria durante toda la vida del animal).</li>
                <li><strong>Cada 3 a 4 meses:</strong> Desparasitación interna completa (pastillas para bichos).</li>
            </ul>
            <p class="nota-medica">💡 <em>Consejo: Anotá la fecha en tu calendario para no olvidarte de los refuerzos anuales.</em></p>
        `;
    }
}


// ==========================================
// 3. LÓGICA DE MODO OSCURO
// ==========================================
const btnModoOscuro = document.getElementById('btn-modo-oscuro');

btnModoOscuro.addEventListener('click', () => {
    // Le ponemos o sacamos la clase dark-mode al body
    document.body.classList.toggle('dark-mode');
    
    // Cambiamos el texto y el emoji del botón según el modo
    if (document.body.classList.contains('dark-mode')) {
        btnModoOscuro.innerText = "☀️ Modo Claro";
        // Ajustamos el color del botón para que se vea bien sobre el fondo oscuro
        btnModoOscuro.style.color = "#ffffff";
        btnModoOscuro.style.borderColor = "#ffffff";
    } else {
        btnModoOscuro.innerText = "🌙 Modo Oscuro";
        btnModoOscuro.style.color = "var(--primario)";
        btnModoOscuro.style.borderColor = "var(--primario)";
    }
});