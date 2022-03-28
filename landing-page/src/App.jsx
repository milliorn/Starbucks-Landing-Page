import "./App.css";
import { BoxA } from "./components/BoxA";
import { BoxB } from "./components/BoxB";
import { BoxC } from "./components/BoxC";
import { BoxD } from "./components/BoxD";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="box-border p-0 m-0 font-sans leading-normal text-dark ">
      <Navbar />
      <BoxA />
      <BoxB />
      <BoxC />
      <BoxD />
    </div>
  );
}

export default App;
