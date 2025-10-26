import { sidebarClasses } from "@constants/sidebar";
import type { MenuItem as MenuItemType } from "@typez/sidebar";
import { MenuChevron } from "./menu-chevron.component";
import { Submenu } from "./submenu.component";
import { createElement } from "react";
import { motion } from "framer-motion";

interface MenuItemProps extends MenuItemType {
  isOpen: boolean;
  isActive: boolean;
  activeSubItem: string;
  onToggle: (name: string) => void;
  onItemClick: (name: string, path: string) => void;
}

export const MenuItem = ({
  name,
  icon,
  path,
  submenu,
  isOpen,
  isActive,
  activeSubItem,
  onToggle,
  onItemClick,
}: MenuItemProps) => {
  const hasSubmenu = !!submenu && submenu.length > 0;

  return (
    <motion.div
      className={sidebarClasses.menu.group}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className={sidebarClasses.menu.container}>
        <motion.button
          className={`${sidebarClasses.menu.item} ${
            !hasSubmenu && isActive ? sidebarClasses.menu.itemActive : ""
          }`}
          onClick={() => {
            if (hasSubmenu) {
              onToggle(name);
            } else {
              onItemClick(name, path);
            }
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.15 }}
        >
          <div className={sidebarClasses.menu.icon}>{createElement(icon)}</div>
          <span className={sidebarClasses.menu.text}>{name}</span>
          {hasSubmenu && <MenuChevron isOpen={isOpen} />}
        </motion.button>
      </div>

      {hasSubmenu && isOpen && submenu && (
        <Submenu
          items={submenu}
          activeItem={activeSubItem}
          onItemClick={onItemClick}
        />
      )}
    </motion.div>
  );
};
