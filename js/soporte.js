// Elementos del DOM
const faqQuestions = document.querySelectorAll('.faq-question');
const guideButtons = document.querySelectorAll('.guide-btn');
const guideModal = document.getElementById('guide-modal');
const guideContent = document.getElementById('guide-content');
const closeModalBtn = document.querySelector('.close-modal');
const chatBtn = document.getElementById('chat-btn');
const chatModal = document.getElementById('chat-modal');
const closeChatBtn = document.querySelector('.close-chat');
const chatInputField = document.getElementById('chat-input-field');
const sendMessageBtn = document.getElementById('send-message');
const chatMessages = document.getElementById('chat-messages');

// Contenido de las guías
const guideContents = {
    wifi: `
        <h2>Guía para Problemas de WiFi</h2>
        <p>Los problemas de conexión WiFi pueden ser frustrantes, pero muchos tienen soluciones simples. Sigue estos consejos para mejorar tu señal:</p>
        
        <h3>1. Ubicación del Router</h3>
        <p>La posición de tu router es crucial para una buena cobertura:</p>
        <ul>
            <li>Coloca el router en un lugar central de tu hogar</li>
            <li>Mantenlo elevado (en un mueble o estante)</li>
            <li>Evita colocarlo cerca de paredes gruesas, espejos grandes o electrodomésticos</li>
            <li>Aléjalo de otros dispositivos electrónicos que puedan causar interferencia</li>
        </ul>
        
        <h3>2. Actualiza el Firmware</h3>
        <p>Mantener actualizado el firmware de tu router puede solucionar problemas de seguridad y rendimiento:</p>
        <ol>
            <li>Accede a la interfaz de administración de tu router</li>
            <li>Busca la sección de "Actualización de firmware" o similar</li>
            <li>Sigue las instrucciones para verificar y aplicar actualizaciones</li>
        </ol>
        
        <h3>3. Cambia el Canal WiFi</h3>
        <p>Si vives en un área con muchas redes WiFi, cambiar el canal puede reducir la interferencia:</p>
        <ol>
            <li>Accede a la configuración de tu router</li>
            <li>Busca la configuración inalámbrica</li>
            <li>Cambia el canal a uno menos congestionado (1, 6 u 11 son recomendados para 2.4GHz)</li>
            <li>Para redes de 5GHz, prueba con canales superiores a 149</li>
        </ol>
        
        <h3>4. Extiende tu Red</h3>
        <p>Si tu hogar es grande, considera estas opciones:</p>
        <ul>
            <li>Repetidores WiFi: Amplían la señal existente</li>
            <li>Sistemas Mesh: Crean una red unificada con múltiples puntos de acceso</li>
            <li>Adaptadores PLC: Usan el cableado eléctrico para extender la red</li>
        </ul>
        
        <h3>5. Seguridad</h3>
        <p>Protege tu red WiFi:</p>
        <ul>
            <li>Usa encriptación WPA3 o WPA2</li>
            <li>Cambia la contraseña predeterminada</li>
            <li>Actualiza regularmente la contraseña de tu red</li>
            <li>Considera usar una red de invitados para visitantes</li>
        </ul>
    `,
    velocidad: `
        <h2>Guía para Mejorar la Velocidad de Internet</h2>
        <p>¿Tu conexión está más lenta de lo normal? Prueba estos consejos para optimizar tu velocidad:</p>
        
        <h3>1. Comprueba tu Velocidad Actual</h3>
        <p>Antes de hacer cambios, mide tu velocidad actual:</p>
        <ol>
            <li>Visita <a href="https://www.speedtest.net" target="_blank">speedtest.net</a> o usa nuestra herramienta en la app móvil</li>
            <li>Realiza la prueba en diferentes momentos del día</li>
            <li>Compara los resultados con la velocidad contratada</li>
        </ol>
        
        <h3>2. Optimiza tus Dispositivos</h3>
        <p>A veces el problema está en los dispositivos:</p>
        <ul>
            <li>Cierra aplicaciones y pestañas del navegador que no uses</li>
            <li>Desactiva las descargas y actualizaciones automáticas</li>
            <li>Verifica si hay malware o virus que consuman ancho de banda</li>
            <li>Reinicia tu dispositivo regularmente</li>
        </ul>
        
        <h3>3. Mejora tu Conexión WiFi</h3>
        <p>La calidad de tu señal WiFi afecta directamente la velocidad:</p>
        <ul>
            <li>Acércate al router cuando necesites mayor velocidad</li>
            <li>Usa la banda de 5GHz para mayor velocidad (si tu router es dual-band)</li>
            <li>Reduce el número de dispositivos conectados simultáneamente</li>
            <li>Considera usar cable Ethernet para dispositivos fijos</li>
        </ul>
        
        <h3>4. Actualiza tu Equipamiento</h3>
        <p>El hardware antiguo puede limitar tu velocidad:</p>
        <ul>
            <li>Reemplaza routers antiguos (los estándares WiFi 5 o 6 ofrecen mejor rendimiento)</li>
            <li>Verifica que tus dispositivos sean compatibles con tu router</li>
            <li>Considera un módem más moderno si el tuyo tiene varios años</li>
        </ul>
        
        <h3>5. Gestiona el Ancho de Banda</h3>
        <p>Controla cómo se distribuye tu ancho de banda:</p>
        <ul>
            <li>Programa descargas grandes para horarios de menor uso</li>
            <li>Configura QoS (Quality of Service) en tu router para priorizar aplicaciones importantes</li>
            <li>Limita la calidad de streaming cuando no sea necesaria alta resolución</li>
        </ul>
    `,
    seguridad: `
        <h2>Guía de Seguridad en Línea</h2>
        <p>Proteger tu red y dispositivos es fundamental en la era digital. Sigue estas recomendaciones:</p>
        
        <h3>1. Asegura tu Red WiFi</h3>
        <ul>
            <li>Usa encriptación WPA3 o WPA2 (nunca WEP)</li>
            <li>Crea una contraseña fuerte (combina letras, números y símbolos)</li>
            <li>Cambia el nombre de red predeterminado (SSID)</li>
            <li>Desactiva la difusión del SSID si es posible</li>
            <li>Activa el filtrado MAC para controlar qué dispositivos pueden conectarse</li>
        </ul>
        
        <h3>2. Protege tu Router</h3>
        <ul>
            <li>Cambia la contraseña de administrador predeterminada</li>
            <li>Actualiza regularmente el firmware</li>
            <li>Desactiva la administración remota si no la necesitas</li>
            <li>Configura correctamente el firewall integrado</li>
        </ul>
        
        <h3>3. Seguridad en tus Dispositivos</h3>
        <ul>
            <li>Mantén actualizados los sistemas operativos y aplicaciones</li>
            <li>Instala un buen antivirus y mantenlo actualizado</li>
            <li>Usa administradores de contraseñas para generar y almacenar contraseñas seguras</li>
            <li>Activa la autenticación de dos factores cuando esté disponible</li>
            <li>Realiza copias de seguridad regularmente</li>
        </ul>
        
        <h3>4. Navega con Seguridad</h3>
        <ul>
            <li>Verifica que los sitios web usen HTTPS (candado en la barra de direcciones)</li>
            <li>No hagas clic en enlaces sospechosos o de fuentes desconocidas</li>
            <li>Ten cuidado con los correos de phishing que solicitan información personal</li>
            <li>Usa una VPN para conexiones públicas</li>
        </ul>
        
        <h3>5. Protege a tu Familia</h3>
        <ul>
            <li>Configura el control parental para niños</li>
            <li>Educa a todos los miembros de la familia sobre seguridad en línea</li>
            <li>Establece límites de tiempo para el uso de internet</li>
            <li>Monitorea regularmente la actividad en línea de los niños</li>
        </ul>
    `,
    dispositivos: `
        <h2>Configuración de Dispositivos</h2>
        <p>Aprende a configurar correctamente tus dispositivos para una experiencia óptima:</p>
        
        <h3>1. Configuración de Smart TV</h3>
        <ol>
            <li>Accede al menú de configuración de red de tu TV</li>
            <li>Selecciona tu red WiFi e ingresa la contraseña</li>
            <li>Para mejor rendimiento de streaming, usa la banda de 5GHz si está disponible</li>
            <li>Si es posible, conecta la TV directamente al router con cable Ethernet para ver contenido 4K</li>
            <li>Actualiza regularmente el firmware de tu TV para obtener mejoras de rendimiento</li>
        </ol>
        
        <h3>2. Configuración de Consolas de Videojuegos</h3>
        <ol>
            <li>Conecta la consola mediante cable Ethernet para juegos online</li>
            <li>Si usas WiFi, coloca la consola cerca del router</li>
            <li>Configura la conexión con IP estática para evitar desconexiones</li>
            <li>Abre los puertos necesarios en tu router para mejorar la conectividad</li>
            <li>Configura QoS en tu router para priorizar el tráfico de juegos</li>
        </ol>
        
        <h3>3. Configuración de Dispositivos Móviles</h3>
        <ul>
            <li>Conecta tus dispositivos a la red 5GHz para mayor velocidad</li>
            <li>Activa la función "Cambio inteligente de red" si está disponible</li>
            <li>Desactiva la conexión automática a redes públicas</li>
            <li>Configura el ahorro de datos si tienes un plan limitado</li>
        </ul>
        
        <h3>4. Configuración de Dispositivos IoT (Internet de las Cosas)</h3>
        <ul>
            <li>Crea una red separada para dispositivos IoT si es posible</li>
            <li>Cambia las contraseñas predeterminadas de todos los dispositivos</li>
            <li>Actualiza regularmente el firmware de los dispositivos</li>
            <li>Limita los permisos de las aplicaciones asociadas</li>
        </ul>
        
        <h3>5. Optimización de Computadoras</h3>
        <ul>
            <li>Actualiza los controladores de la tarjeta de red</li>
            <li>Configura el modo de ahorro de energía para no afectar la conectividad</li>
            <li>Usa software de optimización de red para mejorar el rendimiento</li>
            <li>Configura correctamente el firewall para tus aplicaciones</li>
        </ul>
    `
};

