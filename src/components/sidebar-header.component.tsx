import { sidebarClasses } from "@constants/sidebar";
import avatar from "@assets/avatar.png";

interface SidebarHeaderProps {
  isCollapsed?: boolean;
}

export const SidebarHeader = ({ isCollapsed = false }: SidebarHeaderProps) => {
  const className = isCollapsed
    ? sidebarClasses.avatar.containerCollapsed
    : sidebarClasses.avatar.container;

  return (
    <header>
      <div className={className}>
        <div className={sidebarClasses.avatar.image}>
          <img src={avatar} alt="Jonathan González" />
        </div>
        {!isCollapsed && (
          <div className={sidebarClasses.avatar.informationExpanded}>
            <h3>Frontend Developer</h3>
            <h2>Jonathan González</h2>
          </div>
        )}
      </div>
    </header>
  );
};
