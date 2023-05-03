import React, { useState } from "react";
import "../Sass/Projects/Projects.css";
import { Modal } from "@mui/material";
import ProjectModal from "./ProjectModal";
const axios = require("axios").default;

const Project = ({ project }) => {
  const [currentProject, setCurrentProject] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setCurrentProject({});
    setOpenModal(false);
  };
  const handleProject = async (string) => {
    axios
      .get(
        "https://peaceful-basin-54310.herokuapp.com/project/?project=" + string
      )
      .then(function (response) {
        // handle success
        setCurrentProject(response.data);
        setOpenModal(true);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <>
      <div className="project">
        <div className="topRow">
          <div className="projectTitle">{project.title}</div>
          <img
            className="projectImage"
            draggable="false"
            src={project.animatedImage}
            alt={project.stringTitle}
          />
          <div className="projectLinks">
            <a target="blank" rel="noreferrer" href={project.gitHub}>
              <h4>Github</h4>
            </a>
            {project.liveSite !== "" && (
              <a target="blank" rel="noreferrer" href={project.liveSite}>
                <h4>Live Page</h4>
              </a>
            )}
          </div>
        </div>

        <div className="bottomRow">
          <div className="projectDescription">{project.shortDescription}</div>
          <button
            className="learnMore"
            onClick={() => handleProject(project.stringTitle)}
          >
            Learn More
          </button>
        </div>
      </div>
      <Modal open={openModal}>
        <ProjectModal project={currentProject} closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default Project;