// Respuestas predefinidas para el chat
const chatResponses = [
    "Gracias por contactarnos. ¿En qué podemos ayudarte con tu servicio de internet?",
    "Entiendo tu problema. Para solucionarlo, primero intenta reiniciar tu router desconectándolo por 30 segundos y volviéndolo a conectar.",
    "Si el problema persiste, podría ser necesario revisar la configuración de tu router. ¿Has intentado acceder a la interfaz de administración?",
    "Podemos programar una visita técnica para revisar tu conexión. ¿Te gustaría agendar una cita?",
    "Nuestro horario de atención técnica es de lunes a domingo, de 8:00 AM a 10:00 PM.",
    "Para verificar el estado de tu servicio, puedes ingresar tu número de cédula en nuestra página principal.",
    "Te recomendamos revisar nuestra sección de preguntas frecuentes donde encontrarás soluciones a problemas comunes.",
    "¿Has probado conectar tu dispositivo directamente al router mediante un cable Ethernet para descartar problemas con el WiFi?",
    "Entiendo tu frustración. Estamos trabajando para resolver el problema lo antes posible."
];

// Función para alternar las preguntas frecuentes
function toggleFAQ() {
    const faqItem = this.parentElement;
    
    // Cerrar todas las demás preguntas
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem && item.classList.contains('active')) {
            item.classList.remove('active');
        }
    });
    
    // Alternar la pregunta actual
    faqItem.classList.toggle('active');
}

