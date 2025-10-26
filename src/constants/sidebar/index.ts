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
};
