import Facebook from "../img/social-facebook.svg";
import Instagram from "../img/social-instagram.svg";
import Pinterest from "../img/social-pinterest.svg";
import Spotify from "../img/social-spotify.svg";
import Twitter from "../img/social-twitter.svg";
import Youtube from "../img/social-youtube.svg";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container w-full max-w-7xl my-0 mx-auto pt-0 pb-8">
        <div className="social flex items-center my-8 mx-0 justify-center">
          <a className="no-underline mr-4" href="https://spotify.com">
            <img className="max-w-full w-8 h-8" src={Spotify} alt="" />
          </a>
          <a className="no-underline mr-4" href="https://facebook.com">
            <img className="max-w-full w-8 h-8" src={Facebook} alt="" />
          </a>
          <a className="no-underline mr-4" href="https://pinterest.com">
            <img className="max-w-full w-8 h-8" src={Pinterest} alt="" />
          </a>
          <a className="no-underline mr-4" href="https://instagram.com">
            <img className="max-w-full w-8 h-8" src={Instagram} alt="" />
          </a>
          <a className="no-underline mr-4" href="https://youtube.com">
            <img className="max-w-full w-8 h-8" src={Youtube} alt="" />
          </a>
          <a className="no-underline mr-4" href="https://twitter.com">
            <img className="max-w-full w-8 h-8" src={Twitter} alt="" />
          </a>
        </div>
        <p className="text-center my-1 mx-0 leading-relaxed	text-sm sm:text-base">
          © {currentYear} Starbucks Coffee Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
