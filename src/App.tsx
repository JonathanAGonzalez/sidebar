import { SideBar } from "@components/sidebar.component";
import { sidebarClasses } from "./constants/sidebar";
import "@scss/sidebar.styles.scss";

function App() {
  return (
    <div className={sidebarClasses.container}>
      <SideBar />
    </div>
  );
}

export default App;
