import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Project from "./Project";
import "../Sass/Projects/Projects.css";
const axios = require("axios").default;
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [currentView, setCurrentView] = useState("Carousel");
  useEffect(() => {
    getProjects();
  }, []);

  const moveProject = (amount) => {
    const activeButton = document.getElementsByClassName("activeButton")[0];
    const button =
      document.getElementsByClassName("tabButton")[activeProject + amount];
    activeButton.classList.remove("activeButton");
    button.classList.add("activeButton");
    setActiveProject(activeProject + amount);

    console.log(activeProject);
  };
  const mobileNav = (index, element) => {
    const activeButton = document.getElementsByClassName("activeButton")[0];
    activeButton.classList.remove("activeButton");
    setActiveProject(index);
    element.target.classList.add("activeButton");
  };
  const getProjects = async () => {
    axios
      .get("https://peaceful-basin-54310.herokuapp.com/projects")
      .then(function (response) {
        // handle success
        setProjects(response.data.projects);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  const handleTouchEnd = (end) => {
    const change = touchStart - end;
    console.log(change);
    setTouchStart(0);
    if (change > 200 && activeProject < projects.length - 1) {
      moveProject(1);
    }
    if (change < -200 && activeProject > 0) {
      moveProject(-1);
    }
  };
  const changeSlider = () => {
    const slider = document.getElementById("slider");
    const sliderBackground = document.getElementById("sliderBackground");
    const innerDiv = document.getElementById("projectsInnerDiv");
    const outerDiv = document.getElementById("projectsOuterDiv");

    console.log(sliderPosition);
    if (sliderPosition === 0) {
      slider.classList.remove("slideRight");
      slider.classList.add("sliderLeft");
      sliderBackground.classList.add("sliderBackgroundLeft");
      innerDiv.classList.remove("projectsInner");
      innerDiv.classList.add("projectGrid");
      outerDiv.style.overflow = "visible";
      setSliderPosition(1);
      setCurrentView("Grid");
    } else {
      slider.classList.remove("sliderLeft");
      slider.classList.add("sliderRight");
      sliderBackground.classList.remove("sliderBackgroundLeft");
      innerDiv.classList.remove("projectGrid");
      innerDiv.classList.add("projectsInner");
      outerDiv.style.overflow = "hidden";
      setActiveProject(0);
      setSliderPosition(0);
      setCurrentView("Carousel");
    }
  };
  return (
    <section className="projectsPage section disableSelection">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <span className="projectsTitle" id="Projects">
          Projects
        </span>
        <div className="sliderContainer">
          <label class="sliderBackground" id="sliderBackground">
            <input class="sliderCheckBox" type="checkbox" />
            <span
              class="sliderRight"
              id="slider"
              onClick={() => changeSlider()}
            ></span>
          </label>
          <div className="sliderLabel">View: {currentView}</div>
        </div>
      </div>

      <div className="projectOverlay">
        {activeProject === 0 || sliderPosition !== 0 ? (
          <div className="disabled"></div>
        ) : (
          <div
            id="backArrow"
            className="navIcon backIcon"
            onClick={() => moveProject(-1)}
          >
            <ArrowBackIosIcon color="primary" fontSize="large" />
          </div>
        )}
        {activeProject >= projects.length - 1 || sliderPosition !== 0 ? (
          <div className="disabled"></div>
        ) : (
          <div
            id="forwardArrow"
            className="forwardIcon navIcon"
            onClick={() => moveProject(1)}
          >
            <ArrowForwardIosIcon color="primary" fontSize="large" />
          </div>
        )}
        <div id="projectsOuterDiv" className="projectsOuter">
          <div
            id="projectsInnerDiv"
            className="projectsInner disableSelect"
            style={{
              transform:
                sliderPosition === 0
                  ? `translateX(-${activeProject * 100}%)`
                  : "none",
            }}
            onTouchStart={
              sliderPosition === 0
                ? (e) => setTouchStart(e.touches[0].screenX)
                : null
            }
            onTouchEnd={
              sliderPosition === 0
                ? (e) => handleTouchEnd(e.changedTouches[0].screenX)
                : null
            }
            onMouseDown={
              sliderPosition === 0 ? (e) => setTouchStart(e.screenX) : null
            }
            onMouseUp={
              sliderPosition === 0 ? (e) => handleTouchEnd(e.screenX) : null
            }
          >
            {projects.map((x, i) => (
              <Project project={x} key={i} />
            ))}
          </div>
        </div>
      </div>
      <div className="tabs">
        <span className="tabText">
          Swipe or use the buttons below to navigate between projects!
        </span>
        {projects.map((x, i) =>
          i === 0 ? (
            <button
              className="tabButton activeButton"
              key={x.stringTitle}
              id={i}
              onClick={(e) => mobileNav(i, e)}
            >
              {i + 1}
            </button>
          ) : (
            <button
              className="tabButton"
              key={x.stringTitle}
              id={i}
              onClick={(e) => mobileNav(i, e)}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </section>
  );
};
export default Projects;
