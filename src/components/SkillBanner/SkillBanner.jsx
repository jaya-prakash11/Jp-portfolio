import React from "react";
import "../SkillBanner/SkillBanner.scss";

function SkillBanner({ icon = "", title = "React.js" }) {
  return (
    <div className="skill-banner">
      <img
        className="skill-banner-style"
        width={"100%"}
        height={"60%"}
        src={icon}
      ></img>
      <p style={{ textWrap: "nowrap" }} className="heading">
        {title}
      </p>
    </div>
  );
}

export default SkillBanner;
