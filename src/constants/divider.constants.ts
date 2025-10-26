import { combineBemClasses } from "@utils/generateBemClass.util";

const BASE_CLASS_NAME = "divider";

export const dividerClasses = {
  base: BASE_CLASS_NAME,
  horizontal: combineBemClasses(BASE_CLASS_NAME, undefined, "horizontal"),
  vertical: combineBemClasses(BASE_CLASS_NAME, undefined, "vertical"),
  sm: combineBemClasses(BASE_CLASS_NAME, undefined, "sm"),
  md: combineBemClasses(BASE_CLASS_NAME, undefined, "md"),
  lg: combineBemClasses(BASE_CLASS_NAME, undefined, "lg"),
};