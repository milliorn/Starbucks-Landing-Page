import "./App.css";
import Logo from "./img/logo.svg";
import Marker from "./img/marker.svg";

function App() {
  return (
    <div className="container box-border p-0 m-0 font-sans leading-normal text-dark">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <a className="text-black" href="/">
              <img className="max-w-full " src={Logo} alt="logo" />
            </a>
          </div>

          <ul className="list-none navbar-nav-left">
            <li>
              <a className="text-black" href="/">Menu</a>
            </li>
            <li>
              <a className="text-black" href="/">Rewards</a>
            </li>
            <li>
              <a className="text-black" href="/">Gift Cards</a>
            </li>
          </ul>

          <ul className="list-none navbar-nav-right">
            <li>
              <a className="text-black" href="/">
                <img className="max-w-full " src={Marker} alt="" />
                <span>Find a store</span>
              </a>
            </li>
            <li>
              <button className="btn btn-dark-outline">Sign in</button>
            </li>
            <li>
              <button className="btn btn-dark">Join now</button>
            </li>
          </ul>

          {/*<!-- Hamburger Menu -->*/}
          <button type="button" className="hamburger" id="menu-btn">
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default App;
