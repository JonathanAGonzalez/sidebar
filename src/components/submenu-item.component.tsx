import { sidebarClasses } from "@constants/sidebar";
import type { SubmenuItem as SubmenuItemType } from "@typez/sidebar";
import { motion } from "framer-motion";
import { createElement } from "react";

interface SubmenuItemProps extends SubmenuItemType {
  isActive: boolean;
  onClick: (name: string, path: string) => void;
  isCollapsed?: boolean;
}

export const SubmenuItem = ({
  name,
  icon,
  path,
  isActive,
  onClick,
  isCollapsed = false,
}: SubmenuItemProps) => {
  return (
    <motion.button
      className={`${sidebarClasses.menu.submenuItem} ${
        isActive ? sidebarClasses.menu.submenuItemActive : ""
      }`}
      onClick={() => onClick(name, path)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
    >
      <div className={sidebarClasses.menu.submenuItemContent}>
        {isCollapsed && (
          <div className={sidebarClasses.menu.submenuIcon}>
            {createElement(icon)}
          </div>
        )}
        <span className={sidebarClasses.menu.submenuText}>{name}</span>
      </div>
    </motion.button>
  );
};
