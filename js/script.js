// Base de datos simulada de clientes
const clientesDB = {
    "1234567890": {
        nombre: "Juan Pérez",
        estado: "activo",
        ubicacion: "Barrio La Selva, Calle 25 #20-30, Sincelejo",
        velocidad: "50 Mbps",
        fechaFacturacion: "15 de cada mes",
        ultimoPago: "05/05/2023"
    },
    "0987654321": {
        nombre: "María López",
        estado: "suspendido",
        ubicacion: "Barrio Majagual, Carrera 18 #15-45, Sincelejo",
        velocidad: "100 Mbps",
        fechaFacturacion: "10 de cada mes",
        ultimoPago: "28/04/2023"
    },
    "5678901234": {
        nombre: "Carlos Rodríguez",
        estado: "cortado",
        ubicacion: "Barrio Las Margaritas, Calle 28 #24-10, Sincelejo",
        velocidad: "200 Mbps",
        fechaFacturacion: "20 de cada mes",
        ultimoPago: "15/03/2023"
    },
    "1122334455": {
        nombre: "Ana Martínez",
        estado: "activo",
        ubicacion: "Barrio El Cortijo, Carrera 20 #22-15, Sincelejo",
        velocidad: "300 Mbps",
        fechaFacturacion: "5 de cada mes",
        ultimoPago: "03/05/2023"
    },
    "9988776655": {
        nombre: "Roberto Sánchez",
        estado: "activo",
        ubicacion: "Barrio Centro, Calle 23 #19-05, Sincelejo",
        velocidad: "150 Mbps",
        fechaFacturacion: "25 de cada mes",
        ultimoPago: "24/04/2023"
    }
};

// Elementos del DOM
const cedulaInput = document.getElementById('cedula');
const consultarBtn = document.getElementById('consultar');
const resultsSection = document.getElementById('results');

// Elementos de resultado
const clienteElement = document.getElementById('cliente');
const estadoElement = document.getElementById('estado');
const ubicacionElement = document.getElementById('ubicacion');
const velocidadElement = document.getElementById('velocidad');
const facturacionElement = document.getElementById('facturacion');
const ultimoPagoElement = document.getElementById('ultimo-pago');

// Función para validar cédula
function validarCedula(cedula) {
    // Validación simple: solo números y longitud correcta
    return /^\d{10}$/.test(cedula);
}

// Función para consultar cliente
function consultarCliente(cedula) {
    if (!validarCedula(cedula)) {
        mostrarError('Por favor, ingrese un número de cédula válido (10 dígitos)');
        return;
    }

    // Simular tiempo de carga
    mostrarCargando();

    setTimeout(() => {
        const cliente = clientesDB[cedula];
        
        if (cliente) {
            mostrarResultados(cliente);
        } else {
            mostrarError('No se encontró ningún cliente con ese número de cédula');
        }
    }, 800);
}

// Función para mostrar resultados
function mostrarResultados(cliente) {
    // Mostrar sección de resultados
    resultsSection.classList.remove('hidden');
    
    // Llenar datos
    clienteElement.textContent = cliente.nombre;
    
    // Aplicar clase según estado
    estadoElement.textContent = cliente.estado;
    estadoElement.className = 'value';
    
    if (cliente.estado === 'activo') {
        estadoElement.classList.add('estado-activo');
    } else if (cliente.estado === 'suspendido') {
        estadoElement.classList.add('estado-suspendido');
    } else if (cliente.estado === 'cortado') {
        estadoElement.classList.add('estado-cortado');
    }
    
    ubicacionElement.textContent = cliente.ubicacion;
    velocidadElement.textContent = cliente.velocidad;
    facturacionElement.textContent = cliente.fechaFacturacion;
    ultimoPagoElement.textContent = cliente.ultimoPago;
    
    // Scroll suave hacia los resultados
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Función para mostrar error
function mostrarError(mensaje) {
    alert(mensaje);
    resultsSection.classList.add('hidden');
}

// Función para mostrar estado de carga
function mostrarCargando() {
    clienteElement.textContent = 'Cargando...';
    estadoElement.textContent = 'Cargando...';
    ubicacionElement.textContent = 'Cargando...';
    velocidadElement.textContent = 'Cargando...';
    facturacionElement.textContent = 'Cargando...';
    ultimoPagoElement.textContent = 'Cargando...';
    
    resultsSection.classList.remove('hidden');
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