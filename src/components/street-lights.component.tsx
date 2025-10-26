import { sidebarClasses } from "@constants/sidebar";

export const StreetLights = () => {
  return (
    <div className={sidebarClasses.header}>
      <button aria-label="minimize"></button>
      <button aria-label="maximize"></button>
      <button aria-label="close"></button>
    </div>
  );
};
