# InternetExpress - Sitio Web de Proveedor de Internet

Este proyecto es un sitio web completo para una empresa proveedora de servicios de internet llamada InternetExpress. El sitio permite a los usuarios consultar información sobre su servicio mediante su número de cédula, explorar planes disponibles, acceder a soporte técnico y contactar a la empresa.

## Características Principales

- **Consulta de Servicio**: Los usuarios pueden verificar el estado de su servicio ingresando su número de cédula.
- **Catálogo de Planes**: Muestra los diferentes planes de internet disponibles con sus precios y características.
- **Centro de Soporte**: Incluye preguntas frecuentes, guías de solución de problemas y chat de soporte.
- **Página de Contacto**: Formulario de contacto, información de la empresa y mapa de ubicación en Sincelejo, Sucre (Colombia).

## Mejoras Recientes

- **Actualización de Precios**: Se actualizaron todos los precios a pesos colombianos (COP).
- **Localización**: Se actualizó la ubicación del mapa a Sincelejo, Sucre (Colombia).
- **Mejoras Visuales**: Se añadieron imágenes para mejorar la experiencia visual del sitio.
- **Interactividad**: Se mejoró la interacción con las tarjetas de planes y el chat de soporte.
- **Base de Datos**: Se actualizó la base de datos simulada con ubicaciones en Sincelejo.
- **Animaciones**: Se agregaron animaciones de aparición al hacer scroll para mejorar la experiencia de usuario.
- **Imágenes Responsivas**: Se implementaron imágenes con efectos de zoom al pasar el cursor.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
internet-service-app/
├── index.html          # Página principal con consulta de servicio
├── planes.html         # Catálogo de planes de internet
├── soporte.html        # Centro de soporte técnico
├── contacto.html       # Información de contacto y formulario
├── css/                # Archivos de estilos CSS
│   ├── styles.css      # Estilos globales
│   ├── planes.css      # Estilos específicos para la página de planes
│   ├── soporte.css     # Estilos específicos para la página de soporte
│   ├── contacto.css    # Estilos específicos para la página de contacto
│   └── animations.css  # Estilos para animaciones al hacer scroll
├── js/                 # Archivos JavaScript
│   ├── script.js       # Funcionalidad principal
│   ├── planes.js       # Funcionalidad para la página de planes
│   ├── soporte.js      # Funcionalidad para la página de soporte
│   ├── contacto.js     # Funcionalidad para la página de contacto
│   └── animations.js   # Funcionalidad para animaciones al hacer scroll
└── img/                # Imágenes utilizadas en el sitio
    ├── hero-bg.jpg     # Imagen de fondo para la sección hero
    └── planes/         # Imágenes para los planes de internet
        ├── plan-basico.jpg
        └── plan-estandar.jpg
```

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Font Awesome para iconos
- Google Maps para el mapa de ubicación
- Intersection Observer API para animaciones de scroll

## Cómo Usar

1. Clona este repositorio
2. Abre cualquiera de los archivos HTML en tu navegador
3. Para la funcionalidad completa de consulta de servicio, es necesario implementar un backend (no incluido en este proyecto)

## Mejoras Futuras

- Implementación de un backend real para la consulta de servicios
- Añadir más imágenes y contenido visual
- Implementar sistema de autenticación para usuarios
- Añadir pasarela de pagos para contratación de servicios
- Optimización de imágenes para mejorar el rendimiento

---

© 2023 InternetExpress - Proyecto desarrollado con fines educativos 