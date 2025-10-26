import { sidebarClasses } from "@constants/sidebar";
import avatar from "@assets/avatar.png";

export const SideBar = () => {
  return (
    <header>
      <div className={sidebarClasses.avatar.container}>
        <div className={sidebarClasses.avatar.image}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={sidebarClasses.avatar.information}>
          <h3>PRODUCT DESIGNER</h3>
          <h2>Noel Lozano Kempf</h2>
        </div>
      </div>
    </header>
  );
};
