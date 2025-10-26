import { Divider } from "./divider.component";
import { SidebarHeader } from "./sidebar-header.component";
import { SidebarNavigation } from "./sidebar-navigation.component";
import { menuItems } from "@constants/sidebar";

export const SideBar = () => {
  return (
    <>
      <SidebarHeader />
      <Divider variant="horizontal" size="md" />
      <SidebarNavigation menuItems={menuItems} />
    </>
  );
};
