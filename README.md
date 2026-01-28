# Carrito de Compras - GuitarLA

Proyecto educativo que implementa un **carrito de compras** utilizando React, practicando conceptos fundamentales como hooks, componentes funcionales y programación moderna en JavaScript.

## 🎯 Características

- ✅ Gestión de carrito con `useState`
- ✅ Persistencia de datos con `localStorage` y `useEffect`
- ✅ Componentes funcionales reutilizables
- ✅ Destructuración de props y objetos
- ✅ Programación funcional con métodos array (`map`, `filter`, `reduce`)
- ✅ Interfaz responsiva con Bootstrap

## 📁 Estructura del Proyecto

```
src/
├── App.jsx              # Componente principal (lógica del carrito)
├── main.jsx             # Punto de entrada de React
├── index.css            # Estilos globales
├── components/
│   ├── Header.jsx       # Encabezado con carrito desplegable
│   ├── Guitar.jsx       # Tarjeta de producto
│   └── Footer.jsx       # Pie de página
└── data/
    └── db.js            # Base de datos de guitarras
```

### Componentes Clave

| Componente | Responsabilidad |
|-----------|-----------------|
| **App.jsx** | Gestiona estado del carrito, lógica CRUD, localStorage |
| **Header.jsx** | Muestra carrito, total y controles de cantidad |
| **Guitar.jsx** | Tarjeta individual de producto |
| **Footer.jsx** | Información de copyright |

## 🧠 Conceptos React Implementados

- **useState**: Gestión de carrito y datos de productos
- **useEffect**: Sincronización con localStorage
- **Componentes funcionales**: Reutilización de código
- **Props drilling**: Paso de props a componentes hijos

## 🚀 Instalación y Uso Local

### Requisitos
- Node.js (v16 o superior)
- npm o yarn

### Pasos

1. **Clonar o descargar el proyecto**
   ```bash
   cd carrito-compras
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   - La aplicación se abrirá en `http://localhost:5173`

## 🌐 Proyecto Desplegado

[Enlace a la aplicación en línea - *próximamente*]

## 📚 Tecnologías Utilizadas

- React 18
- Vite
- Bootstrap 5
- JavaScript ES6+