// Función para mostrar guía
function showGuide() {
    const guideType = this.dataset.guide;
    guideContent.innerHTML = guideContents[guideType] || 'Contenido no disponible';
    guideModal.style.display = 'block';
    
    // Desactivar scroll en el body
    document.body.style.overflow = 'hidden';
}

// Función para cerrar modal
function closeModal() {
    guideModal.style.display = 'none';
    
    // Reactivar scroll en el body
    document.body.style.overflow = 'auto';
}

// Función para mostrar chat
function showChat() {
    chatModal.style.display = 'block';
    
    // Desactivar scroll en el body
    document.body.style.overflow = 'hidden';
    
    // Enfocar el campo de entrada
    chatInputField.focus();
}

// Función para cerrar chat
function closeChat() {
    chatModal.style.display = 'none';
    
    // Reactivar scroll en el body
    document.body.style.overflow = 'auto';
}

// Función para enviar mensaje
function sendMessage() {
    const message = chatInputField.value.trim();
    
    if (message === '') return;
    
    // Añadir mensaje del usuario
    addMessage(message, 'user');
    
    // Limpiar campo de entrada
    chatInputField.value = '';
    
    // Simular respuesta después de un breve retraso
    setTimeout(() => {
        // Seleccionar una respuesta aleatoria
        const randomResponse = chatResponses[Math.floor(Math.random() * chatResponses.length)];
        addMessage(randomResponse, 'support');
    }, 1000);
}

// Función para añadir mensaje al chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    
    contentDiv.appendChild(paragraph);
    
    const timeSpan = document.createElement('span');
    timeSpan.className = 'message-time';
    timeSpan.textContent = getCurrentTime();
    
    messageDiv.appendChild(contentDiv);
    messageDiv.appendChild(timeSpan);
    
    chatMessages.appendChild(messageDiv);
    
    // Scroll al final del chat
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Función para obtener la hora actual
function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    
    // Formato de 12 horas
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // La hora '0' debe ser '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    return `${hours}:${minutes} ${ampm}`;
}

// Event listeners
faqQuestions.forEach(question => {
    question.addEventListener('click', toggleFAQ);
});

guideButtons.forEach(button => {
    button.addEventListener('click', showGuide);
});

closeModalBtn.addEventListener('click', closeModal);

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === guideModal) {
        closeModal();
    }
    
    if (e.target === chatModal) {
        closeChat();
    }
});

// Event listeners para el chat
chatBtn.addEventListener('click', showChat);
closeChatBtn.addEventListener('click', closeChat);
sendMessageBtn.addEventListener('click', sendMessage);
chatInputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Cerrar modales con la tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (guideModal.style.display === 'block') {
            closeModal();
        }
        
        if (chatModal.style.display === 'block') {
            closeChat();
        }
    }
}); 