import React, { useContext } from "react";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import HeroComponent from "./HeroComponent/HeroComponent";
import FooterComponent from "./FooterComponent/FooterComponent";
import { ThemeContext } from "../Provider/Themeprovider";

function MasterComponent() {
  return (
    <div className="rootdiv">
      <HeaderComponent></HeaderComponent>
      <HeroComponent></HeroComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default MasterComponent;
