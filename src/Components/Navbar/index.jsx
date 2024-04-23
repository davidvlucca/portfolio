import { useTranslation } from "react-i18next";
import { RxGithubLogo } from "react-icons/rx";
import { RxLinkedinLogo } from "react-icons/rx";
import { IoLogoWhatsapp } from "react-icons/io";
import { PiSunBold } from "react-icons/pi";
import { PiMoonBold } from "react-icons/pi";
import { useState, useEffect } from "react";

function Navbar() {
  // use theme from local storage if available or set light theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "black"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("black");
    } else {
      setTheme("lofi");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const { i18n } = useTranslation("global");

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "pt" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="p-5 mM:p-4 mS:p-2">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              onChange={handleToggle}
              // show toggle image based on localstorage theme
              checked={theme === "lofi" ? false : true}
              className=""
            />

            {/* sun icon */}
            <PiSunBold className="swap-on fill-current w-8 h-auto cursor-pointer" />

            {/* moon icon */}
            <PiMoonBold className="swap-off fill-current w-8 h-auto" />
          </label>
        </div>
        <div className="navbar-center text-3xl md:hidden">
          <div className="flex flex-row space-x-2">
            <a
              href="https://www.linkedin.com/in/davidvlucca/"
              target="_blank"
              className="hover:opacity-70 transition-opacity duration-300 cursor-pointer"
            >
              <RxLinkedinLogo />
            </a>
            <a
              href="https://github.com/davidvlucca"
              target="_blank"
              className="hover:opacity-70 transition-opacity duration-300 "
            >
              <RxGithubLogo />
            </a>
            <a
              href="https://wa.me/968038514"
              target="_blank"
              className="hover:opacity-70 transition-opacity duration-300 "
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
        <div className="navbar-end text-xl">
          <label className="swap">
            <input type="checkbox" onClick={toggleLanguage} />
            <div className="swap-on font-semibold">ENG</div>
            <div className="swap-off font-semibold">PT</div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
