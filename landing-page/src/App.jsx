import { BoxA } from "./components/BoxA";
import { BoxB } from "./components/BoxB";
import { BoxC } from "./components/BoxC";
import { BoxD } from "./components/BoxD";
import { BoxE } from "./components/BoxE";
import { BoxF } from "./components/BoxF";

import { Navbar } from "./components/Navbar";
import { Divider } from "./components/Divider";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="p-0 m-0 font-sans antialiased box-border leading-snug w-full">
      <Navbar />
      <BoxA />
      <BoxB />
      <BoxC />
      <BoxD />
      <BoxE />
      <BoxF />
      <Divider />
      <Footer />
    </div>
  );
}

export default App;
