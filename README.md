# Panorama - Plataforma de Recomendación de Actividades

Panorama es una plataforma digital que recomienda actividades de ocio personalizadas, considerando las preferencias del usuario y condiciones externas en tiempo real (clima, ubicación, afluencia y disponibilidad).

## Características

- Sistema de recomendaciones personalizadas basado en preferencias del usuario
- Filtros por categoría, tipo de compañía y presupuesto
- Integración con datos meteorológicos
- Visualización de actividades en mapa
- Sistema de reservas y compra de entradas

## Tecnologías Utilizadas

- React
- TypeScript
- Tailwind CSS
- React Router
- Axios (para futuras integraciones con APIs)

## Estructura del Proyecto

```
src/
  ├── components/     # Componentes reutilizables
  ├── pages/         # Páginas de la aplicación
  ├── data/          # Datos mock y tipos
  ├── services/      # Servicios para integración con APIs
  ├── hooks/         # Custom hooks
  ├── types/         # Definiciones de tipos TypeScript
  └── utils/         # Funciones utilitarias
```

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor de desarrollo:
   ```bash
   npm start
   ```

## Próximas Mejoras

- Integración con API de OpenWeatherMap
- Implementación de autenticación de usuarios
- Sistema de favoritos
- Integración con Google Maps
- Sistema de reservas y pagos

## Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir los cambios propuestos antes de hacer un pull request.

## Licencia

MIT
