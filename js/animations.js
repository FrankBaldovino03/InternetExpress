// Función para detectar elementos cuando entran en el viewport
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Si el elemento es visible
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Si el elemento tiene hijos con animación en cascada
                if (entry.target.classList.contains('animate-children')) {
                    const children = entry.target.querySelectorAll('.animate-item');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('animated');
                        }, 150 * index); // Retraso escalonado
                    });
                }
                
                // Opcional: dejar de observar después de animar
                if (entry.target.classList.contains('animate-once')) {
                    observer.unobserve(entry.target);
                }
            }
        });
    }, {
        threshold: 0.1 // El elemento se considera visible cuando al menos 10% está en el viewport
    });
    
    // Observar todos los elementos con la clase animate-on-scroll
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Inicializar animaciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    handleScrollAnimations();
});

// También verificar en caso de que la página se cargue con scroll ya aplicado
window.addEventListener('load', () => {
    // Pequeño retraso para asegurarse de que todo esté renderizado
    setTimeout(handleScrollAnimations, 300);
}); 