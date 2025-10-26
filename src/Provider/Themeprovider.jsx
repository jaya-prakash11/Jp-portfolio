import { useState } from "react";
import { createContext, useEffect } from "react";
export const ThemeContext = createContext(true);

export const ThemeProvider = ({ children }) => {
  // Initialize state from localStorage for persistence
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("dark-mode");
    return saved === "true" || false;
  });

  useEffect(() => {
    localStorage.setItem("dark-mode", darkMode);
    document.body.className = darkMode ? "dark-mode" : "light-mode";
    const aboutMeElement = document.querySelector(".aboutme-container");
    const workElement = document.querySelector(".work-container");
    const footerElement = document.querySelector(".footer-container");
    const personalElement = document.querySelector(".personal-note");
    const workCardElements = document.querySelectorAll(".work-card");
    const projectImageHolderElements = document.querySelectorAll(
      ".project-image-area"
    );
    const projectDescriptionHolderElements = document.querySelectorAll(
      ".project-description-area"
    );
    const hintElements = document.querySelectorAll(".hint");
    const stackHintElements = document.querySelectorAll(".stack-hints");

    if (
      aboutMeElement &&
      workElement &&
      footerElement &&
      personalElement &&
      workCardElements &&
      projectImageHolderElements &&
      projectDescriptionHolderElements &&
      hintElements &&
      stackHintElements
    ) {
      aboutMeElement.style.backgroundColor = darkMode ? "#111827" : "#F9FAFB";
      workElement.style.backgroundColor = darkMode ? "#111827" : "#F9FAFB";
      footerElement.style.backgroundColor = darkMode ? "#111827" : "#F9FAFB";
      personalElement.style.backgroundColor = darkMode ? "#030712" : "#FFFFFF";
      workCardElements.forEach((element) => {
        element.style.backgroundColor = darkMode ? "#1F2937" : "#FFFFFF";
      });
      projectImageHolderElements.forEach((element) => {
        element.style.backgroundColor = darkMode ? "#374151" : "#F9FAFB";
      });

      projectDescriptionHolderElements.forEach((element) => {
        element.style.backgroundColor = darkMode ? "#1F2937" : "#FFFFFF";
      });

      hintElements.forEach((element) => {
        element.style.backgroundColor = darkMode ? " #374151" : "#E5E7EB";
        // element.style.color = darkMode ? " #374151" : "#E5E7EB";
      });

      stackHintElements.forEach((element) => {
        element.style.backgroundColor = darkMode ? " #374151" : "#E5E7EB";
        // element.style.color = darkMode ? " #374151" : "#E5E7EB";
      });
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
