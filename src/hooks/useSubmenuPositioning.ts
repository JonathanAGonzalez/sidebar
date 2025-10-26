import { useState, useRef, useEffect, useCallback } from 'react';
import type { SubmenuPosition } from '../types/sidebar';

interface UseSubmenuPositioningProps {
  isCollapsed: boolean;
  hasSubmenu: boolean;
}

interface UseSubmenuPositioningReturn {
  isHovered: boolean;
  submenuPosition: SubmenuPosition;
  submenuRef: React.RefObject<HTMLDivElement | null>;
  menuItemRef: React.RefObject<HTMLDivElement | null>;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

export const useSubmenuPositioning = ({
  isCollapsed,
  hasSubmenu,
}: UseSubmenuPositioningProps): UseSubmenuPositioningReturn => {
  const [isHovered, setIsHovered] = useState(false);
  const [submenuPosition, setSubmenuPosition] = useState<SubmenuPosition>({});
  const timeoutRef = useRef<number | null>(null);
  const submenuRef = useRef<HTMLDivElement>(null);
  const menuItemRef = useRef<HTMLDivElement>(null);

  const calculateOptimalPosition = useCallback((): SubmenuPosition => {
    if (!submenuRef.current || !menuItemRef.current) {
      return {};
    }

    const submenuRect = submenuRef.current.getBoundingClientRect();
    const menuItemRect = menuItemRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    
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

    
    const topPosition = menuItemRect.top;
    let finalTop = topPosition;

    if (submenuRect.height + topPosition > viewportHeight) {
      const availableSpaceAbove = topPosition;
      const availableSpaceBelow = viewportHeight - topPosition;

      if (submenuRect.height <= availableSpaceAbove && topPosition >= submenuRect.height) {
        finalTop = menuItemRect.top - submenuRect.height;
      } else if (availableSpaceBelow >= availableSpaceAbove) {
        finalTop = topPosition;
      } else {
        finalTop = viewportHeight - submenuRect.height - 8;
      }
    }

    return {
      left: `${leftPosition}px`,
      top: `${finalTop}px`,
    };
  }, []);

  const adjustSubmenuPosition = useCallback(() => {
    if (!isCollapsed || !isHovered || !hasSubmenu) return;

    const newPosition = calculateOptimalPosition();
    setSubmenuPosition(newPosition);

    if (submenuRef.current && newPosition.top) {
      submenuRef.current.style.top = newPosition.top;
    }
  }, [isCollapsed, isHovered, hasSubmenu, calculateOptimalPosition]);

  const handleMouseEnter = useCallback(() => {
    if (isCollapsed && hasSubmenu) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsHovered(true);
    }
  }, [isCollapsed, hasSubmenu]);

  const handleMouseLeave = useCallback(() => {
    if (isCollapsed && hasSubmenu) {
      timeoutRef.current = setTimeout(() => {
        setIsHovered(false);
      }, 200);
    }
  }, [isCollapsed, hasSubmenu]);

  
  useEffect(() => {
    if (isHovered && isCollapsed) {
      const timeoutId = setTimeout(adjustSubmenuPosition, 0);
      
      window.addEventListener('resize', adjustSubmenuPosition);
      window.addEventListener('scroll', adjustSubmenuPosition, true);

      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('resize', adjustSubmenuPosition);
        window.removeEventListener('scroll', adjustSubmenuPosition, true);
      };
    }
  }, [isHovered, isCollapsed, adjustSubmenuPosition]);

  
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    isHovered,
    submenuPosition,
    submenuRef,
    menuItemRef,
    handleMouseEnter,
    handleMouseLeave,
  };
};
