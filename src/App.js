import "./App.css";
import MainContent from "./components/MainContent/MainContent";
import RightSide from "./components/RightSide/RightSide";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainContent />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
