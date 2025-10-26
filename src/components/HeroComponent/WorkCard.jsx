import "../HeroComponent/herocomponent.scss";
function WorkCard({
  companyName = "abc",
  position = "Lead",
  myWorks = [],
  dateOfjoining = "May 1 2021 - Oct 21 2025",
}) {
  return (
    <div className="work-card">
      <div className="company-name-holder">
        <h4 className="heading">{companyName}</h4>
      </div>
      <div className="title-spec-holder">
        <h4 className="title-holder">{position}</h4>
        <ul className="ul-style">
          {myWorks.map((work) => (
            <li>{work}</li>
          ))}
        </ul>
      </div>
      <div className="date-holder">
        <p className="title-holder">{dateOfjoining}</p>
      </div>
    </div>
  );
}

export default WorkCard;
