// Elementos del DOM
const cedulaInput = document.getElementById('cedula');
const consultarBtn = document.getElementById('consultar');
const resultsSection = document.getElementById('results');

// Variable para controlar el timeout de limpieza
let clearTimeoutId = null;

// Elementos de resultado
const clienteElement = document.getElementById('cliente');
const estadoElement = document.getElementById('estado');
const ubicacionElement = document.getElementById('ubicacion');
const velocidadElement = document.getElementById('velocidad');
const facturacionElement = document.getElementById('facturacion');
const ultimoPagoElement = document.getElementById('ultimo-pago');
const estadoPagosElement = document.getElementById('estado-pagos');
const saldoPendienteElement = document.getElementById('saldo-pendiente');
const paymentSection = document.getElementById('payment-section');

// Función para validar cédula
function validarCedula(cedula) {
    // Validación simple: solo números y longitud correcta
    return /^\d{10}$/.test(cedula);
}

// Función para limpiar la información del servicio
function limpiarInformacionServicio() {
    // Ocultar sección de resultados con animación
    resultsSection.style.transition = 'all 0.5s ease';
    resultsSection.style.opacity = '0';
    resultsSection.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        resultsSection.classList.add('hidden');
        
        // Limpiar todos los campos
        clienteElement.textContent = '-';
        estadoElement.textContent = '-';
        ubicacionElement.textContent = '-';
        velocidadElement.textContent = '-';
        facturacionElement.textContent = '-';
        ultimoPagoElement.textContent = '-';
        estadoPagosElement.textContent = '-';
        saldoPendienteElement.textContent = '-';
        
        // Limpiar clases de estado
        estadoElement.className = 'value';
        estadoPagosElement.className = 'value';
        saldoPendienteElement.className = 'value';
        
        // Ocultar sección de pagos
        paymentSection.classList.add('hidden');
        
        // Limpiar el campo de cédula
        cedulaInput.value = '';
        cedulaInput.focus();
        
        // Mostrar notificación
        if (window.showNotification) {
            showNotification('Información del servicio limpiada por seguridad', 'info');
        }
    }, 500);
}

// Datos de clientes simulados
const CLIENTS_DATA = [
    {
        cedula: '1234567890',
        nombre: 'Juan Pérez',
        estado: 'activo',
        ubicacion: 'Calle 15 #20-30',
        velocidad: '100 Mbps',
        fechaFacturacion: '15 de cada mes',
        ultimoPago: '2024-01-15',
        estadoPagos: 'al día',
        saldoPendiente: 0
    },
    {
        cedula: '0987654321',
        nombre: 'María García',
        estado: 'suspendido',
        ubicacion: 'Carrera 25 #10-15',
        velocidad: '200 Mbps',
        fechaFacturacion: '15 de cada mes',
        ultimoPago: '2023-12-10',
        estadoPagos: 'pendiente',
        saldoPendiente: 85000
    },
    {
        cedula: '5555555555',
        nombre: 'Carlos López',
        estado: 'activo',
        ubicacion: 'Calle 30 #12-45',
        velocidad: '300 Mbps',
        fechaFacturacion: '15 de cada mes',
        ultimoPago: '2024-01-20',
        estadoPagos: 'al día',
        saldoPendiente: 0
    }
];

// Función para consultar cliente
function consultarCliente(cedula) {
    if (!validarCedula(cedula)) {
        mostrarError('Por favor, ingrese un número de cédula válido (10 dígitos)');
        return;
    }

    // Cancelar timeout anterior si existe
    if (clearTimeoutId) {
        clearTimeout(clearTimeoutId);
        clearTimeoutId = null;
    }

    // Mostrar estado de carga
    mostrarCargando();

    // Simular carga
    setTimeout(() => {
        // Buscar cliente en los datos simulados
        const cliente = CLIENTS_DATA.find(c => c.cedula === cedula);
        
        if (cliente) {
            mostrarResultados(cliente);
        } else {
            mostrarError('No se encontró ningún cliente con ese número de cédula');
        }
    }, 1000);
}

