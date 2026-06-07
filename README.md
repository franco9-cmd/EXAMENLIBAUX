# 🚗 Mis Hot Wheels

Aplicación web SPA para gestionar una colección personal de autos Hot Wheels. Permite rastrear qué vehículos tienes, cuáles te faltan y cuáles son tus favoritos.

## 🛠 Tecnologías

- **React 18** con Vite
- **React Router DOM v6** — navegación entre páginas
- **Bootstrap 5** (CDN) — estilos y componentes
- **Font Awesome 6** (CDN) — iconos
- **useState / useEffect / useMemo** — manejo de estado local

## 📁 Estructura del Proyecto

```
hot-wheels-app/
├── public/
│   └── images/          # Imágenes locales de los vehículos
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── SplashScreen.jsx
│   │   ├── Inicio.jsx
│   │   ├── MiColeccion.jsx
│   │   └── Categorias.jsx
│   ├── data/
│   │   └── hotwheels.js
│   ├── App.jsx
│   └── main.jsx
└── index.html
```

## 📄 Páginas

| Ruta | Página | Descripción |
|---|---|---|
| `/` | Inicio | Hero banner + resumen de colección + categorías destacadas |
| `/coleccion` | Mi Colección | Listado de autos con búsqueda, filtros y toggles |
| `/categorias` | Explorar Series | Selector de categorías + métricas + barra de progreso |

## ⚙️ Reglas de arquitectura

- El estado global `vehicles[]` vive en `App.jsx` y se pasa por **props** a los componentes hijos.
- No se usa Context API, Redux ni Zustand.
- Toda la data es local (sin APIs externas ni bases de datos).

## 🚀 Instalación y uso

```bash
npm install
npm install react-router-dom
npm run dev
```

Abrir en el navegador: `http://localhost:5173`
