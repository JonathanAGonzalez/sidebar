import { SideBar } from "@components/sidebar.component";
import { sidebarClasses } from "./constants/sidebar";

function App() {
  return (
    <div className={sidebarClasses.container}>
      <SideBar />
    </div>
  );
}

export default App;
