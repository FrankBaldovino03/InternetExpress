// Elementos del DOM
const formularioContacto = document.getElementById('formulario-contacto');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const telefonoInput = document.getElementById('telefono');
const asuntoSelect = document.getElementById('asunto');
const mensajeTextarea = document.getElementById('mensaje');
const terminosCheckbox = document.getElementById('terminos');

// Función para validar email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Función para validar teléfono (opcional)
function validarTelefono(telefono) {
    // Si está vacío, es válido (no es obligatorio)
    if (!telefono) return true;
    
    // Validar formato: solo números, mínimo 7 dígitos
    const regex = /^\d{7,15}$/;
    return regex.test(telefono);
}

// Función para mostrar error en un campo
function mostrarError(elemento, mensaje) {
    // Eliminar mensaje de error previo si existe
    const errorPrevio = elemento.parentElement.querySelector('.error-message');
    if (errorPrevio) {
        errorPrevio.remove();
    }
    
    // Crear y añadir mensaje de error
    const errorMessage = document.createElement('span');
    errorMessage.className = 'error-message';
    errorMessage.textContent = mensaje;
    errorMessage.style.color = 'var(--danger-color)';
    errorMessage.style.fontSize = '0.8rem';
    errorMessage.style.marginTop = '0.3rem';
    
    // Añadir borde rojo al elemento
    elemento.style.borderColor = 'var(--danger-color)';
    
    // Insertar mensaje después del elemento
    elemento.parentElement.appendChild(errorMessage);
}

// Función para limpiar error
function limpiarError(elemento) {
    const errorPrevio = elemento.parentElement.querySelector('.error-message');
    if (errorPrevio) {
        errorPrevio.remove();
    }
    elemento.style.borderColor = '';
}

// Función para validar el formulario
function validarFormulario(e) {
    e.preventDefault();
    
    let esValido = true;
    
    // Validar nombre
    if (nombreInput.value.trim() === '') {
        mostrarError(nombreInput, 'Por favor, ingrese su nombre completo');
        esValido = false;
    } else {
        limpiarError(nombreInput);
    }
    
    // Validar email
    if (!validarEmail(emailInput.value.trim())) {
        mostrarError(emailInput, 'Por favor, ingrese un correo electrónico válido');
        esValido = false;
    } else {
        limpiarError(emailInput);
    }
    
    // Validar teléfono (si se ingresó)
    if (telefonoInput.value.trim() !== '' && !validarTelefono(telefonoInput.value.trim())) {
        mostrarError(telefonoInput, 'Por favor, ingrese un número de teléfono válido');
        esValido = false;
    } else {
        limpiarError(telefonoInput);
    }
    
    // Validar asunto
    if (asuntoSelect.value === '') {
        mostrarError(asuntoSelect, 'Por favor, seleccione un asunto');
        esValido = false;
    } else {
        limpiarError(asuntoSelect);
    }
    
    // Validar mensaje
    if (mensajeTextarea.value.trim() === '') {
        mostrarError(mensajeTextarea, 'Por favor, escriba su mensaje');
        esValido = false;
    } else {
        limpiarError(mensajeTextarea);
    }
    
    // Validar términos
    if (!terminosCheckbox.checked) {
        mostrarError(terminosCheckbox, 'Debe aceptar los términos y condiciones');
        esValido = false;
    } else {
        limpiarError(terminosCheckbox);
    }
    
    // Si todo es válido, enviar formulario
    if (esValido) {
        enviarFormulario();
    }
}

// Función para simular envío de formulario
function enviarFormulario() {
    // Cambiar el botón a estado de carga
    const submitBtn = formularioContacto.querySelector('.btn-submit');
    const textoOriginal = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    // Simular tiempo de envío
    setTimeout(() => {
        // Mostrar mensaje de éxito
        alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
        
        // Resetear formulario
        formularioContacto.reset();
        
        // Restaurar botón
        submitBtn.textContent = textoOriginal;
        submitBtn.disabled = false;
    }, 1500);
}

// Validación en tiempo real para teléfono (solo números)
telefonoInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
});

// Event listener para envío del formulario
formularioContacto.addEventListener('submit', validarFormulario); 