// Función para mostrar resultados
function mostrarResultados(cliente) {
    // Desactivar estado de carga en el botón
    const consultarBtn = document.getElementById('consultar');
    consultarBtn.classList.remove('loading');
    consultarBtn.disabled = false;
    
    // Mostrar sección de resultados con animación
    resultsSection.classList.remove('hidden');
    resultsSection.style.opacity = '0';
    resultsSection.style.transform = 'translateY(20px)';
    
    // Animar entrada
    setTimeout(() => {
        resultsSection.style.transition = 'all 0.5s ease';
        resultsSection.style.opacity = '1';
        resultsSection.style.transform = 'translateY(0)';
    }, 100);
    
    // Llenar datos con animación tipo typing
    setTimeout(() => {
        typeWriter(clienteElement, cliente.nombre, 50);
    }, 200);
    
    setTimeout(() => {
        estadoElement.textContent = cliente.estado;
        estadoElement.className = 'value';
        
        if (cliente.estado === 'activo') {
            estadoElement.classList.add('estado-activo');
        } else if (cliente.estado === 'suspendido') {
            estadoElement.classList.add('estado-suspendido');
        } else if (cliente.estado === 'cortado') {
            estadoElement.classList.add('estado-cortado');
        }
    }, 800);
    
    setTimeout(() => typeWriter(ubicacionElement, cliente.ubicacion, 30), 1200);
    setTimeout(() => typeWriter(velocidadElement, cliente.velocidad, 50), 1600);
    setTimeout(() => typeWriter(facturacionElement, cliente.fechaFacturacion, 50), 2000);
    setTimeout(() => typeWriter(ultimoPagoElement, cliente.ultimoPago, 50), 2400);
    
    // Mostrar estado de pagos
    setTimeout(() => {
        let estadoTexto = '';
        let estadoClase = '';
        
        if (cliente.estadoPagos === 'al día') {
            estadoTexto = 'Al día - Sin deudas';
            estadoClase = 'status-paid';
        } else if (cliente.estadoPagos === 'pendiente') {
            estadoTexto = 'Pendiente';
            estadoClase = 'status-debt';
        } else {
            estadoTexto = cliente.estadoPagos;
            estadoClase = 'status-debt';
        }
        
        estadoPagosElement.textContent = estadoTexto;
        estadoPagosElement.className = 'value ' + estadoClase;
    }, 2800);
    
    // Mostrar saldo pendiente
    setTimeout(() => {
        if (cliente.saldoPendiente > 0) {
            saldoPendienteElement.textContent = '$' + cliente.saldoPendiente.toLocaleString();
            saldoPendienteElement.className = 'value status-debt';
        } else {
            saldoPendienteElement.textContent = '$0.00';
            saldoPendienteElement.className = 'value status-paid';
        }
    }, 3200);
    
    // Mostrar/ocultar sección de pagos según el estado
    setTimeout(() => {
        if (cliente.saldoPendiente > 0) {
            paymentSection.classList.remove('hidden');
            paymentSection.style.opacity = '0';
            paymentSection.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                paymentSection.style.transition = 'all 0.5s ease';
                paymentSection.style.opacity = '1';
                paymentSection.style.transform = 'translateY(0)';
            }, 100);
        } else {
            paymentSection.classList.add('hidden');
        }
    }, 3600);
    
    // Scroll suave hacia los resultados
    setTimeout(() => {
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }, 4000);
    
    // Mostrar notificación de éxito
    if (window.showNotification) {
        showNotification('Información del cliente encontrada', 'success');
    }
    
    // Establecer timeout para limpiar la información después de 1 minuto (60 segundos)
    clearTimeoutId = setTimeout(() => {
        limpiarInformacionServicio();
    }, 60000);
}

// Función para mostrar error
function mostrarError(mensaje) {
    // Cancelar timeout de limpieza si existe
    if (clearTimeoutId) {
        clearTimeout(clearTimeoutId);
        clearTimeoutId = null;
    }
    
    // Desactivar estado de carga en el botón
    const consultarBtn = document.getElementById('consultar');
    consultarBtn.classList.remove('loading');
    consultarBtn.disabled = false;
    
    resultsSection.classList.add('hidden');
    
    // Mostrar notificación de error en lugar de alert
    if (window.showNotification) {
        showNotification(mensaje, 'error', 5000);
    } else {
        alert(mensaje);
    }
}

