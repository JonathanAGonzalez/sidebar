import { useState } from "react";
import { motion } from "framer-motion";
import { Divider } from "./divider.component";
import { SidebarHeader } from "./sidebar-header.component";
import { SidebarNavigation } from "./sidebar-navigation.component";
import { StreetLights } from "./street-lights.component";
import { menuItems } from "@constants/sidebar";
import { sidebarClasses } from "@constants/sidebar";
import { DESIGN_TOKENS } from "@constants/design-tokens";
import { ButtonWithChevron } from "./button-with-chevron.component";

export const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const sidebarWidth = isCollapsed
    ? DESIGN_TOKENS.sidebar.width.collapsed
    : DESIGN_TOKENS.sidebar.width.expanded;

  const isCollapsedRotation = isCollapsed
    ? DESIGN_TOKENS.rotation.collapsed
    : DESIGN_TOKENS.rotation.expanded;

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <motion.div
      className={sidebarClasses.container}
      animate={{
        width: sidebarWidth,
        transition: {
          duration: parseFloat(DESIGN_TOKENS.transitions.duration.normal),
          ease: DESIGN_TOKENS.transitions.easing.easeInOut,
        },
      }}
    >
      <StreetLights />
      <ButtonWithChevron
        toggleCollapse={toggleCollapse}
        isCollapsedRotation={isCollapsedRotation}
      />
      <SidebarHeader isCollapsed={isCollapsed} />
      <Divider variant="horizontal" size="md" />
      <SidebarNavigation menuItems={menuItems} isCollapsed={isCollapsed} />
    </motion.div>
  );
};
