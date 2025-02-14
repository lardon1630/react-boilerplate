# React App - Boilerplate

Este es un **boilerplate** minimalista para desarrollar aplicaciones en **React** con **TypeScript** y **Vite**. Incluye una configuración básica con TailwindCSS, ESLint, Zustand y otras librerías comunes para acelerar el desarrollo.

## 🚀 Características

- ⚡️ **Vite** como bundler para un desarrollo rápido
- 🔥 **React 19** con **React Router DOM** para enrutamiento
- 🎨 **Tailwind CSS** para estilos rápidos y eficientes
- 📏 **ESLint** con reglas recomendadas y soporte para React Hooks
- 🛠 **Formik + Yup** para formularios y validaciones
- ⚙️ **Framer Motion** para animaciones fluidas
- 📡 **Axios** para peticiones HTTP
- 🔄 **Zustand** para la gestión de estado global

---

## 📦 Instalación

```bash
# Clona el repositorio
git clone https://github.com/tuusuario/react-boilerplate.git
cd react-boilerplate

# Instala las dependencias
yarn install  # o npm install o pnpm install
```

## 🏃‍♂️ Scripts disponibles

```bash
# Iniciar el entorno de desarrollo
yarn dev   # o npm run dev

# Construir la aplicación para producción
yarn build # o npm run build

# Vista previa de la aplicación en producción
yarn preview # o npm run preview

# Linter para el código
yarn lint  # o npm run lint
```

## 📂 Estructura del proyecto

```
react-boilerplate/
├── src/
│   ├── application/      # Lógica de negocio y configuraciones
│   ├── assets/           # Archivos estáticos (imágenes, fuentes, etc.)
│   ├── components/       # Componentes reutilizables
│   ├── containers/       # Contenedores de alto nivel
│   ├── hooks/            # Hooks personalizados
│   ├── layout/           # Componentes de diseño y estructura
│   ├── pages/            # Páginas de la aplicación
│   ├── store/            # Gestión de estado con Zustand
|   |   ├── createStore.ts     # Fábrica de stores reutilizables
│   │   ├── useGlobalStore.ts  # Store global
│   │   ├── useUserStore.ts    # Store de usuario
│   │   ├── useDebugStore.ts   # Store para logs y depuración
│   ├── utils/            # Funciones auxiliares
│   ├── App.tsx           # Componente principal
│   ├── index.css         # Estilos globales
│   ├── main.tsx          # Punto de entrada de la app
│   ├── vite-env.d.ts     # Configuración de tipos de Vite
│
├── .gitignore            # Archivos y carpetas ignoradas en Git
├── eslint.config.js      # Configuración de ESLint
├── index.html            # Documento HTML base
├── package.json          # Dependencias y scripts
├── postcss.config.js     # Configuración de PostCSS
├── tailwind.config.js    # Configuración de Tailwind
├── tsconfig.app.json     # Configuración de TypeScript para la app
├── tsconfig.node.json    # Configuración de TypeScript para Node
├── vite.config.ts        # Configuración de Vite
└── yarn.lock             # Archivo de dependencias bloqueadas
```

## 🛠 Tecnologías utilizadas

### 📌 Dependencias principales

- [React 19](https://react.dev/)
- [React Router DOM 7](https://reactrouter.com/)
- [Formik](https://formik.org/) + [Yup](https://github.com/jquense/yup) para manejo de formularios
- [Axios](https://axios-http.com/) para peticiones HTTP
- [Framer Motion](https://www.framer.com/motion/) para animaciones
- [React Icons](https://react-icons.github.io/react-icons/)
- [Zustand](https://zustand-demo.pmnd.rs/) para gestión de estado

### 🔧 Dependencias de desarrollo

- [Vite](https://vitejs.dev/) como bundler
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/) con reglas para React y Hooks
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) para optimización con SWC

## ✨ Configuración de ESLint

El proyecto utiliza ESLint con las siguientes reglas adicionales:

```js
import react from 'eslint-plugin-react';

export default tseslint.config({
  settings: { react: { version: '18.3' } },
  plugins: { react },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```

## 🏗 Despliegue

Para generar los archivos listos para producción:

```bash
yarn build
```

Esto generará una carpeta **dist/** lista para ser desplegada en cualquier servicio estático como Vercel, Netlify o Cloudflare Pages.

## 📜 Licencia

MIT - Puedes usar y modificar este boilerplate libremente. 🎉