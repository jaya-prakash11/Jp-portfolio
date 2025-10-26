import "../HeaderComponent/headercomponent.scss";
import { useContext } from "react";
import { ThemeContext } from "../../Provider/Themeprovider";
import JPpdf from "../../assets/JP.pdf";
import DayIcon from "../../assets/Day-icon.svg";
import NightIcon from "../../assets/Night-Icon.svg";
function HeaderComponent() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  console.log("darkMode", darkMode);
  return (
    <div className={`header-bar ${darkMode ? "dark-text" : "light-text"}`}>
      <h3 className="name-holder">{"< JP/ >"}</h3>
      <div style={{ display: "flex", width: "90%", minWidth: "200px" }}>
        <div className="menu-container">
          <a>About</a>
          <a>Work</a>
          <a>Testimonials</a>
          <a>Contacts</a>
        </div>
        {/* <div style={{ cursor: "pointer" }} onClick={toggleDarkMode}>
          {darkMode ? <img src={DayIcon}></img> : <img src={NightIcon}></img>}
        </div> */}
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
    </div>
  );
}

export default HeaderComponent;
