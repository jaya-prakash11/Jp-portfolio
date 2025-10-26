import HeroContainer from "./HeroContainer";
import AboutmeContainer from "./AboutmeContainer";
import SkillContainer from "./SkillContainer";
import WorkContainer from "./WorkContainer";
import ProjectContainer from "./ProjectContainer";

function HeroComponent() {
  return (
    <div>
      <HeroContainer />
      <AboutmeContainer />
      <SkillContainer />
      <WorkContainer />
      <ProjectContainer />
    </div>
  );
}

export default HeroComponent;
