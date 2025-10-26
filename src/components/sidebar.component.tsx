import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft } from "react-icons/fi";
import { Divider } from "./divider.component";
import { SidebarHeader } from "./sidebar-header.component";
import { SidebarNavigation } from "./sidebar-navigation.component";
import { StreetLights } from "./street-lights.component";
import { menuItems } from "@constants/sidebar";
import { sidebarClasses } from "@constants/sidebar";

export const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <motion.div
      className={sidebarClasses.container}
      animate={{
        width: isCollapsed ? "100px" : "256px",
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
    >
      <StreetLights />
      <button
        onClick={toggleCollapse}
        className={`${sidebarClasses.toggleButton}`}
      >
        <FiChevronLeft
          style={{
            transform: isCollapsed ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </button>
      <SidebarHeader isCollapsed={isCollapsed} />
      {!isCollapsed && <Divider variant="horizontal" size="md" />}
      <SidebarNavigation menuItems={menuItems} isCollapsed={isCollapsed} />
    </motion.div>
  );
};
