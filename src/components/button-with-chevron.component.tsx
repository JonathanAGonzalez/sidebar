import { DESIGN_TOKENS } from "@constants/design-tokens";
import { sidebarClasses } from "@constants/sidebar";
import { FiChevronLeft } from "react-icons/fi";

interface ButtonWithChevronProps {
  toggleCollapse: () => void;
  isCollapsedRotation: string;
  className?: string;
}

export const ButtonWithChevron = ({
  toggleCollapse,
  isCollapsedRotation,
}: ButtonWithChevronProps) => {
  return (
    <button onClick={toggleCollapse} className={sidebarClasses.toggleButton}>
      <FiChevronLeft
        style={{
          transform: `rotate(${isCollapsedRotation})`,
          transition: `transform ${DESIGN_TOKENS.transitions.duration.normal} ease`,
        }}
      />
    </button>
  );
};
