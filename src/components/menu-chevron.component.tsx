import { sidebarClasses } from "@constants/sidebar";
import { motion } from "framer-motion";

interface MenuChevronProps {
  isOpen: boolean;
}

export const MenuChevron = ({ isOpen }: MenuChevronProps) => {
  return (
    <motion.div
      className={sidebarClasses.menu.chevron}
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M9 4.5L6 7.5L3 4.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
};
