# InternetExpress - Sistema de Gestión

## 🚀 Instalación y Configuración

### Requisitos
- Python 3.8 o superior
- pip (gestor de paquetes de Python)

### Pasos para ejecutar el sistema

1. **Instalar dependencias:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Ejecutar el servidor:**
   ```bash
   python app.py
   ```

3. **Acceder al sistema:**
   - **Página principal:** http://localhost:5000
   - **Login:** http://localhost:5000/iniciar-sesion
   - **Panel Admin:** http://localhost:5000/admin

## 🔐 Credenciales de Acceso

### Usuario Administrador
- **Usuario:** `admin`
- **Contraseña:** `Admin123`

### Usuario Operador
- **Usuario:** `operador`
- **Contraseña:** `password`

## 📋 Funcionalidades

### Frontend
- ✅ Página principal con consulta de clientes por cédula
- ✅ Sistema de login con autenticación real
- ✅ Panel de administración completo
- ✅ Gestión de clientes y servicios
- ✅ Dashboard con estadísticas en tiempo real

### Backend (Python Flask)
- ✅ Servidor Flask con autenticación JWT
- ✅ Sistema de sesiones seguro
- ✅ API REST para todas las operaciones
- ✅ Decoradores de autenticación
- ✅ Base de datos simulada con datos de prueba
- ✅ CRUD completo de clientes

## 🔧 Estructura del Proyecto

```
InternetExpress/
├── app.py                 # Servidor Flask principal
├── requirements.txt        # Dependencias de Python
├── index.html            # Página principal
├── iniciar-sesion.html   # Página de login
├── admin.html            # Panel de administración
├── js/
│   ├── script.js         # JavaScript principal
│   ├── admin.js          # JavaScript del panel admin
│   └── dynamic-effects.js # Efectos dinámicos
└── css/
    ├── styles.css        # Estilos principales
    └── animations.css    # Animaciones
```

## 🌐 API Endpoints

### Autenticación
- `POST /api/login` - Iniciar sesión
- `POST /api/logout` - Cerrar sesión
- `GET /api/verify-session` - Verificar sesión

### Clientes
- `GET /api/cliente/:cedula` - Consultar cliente por cédula
- `GET /api/admin/clients` - Listar todos los clientes (admin)
- `POST /api/admin/clients` - Añadir nuevo cliente (admin)
- `PUT /api/admin/clients/:id` - Actualizar cliente (admin)
- `DELETE /api/admin/clients/:id` - Eliminar cliente (admin)

### Admin
- `GET /api/admin/dashboard` - Datos del dashboard (admin)

## 🛡️ Seguridad

- Autenticación basada en JWT
- Sesiones seguras con Flask-Session
- Decoradores de protección de rutas
- Validación de permisos por roles
- CORS configurado para desarrollo

## 📝 Notas de Desarrollo

- El sistema usa datos simulados para demostración
- En producción, reemplazar con una base de datos real (SQLAlchemy + PostgreSQL)
- Las contraseñas están en texto plano para demo (usar bcrypt en producción)
- El servidor corre en el puerto 5000 por defecto
- Modo debug activado para desarrollo

## 🎯 Próximas Mejoras

- [ ] Integración con base de datos real (SQLAlchemy + PostgreSQL)
- [ ] Sistema de roles más granular
- [ ] Reportes en PDF con ReportLab
- [ ] Notificaciones en tiempo real con WebSockets
- [ ] API para pagos en línea
- [ ] Tests unitarios con pytest
- [ ] Dockerización del proyecto

## 🐍 Comandos Útiles

```bash
# Instalar dependencias
pip install -r requirements.txt

# Ejecutar servidor
python app.py

# Ejecutar en modo desarrollo
export FLASK_ENV=development
python app.py

# Verificar instalación
python -c "import flask; print('Flask instalado correctamente')"
```