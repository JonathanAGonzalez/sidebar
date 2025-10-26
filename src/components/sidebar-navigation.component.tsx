import { useState } from "react";
import { sidebarClasses } from "@constants/sidebar";
import { MenuItem as MenuItemComponent } from "./menu-item.component";
import type { MenuItem as MenuItemType } from "@typez/sidebar";

interface SidebarNavigationProps {
  menuItems: MenuItemType[];
}

export const SidebarNavigation = ({ menuItems }: SidebarNavigationProps) => {
  const [openMenu, setOpenMenu] = useState<string | null>("Dashboard");
  const [activeItem, setActiveItem] = useState("/statistic");

  const handleMenuClick = (path: string) => {
    setActiveItem(path);
  };

  const toggleMenu = (name: string) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  return (
    <nav className={sidebarClasses.nav}>
      {menuItems.map((item) => (
        <MenuItemComponent
          key={item.name}
          name={item.name}
          icon={item.icon}
          path={item.path}
          submenu={item.submenu}
          isOpen={openMenu === item.name}
          isActive={activeItem === item.path}
          activeSubItem={activeItem}
          onToggle={toggleMenu}
          onItemClick={handleMenuClick}
        />
      ))}
    </nav>
  );
};
