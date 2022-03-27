import Logo from "../img/logo.svg";
import Marker from "../img/marker.svg";

export function Navbar() {
  return (
    <nav className="w-full h-auto p-6 navbar ">
      <div className="flex items-center justify-between mx-auto my-0 navbar-container max-w-screen-2xl">
        <div className="navbar-brand">
          <a className="text-black no-underline" href="/">
            <img className="w-12 h-12 max-w-full" src={Logo} alt="logo" />
          </a>
        </div>

        <ul className="flex items-center flex-auto ml-5 uppercase list-none navbar-nav-left ">
          <li className="mx-4 my-0 font-bold">
            <a className="text-black no-underline" href="/">
              Menu
            </a>
          </li>
          <li className="mx-4 my-0 font-bold">
            <a className="text-black no-underline" href="/">
              Rewards
            </a>
          </li>
          <li className="mx-4 my-0 font-bold">
            <a className="text-black no-underline" href="/">
              Gift Cards
            </a>
          </li>
        </ul>

        <ul className="flex items-center list-none navbar-nav-right">
          <li className="mx-4 my-0 font-bold">
            <a className="flex items-center text-black no-underline" href="/">
              <img className="w-5 h-5 max-w-full mr-2" src={Marker} alt="" />
              <span>Find a store</span>
            </a>
          </li>
          <li className="mx-1 my-0 font-bold">
            <button className="inline-block px-4 py-2 leading-5 text-center text-black no-underline border-2 border-black border-solid rounded-full cursor-pointer btn bg-none btn-dark-outline">
              Sign in
            </button>
          </li>
          <li className="mx-4 my-0 font-bold">
            <button className="inline-block px-4 py-2 leading-5 text-center text-white no-underline bg-black border-2 border-black border-solid rounded-full cursor-pointer btn bg-none btn-dark hover:bg-slate-700">
              Join now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
