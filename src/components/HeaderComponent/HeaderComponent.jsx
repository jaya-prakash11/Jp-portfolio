import "../HeaderComponent/headercomponent.scss";
import { useContext } from "react";
import { ThemeContext } from "../../Provider/Themeprovider";
import JPpdf from "../../assets/JP.pdf";
import DayIcon from "../../assets/Day-icon.svg";
import NightIcon from "../../assets/Night-Icon.svg";
import { lightMode, Darkmode } from "../../assets/svg/svgs.js";

function HeaderComponent() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div className={`header-bar ${darkMode ? "dark-text" : "light-text"}`}>
      <h3 className="name-holder">{"< JP/ >"}</h3>
      <div className="menu-other-holder">
        <div className="menu-container">
          <a>About</a>
          <a>Work</a>
          <a>Experience</a>
          <a>Project</a>
        </div>
        <input
          onClick={toggleDarkMode}
          type="checkbox"
          name="checkbox"
          class="switch"
          checked={darkMode}
        ></input>
        <button
          onClick={() => {
            const link = document.createElement("a");
            link.href = JPpdf;
            link.download = "Jayaprakash.pdf";
            link.click();
          }}
          className={`download-button ${
            darkMode ? "dark-button" : "light-button"
          }`}
        >
          Download CV
        </button>
      </div>
      <div id="menuToggle">
        <input type="checkbox" id="menuCheckbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu" className={`${darkMode ? "dark-mode" : "light-mode"} `}>
          <li>
            <a href="#">
              <label for="menuCheckbox" onclick="this.parentNode.click();">
                About
              </label>
            </a>
          </li>
          <li>
            <a href="#about">
              <label for="menuCheckbox" onclick="this.parentNode.click();">
                Work
              </label>
            </a>
          </li>
          <li>
            <label for="menuCheckbox">
              <a>Experience</a>
            </label>
          </li>
          <li>
            <label for="menuCheckbox">
              <a>Project</a>
            </label>
          </li>

          <div
            onClick={() => toggleDarkMode()}
            className="svg-d"
            dangerouslySetInnerHTML={{
              __html: darkMode ? lightMode() : Darkmode(),
            }}
          />
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = JPpdf;
              link.download = "Jayaprakash.pdf";
              link.click();
            }}
            className={`download-button ${
              darkMode ? "dark-button" : "light-button"
            }`}
          >
            Download CV
          </button>
        </ul>
      </div>
    </div>
  );
}

export default HeaderComponent;
