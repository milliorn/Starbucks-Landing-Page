import "./App.css";
import Logo from "./img/logo.svg";
import Marker from "./img/marker.svg";

function App() {
  return (
    <div className="container">
      <nav class="navbar">
        <div class="navbar-container">
          <div class="navbar-brand">
            <a href="/">
              <img src={Logo} alt="logo" />
            </a>
          </div>

          <ul class="navbar-nav-left">
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Rewards</a>
            </li>
            <li>
              <a href="/">Gift Cards</a>
            </li>
          </ul>

          <ul class="navbar-nav-right">
            <li>
              <a href="/">
                <img src={Marker} alt="" />
                <span>Find a store</span>
              </a>
            </li>
            <li>
              <button class="btn btn-dark-outline">Sign in</button>
            </li>
            <li>
              <button class="btn btn-dark">Join now</button>
            </li>
          </ul>

          {/*<!-- Hamburger Menu -->*/}
          <button type="button" class="hamburger" id="menu-btn">
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default App;
