import { SideBar } from "@components/sidebar.component";
import { sidebarClasses } from "./constants/sidebar";
import "@scss/sidebar.styles.scss";

const App = () => {
  return (
    <div className={sidebarClasses.container}>
      <div className={sidebarClasses.header}>
        <button aria-label="minimize"></button>
        <button aria-label="maximize"></button>
        <button aria-label="close"></button>
      </div>
      <SideBar />
    </div>
  );
};

export default App;
