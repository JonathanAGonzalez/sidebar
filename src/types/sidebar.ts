export interface SubmenuItem {
  name: string;
  icon: React.ElementType;
  path: string;
}

export interface MenuItem {
  name: string;
  icon: React.ElementType;
  path: string;
  submenu?: SubmenuItem[];
}

export interface MenuItemProps extends MenuItem {
  isOpen: boolean;
  isActive: boolean;
  activeSubItem: string;
  onToggle: (name: string) => void;
  onItemClick: (name: string, path: string) => void;
  isCollapsed?: boolean;
  index?: number;
}

export interface SubmenuPosition {
  left?: string;
  right?: string;
  top?: string;
}