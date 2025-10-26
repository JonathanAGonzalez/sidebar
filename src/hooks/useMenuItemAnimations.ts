import { useMemo } from 'react';
import { DESIGN_TOKENS } from '../constants/design-tokens';

interface UseMenuItemAnimationsProps {
  index: number;
  isCollapsed: boolean;
  hasSubmenu: boolean;
  isActive: boolean;
}

interface UseMenuItemAnimationsReturn {
  buttonClassName: string;
  animationDelay: string;
  motionProps: {
    whileHover: { scale: number };
    whileTap: { scale: number };
    transition: { duration: number };
  };
  containerMotionProps: {
    initial: { opacity: number };
    animate: { opacity: number };
    transition: { duration: number };
  };
}

export const useMenuItemAnimations = ({
  index,
  isCollapsed,
  hasSubmenu,
  isActive,
}: UseMenuItemAnimationsProps): UseMenuItemAnimationsReturn => {
  const buttonClassName = useMemo(() => {
    const baseClasses = 'sidebar__menu-item';
    const activeClass = !hasSubmenu && isActive ? 'sidebar__menu-item--active' : '';
    const expandedClass = !isCollapsed ? 'sidebar__menu-item--expanded' : '';
    
    return [baseClasses, activeClass, expandedClass].filter(Boolean).join(' ');
  }, [hasSubmenu, isActive, isCollapsed]);

  const animationDelay = useMemo(() => {
    return !isCollapsed ? `${index * 0.15}s` : '0s';
  }, [isCollapsed, index]);

  const motionProps = useMemo(() => ({
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: parseFloat(DESIGN_TOKENS.transitions.duration.fast) },
  }), []);

  const containerMotionProps = useMemo(() => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: parseFloat(DESIGN_TOKENS.transitions.duration.normal) },
  }), []);

  return {
    buttonClassName,
    animationDelay,
    motionProps,
    containerMotionProps,
  };
};
