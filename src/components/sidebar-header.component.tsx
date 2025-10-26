import { sidebarClasses } from "@constants/sidebar";
import avatar from "@assets/avatar.png";

interface SidebarHeaderProps {
  isCollapsed?: boolean;
}

export const SidebarHeader = ({ isCollapsed = false }: SidebarHeaderProps) => {
  return (
    <header>
      <div
        className={
          isCollapsed
            ? sidebarClasses.avatar.containerCollapsed
            : sidebarClasses.avatar.container
        }
      >
        <div className={sidebarClasses.avatar.image}>
          <img src={avatar} alt="avatar" />
        </div>
        {!isCollapsed && (
          <div
            className={`${sidebarClasses.avatar.information} sidebar__avatar-information--expanded`}
          >
            <h3>PRODUCT DESIGNER</h3>
            <h2>Noel Lozano Kempf</h2>
          </div>
        )}
      </div>
    </header>
  );
};
