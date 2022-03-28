import "./App.css";
import { BoxA } from "./components/BoxA";
import { BoxB } from "./components/BoxB";
import { BoxC } from "./components/BoxC";
import { BoxD } from "./components/BoxD";
import { BoxE } from "./components/BoxE";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className=" p-0 m-0 font-sans">
      <Navbar />
      <BoxA />
      <BoxB />
      <BoxC />
      <BoxD />
      <BoxE />
    </div>
  );
}

export default App;
