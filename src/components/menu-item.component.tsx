import { sidebarClasses } from "@constants/sidebar";
import type { MenuItemProps } from "@typez/sidebar";
import { MenuChevron } from "./menu-chevron.component";
import { Submenu } from "./submenu.component";
import { createElement, memo, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { useSubmenuPositioning } from "../hooks/useSubmenuPositioning";
import { useMenuItemAnimations } from "../hooks/useMenuItemAnimations";

const MenuItemComponent = ({
  name,
  icon,
  path,
  submenu,
  isOpen,
  isActive,
  activeSubItem,
  onToggle,
  onItemClick,
  isCollapsed = false,
  index = 0,
}: MenuItemProps) => {
  const hasSubmenu = useMemo(() => !!submenu && submenu.length > 0, [submenu]);

  const {
    isHovered,
    submenuPosition,
    submenuRef,
    menuItemRef,
    handleMouseEnter,
    handleMouseLeave,
  } = useSubmenuPositioning({
    isCollapsed,
    hasSubmenu,
  });

  const { buttonClassName, animationDelay, motionProps, containerMotionProps } =
    useMenuItemAnimations({
      index,
      isCollapsed,
      hasSubmenu,
      isActive,
    });

  const handleItemClick = useCallback(() => {
    if (hasSubmenu) {
      onToggle(name);
    } else {
      onItemClick(name, path);
    }
  }, [hasSubmenu, onToggle, onItemClick, name, path]);

  const MenuButton = useMemo(
    () => (
      <motion.button
        className={buttonClassName}
        style={{ animationDelay }}
        onClick={handleItemClick}
        {...motionProps}
        title={isCollapsed ? name : undefined}
      >
        <div className={sidebarClasses.menu.icon}>{createElement(icon)}</div>
        {!isCollapsed && (
          <span className={sidebarClasses.menu.text}>{name}</span>
        )}
        {!isCollapsed && hasSubmenu && <MenuChevron isOpen={isOpen} />}
      </motion.button>
    ),
    [
      buttonClassName,
      animationDelay,
      handleItemClick,
      motionProps,
      isCollapsed,
      name,
      icon,
      hasSubmenu,
      isOpen,
    ]
  );

  const SubmenuComponent = useMemo(() => {
    if (!hasSubmenu || !submenu) return null;

    const submenuProps = {
      items: submenu,
      activeItem: activeSubItem,
      onItemClick,
      isCollapsed,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    };

    return (
      <>
        {!isCollapsed && isOpen && <Submenu {...submenuProps} />}
        {isCollapsed && isHovered && (
          <Submenu
            ref={submenuRef}
            {...submenuProps}
            submenuPosition={submenuPosition}
          />
        )}
      </>
    );
  }, [
    hasSubmenu,
    submenu,
    isCollapsed,
    isOpen,
    isHovered,
    activeSubItem,
    onItemClick,
    handleMouseEnter,
    handleMouseLeave,
    submenuPosition,
    submenuRef,
  ]);

  return (
    <motion.div
      ref={menuItemRef}
      className={sidebarClasses.menu.group}
      style={{ position: isCollapsed ? "relative" : "static" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...containerMotionProps}
    >
      <div className={sidebarClasses.menu.container}>{MenuButton}</div>
      {SubmenuComponent}
    </motion.div>
  );
};

export const MenuItem = memo(MenuItemComponent);
