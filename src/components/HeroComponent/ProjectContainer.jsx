import React from "react";
import HintComponent from "../HintComponent/HintComponent";
import WorkHolder from "./WorkHolder";

function ProjectContainer() {
  return (
    <div className="work-container global-padding ">
      <HintComponent title={"Experience"} />
      <p className="sub-heading">
        Some of the noteworthy projects I have built:
      </p>
      <WorkHolder />
      <WorkHolder />
      <WorkHolder />
    </div>
  );
}

export default ProjectContainer;
