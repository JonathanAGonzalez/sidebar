import { SideBar } from "@components/sidebar.component";
import { StreetLights } from "@components/street-lights.component";
import { sidebarClasses } from "./constants/sidebar";
import { Divider } from "@components/divider.component";

import "@scss/sidebar.styles.scss";
import "@scss/divider.styles.scss";

const App = () => {
  return (
    <div className={sidebarClasses.container}>
      <StreetLights />
      <SideBar />
      <Divider variant="horizontal" size="md" />
    </div>
  );
};

export default App;
