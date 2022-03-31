import Logo from "../img/logo.svg";
import Marker from "../img/marker.svg";

export function Navbar() {
  return (
    <nav className="w-full sm:h-auto pb-4 sm:p-6 text-sm sm:text-base">
      <div className="flex items-center justify-between mx-auto my-0 max-w-screen-2xl">
        <div className="invisible sm:visible">
          <a className="text-black no-underline" href="/">
            <img className="w-12 h-12 sm:ml-1" src={Logo} alt="logo" />
          </a>
        </div>

        <ul className="sm:flex items-center sm:ml-5 uppercase list-none">
          <li className="mx-4 sm:my-0 my-1 font-bold leading-6">
            <a className="text-black no-underline" href="/">
              Menu
            </a>
          </li>
          <li className="mx-4 sm:my-0 my-1 font-bold leading-6">
            <a className="text-black no-underline" href="/">
              Rewards
            </a>
          </li>
          <li className="mx-4 sm:my-0 my-1 font-bold leading-6">
            <a className="text-black no-underline" href="/">
              Gift Cards
            </a>
          </li>
        </ul>

        <ul className="sm:flex items-center list-none sm:mb-0 mt-1">
          <li className="mx-4 sm:my-0 my-1 font-bold leading-6">
            <a className="flex items-center text-black no-underline" href="/">
              <img
                className="sm:w-5 sm:h-5 sm:max-w-full mx-4 h-fit"
                src={Marker}
                alt=""
              />
              <span className="invisible sm:visible">Find a store</span>
            </a>
          </li>
          <li className="table my-2 mx-auto sm:mx-1 sm:my-0 font-bold leading-6">
            <button className="inline-block px-4 py-2 leading-5 text-center text-black no-underline border-2 border-black border-solid rounded-full cursor-pointer btn bg-none btn-dark-outline">
              Sign in
            </button>
          </li>
          <li className="sm:mx-4 my-0 font-bold leading-6 table mx-auto">
            <button className="inline-block px-4 py-2 leading-5 text-center text-white no-underline bg-black border-2 border-black border-solid rounded-full cursor-pointer btn bg-none btn-dark hover:bg-slate-700">
              Join now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
