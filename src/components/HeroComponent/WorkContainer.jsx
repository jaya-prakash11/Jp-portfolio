import React from "react";
import "../HeroComponent/herocomponent.scss";
import HintComponent from "../HintComponent/HintComponent";
import WorkCard from "./WorkCard";

function WorkContainer() {
  const works = [
    {
      companyName: "flyersSoft",
      position: "Senior Software Developer",
      myWorks: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      date: "May 1  2021 - Oct 21 2025",
    },
    {
      companyName: "flyersSoft",
      position: "Senior Software Developer",
      myWorks: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      date: "May 1  2021 - Oct 21 2025",
    },
    {
      companyName: "flyersSoft",
      position: "Senior Software Developer",
      myWorks: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      date: "May 1  2021 - Oct 21 2025",
    },
  ];
  return (
    <div className="work-container global-padding ">
      <HintComponent title={"Projects"} />
      <p className="sub-heading" style={{ textAlign: "center" }}>
        Here is a quick summary of my most recent experiences:
      </p>
      <div className="work-holder">
        {works.map(({ companyName, position, myWorks, date }) => (
          <WorkCard
            companyName={companyName}
            dateOfjoining={date}
            position={position}
            myWorks={myWorks}
          ></WorkCard>
        ))}
      </div>
    </div>
  );
}

export default WorkContainer;
