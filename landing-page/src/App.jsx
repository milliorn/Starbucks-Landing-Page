import "./App.css";
import { BoxA } from "./components/BoxA";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="box-border p-0 m-0 font-sans leading-normal text-dark ">
      <Navbar />
      <BoxA/>
    </div>
  );
}

export default App;
