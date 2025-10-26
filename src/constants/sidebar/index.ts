import { combineBemClasses } from "@utils/generateBemClass.util";

const BASE_CLASS_NAME = "sidebar";

export const sidebarClasses = {
  base: BASE_CLASS_NAME,
  container: combineBemClasses(BASE_CLASS_NAME, "container"),
  header: combineBemClasses(BASE_CLASS_NAME, "header"),
  avatar: {
    container: combineBemClasses(BASE_CLASS_NAME, "avatar-container"),
    image: combineBemClasses(BASE_CLASS_NAME, "avatar-image"),
    information: combineBemClasses(BASE_CLASS_NAME, "avatar-information"),
  },
  nav: combineBemClasses(BASE_CLASS_NAME, "nav"),
  menu: {
    group: combineBemClasses(BASE_CLASS_NAME, "menu-group"),
    container: combineBemClasses(BASE_CLASS_NAME, "menu-container"),
    item: combineBemClasses(BASE_CLASS_NAME, "menu-item"),
    itemActive: combineBemClasses(BASE_CLASS_NAME, "menu-item", "active"),
    icon: combineBemClasses(BASE_CLASS_NAME, "menu-icon"),
    text: combineBemClasses(BASE_CLASS_NAME, "menu-text"),
    chevron: combineBemClasses(BASE_CLASS_NAME, "menu-chevron"),
    chevronOpen: combineBemClasses(BASE_CLASS_NAME, "menu-chevron", "open"),
    submenu: combineBemClasses(BASE_CLASS_NAME, "submenu"),
    submenuConnector: combineBemClasses(BASE_CLASS_NAME, "submenu-connector"),
    submenuItems: combineBemClasses(BASE_CLASS_NAME, "submenu-items"),
    submenuItem: combineBemClasses(BASE_CLASS_NAME, "submenu-item"),
    submenuItemActive: combineBemClasses(BASE_CLASS_NAME, "submenu-item", "active"),
    submenuItemContent: combineBemClasses(BASE_CLASS_NAME, "submenu-item-content"),
    submenuText: combineBemClasses(BASE_CLASS_NAME, "submenu-text"),
  },
};

export { menuItems } from "./menu-items.constants";
