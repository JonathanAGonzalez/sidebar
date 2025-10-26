# Custom Hooks

This directory contains custom hooks that extract complex logic from components to improve code reusability and maintainability.

## useSubmenuPositioning

Hook that manages all submenu positioning logic when the sidebar is collapsed.

### Features:

- Manages hover state
- Automatically calculates the optimal submenu position
- Dynamically adjusts based on the viewport
- Automatically cleans up event listeners

### Parameters:

- `isCollapsed`: boolean - Whether the sidebar is collapsed
- `hasSubmenu`: boolean - Whether the item has a submenu

### Returns:

- `isHovered`: Hover state
- `submenuPosition`: Calculated submenu position
- `submenuRef`: Reference to the submenu element
- `menuItemRef`: Reference to the menu item element
- `handleMouseEnter`: Handler for mouse enter
- `handleMouseLeave`: Handler for mouse leave

## useMenuItemAnimations

Hook that centralizes all animation logic and CSS classes for a menu item.

### Features:

- Generates dynamic CSS classes
- Calculates animation delays
- Configures Framer Motion props
- Memoizes computed values

### Parameters:

- `index`: number - Item index for delays
- `isCollapsed`: boolean - Sidebar state
- `hasSubmenu`: boolean - Whether it has a submenu
- `isActive`: boolean - Whether it is active

### Returns:

- `buttonClassName`: Button CSS classes
- `animationDelay`: Animation delay
- `motionProps`: Props for Framer Motion
- `containerMotionProps`: Container props
