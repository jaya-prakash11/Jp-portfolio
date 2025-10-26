import React from "react";
import HintComponent from "../HintComponent/HintComponent";
import ReactIcon from "../../assets/skills/icon-react.png";
import SassIcon from "../../assets/skills/icon-sass.png";
import CypressIcon from "../../assets/skills/icon-cypress.png";
import ExpressIcon from "../../assets/skills/icon-express.png";
import FigmaIcon from "../../assets/skills/icon-figma.png";
import FigmaSmallIcon from "../../assets/skills/Icon-figmasmall.png";
import GitIcon from "../../assets/skills/Icon-git.png";
import LocationIcon from "../../assets/skills/Icon-location.png";
import MongoDBIcon from "../../assets/skills/icon-mongodb.png";
import NestIcon from "../../assets/skills/icon-nest.png";
import NodeJSIcon from "../../assets/skills/icon-nodejs.png";
import PostgreSQLIcon from "../../assets/skills/icon-postgresql.png";
import SocketIcon from "../../assets/skills/icon-socket.png";
import TailwindIcon from "../../assets/skills/icon-tailwind.png";
import TypeScriptIcon from "../../assets/skills/icon-typescript.png";
import SkillBanner from "../SkillBanner/SkillBanner";

function SkillContainer() {
  const skills = [
    { icon: ReactIcon, title: "React.js" },
    { icon: SassIcon, title: "Sass" },
    { icon: CypressIcon, title: "Cypress" },
    { icon: ExpressIcon, title: "Express.js" },
    { icon: FigmaIcon, title: "Figma" },
    { icon: GitIcon, title: "Git" },
    { icon: MongoDBIcon, title: "MongoDB" },
    { icon: NestIcon, title: "Nest.js" },
    { icon: NodeJSIcon, title: "Node.js" },
    { icon: PostgreSQLIcon, title: "PostgreSQL" },
    { icon: SocketIcon, title: "Socket.io" },
    { icon: TailwindIcon, title: "Tailwind CSS" },
    { icon: TypeScriptIcon, title: "TypeScript" },
  ];

  return (
    <div className="skill-container global-padding ">
      <HintComponent title={"Skills"} />
      <p className="sub-heading">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <SkillBanner key={index} icon={skill.icon} title={skill.title} />
        ))}
      </div>
    </div>
  );
}

export default SkillContainer;
