import { sidebarClasses } from "@constants/sidebar";
import { SubmenuItem as SubmenuItemComponent } from "./submenu-item.component";
import type { SubmenuItem as SubmenuItemType } from "@typez/sidebar";
import { motion, AnimatePresence } from "framer-motion";

interface SubmenuProps {
  items: SubmenuItemType[];
  activeItem: string;
  onItemClick: (name: string, path: string) => void;
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

export const Submenu = ({ items, activeItem, onItemClick }: SubmenuProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className={sidebarClasses.menu.submenu}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
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
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
