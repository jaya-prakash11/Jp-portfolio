import "../HeroComponent/herocomponent.scss";

function WorkHolder() {
  return (
    <div className="work-holder">
      <div className="project-cards">
        <div className="project-image-area"></div>
        <div className="project-description-area">
          <h3 className="heading-2 ">Wingie</h3>
          <p>
            A platform for comparing and finding affordable flights, as well as
            booking and purchasing tickets safely and easily in a few simple
            clicks.
          </p>
          <div className="hints-holder">
            <p className="stack-hints">React</p>
            <p className="stack-hints">React</p>
            <p className="stack-hints">React</p>
            <p className="stack-hints">React</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkHolder;
