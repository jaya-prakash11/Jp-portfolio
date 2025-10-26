import HintComponent from "../HintComponent/HintComponent";

function FooterComponent() {
  return (
    <div className="footer-container">
      <HintComponent title={"Contact"} />
      <p className="heading">
        What’s next? Feel free to reach out to me if you are looking for a
        developer, have a query, or simply want to connect.
      </p>
      <h3 className="heading-2">reachsagarshah@gmail.com</h3>
      <h4 className="heading-2">+91 8980500565</h4>
      <div className="personal-note">
        <p>2024 | Designed and coded with ❤️️ by Jaya Prakash</p>
      </div>
    </div>
  );
}

export default FooterComponent;
