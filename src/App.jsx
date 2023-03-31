import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero } from "./components";
import { Bindings, BonsPlansTatta, ClassesMW2, ClassesMwCw, ClassesVanguard, Config1100, Config1600, Config1800, ConfigPcGaming, ConfigPcStreaming, Evenements, Peripheriques, SettingsMW2, SettingsWarzone } from "./pages";
import MainLayout from "./layout/MainLayout";

function App() {

  return (
    <>
      <MainLayout>
        <Hero />
      </MainLayout>
      {/* <Switch>
        <Route path="/" component={Hero} />
        <Route path="/armes" component={Armes} />
        <Route path="/evenements" component={Evenements} />
        <Route path="/pc-gaming" component={ConfigPcGaming} />
        <Route path="/pc-streaming" component={ConfigPcStreaming} />
        <Route path="/peripheriques" component={Peripheriques} />
        <Route path="/classes-mw2" component={ClassesMW2} />
        <Route path="/classes-vanguard" component={ClassesVanguard} />
        <Route path="/classes-mw-cw" component={ClassesMwCw} />
        <Route path="/bindings" component={Bindings} />
        <Route path="/settings-warzone" component={SettingsWarzone} />
        <Route path="/settings-mw2" component={SettingsMW2} />
        <Route path="/promos" component={BonsPlansTatta} />
        <Route path="/config-1100" component={Config1100} />
        <Route path="/config-1600" component={Config1600} />
        <Route path="/config-1800" component={Config1800} />
      </Switch> */}
    </>
  )
}

export default App
