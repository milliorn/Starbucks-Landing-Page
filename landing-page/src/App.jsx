import "./App.css";
import { BoxA } from "./components/BoxA";
import { BoxB } from "./components/BoxB";
import { BoxC } from "./components/BoxC";
import { BoxD } from "./components/BoxD";
import { BoxE } from "./components/BoxE";
import { BoxF } from "./components/BoxF";

import { Navbar } from "./components/Navbar";
import { Divider } from "./components/Divider";

function App() {
  return (
    <div className="p-0 m-0 font-sans ">
      <Navbar />
      <BoxA />
      <BoxB />
      <BoxC />
      <BoxD />
      <BoxE />
      <BoxF />
      <Divider />
    </div>
  );
}

export default App;
