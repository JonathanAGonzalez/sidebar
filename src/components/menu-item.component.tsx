import { sidebarClasses } from "@constants/sidebar";
import type { MenuItem as MenuItemType } from "@typez/sidebar";
import { MenuChevron } from "./menu-chevron.component";
import { Submenu } from "./submenu.component";
import { createElement, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface MenuItemProps extends MenuItemType {
  isOpen: boolean;
  isActive: boolean;
  activeSubItem: string;
  onToggle: (name: string) => void;
  onItemClick: (name: string, path: string) => void;
  isCollapsed?: boolean;
  index?: number;
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
  isCollapsed = false,
  index = 0,
}: MenuItemProps) => {
  const hasSubmenu = !!submenu && submenu.length > 0;
  const [isHovered, setIsHovered] = useState(false);
  const [submenuPosition, setSubmenuPosition] = useState<{
    left?: string;
    right?: string;
  }>({});
  const timeoutRef = useRef<number | null>(null);
  const submenuRef = useRef<HTMLDivElement>(null);
  const menuItemRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (isCollapsed && hasSubmenu) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (isCollapsed && hasSubmenu) {
      timeoutRef.current = setTimeout(() => {
        setIsHovered(false);
      }, 200);
    }
  };

  const adjustSubmenuPosition = () => {
    if (
      !isCollapsed ||
      !isHovered ||
      !submenuRef.current ||
      !menuItemRef.current
    )
      return;

    const submenuRect = submenuRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const menuItemRect = menuItemRef.current.getBoundingClientRect();

    let newPosition: { left?: string; right?: string } = {};
    let newTop: string | undefined = undefined;

    let leftPosition = menuItemRect.right + 8;

    if (leftPosition + submenuRect.width > viewportWidth) {
      if (menuItemRect.left >= submenuRect.width + 16) {
        leftPosition = menuItemRect.left - submenuRect.width - 8;
      } else {
        leftPosition = viewportWidth - submenuRect.width - 8;
      }
    }

    if (leftPosition < 8) {
      leftPosition = 8;
    }

    newPosition = {
      left: `${leftPosition}px`,
      right: undefined,
    };

    const topPosition = menuItemRect.top;

    if (submenuRect.height + topPosition > viewportHeight) {
      const availableSpaceAbove = topPosition;
      const availableSpaceBelow = viewportHeight - topPosition;

      if (
        submenuRect.height <= availableSpaceAbove &&
        topPosition >= submenuRect.height
      ) {
        newTop = `${menuItemRect.top - submenuRect.height}px`;
      } else if (availableSpaceBelow >= availableSpaceAbove) {
        newTop = `${topPosition}px`;
      } else {
        newTop = `${viewportHeight - submenuRect.height - 8}px`;
      }
    } else {
      newTop = `${topPosition}px`;
    }

    setSubmenuPosition(newPosition);

    if (submenuRef.current) {
      if (newTop !== undefined) {
        submenuRef.current.style.top = newTop;
      } else {
        submenuRef.current.style.top = "";
      }
    }
  };

  useEffect(() => {
    if (isHovered && isCollapsed) {
      setTimeout(adjustSubmenuPosition, 0);

      window.addEventListener("resize", adjustSubmenuPosition);
      window.addEventListener("scroll", adjustSubmenuPosition, true);

      return () => {
        window.removeEventListener("resize", adjustSubmenuPosition);
        window.removeEventListener("scroll", adjustSubmenuPosition, true);
      };
    }
  }, [isHovered, isCollapsed]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={menuItemRef}
      className={sidebarClasses.menu.group}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{ position: isCollapsed ? "relative" : "static" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={sidebarClasses.menu.container}>
        <motion.button
          className={`${sidebarClasses.menu.item} ${
            !hasSubmenu && isActive ? sidebarClasses.menu.itemActive : ""
          } ${!isCollapsed ? "sidebar__menu-item--expanded" : ""}`}
          style={{
            animationDelay: !isCollapsed ? `${index * 0.15}s` : "0s",
          }}
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
          title={isCollapsed ? name : undefined}
        >
          <div className={sidebarClasses.menu.icon}>{createElement(icon)}</div>
          {!isCollapsed && (
            <span className={sidebarClasses.menu.text}>{name}</span>
          )}
          {!isCollapsed && hasSubmenu && <MenuChevron isOpen={isOpen} />}
        </motion.button>
      </div>

      {hasSubmenu && submenu && (
        <>
          {!isCollapsed && isOpen && (
            <Submenu
              items={submenu}
              activeItem={activeSubItem}
              onItemClick={onItemClick}
              isCollapsed={isCollapsed}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          )}
          {isCollapsed && isHovered && (
            <Submenu
              ref={submenuRef}
              items={submenu}
              activeItem={activeSubItem}
              onItemClick={onItemClick}
              isCollapsed={isCollapsed}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              submenuPosition={submenuPosition}
            />
          )}
        </>
      )}
    </motion.div>
  );
};
