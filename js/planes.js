// Elementos del DOM
const filterButtons = document.querySelectorAll('.filter-btn');
const planCards = document.querySelectorAll('.plan-card');
const contratarButtons = document.querySelectorAll('.plan-btn');

// Función para filtrar planes
function filtrarPlanes(categoria) {
    // Mostrar todos los planes si la categoría es "todos"
    if (categoria === 'todos') {
        planCards.forEach(card => {
            card.style.display = 'block';
        });
        return;
    }
    
    // Filtrar planes según la categoría seleccionada
    planCards.forEach(card => {
        const categorias = card.dataset.categoria.split(' ');
        
        if (categorias.includes(categoria)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Event listeners para los botones de filtro
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Quitar la clase activa de todos los botones
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Añadir la clase activa al botón seleccionado
        button.classList.add('active');
        
        // Filtrar planes según la categoría del botón
        const categoria = button.dataset.filter;
        filtrarPlanes(categoria);
        
        // Animación suave para mostrar los resultados
        setTimeout(() => {
            document.querySelector('.planes-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    });
});

// Event listeners para los botones de contratar
contratarButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Obtener el nombre del plan desde el título más cercano
        const planCard = e.target.closest('.plan-card');
        const planName = planCard.querySelector('h3').textContent;
        
        // Mostrar mensaje de confirmación
        alert(`Has seleccionado el ${planName}. Un asesor se pondrá en contacto contigo pronto.`);
        
        // Redirigir al formulario de contacto
        window.location.href = 'contacto.html';
    });
});

// Aplicar animación de entrada a las tarjetas de planes
window.addEventListener('load', () => {
    planCards.forEach((card, index) => {
        // Aplicar un retraso escalonado para una animación más suave
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});

// Inicializar con todos los planes visibles
document.addEventListener('DOMContentLoaded', () => {
    filtrarPlanes('todos');
    
    // Establecer estilos iniciales para la animación de entrada
    planCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
});

// Efecto de zoom en las imágenes al pasar el mouse
const planImages = document.querySelectorAll('.plan-image');
planImages.forEach(imageContainer => {
    imageContainer.addEventListener('mouseenter', () => {
        const img = imageContainer.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1.1)';
        }
    });
    
    imageContainer.addEventListener('mouseleave', () => {
        const img = imageContainer.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1)';
        }
    });
}); 