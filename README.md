# Sidebar Component
<img width="390" height="844" alt="image" src="https://github.com/user-attachments/assets/ac21ef95-de68-4877-861e-3af1a00965bb" />

<img width="390" height="844" alt="image" src="https://github.com/user-attachments/assets/2724fa93-51c1-4325-9374-f3675aa34852" />

<img width="521" height="945" alt="image" src="https://github.com/user-attachments/assets/94034546-5596-455c-bcf1-01687c676a24" />




Un componente de Sidebar moderna y elegante construida con React, TypeScript, y Framer Motion. Incluye animaciones fluidas, modo colapsible, submenús inteligentes con detección de viewport, y un diseño oscuro con gradientes.

## 🎨 Características

- **Modo Colapsible**: El sidebar se puede expandir y colapsar con una animación suave
- **Submenús Inteligentes**: Los tooltips de los submenús detectan el viewport y se posicionan automáticamente
- **Sin Scroll**: Implementación con `position: fixed` que previene scrolls no deseados
- **Animaciones Fluidas**: Transiciones suaves usando Framer Motion
- **Diseño Moderno**: Interfaz oscura con bordes gradientes y efectos visuales
- **Street Lights**: Decorativos controles estilo macOS en la parte superior
- **Avatar de Usuario**: Sección de perfil con información del usuario

## 🛠️ Tecnologías

- **React 19**: Biblioteca para la interfaz de usuario
- **TypeScript**: Tipado estático para mayor seguridad
- **Framer Motion**: Animaciones y transiciones
- **SASS/SCSS**: Estilos con variables y mixins
- **Vite**: Build tool ultrarrápido
- **React Icons**: Biblioteca de iconos

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/JonathanAGonzalez/sidebar

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

## 📁 Estructura del Proyecto

```
src/
├── assets/           # Imágenes y recursos estáticos
├── components/       # Componentes React
│   ├── divider.component.tsx
│   ├── menu-chevron.component.tsx
│   ├── menu-item.component.tsx
│   ├── sidebar-header.component.tsx
│   ├── sidebar-navigation.component.tsx
│   ├── sidebar.component.tsx
│   ├── street-lights.component.tsx
│   ├── submenu.component.tsx
│   └── submenu-item.component.tsx
├── constants/        # Constantes y configuraciones
│   ├── divider.constants.ts
│   └── sidebar/
│       ├── index.ts
│       └── menu-items.constants.ts
├── scss/            # Estilos SASS
│   ├── _divider.variables.scss
│   ├── _mixins.styles.scss
│   ├── _variables.styles.scss
│   ├── divider.styles.scss
│   └── sidebar.styles.scss
├── types/           # Definiciones de tipos TypeScript
│   └── sidebar.ts
├── utils/           # Utilidades
│   └── generateBemClass.util.ts
├── App.tsx          # Componente principal
├── index.css        # Estilos globales
└── main.tsx         # Punto de entrada
```

## 🎯 Características Detalladas

### Sidebar Colapsible

El sidebar puede expandirse (256px) o colapsarse (100px) con un botón toggle. Cuando está colapsado, solo se muestran los iconos. El estado se mantiene con React hooks.

### Submenús Inteligentes

Los submenús utilizan una lógica avanzada de posicionamiento:

- **Detección de Viewport**: Calcula si el submenú cabe en el espacio disponible
- **Posicionamiento Horizontal**:
  - Si hay espacio a la derecha, se muestra ahí
  - Si no hay espacio a la derecha, se muestra a la izquierda
  - Si no hay espacio en ningún lado, se ajusta para caber
- **Posicionamiento Vertical**:
  - Detecta si hay espacio arriba o abajo
  - Se ajusta automáticamente para no salirse del viewport
- **Sin Scroll**: Usa `position: fixed` para no generar scrolls en la página

### Iconos del Menú

El sidebar incluye los siguientes elementos de menú:

- **Dashboard**: Con submenús de Activity, Traffic, y Statistic
- **Invoices**: Gestión de facturas
- **Wallet**: Gestión de cartera
- **Notification**: Centro de notificaciones

## 🎨 Personalización

### Colores y Temas

Los colores se definen en `src/scss/_variables.styles.scss`:

```scss
$dark-red-color-1: #1a0a0e;
$dark-red-color-2: #2a1119;
$dark-red-color-3: #3a1824;
$dark-red-color-4: #4a1f2f;
$light-red-color: #ff6b9d;
$red-color: #ff4757;
$yellow-color: #ffd700;
$green-color: #2ed573;
```

### Agregar Nuevos Ítems de Menú

Edita `src/constants/sidebar/menu-items.constants.ts`:

```typescript
export const menuItems: MenuItem[] = [
  {
    name: "Nuevo Item",
    icon: FiIcono,
    path: "/ruta",
    submenu: [{ name: "Subitem", icon: FiIcono2, path: "/subruta" }],
  },
];
```


## 📝 Notas de Implementación

### Detección de Viewport

La función `adjustSubmenuPosition()` en `menu-item.component.tsx`:

1. Calcula el espacio disponible en el viewport
2. Determina si el submenú cabe horizontal y verticalmente
3. Ajusta la posición usando `position: fixed`
4. Se actualiza en tiempo real con eventos de resize y scroll

### BEM (Block Element Modifier)

El proyecto utiliza clases BEM para una mejor organización del CSS:

```scss
.sidebar {
  &__container {
  }
  &__menu {
    &__item {
    }
    &__item--active {
    }
  }
}
```


## 👤 Autor
Jona 🫡
