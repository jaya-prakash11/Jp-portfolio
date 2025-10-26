import "../HeroComponent/herocomponent.scss";
import Profile from "../../assets/Profile.jpg";
export default function HeroContainer() {
  return (
    <div className=" global-padding hero-container ">
      <div className="intro-container">
        <h2 className="heading intro-Heading">Hi i'm Jaya Prakash 👋</h2>
        <p style={{ paddingTop: "25px", lineHeight: "25px" }}>
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>
        <p style={{ paddingTop: "30px" }}>Chennai , India</p>
        <p style={{ paddingTop: "20px" }}>Available for new projects</p>
        <p style={{ paddingTop: "20px" }}>git , linkedIn , Figma</p>
      </div>
      <div className="photo-container">
        <div className="photo-holder">
          <img className="profile-img-style" src={Profile}></img>
        </div>
      </div>
    </div>
  );
}
