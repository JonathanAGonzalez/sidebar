
export const DESIGN_TOKENS = {
  sidebar: {
    width: {
      expanded: '256px',
      collapsed: '100px',
    },
  },
  transitions: {
    duration: {
      fast: '0.15s',
      normal: '0.3s',
      slow: '0.5s',
    },
    easing: {
      easeInOut: 'easeInOut',
      easeIn: 'easeIn',
      easeOut: 'easeOut',
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  rotation: {
    collapsed: '180deg',
    expanded: '0deg',
  },
} as const;


export type SidebarWidth = typeof DESIGN_TOKENS.sidebar.width;
export type TransitionDuration = typeof DESIGN_TOKENS.transitions.duration;
export type TransitionEasing = typeof DESIGN_TOKENS.transitions.easing;
