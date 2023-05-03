import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import AssignmentIcon from "@mui/icons-material/Assignment";

import "../Sass/Home/Home.css";
function HomePage() {
  const anchorLink = (anchor) => {
    document.location = "https://www.seth-beard.com/#" + anchor;
  };
  return (
    <nav className="grid section disableSelect">
      <div className="nameContainer">
        <div className="titleContainer">
          <div className="name">Seth </div>
          <div className="nameTwo">Beard</div>
        </div>
        <div className="subTitleContainer">
          <div className="nameTwo">web </div>
          <div className="name">developer</div>
        </div>
      </div>
      <div className="about" onClick={() => anchorLink("About")}>
        <span className="name">About</span>
        <img
          className="aboutImage "
          src="/personalImage.png"
          alt="Seth Beard Profile"
        />
        <ul className="links">
          <li>
            <a
              href="https://github.com/sethbeard"
              target="blank"
              rel="noreferrer"
              className="linkWithIcon"
              onClick={(e) => e.stopPropagation()}
            >
              <GitHubIcon className="homeIcon whiteIcon" />
              Github
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/seth-beard-59826398/"
              target="_blank"
              rel="noreferrer"
              className="linkWithIcon"
              onClick={(e) => e.stopPropagation()}
            >
              Linked
              <LinkedInIcon className="homeIcon whiteIcon" />
            </a>
          </li>
        </ul>
      </div>

      <div
        className="projects disableSelect"
        onClick={() => anchorLink("Projects")}
      >
        <WebIcon className="homeIcon whiteIcon" />
        <span className="nameTwo">Projects</span>
      </div>
      <div
        className="contact disableSelect"
        onClick={() => anchorLink("Contact")}
      >
        <span className="name">Contact</span>
        <ContactPageIcon className="homeIcon blueIcon" />
      </div>
      <a
        className="resume disableSelect"
        href="https://docs.google.com/document/d/1inZNjmMw32u2MPkR7EEZ-ktGr_5AIUzXKD1hwgsyErQ/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <span className="nameTwo">Resume</span>
        <AssignmentIcon className="homeIcon whiteIcon" />
      </a>
    </nav>
  );
}
export default HomePage;
