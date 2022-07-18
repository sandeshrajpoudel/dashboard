import "./App.css";
import MainContainer from "./components/MainContainer/MainContainer";
import RightSide from "./components/RightSide/RightSide";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="AppContainer">
        <Sidebar />
        <MainContainer />
        <RightSide/>
      </div>
    </div>
  );
}

export default App;
