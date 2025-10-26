import { useState } from "react";
import { sidebarClasses } from "@constants/sidebar";
import { MenuItem } from "./menu-item.component";
import type { MenuItem as MenuItemType } from "@typez/sidebar";

interface SidebarNavigationProps {
  menuItems: MenuItemType[];
  isCollapsed?: boolean;
}

export const SidebarNavigation = ({
  menuItems,
  isCollapsed = false,
}: SidebarNavigationProps) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState("/statistic");

  const handleMenuClick = (_name: string, path: string) => {
    setActiveItem(path);
  };

  const toggleMenu = (name: string) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  return (
    <nav className={sidebarClasses.nav}>
      {menuItems.map(({ name, path, id, ...rest }, index) => (
        <MenuItem
          key={id}
          id={id}
          name={name}
          path={path}
          {...rest}
          isOpen={openMenu === name}
          isActive={activeItem === path}
          activeSubItem={activeItem}
          onToggle={toggleMenu}
          onItemClick={handleMenuClick}
          isCollapsed={isCollapsed}
          index={index}
        />
      ))}
    </nav>
  );
};
