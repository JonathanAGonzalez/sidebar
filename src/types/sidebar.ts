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
