import { sidebarClasses } from "@constants/sidebar";
import { SubmenuItem as SubmenuItemComponent } from "./submenu-item.component";
import type { SubmenuItem as SubmenuItemType } from "@typez/sidebar";
import { motion, AnimatePresence } from "framer-motion";
import { forwardRef } from "react";

interface SubmenuProps {
  items: SubmenuItemType[];
  activeItem: string;
  onItemClick: (name: string, path: string) => void;
  isCollapsed?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  submenuPosition?: { left?: string; right?: string };
}

const containerVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const Submenu = forwardRef<HTMLDivElement, SubmenuProps>(
  (
    {
      items,
      activeItem,
      onItemClick,
      isCollapsed = false,
      onMouseEnter,
      onMouseLeave,
      submenuPosition = {},
    },
    ref
  ) => {
    return (
      <AnimatePresence>
        <motion.div
          ref={ref}
          className={`${sidebarClasses.menu.submenu} ${
            isCollapsed ? "collapsed" : ""
          }`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            position: isCollapsed ? "fixed" : "relative",
            zIndex: isCollapsed ? 1000 : "auto",
            ...(isCollapsed &&
              submenuPosition.left && { left: submenuPosition.left }),
            ...(isCollapsed &&
              submenuPosition.right && { right: submenuPosition.right }),
          }}
          onMouseEnter={isCollapsed ? onMouseEnter : undefined}
          onMouseLeave={isCollapsed ? onMouseLeave : undefined}
        >
          <div className={sidebarClasses.menu.submenuConnector}></div>
          <div className={sidebarClasses.menu.submenuItems}>
            {items.map((item, index) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.05 }}
              >
                <SubmenuItemComponent
                  name={item.name}
                  icon={item.icon}
                  path={item.path}
                  isActive={activeItem === item.path}
                  onClick={onItemClick}
                  isCollapsed={isCollapsed}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }
);