// Función typeWriter para efectos de escritura
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    
    type();
}

// Función para mostrar estado de carga
function mostrarCargando() {
    // Activar estado de carga en el botón
    const consultarBtn = document.getElementById('consultar');
    consultarBtn.classList.add('loading');
    consultarBtn.disabled = true;
    
    clienteElement.textContent = 'Cargando...';
    estadoElement.textContent = 'Cargando...';
    ubicacionElement.textContent = 'Cargando...';
    velocidadElement.textContent = 'Cargando...';
    facturacionElement.textContent = 'Cargando...';
    ultimoPagoElement.textContent = 'Cargando...';
    estadoPagosElement.textContent = 'Cargando...';
    saldoPendienteElement.textContent = 'Cargando...';
    
    resultsSection.classList.remove('hidden');
    
    // Agregar efecto de loading
    if (window.showLoadingEffect) {
        showLoadingEffect(resultsSection, 'Consultando información...');
    }
}

// Event listeners
consultarBtn.addEventListener('click', () => {
    consultarCliente(cedulaInput.value.trim());
});

cedulaInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        consultarCliente(cedulaInput.value.trim());
    }
});

// Validación de entrada solo números
cedulaInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
});

// Funcionalidad del Carrusel
const carouselSlides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;
let autoSlideInterval;

function showSlide(index) {
    // Remover clase activa de todos los slides e indicadores
    carouselSlides.forEach(slide => slide.classList.remove('active', 'prev'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Mostrar el slide actual
    if (carouselSlides[index]) {
        carouselSlides[index].classList.add('active');
        indicators[index].classList.add('active');
    }
    
    currentSlide = index;
}

function nextSlide() {
    const nextIndex = (currentSlide + 1) % carouselSlides.length;
    showSlide(nextIndex);
}

function prevSlide() {
    const prevIndex = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
    showSlide(prevIndex);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000); // Cambiar cada 5 segundos
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Event listeners para los controles del carrusel
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide(); // Reiniciar el auto-slide
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide(); // Reiniciar el auto-slide
    });
}

// Event listeners para los indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index);
        stopAutoSlide();
        startAutoSlide(); // Reiniciar el auto-slide
    });
});

// Pausar auto-slide al hacer hover sobre el carrusel
const carouselContainer = document.querySelector('.carousel-container');
if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', stopAutoSlide);
    carouselContainer.addEventListener('mouseleave', startAutoSlide);
}

// Navegación con teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    }
});

// Inicializar carrusel cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Mostrar el primer slide
    if (carouselSlides.length > 0) {
        showSlide(0);
        startAutoSlide();
    }
});

// Limpiar intervalos cuando la página se oculta (para ahorrar recursos)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopAutoSlide();
    } else {
        startAutoSlide();
    }
});

// Event listeners para botones de pago
document.addEventListener('DOMContentLoaded', () => {
    const payOnlineBtn = document.getElementById('payOnlineBtn');
    const payBankBtn = document.getElementById('payBankBtn');
    const clearInfoBtn = document.getElementById('clearInfoBtn');
    
    if (payOnlineBtn) {
        payOnlineBtn.addEventListener('click', () => {
            if (window.showNotification) {
                showNotification('Redirigiendo al sistema de pagos en línea...', 'info');
            } else {
                alert('Redirigiendo al sistema de pagos en línea...');
            }
        });
    }
    
    if (payBankBtn) {
        payBankBtn.addEventListener('click', () => {
            if (window.showNotification) {
                showNotification('Información de transferencia bancaria enviada por correo', 'info');
            } else {
                alert('Información de transferencia bancaria enviada por correo');
            }
        });
    }
    
    if (clearInfoBtn) {
        clearInfoBtn.addEventListener('click', () => {
            // Cancelar timeout automático
            if (clearTimeoutId) {
                clearTimeout(clearTimeoutId);
                clearTimeoutId = null;
            }
            
            // Limpiar información manualmente
            limpiarInformacionServicio();
        });
    }
}); 