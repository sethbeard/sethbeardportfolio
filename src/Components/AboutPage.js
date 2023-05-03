import React from "react";
import "../Sass/About/About.css";
function AboutPage() {
  return (
    <div className="aboutMain section disableSelect" id="About">
      <div>
        <div className="aboutHeader">
          <span className="pageTitle">About</span>
          <img
            className="aboutImage "
            src="https://i.shgcdn.com/457687c4-243d-4a2c-8773-37f311d4e7dc/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Secondary Portfolio Selfie"
          />
        </div>
        <article className="aboutBody">
          <div className="arduino">
            <p>
              Hi, I'm Seth!
              <br /> <br />
              My interest in coding stemmed from my interest in electronics.
              <br />
              I started learning the basics of coding while working on Arduino
              microcontroller boards. <br />
              My first project was an RGB matrix that just flashed random colors
              (showing the rgb values being used).
              <br />
              I've always enjoyed making things, and it's hard to beat the
              feeling of something working for the first time.
            </p>
            <div className="imageContainer">
              <img
                className="arduinoImage"
                src="/ezgif-5-838c5142de.gif"
                alt="arduino example"
              />
            </div>
          </div>
          <hr />
          <p>
            After some more Arduino projects, I decided to start looking into
            different coding paths. Trying out Java, Python and a few other
            options, I finally decided to focus on web development, specifically
            working with React. <br /> I signed up for the NuCamp full-stack
            bootcamp to further my skills, learning Bootstrap, React, React
            Native, Mongo DB and Node.js. After finishing the bootcamp I have
            continued to develop my skills by taking on personal
            <a href="#Projects"> projects</a> and learning.
          </p>
        </article>
      </div>
      <div></div>
    </div>
  );
}

export default AboutPage;
